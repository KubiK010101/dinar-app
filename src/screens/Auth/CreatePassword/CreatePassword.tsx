import React from 'react';
import { Button, Input, RegistrationTemplate } from '@component';
import styles from './styles';
import { useNavigationHooks } from '@hooks';
import { MainAppStackTypes } from '@navigation';
import { useTranslation } from 'react-i18next';
type ChangePasswordProps = {};

function CreatePassword({}: ChangePasswordProps) {
  const { navigate } = useNavigationHooks<MainAppStackTypes>();

  const onRegister = () => {
    navigate('Login');
  };
  const { t } = useTranslation();
  return (
    <RegistrationTemplate icon="calendar" title={t('createPassword.title')}>
      <Input
        icon="lock"
        passowrd
        label={t('registration.password')}
        placeholder={t('registration.password')}
      />
      <Input
        icon="lock"
        passowrd
        label={t('createPassword.resetPass')}
        placeholder={t('createPassword.resetPass')}
      />

      <Button
        haptic="impactLight"
        onPress={onRegister}
        style={styles.registerButton}
        type="standard"
        text={t('registerKycStep2.save')}
      />
    </RegistrationTemplate>
  );
}

export default CreatePassword;
