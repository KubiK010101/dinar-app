/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import styles from './styles';
import { Button, Input, MaskInput, RadioButton, Text } from '@component';
import { Colors, getWidth, spacing } from '@config';
import { ScrollView, View } from 'react-native';
import Icon from '@Icon';
import { Header } from '../..';
import Animated from 'react-native-reanimated';
import { useLoader } from '@hooks';
import { PaymentMethodTypes } from '@types';
import { ibanFormater } from '@helpers';
import { useTranslation } from 'react-i18next';
import { useAnimatedPaymentModal } from './useAnimatedPaymentModal';

type PyamnetMethodsProps = {
  onClose: () => void;
  animatedPosition: Animated.SharedValue<number>;
  investCost?: number;
  resetForm: (_paymentType: any) => void;
  isFullLoaderScreen?: boolean;
  values: any;
  errors: any;
  handleSubmit?: () => void;
  setFieldValue: (_key: string, _value: string) => void;
  paymentLoading?: boolean;
};

const PyamnetMethods = ({
  onClose,
  animatedPosition,
  investCost,
  resetForm,
  errors,
  values,
  handleSubmit,
  setFieldValue,
  paymentLoading,
}: PyamnetMethodsProps) => {
  const { t } = useTranslation();
  const isLoading = useLoader('createCheckoutId', 'createOrder');

  const paymentTypes: PaymentMethodTypes[] = [
    { icon: 'apple-pay', name: 'Apple Pay', paymentType: 'APPLE_PAY' },
    { icon: 'mada', name: 'Mada', paymentType: 'MADA' },
  ];

  const { animatedContainer, animatedPaymentForm } = useAnimatedPaymentModal({
    errors,
    animatedPosition,
    paymentType: values.paymentType,
  });

  return (
    <Animated.View style={[styles.paymentCardsContainer, animatedContainer]}>
      <Header onBack={onClose} type="simple" />

      <ScrollView
        scrollEnabled={false}
        keyboardShouldPersistTaps="handled"
        style={{ width: '100%' }}>
        <View style={styles.paymentCardsContent}>
          <Text
            color="LIGHT_BLUE"
            fontFamily="Bold"
            style={styles.paymentCardsHeaderTitle}
            fontSize="FS24">
            {t('paymentCard.title')}
          </Text>

          {/* card list  */}
          {paymentTypes.map((card, index: number) => (
            <CardItem
              onPress={() => {
                resetForm({
                  errors: {},
                  values: {
                    paymentType: card.paymentType,
                    cardNumber: '',
                    cvv: '',
                    expiryMonth: '',
                    expiryYear: '',
                  },
                });
              }}
              item={card}
              isSelected={values.paymentType === card.paymentType}
              key={`${index}`}
            />
          ))}

          {/* payment form  */}
          <Animated.View
            style={[
              {
                width: '100%',
                borderColor: Colors.BORDER,
                // height: getHeight(selectedPaymentType === 1 ? 184 : 0),
                overflow: 'hidden',
              },
              animatedPaymentForm,
            ]}>
            <MaskInput
              keyboardType="number-pad"
              value={values.cardNumber}
              maskValue={ibanFormater(values.cardNumber || '', 4)}
              error={errors.cardNumber}
              placeholder="- - - -   - - - -   - - - -   - - - -"
              label={t('paymentCard.cardNumber')}
              maxLength={16}
              style={{ marginTop: spacing.S8 }}
              onChangeText={text => setFieldValue('cardNumber', text)}>
              <Button
                iconStyle={styles.scanCardButtonIcon}
                iconName="mada2"
                style={styles.scanCardButton}
              />
            </MaskInput>

            <View style={styles.cvvAndExpiryDateView}>
              <View style={{ marginTop: spacing.S16 }}>
                <Text style={{ textAlign: 'left', width: '100%' }} fontSize="FS14">
                  {t('paymentCard.expireDate')}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    width: getWidth(165),
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                  }}>
                  <Input
                    onChangeText={text => setFieldValue('expiryYear', text)}
                    value={values.expiryYear}
                    keyboardType="number-pad"
                    maxLength={2}
                    placeholder="YY"
                    inputStyle={{ textAlign: 'center' }}
                    style={{ width: getWidth(70), marginTop: 0 }}
                  />
                  <Text fontSize="FS20" color="LIGHT_GRAY" style={{ marginTop: spacing.S8 }}>
                    {'/'}
                  </Text>
                  <Input
                    onChangeText={text => setFieldValue('expiryMonth', text)}
                    value={values.expiryMonth}
                    keyboardType="number-pad"
                    maxLength={2}
                    placeholder="MM"
                    inputStyle={{ textAlign: 'center' }}
                    style={{ width: getWidth(70), marginTop: 0 }}
                  />
                </View>
                {(errors.expiryMonth || errors.expiryYear) && (
                  <Text style={{ textAlign: 'left', width: '100%' }} color="RED" fontSize="FS11">
                    {errors.expiryMonth || errors.expiryYear}
                  </Text>
                )}
              </View>

              <Input
                error={errors.cvv}
                onChangeText={text => setFieldValue('cvv', text)}
                value={values.cvv}
                keyboardType="number-pad"
                maxLength={3}
                placeholder="CVV"
                style={styles.input}
                label={t('paymentCard.cvc')}
              />
            </View>
          </Animated.View>

          <Button
            isLoading={isLoading || paymentLoading}
            onPress={handleSubmit}
            {...(values.paymentType === 'APPLE_PAY' && { iconName: 'apple' })}
            text={`${t('paymentCard.payNow')} ( ${`${investCost} ${t('home.rial')} `} )`}
            type="standard"
            style={{ marginTop: spacing.S18 }}
            {...(values.paymentType === 'APPLE_PAY' && {
              style: {
                marginTop: spacing.S18,
                backgroundColor: Colors.BLACK,
                borderColor: Colors.BLACK,
              },
            })}
          />
        </View>
      </ScrollView>
    </Animated.View>
  );
};

const CardItem = ({
  item,
  isSelected,
  onPress,
}: {
  isSelected: boolean;
  item: PaymentMethodTypes;
  onPress?: () => void;
}) => {
  return (
    <Button
      onPress={onPress}
      containerStyle={styles.cardItemContainerStyle}
      style={styles.cardItemStyle}>
      <View style={styles.cardItemContent}>
        <RadioButton disabled checked={isSelected} />
        <Icon name={item.icon} />
        <Text fontFamily="MarkaziRegular" fontSize="FS16" style={styles.cardNumberText}>
          {item.name}
        </Text>
      </View>
    </Button>
  );
};
export { PyamnetMethods };
