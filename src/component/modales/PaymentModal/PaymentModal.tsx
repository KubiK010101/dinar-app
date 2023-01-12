/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import React, { RefObject, useState } from 'react';
import styles from './styles';
import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet';
import { createCheckoutId, createOrder, getPaymentStatus } from '@actions';
import { useLoader, useNavigationHooks } from '@hooks';
import { useAnimatedPaymentModal } from './useAnimatedPaymentModal';
import { OpportunityTypes, PaymentForm, PaymentTypes, UserTypes, WalletTypes } from '@types';
import { AppStateTypes, getQueryData, invalidateQuery } from '@query';
import { InvestPriceInfoCard } from './InvestPriceInfoCard';
import { Button, FullScreenLoader, Switch, Text } from '@component';
import { Colors, getHeight, scale, spacing } from '@config';
import { ScrollView, View } from 'react-native';
import { PyamnetMethods } from './PyamnetMethods';
import HyperPay from 'react-native-hyperpay-sdk';
import { useTranslation } from 'react-i18next';
import { MainAppStackTypes } from '@navigation';
import { useFormik } from 'formik';
import i18n from '@local';
import Icon from '@Icon';
import Animated, {
  Easing,
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { CustomToast, formatPrice, paymentValidation, toSR, retry, wait } from '@helpers';

type PaymentModalProps = {
  forwardRef: RefObject<BottomSheetModal>;
  opportunityDetails: Pick<OpportunityTypes, 'availableSuks' | 'sukPriceInHalalah' | 'id'>;
};
const isAcceptedPaymentMethod = (pyamentMethod: 'WALLET' | 'HYPERPAY') => {
  const { appConfig } = getQueryData<AppStateTypes>('config');
  return appConfig?.acceptedPaymentMethods.find(
    (paymentMethod: any) => paymentMethod === pyamentMethod,
  )
    ? true
    : false;
};

function PaymentModal({ forwardRef, opportunityDetails }: PaymentModalProps) {
  const { t } = useTranslation();
  const { push, navigate } = useNavigationHooks<MainAppStackTypes>();
  const { profile } = getQueryData<{ profile: UserTypes }>('auth');
  const [investCount, setinvestCount] = useState(1);
  const [cardListMode, setCardListMode] = useState(false);
  const isAcceptedPaymentOnline = isAcceptedPaymentMethod('HYPERPAY');
  const isAcceptedPaymentWallet = isAcceptedPaymentMethod('WALLET');
  const [withWallet, setUsingWallet] = useState(isAcceptedPaymentWallet);
  const animatedPosition = useSharedValue(0);
  const walletInfo = getQueryData<WalletTypes>('walletInfo');
  const isLoading = useLoader('createOrder', 'createCheckoutId');
  const [isFullScreenLoader, setFullScreenLoader] = useState(false);
  const [paymentLoading, setPyamentLoader] = useState(false);
  const { values, errors, handleSubmit, setFieldValue, resetForm } = useFormik<
    PaymentForm & { paymentType: PaymentTypes }
  >({
    validationSchema: paymentValidation,
    initialValues: {
      paymentType: 'MADA',
      cardNumber: '',
      expiryMonth: '',
      expiryYear: '',
      cvv: '',
    },
    validateOnChange: false,
    onSubmit: _values => onPay(_values),
  });

  const { paymentModalAnimatedStyle } = useAnimatedPaymentModal({
    animatedPosition,
    errors,
    paymentType: values.paymentType,
  });

  const onChangeCount = (count: number) => {
    if (count && count <= (opportunityDetails?.availableSuks || 0)) setinvestCount(count);
  };

  const sukPrice = toSR(opportunityDetails?.sukPriceInHalalah);
  const walletBalance = toSR(walletInfo?.balanceInHalalah);

  const remainingAmount = Math.floor((investCount * sukPrice - walletBalance) * 100) / 100;

  const remainingAmountinWallet = withWallet
    ? (walletBalance - investCount * sukPrice > 0
        ? walletBalance - investCount * sukPrice
        : 0
      ).toFixed(2)
    : walletBalance;

  const investCost = withWallet ? remainingAmount : investCount * sukPrice;

  const withPaymentOnline = (withWallet && remainingAmount > 0) || !withWallet;

  const onPayWithMada = () => {
    setFieldValue('paymentType', 'MADA');
    setCardListMode(true);
  };

  const onGetPaymentStatus = (ndc: string) => {
    setFullScreenLoader(true);
    const interval = retry(() => {
      getPaymentStatus({ ndc }, async ({ ok, data }) => {
        if (ok && data) {
          const paymentStatus = HyperPay.getPaymentStatus(`${data?.hyperpayCode}`);

          if (data?.status === 'WALLET_DEPOSITED') {
            onCreateOrder();
            clearInterval(interval);
          } else if (
            (paymentStatus.status === 'rejected' || paymentStatus.status === 'error') &&
            data?.hyperpayCode
          ) {
            handlePaymentStatus(interval, paymentStatus);
          }
        } else
          handlePaymentStatus(interval, {
            description: 'Internal server error',
            status: 'error',
            code: '',
          });
      });
    }, 150);
  };

  const handlePaymentStatus = async (interval: any, paymentStatus: any) => {
    setFullScreenLoader(false);
    await wait(100);
    clearInterval(interval);
    forwardRef.current?.close();
    await wait(300);
    navigate('PaymentStatus', { paymentStatus });
  };

  const onCreateOrder = () => {
    const data = { opportunityId: opportunityDetails?.id, suksCount: investCount };
    createOrder(data, res => {
      setFullScreenLoader(false);
      wait(100);
      if (res.ok) {
        forwardRef.current?.close();
        setTimeout(() => {
          invalidateQuery('walletInfo');
        }, 20000);
        push('InvestSuccessful', { amount: investCost * 100 });
        setTimeout(() => {
          setCardListMode(false);
        }, 1000);
      }
    });
  };

  const onPay = (_values: PaymentForm & { paymentType: PaymentTypes }) => {
    const paymentForm: PaymentForm = {
      ..._values,
      expiryYear: `20${_values.expiryYear}`,
    };

    const data = {
      opportunityId: opportunityDetails?.id,
      paymentType: _values.paymentType,
      amountInHalalah: investCost * 100,
    };

    createCheckoutId(data, async ({ data: res, ok }) => {
      if (ok) {
        const checkoutId = `${res?.data.hyperpayNdc}`;
        try {
          setPyamentLoader(true);
          let paymentResponse;
          if (_values.paymentType === 'MADA') {
            paymentResponse = await HyperPay.createPaymentTransaction({
              ...paymentForm,
              checkoutID: checkoutId,
              holderName: `${profile?.displayName}`,
              paymentBrand: 'MADA',
            });

            setPyamentLoader(false);
          } else if (_values.paymentType === 'APPLE_PAY') {
            paymentResponse = await HyperPay.applePay(checkoutId, isProgress => {
              setPyamentLoader(isProgress);
            });
          }
          handlePaymentCallback(paymentResponse, checkoutId);
        } catch (e: any) {
          CustomToast(e.message, 'error');
        }
      }
    });
  };

  const handlePaymentCallback = (paymentResponse: any, checkoutId: string) => {
    let payment3DSecureParam = {
      opportunityId: opportunityDetails?.id,
      suksCount: investCount,
      redirectURL: '',
      amount: investCost * 100,
    };
    if (paymentResponse.redirectURL) {
      payment3DSecureParam.redirectURL = paymentResponse.redirectURL;
      navigate('Payment3DSecure', payment3DSecureParam);
    } else onGetPaymentStatus(`${checkoutId}`);
  };

  const getModalHeight = () => {
    if (cardListMode) return '100%';
    else if (remainingAmount > 0 && withWallet && !disabledPayButton()) return getHeight(530);
    else return getHeight(withPaymentOnline ? 430 : 400);
  };

  const getPayButtonText = () => {
    if (disabledPayButton() && remainingAmount <= 0) return 'لابد من تفعيل الدفع عبر المحفظة';
    else if (disabledPayButton()) return 'رصيدك لا يكفي للاستثمار';
    return withWallet && remainingAmount <= 0
      ? t('invest.investNow')
      : `${t('invest.payNow')}  ( ${formatPrice(investCost, true)} )`;
  };

  const disabledPayButton = (): boolean => {
    if (!withWallet && !isAcceptedPaymentOnline) return true;
    else if (withWallet && remainingAmount > 0 && !isAcceptedPaymentOnline) return true;
    else if (!withWallet && !isAcceptedPaymentOnline) return true;
    else return false;
  };

  const resetInvestmentForm = () => {
    resetForm();
    setinvestCount(1);
    setCardListMode(false);
    setUsingWallet(isAcceptedPaymentWallet);
    animatedPosition.value = 0;
  };
  return (
    <BottomSheetModal
      onDismiss={resetInvestmentForm}
      enableContentPanningGesture={cardListMode ? false : true}
      animatedPosition={animatedPosition}
      animationConfigs={{
        duration: 300,
        easing: Easing.elastic(),
      }}
      backdropComponent={props => <BottomSheetBackdrop {...props} disappearsOnIndex={-1} />}
      handleComponent={() => null}
      ref={forwardRef}
      backgroundStyle={styles.modalBackgroundStyle}
      snapPoints={[getModalHeight()]}>
      {/* Pyamnet Cards */}
      <PyamnetMethods
        paymentLoading={paymentLoading}
        isFullLoaderScreen={isFullScreenLoader}
        errors={errors}
        resetForm={resetForm}
        setFieldValue={setFieldValue}
        values={values}
        handleSubmit={handleSubmit}
        investCost={investCost}
        animatedPosition={animatedPosition}
        onClose={() => setCardListMode(false)}
      />

      <ScrollView scrollEnabled={false} style={{ flex: 1 }} contentContainerStyle={{ flex: 1 }}>
        <Animated.View style={[styles.content, paymentModalAnimatedStyle]}>
          {/* modal header  */}
          <View style={styles.handleComponent}>
            <Text color="LIGHT_BLUE" fontSize="FS16">
              {t('invest.select')}
            </Text>
            <Button
              style={styles.closeButton}
              onPress={() => forwardRef.current?.close()}
              iconName="close"
              iconStyle={styles.closeButtonIcon}
            />
          </View>

          <View
            style={{
              flex: 1,
              alignItems: 'center',
              width: '100%',
              paddingHorizontal: spacing.S22,
            }}>
            <InvestPriceInfoCard
              investCount={investCount}
              onChangeCount={onChangeCount}
              icon="invoce"
              title={t('invest.invoice')}
              subTitle={`${formatPrice(sukPrice)} ${t('invest.perSuk')}`}
            />
            <InvestPriceInfoCard
              icon="dollar"
              title={`${formatPrice(investCount * sukPrice)} ${t('home.rial')}`}
              subTitle={t('invest.totalCost')}
            />

            {/* payment info  */}
            <View style={styles.paymentMethodInfoContent}>
              <View style={styles.walletRowContainer}>
                <View style={styles.walletRowContent}>
                  <Icon color={Colors.GREEN} width={scale(23)} height={scale(20)} name="wallet2" />

                  <View style={styles.walletRowBalanceAndRemainder}>
                    <Text numberOfLines={1} fontSize="FS14" style={styles.walletRowBalanceText}>
                      {t('invest.useWallet')}
                      <Text
                        color="GREEN"
                        fontFamily="Bold"
                        fontSize="FS14"
                        style={{ textDecorationLine: withWallet ? 'line-through' : 'none' }}>
                        {` (${formatPrice(walletBalance, true)} ${t('home.rial')})`}
                      </Text>
                    </Text>

                    {withWallet && (
                      <Text numberOfLines={1} style={styles.walletRowRemainderText} fontSize="FS10">
                        {t('invest.remaining')}
                        <Text
                          color="GREEN"
                          fontFamily="Bold"
                          fontSize="FS10">{` (${remainingAmountinWallet} ${t('home.rial')})`}</Text>
                      </Text>
                    )}
                  </View>
                </View>

                <Switch
                  disabled={!isAcceptedPaymentWallet}
                  onValueChange={setUsingWallet}
                  value={withWallet}
                />
              </View>

              {withWallet && isAcceptedPaymentOnline && (
                <RemainderAlert remainder={remainingAmount} />
              )}
            </View>

            <View style={styles.applepayButtonContainerStyle}>
              {/* actions  */}
              {withPaymentOnline ? (
                <>
                  <Button
                    isLoading={isLoading || paymentLoading}
                    onPress={() => onPay({ ...values, paymentType: 'APPLE_PAY' })}
                    iconName="apple"
                    text={`${t('paymentCard.payNow')} ( ${`${investCost} ${t('home.rial')} `} )`}
                    type="standard"
                    style={styles.applepayBtn}
                  />
                  <Button
                    onPress={onPayWithMada}
                    iconName="mada2"
                    text={`${t('paymentCard.payNow')} ( ${`${investCost} ${t('home.rial')} `} )`}
                    type="standard"
                    textStyle={{ color: 'DARK_GRAY' }}
                    style={styles.madaBtn}
                  />
                </>
              ) : (
                <Button
                  disabled={disabledPayButton()}
                  isLoading={isLoading || paymentLoading}
                  onPress={() => onCreateOrder()}
                  type="standard"
                  style={{ marginTop: spacing.S8 }}
                  text={getPayButtonText()}
                  textStyle={{ color: 'WHITE' }}
                />
              )}
            </View>
          </View>
        </Animated.View>
      </ScrollView>
      <FullScreenLoader isLoading={isFullScreenLoader} />
    </BottomSheetModal>
  );
}

const RemainderAlert = ({ remainder }: { remainder: number }) => {
  const HEIGHT = getHeight(90);

  const remainderAlertAnimated = useAnimatedStyle(() => {
    const height = withTiming(
      interpolate(remainder >= 1 ? 1 : 0, [0, 1], [0, HEIGHT], Extrapolate.CLAMP),
      { duration: 200 },
    );
    const opacity = withTiming(
      interpolate(remainder >= 1 ? 1 : 0, [0, 1], [0, 1], Extrapolate.CLAMP),
      { duration: 200 },
    );
    return {
      height,
      opacity,
    };
  });

  return (
    <Animated.View style={[styles.remainderAlertContainer, remainderAlertAnimated]}>
      <Animated.View style={styles.remainderAlertTextView}>
        <Icon name="info" />
        <Text style={styles.remainderAlertTextMessage} fontSize="FS10">
          {i18n.t('invest.message')}
        </Text>
      </Animated.View>

      {/* remainder Wallet Text */}
      {remainder >= 1 && (
        <Text style={styles.remainderWalletText} fontFamily="Bold" fontSize="FS14">{`${i18n.t(
          'invest.remainingAmount',
        )} ${remainder} ${i18n.t('home.rial')}`}</Text>
      )}
    </Animated.View>
  );
};

export default PaymentModal;
