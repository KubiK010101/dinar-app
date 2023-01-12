import React, { useRef } from 'react';
import { Keyboard, View } from 'react-native';
import { Button, Header, Input, RegistrationTemplate, DatePickerModal, Text } from '@component';
import styles from './styles';
import { spacing } from '@config';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useLoader, useNavigationHooks } from '@hooks';
import { MainAppStackTypes } from '@navigation';
import { VerifyIdentityTypes } from '@types';
import { useFormik } from 'formik';
import { verifyIdentity } from '@actions';
import { CustomToast, fixNumber, trackEvent, verifyIdentityValidation } from '@helpers';
import { useTranslation } from 'react-i18next';

function RegisterCheckIdentity() {
  const { t } = useTranslation();
  const {
    values: { dateOfBirth, nin },
    errors,
    handleSubmit,
    setFieldValue,
  } = useFormik<VerifyIdentityTypes>({
    validationSchema: verifyIdentityValidation,
    initialValues: {
      dateOfBirth: '',
      nin: '',
    },
    validateOnChange: false,
    onSubmit: values => onVerify(values),
  });
  const isLoading = useLoader('verifyIdentity');
  const baseModalRef = useRef<BottomSheetModal>(null);
  const { replace } = useNavigationHooks<MainAppStackTypes>();

  const onVerify = (values: VerifyIdentityTypes) => {
    verifyIdentity({ ...values, nin: fixNumber(values.nin) }, res => {
      if (res.ok) {
        trackEvent('register');
        replace('VerificationCode', { flow: { type: 'verifyIdentityOtp' } });
      }
    });
  };

  const onOpenDatePicker = () => {
    if (nin.length === 10) {
      Keyboard.dismiss();
      baseModalRef.current?.present();
    } else {
      CustomToast(
        nin
          ? 'برجاء اكمال رقم الهوية الوطنية اولاً الذي يتكون من ١٠ ارقام'
          : 'برجاء كتابة رقم الهوية الوطنية اولاً',
        'info',
      );
    }
  };
  const onSelectedDate = (date?: string) => {
    setFieldValue('dateOfBirth', `${date}`);
    baseModalRef.current?.close();
  };

  return (
    <View style={styles.container}>
      <Header />

      <RegistrationTemplate icon={'calendar'} title={t('registerCheckIdentity.title')}>
        <Text style={{ marginTop: spacing.S18 }} color="LIGHT_BLUE">
          {t('registerCheckIdentity.description')}
        </Text>
        <Input
          keyboardType="number-pad"
          value={nin}
          error={errors.nin}
          onChangeText={text => setFieldValue('nin', text)}
          maxLength={10}
          autoFocus
          label={t('registerCheckIdentity.nin')}
          placeholder={'-  -  -  -  -  -  -  -  -  -'}
        />

        <Button
          value={dateOfBirth}
          error={errors.dateOfBirth}
          haptic="impactLight"
          onPress={onOpenDatePicker}
          rightIcon="calendar2"
          type="dropdown"
          label={t('registerCheckIdentity.birthDate')}
          placeholder={t('registerCheckIdentity.birthDate')}
        />

        <Button
          isLoading={isLoading}
          haptic="impactLight"
          onPress={handleSubmit}
          style={styles.registerButton}
          type="standard"
          text={t('registerCheckIdentity.verify')}
        />
      </RegistrationTemplate>

      <DatePickerModal
        dateType={fixNumber(nin).startsWith('1') ? 'hijri' : 'gregorian'}
        onConfirm={onSelectedDate}
        forwardRef={baseModalRef}
      />
    </View>
  );
}

export default RegisterCheckIdentity;
