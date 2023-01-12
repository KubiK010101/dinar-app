/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ScrollView, View } from 'react-native';
import styles from './styles';
import { InvestmentStackTypes } from '@navigation';
import { Header, InfoTable, Text } from '@component';
import { RouteProp, useRoute } from '@react-navigation/native';
import Icon from '@Icon';
import { Colors, fontSizes, getWidth, scale, spacing } from '@config';
import { fixNumber } from '@helpers';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import { getItemInfo, getScheduleInfo } from '../utils';

function MyInvestmentDetails() {
  const {
    params: { item },
  } = useRoute<RouteProp<InvestmentStackTypes, 'MyInvestmentDetails'>>();

  const { t } = useTranslation();
  const info = getItemInfo(item, t);

  return (
    <View style={styles.container}>
      <Header type="simple" title={t('myInvestmentDetails.title')} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            width: '100%',
            alignItems: 'flex-start',
            paddingHorizontal: spacing.S22,
          }}>
          {[...info].map((option, index) => (
            <View
              key={`info_${index}`}
              style={[
                styles.infoItemView,
                {
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: (getWidth() - spacing.S44) / 3,
                  marginTop: spacing.S22,
                },
              ]}>
              <View style={styles.investmentInfoIcon}>
                <Icon
                  name={option.icon}
                  width={scale(18)}
                  height={scale(18)}
                  color={Colors.GREEN}
                />
              </View>
              <Text style={{ lineHeight: fontSizes.FS18 }} fontSize="FS14" fontFamily="Bold">
                {option.title}
              </Text>
              <Text color={'LIGHT_BLUE'} fontSize="FS14" style={{ lineHeight: fontSizes.FS18 }}>
                {option.value}
              </Text>
            </View>
          ))}
        </View>

        <View style={{ paddingHorizontal: spacing.S22 }}>
          {item.opportunity.issuance.schedule.map((_info, index) => (
            <InfoTable
              key={`InfoTable_${index}`}
              title={fixNumber(moment(_info.date).format('YYYY-MM-DD'))}
              data={getScheduleInfo(_info, t)}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

export default MyInvestmentDetails;
