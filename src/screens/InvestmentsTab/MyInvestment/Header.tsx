/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { Button, StatsCard, Text } from '@component';
import { FilterOptionTypes, InvestmentStatsTypes } from '@types';
import { useTranslation } from 'react-i18next';
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { totalInvestmentAndTotalWon } from '../utils';
import { getQueryData } from '@query';

interface Props {
  sortingModalRef: React.RefObject<BottomSheetModalMethods>;
  filterOption: FilterOptionTypes[];
}

const Header: React.FC<Props> = ({ sortingModalRef, filterOption }) => {
  const { t } = useTranslation();
  const investmentStats = getQueryData<InvestmentStatsTypes>('investmentStats');

  return (
    <>
      <View style={styles.listHeaderComponent}>
        <Text fontFamily="Bold" fontSize="FS24">
          {t('myInvestment.subscriptions')}
        </Text>
        <Button
          style={{ flexDirection: 'row-reverse' }}
          text={`  ${filterOption.map(element => element.name)[0]} ${
            filterOption.length >= 2 ? `+${filterOption.length - 1}` : ''
          }  `}
          onPress={() => {
            sortingModalRef.current?.present();
          }}
          iconName="filter"
        />
      </View>

      <View style={styles.totalInvestmentContainer}>
        {totalInvestmentAndTotalWon(t, investmentStats).map((info, index) => (
          <StatsCard key={`totalInvestmentAndTotalWon_${index}`} item={info} />
        ))}
      </View>
    </>
  );
};

export default Header;
