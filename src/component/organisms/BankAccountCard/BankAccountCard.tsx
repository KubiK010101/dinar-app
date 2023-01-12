import React, { FC } from 'react';
import { Image, View, ViewProps } from 'react-native';
import styles from './styles';
import { Button, Text } from '@component';
import Clipboard from '@react-native-clipboard/clipboard';
import { CustomToast, ibanFormater } from '@helpers';
import { useTranslation } from 'react-i18next';

type BankAccountCardProps = {
  icon: string;
  bankName?: string;
  accountName?: string;
  iban?: string;
};
const BankAccountCard: FC<ViewProps & BankAccountCardProps> = ({ icon, accountName, iban }) => {
  const { t } = useTranslation();
  const onCopy = () => {
    CustomToast(` ${iban}  ${t('copied')}`, 'success');
    Clipboard.setString(`${iban}`);
  };
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={typeof icon === 'number' ? icon : { uri: icon }}
        style={styles.bankLogo}
      />
      <Text color="LIGHT_BLUE" style={styles.bankHolder}>
        {accountName}
      </Text>

      <View style={styles.bankNumberAndCopyButtonView}>
        <Button onPress={onCopy} style={styles.copyButton} iconName="copy" />
        <Text color="LIGHT_BLUE" fontFamily="Bold">
          {ibanFormater(`${iban}`, 4)}
        </Text>
      </View>
    </View>
  );
};

export default BankAccountCard;
