import React from 'react';
import { Button, Header, Input, PasswordConditions } from '@component';
import styles from './styles';
import { useLoader, useNavigationHooks } from '@hooks';
import { MainAppStackTypes } from '@navigation';
import { View } from 'react-native';
import { useFormik } from 'formik';
import { ChangePasswordTypes } from '@types';
import { changePasswordValidation, CustomToast, validatePassword } from '@helpers';
import { changePassword } from '@actions';
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view';
import { useTranslation } from 'react-i18next';
import { getQueryData, AuthStateTypes } from '@query';

function ChangePassword() {
  const { goBack } = useNavigationHooks<MainAppStackTypes>();
  const { profile } = getQueryData<AuthStateTypes>('auth');
  const {
    values: { confirmPassword, newPassword, oldPassword },
    errors,
    handleSubmit,
    setFieldValue,
  } = useFormik<ChangePasswordTypes>({
    validationSchema: changePasswordValidation,
    initialValues: {
      confirmPassword: '',
      newPassword: '',
      oldPassword: '',
    },
    validateOnChange: false,
    onSubmit: values => onChangePassword(values),
  });
  const { t } = useTranslation();
  const isLoading = useLoader('changePassword');
  const { conditions, strength, isValid } = validatePassword({
    password: newPassword,
    email: profile?.email,
  });

  const onChangePassword = (data: ChangePasswordTypes) => {
    changePassword(data, res => {
      if (res.ok) {
        goBack();
        CustomToast(t('settings.password.successAlert'), 'success');
      }
    });
  };

  return (
    <View style={styles.container}>
      <Header type="simple" title={t('settings.password.title')} />

      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        style={styles.content}>
        <Input
          value={oldPassword}
          error={errors.oldPassword}
          onChangeText={text => setFieldValue('oldPassword', text)}
          icon="lock"
          passowrd
          label={t('settings.password.current')}
          placeholder={t('settings.password.current')}
        />
        <Input
          value={newPassword}
          error={errors.newPassword}
          onChangeText={text => setFieldValue('newPassword', text)}
          icon="lock"
          passowrd
          label={t('settings.password.new')}
          placeholder={t('settings.password.new')}
        />

        <View style={styles.passwordConditions}>
          <PasswordConditions conditions={conditions} strength={strength} />
        </View>

        <Input
          editable={newPassword ? true : false}
          value={confirmPassword}
          error={errors.confirmPassword}
          onChangeText={text => setFieldValue('confirmPassword', text)}
          icon="lock"
          passowrd
          label={t('settings.password.confirm')}
          placeholder={t('settings.password.confirm')}
        />

        <Button
          disabled={!isValid}
          isLoading={isLoading}
          haptic="impactLight"
          onPress={handleSubmit}
          style={styles.button}
          type="standard"
          text={t('settings.password.submitButton')}
        />
      </KeyboardAwareScrollView>
    </View>
  );
}

export default ChangePassword;
