import React from 'react';
import { View } from 'react-native';
import { BankAccountCard, Button, Header, Text } from '@component';
import { appData } from '@config';
import { useNavigationHooks } from '@hooks';
import { MoreStackTypes } from '@navigation';
import styles from './styles';
import { useTranslation } from 'react-i18next';
import { AuthStateTypes, getQueryData } from '@query';

function BankAccount() {
  const { navigate } = useNavigationHooks<MoreStackTypes>();
  const { t } = useTranslation();
  const bank = getQueryData<AuthStateTypes>('auth').myAccountInfo?.bank;

  return (
    <View style={styles.container}>
      <Header type="simple" title={t('bankAccount.title')} />
      <View style={styles.content}>
        <Text fontSize="FS14" style={styles.message}>
          {t('bankAccount.message')}
        </Text>

        <BankAccountCard
          bankName={bank?.bankName}
          iban={bank?.iban}
          accountName={bank?.accountName}
          icon={appData.bankList.find(bankInfo => bankInfo.value === bank?.bankName)?.icon}
        />

        <Button
          style={styles.addButton}
          onPress={() => navigate('AddBankAccount')}
          textContainerStyle={styles.addBankAccountButtonText}
          containerStyle={styles.addBankAccountButton}
          text={t('bankAccount.updateBankAccount')}
        />
      </View>
    </View>
  );
}

export default BankAccount;
