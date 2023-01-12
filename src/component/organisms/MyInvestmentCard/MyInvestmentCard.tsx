/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import React, { FC } from 'react';
import { View, ViewProps } from 'react-native';
import styles from './styles';
import { Button, Text } from '../..';
import { fontSizes, getHeight, scale } from '@config';
import { InvestmentOrderType, InvestmentType } from '@types';
import { formatPrice, getInvestmentStatus } from '@helpers';
import { useNavigationHooks } from '@hooks';
import { Svgs } from '@assets';
import { MainNavigationAllScreensTypes } from '@navigation';
import { IconsName } from '@assets';
import { Card } from '../..';
import { useTranslation } from 'react-i18next';

interface Item extends InvestmentType, Omit<InvestmentOrderType, 'sukStatus' | 'sukOrderId'> {}

interface MyInvestmentCardProps {
  item: Item;
  details?: boolean;
}
const MyInvestmentCard: FC<ViewProps & MyInvestmentCardProps> = ({ item, details, style }) => {
  const { navigate } = useNavigationHooks<MainNavigationAllScreensTypes>();
  const { t } = useTranslation();

  const getSukCounts = (_item: Item): number => {
    if (item.confirmedSuks) return item.confirmedSuks;
    else if (_item.statusEnglish === 'FULFILLED') return _item.fulfilledSuksCount;
    else return _item.requestedSuksCount;
  };

  const sukCount = getSukCounts(item);

  const info: { title: string; value: string; icon: IconsName }[] = [
    {
      title: `${item.opportunity.issuance.apr}%`,
      value: t('auction.annualReturn'),
      icon: 'dollar',
    },
    {
      title: `${item.opportunity.issuance.maturity} ${t('myInvestmentCard.info.month')}`,
      value: t('myInvestmentCard.info.period'),
      icon: 'calendar3',
    },
    {
      title: `${formatPrice(item.opportunity.issuance.program.programAmountInHalalah / 100)} ${t(
        'home.rial',
      )}`,
      value: t('auction.programAmount'),
      icon: 'invoce',
    },
  ];

  const investmentCountAndTotalAmount: { title: string; value: string; icon: IconsName }[] = [
    {
      icon: 'invoce',
      title: t('investmentDetails.info.title5'),
      value: `${sukCount ? sukCount : ''}`,
    },
    {
      icon: 'dollar',
      title: t('myInvestmentCard.totalInvestmentAmount'),
      value: `${formatPrice(
        item.opportunity.sukPriceInHalalah
          ? (item.opportunity.sukPriceInHalalah * sukCount) / 100
          : 0 / 100,
      )}`,
    },
  ];
  return (
    <Card
      shadow="small"
      style={[styles.container, details && styles.containerWithDetailsStyle, style]}>
      <View style={styles.titleAndInvestmentStatus}>
        <Text fontFamily="Bold" fontSize="FS16">
          {item.opportunity.issuance.program.programName}
        </Text>
        {/* section 1 title & status  */}
        <View style={styles.shareButtonAndInvestmentStatus}>
          <View
            style={[
              styles.investmentStatusView,
              {
                backgroundColor: getInvestmentStatus(item.statusEnglish)?.color,
              },
            ]}>
            <Text fontSize="FS10" color="WHITE">
              {getInvestmentStatus(item.statusEnglish)?.status}
            </Text>
          </View>
          <Button
            haptic="impactLight"
            style={styles.shareButton}
            iconStyle={styles.shareButtonIcon}
            iconName="share"
          />
        </View>
      </View>

      {/* section 2  */}
      <View style={styles.investmentInfoContainer}>
        {info.map((option, index) => (
          <View
            key={`info_${index}`}
            style={[
              styles.infoItemView,
              details && {
                alignItems: 'center',
                height: getHeight(116),
                justifyContent: 'center',
              },
            ]}>
            <Text style={{ lineHeight: fontSizes.FS18 }} fontSize="FS14" fontFamily="Bold">
              {option.title}
            </Text>
            <Text fontSize="FS14" style={{ lineHeight: fontSizes.FS18 }}>
              {option.value}
            </Text>
          </View>
        ))}
      </View>

      {/* section 3  */}
      <View style={styles.investCountAndTotalAmountSection}>
        {investmentCountAndTotalAmount.map((row, index) => (
          <View
            key={`investmentCountAndTotalAmount_${index}`}
            style={styles.investCountAndTotalAmountContent}>
            <Svgs name={row.icon} width={scale(25)} height={scale(20)} />

            <View style={styles.investCountAndTotalAmountView}>
              <Text fontSize="FS14">{row.title}</Text>
              <Text fontSize="FS14">{row.value}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* section 4  */}
      {!details && (
        <View style={styles.actionsView}>
          <Button
            onPress={() => navigate('MyInvestmentDetails', { item })}
            haptic="impactLight"
            type="border"
            text={t('myInvestmentCard.release')}
            style={styles.investNowButton}
          />
          <Button
            onPress={() => navigate('InvestmentDetails', { item: item.opportunity })}
            haptic="impactLight"
            type="standard"
            textStyle={{ color: 'DARK_BLUE' }}
            text={t('auction.details')}
            style={styles.detailsButton}
          />
        </View>
      )}
    </Card>
  );
};

export default MyInvestmentCard;
