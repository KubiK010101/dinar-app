/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, View } from 'react-native';
import styles from './styles';
import { BankAccountCard, Button, Header, Input, Text } from '@component';
import { images, Svgs } from '@assets';
import { appData, getHeight, getWidth, spacing } from '@config';
import { useLoader, useNavigationHooks } from '@hooks';
import { CustomToast, fixNumber, formatPrice, validatePrice, withdrawValidation } from '@helpers';
import { withdrawFunds } from '@actions';
import { useFormik } from 'formik';
import { HomeStackTypes } from '@navigation';

import { useTranslation } from 'react-i18next';
import { AuthStateTypes, getQueryData, invalidateQuery } from '@query';
import { WalletTypes } from '@types';

function Withdraw() {
  const bankAccount = getQueryData<AuthStateTypes>('auth').myAccountInfo?.bank;
  const walletInfo = getQueryData<WalletTypes>('walletInfo');
  const isLoading = useLoader('withdrawFunds');
  const { t } = useTranslation();
  const { goBack, navigate } = useNavigationHooks<HomeStackTypes>();
  const {
    values: { amountInHalalah },
    errors,
    handleSubmit,
    setFieldValue,
  } = useFormik<{ amountInHalalah: string }>({
    validationSchema: withdrawValidation,
    initialValues: {
      amountInHalalah: '',
    },
    validateOnChange: false,
    onSubmit: values => onWithdrawFunds(values),
  });

  const onWithdrawFunds = (data: { amountInHalalah: string }) => {
    withdrawFunds({ amountInHalalah: Math.round(parseFloat(data.amountInHalalah) * 100) }, res => {
      if (res.ok) {
        CustomToast(
          ` ${t('withdraw.request')} ${formatPrice(parseFloat(amountInHalalah), true)} ${t(
            'home.rial',
          )}`,
          'success',
        );
        invalidateQuery('walletInfo');
        goBack();
      }
    });
  };

  return (
    <View style={styles.container}>
      <Header title={t('withdraw.title')} withoutStatusBar type="simple" />

      {!bankAccount && (
        <View
          style={{
            width: '100%',
            paddingHorizontal: spacing.S16,
            alignItems: 'center',
          }}>
          <Image
            source={images.card}
            resizeMode="contain"
            style={{
              width: getWidth(210),
              height: getHeight(180),
            }}
          />
          <Text color="TEXT_COLOR" style={styles.bankNote} fontSize="FS14">
            {t('withdraw.message')}
          </Text>

          <Button
            onPress={() => navigate('AddBankAccount')}
            type="standard"
            style={{ marginTop: spacing.S30 }}
            text={t('withdraw.addButton')}
          />
        </View>
      )}

      {bankAccount && (
        <View style={styles.content}>
          <Text color="TEXT_COLOR" style={styles.bankNote} fontSize="FS14">
            {t('withdraw.amount')}
          </Text>

          <View style={styles.walletBalanceAndIconView}>
            <Svgs name="wallet2" width={getWidth(40)} height={getHeight(40)} />
            <View style={styles.walletBalanceView}>
              <Text fontFamily="Bold" fontSize="FS18">
                {`${formatPrice((walletInfo?.balanceInHalalah || 0) / 100)} ${t('home.rial')} `}
              </Text>
              <Text color="LIGHT_BLUE" fontSize="FS14">
                {t('home.walletBalance')}
              </Text>
            </View>
          </View>

          <Input
            value={amountInHalalah}
            error={errors.amountInHalalah}
            onChangeText={text => {
              if (validatePrice(fixNumber(text.replace('٫', '.'))))
                setFieldValue('amountInHalalah', fixNumber(text.replace('٫', '.')));
            }}
            autoFocus
            keyboardType="numeric"
            placeholder={t('withdraw.withdrawAmount')}
          />

          <BankAccountCard
            bankName={`${bankAccount?.bankName}`}
            accountName={`${bankAccount?.accountName}`}
            iban={`${bankAccount?.iban}`}
            icon={appData.bankList.find(bankInfo => bankInfo.value === bankAccount?.bankName)?.icon}
          />

          <Button
            isLoading={isLoading}
            onPress={handleSubmit}
            style={styles.withdrawButton}
            text={t('withdraw.withdrawButton')}
            type="standard"
          />
        </View>
      )}
    </View>
  );
}

export default Withdraw;
