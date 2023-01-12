import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { BankAccountCard, Header, Text } from '@component';
import { appData } from '@config';
import { useTranslation } from 'react-i18next';
import { getQueryData } from '@query';
import { WalletTypes } from '@types';

function DepoisteWallet() {
  const { t } = useTranslation();
  const walletInfo = getQueryData<WalletTypes>('walletInfo');
  return (
    <View style={styles.container}>
      <Header title={t('depositWallet.title')} withoutStatusBar type="simple" />

      <View style={styles.content}>
        <Text style={styles.bankNote} fontSize="FS14">
          {t('depositWallet.description')}
        </Text>
        <BankAccountCard
          accountName={t('depositWallet.accountName')}
          bankName={`${walletInfo?.virtualIban}`}
          iban={`${walletInfo?.virtualIban}`}
          icon={appData.bankList.find(bankInfo => bankInfo.value === 'ANB')?.icon}
        />
        {/* <Text
                    style={styles.depoisteNote}
                    fontSize='FS14'>
                    {t('depositWallet.message')}
                </Text> */}
      </View>
    </View>
  );
}

export default DepoisteWallet;
