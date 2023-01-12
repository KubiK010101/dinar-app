import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { Button, Text } from '@component';
import { scale } from '@config';
import Icon from '@Icon';
import { IconsName } from '@assets';
import moment from 'moment';
import { fixNumber, formatPrice } from '@helpers';
import { TransactionTypes } from '@types';
import { useNavigationHooks } from '@hooks';
import { TransactionsStackTypes } from '@navigation';
import i18n from '@local';

type TransactionItemProps = {
  item: TransactionTypes;
};
function TransactionItem({ item }: TransactionItemProps) {
  const {} = useNavigationHooks<TransactionsStackTypes>();
  // const depoist =
  //   item.transactionType === 'MoneyDeposited' || item.transactionType === 'WalletIssued';

  const onPress = () => {
    // navigate("TransactionDetails", { item })
  };
  return (
    <Button disabled onPress={onPress} style={styles.container}>
      <View
        style={[
          styles.viewIcon,
          { backgroundColor: getTransactionType(item.transactionType).color },
        ]}>
        <Icon
          color={getTransactionType(item.transactionType).iconColor}
          name={getTransactionType(item.transactionType).icon}
          width={scale(16)}
          height={scale(16)}
        />
      </View>

      <View style={styles.content}>
        <View style={styles.titleAndAmount}>
          <Text fontSize="FS14" color="LIGHT_BLUE">
            {item.reasonAr}
            {/* getTransactionType(item.transactionType).text */}
          </Text>
          <Text color="LIGHT_GRAY" fontSize="P">
            {fixNumber(moment(item.createdAt).format('DD MMMM YYYY'))}
          </Text>
        </View>
        <Text fontSize="P" color="LIGHT_BLUE" fontFamily="Bold">
          {formatPrice(parseFloat(item.amountInHalalah) / 100, true)}
        </Text>
      </View>
    </Button>
  );
}

const getTransactionType = (
  type:
    | 'MoneyDeposited'
    | 'WalletIssued'
    | 'MoneyTransferredOut'
    | 'withdraw'
    | 'revinue'
    | 'investment',
): { color: string; icon: IconsName; iconColor: string; text: string } => {
  switch (type) {
    case 'MoneyDeposited':
      return {
        color: '#D7DBDD',
        icon: 'depoist',
        iconColor: '#1A873D',
        text: i18n.t('transactionItem.deposited'),
      };
    case 'MoneyTransferredOut':
      return {
        color: '#FEEAC8',
        icon: 'withdraw',
        iconColor: '#1A873D',
        text: i18n.t('transactionItem.deposited'),
      };
    case 'revinue':
      return {
        color: '#CEE6FD',
        icon: 'chat-line',
        iconColor: '#1272E3',
        text: i18n.t('transactionItem.deposited'),
      };
    case 'WalletIssued':
      return {
        color: '#D5FFE2',
        icon: 'money',
        iconColor: '#1A873D',
        text: i18n.t('transactionItem.deposited'),
      };
    default:
      return {
        color: '#FEEAC8',
        icon: 'calendar',
        iconColor: '#1A873D',
        text: i18n.t('transactionItem.deposited'),
      };
  }
};
export default TransactionItem;
