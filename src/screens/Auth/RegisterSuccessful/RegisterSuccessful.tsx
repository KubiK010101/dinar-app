import React from 'react';
import { useNavigationHooks } from '@hooks';
import { MainAppStackTypes } from '@navigation';
import { Message } from '@component';
import { useTranslation } from 'react-i18next';

type RegisterSuccessfulProps = {};
function RegisterSuccessful({}: RegisterSuccessfulProps) {
  const { replace } = useNavigationHooks<MainAppStackTypes>();
  const { t } = useTranslation();
  const onContinue = () => {
    replace('RegisterKycStep1');
  };
  return (
    <Message
      message={t('registerSuccessful.message')}
      onContinue={onContinue}
      textButton={t('registerSuccessful.textButton')}
    />
  );
}

export default RegisterSuccessful;
