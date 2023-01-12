import React from 'react';
import { Button, Input, RegistrationTemplate } from '@component';
import styles from './styles';
import { useLoader, useNavigationHooks } from '@hooks';
import { MainAppStackTypes } from '@navigation';
import { useFormik } from 'formik';
import { CustomToast, forgotPasswordValidation } from '@helpers';
import { forgotPassword } from '@actions';
import { useTranslation } from 'react-i18next';
type ForgotPasswordProps = {};

function ForgotPassword({}: ForgotPasswordProps) {
  const { t } = useTranslation();
  const {
    values: { email },
    errors,
    handleSubmit,
    setFieldValue,
  } = useFormik<{ email: string }>({
    validationSchema: forgotPasswordValidation,
    initialValues: {
      email: '',
    },
    validateOnChange: false,
    onSubmit: values => onForgotPassowrd(values),
  });
  const isLoading = useLoader('forgotPassword');
  const { goBack } = useNavigationHooks<MainAppStackTypes>();

  const onForgotPassowrd = (data: { email: string }) => {
    forgotPassword(data, res => {
      if (res.ok) {
        goBack();
        CustomToast(t('forgotPassword.resetLink'), 'success');
      }
    });
  };

  return (
    <RegistrationTemplate icon={'key'} title={t('forgotPassword.resetPassword')}>
      <Input
        onChangeText={text => setFieldValue('email', text)}
        value={email}
        error={errors.email}
        icon="email"
        label={t('forgotPassword.enterEmail')}
        placeholder={t('forgotPassword.email')}
      />

      <Button
        isLoading={isLoading}
        haptic="impactLight"
        onPress={handleSubmit}
        style={styles.registerButton}
        type="standard"
        text={t('forgotPassword.send')}
      />
    </RegistrationTemplate>
  );
}

export default ForgotPassword;
