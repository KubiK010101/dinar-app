/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import React, { FC } from 'react';
import { View, ViewProps } from 'react-native';
import styles from './styles';
import { Button, CounterText, TitleWithValueCell, Text } from '../..';
import { Auction } from '@types';
import { Card } from '../..';
import { useNavigationHooks } from '@hooks';
import { AuctionStackTypes } from '@navigation';
import { t } from 'i18next';
import { Live } from '@assets';
import { Colors } from '@config';

type AuctionCardProps = {
  item: Auction;
};
type AuctionCellType = {
  title: string;
  value: string;
};
const AuctionCard: FC<ViewProps & AuctionCardProps> = ({ item, style }) => {
  const { navigate } = useNavigationHooks<AuctionStackTypes>();

  const info: AuctionCellType[] = [
    {
      title: t('auction.annualReturn'),
      value: `15%`,
    },
    {
      value: `18 ${t('auction.month')}`,
      title: t('auction.period'),
    },
    {
      title: t('auction.versionSize'),
      value: `30,000 ${t('auction.rial')}`,
    },
  ];
  const bidInfo: Array<any> = [
    { title: t('auction.profitMargin'), value: item.profit_margin },
    { title: t('auction.requiredQuantity'), value: item.required_quantity },
    {
      title: t('auction.acceptedQuantity'),
      value: item.acceptable_quantity,
      accepted_percentage: (item.acceptable_quantity / item.required_quantity) * 100,
    },
  ];

  const isClosed = item.status === 'CLOSED';

  return (
    <Card shadow="small" style={[styles.container, style]}>
      <View style={styles.titleAndAuctionStatus}>
        <Text fontFamily="Bold" fontSize="FS16">
          {t('auction.murabahaInstruments')}
        </Text>

        <View style={styles.podcastAndAuctionStatus}>
          {item.status === 'ACTIVE' && <Live />}
          <Status status={item.status} />
        </View>
      </View>

      {/* section 2  */}
      <View style={styles.auctionInfoContainer}>
        {info.map((option, index) => (
          <TitleWithValueCell key={`bidInfo${index}`} {...option} />
        ))}
      </View>

      <View style={styles.bidInfoContent}>
        {bidInfo.map((bidCell, index) => (
          <TitleWithValueCell
            key={`bidInfo${index}`}
            {...bidCell}
            wtihBorder={index !== bidInfo.length - 1}
          />
        ))}
      </View>

      {/* section 3 progress  */}

      {!isClosed && (
        <View style={styles.countDownView}>
          <Text color="LIGHT_BLUE">{t('auction.biddingEndsYet')}</Text>
          <CounterText withIcon fontSize="FS16" date={item.startDate} style={styles.counterText} />
        </View>
      )}

      {/* section 4  */}
      <View style={styles.actionsView}>
        <Button
          onPress={() => (isClosed ? navigate('AuctionResult', { item }) : navigate('Bids'))}
          haptic="impactLight"
          type="standard"
          textStyle={{ color: 'DARK_BLUE' }}
          text={isClosed ? 'نتائج المزايدة' : t('auction.listOfBids.listOfBids')}
          containerStyle={isClosed && { width: '100%' }}
          style={[styles.bidListButton, isClosed && { width: '100%' }]}
        />

        {!isClosed && (
          <Button
            onPress={() => navigate('AuctionDetails', { item })}
            haptic="impactLight"
            type="standard"
            text={t('auction.auctionDetails.auctionDetails')}
            style={styles.auctionDetails}
          />
        )}
      </View>
    </Card>
  );
};

const Status = ({ status }: { status: 'CLOSED' | 'ACTIVE' }) => {
  return (
    <View
      style={[
        styles.auctionStatusView,
        { backgroundColor: status === 'CLOSED' ? Colors.RED : Colors.BLUE },
      ]}>
      <Text fontSize="FS10" color="WHITE">
        {t('auction.biddingIsAvailable')}
      </Text>
    </View>
  );
};

export default AuctionCard;
