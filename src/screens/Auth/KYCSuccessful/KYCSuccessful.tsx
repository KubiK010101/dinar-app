import React from 'react';
import { useNavigationHooks } from '@hooks';
import { MainAppStackTypes } from '@navigation';
import { Message } from '@component';
import i18n from '@local';

type KYCSuccessfulProps = {};
function KYCSuccessful({}: KYCSuccessfulProps) {
  const { replace } = useNavigationHooks<MainAppStackTypes>();

  const onContinue = () => {
    replace('TabButton');
  };
  return (
    <Message
      message={i18n.t('KYCsuccessful.message')}
      onContinue={onContinue}
      textButton={i18n.t('KYCsuccessful.textButton')}
    />
  );
}

export default KYCSuccessful;
