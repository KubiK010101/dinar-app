import React from 'react';
import { useNavigationHooks } from '@hooks';
import { MainAppStackTypes } from '@navigation';
import { Message } from '@component';
import { useTranslation } from 'react-i18next';

type IndividualUpgradeSuccessfulProps = {};
function IndividualUpgradeSuccessful({}: IndividualUpgradeSuccessfulProps) {
  const { replace } = useNavigationHooks<MainAppStackTypes>();
  const { t } = useTranslation();
  const onContinue = () => {
    replace('TabButton');
  };
  return (
    <Message
      message={t('individualUpgradeSuccessful.success')}
      onContinue={onContinue}
      textButton={t('KYCsuccessful.textButton')}
    />
  );
}

export default IndividualUpgradeSuccessful;
