import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { Header, ShareInvestment, Text, TextWithValueRow } from '@component';
import { RouteProp, useRoute } from '@react-navigation/native';
import { TransactionsStackTypes } from '@navigation';
import { useTranslation } from 'react-i18next';
import { TransactionDetailsInfo, TransactionDetailsInfoType } from '../utils';

type TransactionDetailsProps = {};
function TransactionDetails({}: TransactionDetailsProps) {
  const {
    params: { item },
  } = useRoute<RouteProp<TransactionsStackTypes, 'TransactionDetails'>>();
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Header type="simple" />
      <View style={styles.content}>
        <Text fontFamily="Bold" color="LIGHT_BLUE" fontSize="FS24">
          {item.title}
        </Text>

        <View style={styles.infoContainer}>
          {TransactionDetailsInfo(t).map((infoItem: TransactionDetailsInfoType) => (
            <TextWithValueRow title={infoItem.title} value={infoItem.value} />
          ))}
        </View>
      </View>
      <ShareInvestment style={styles.shareViewContainer} />
    </View>
  );
}

export default TransactionDetails;
