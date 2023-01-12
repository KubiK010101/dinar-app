/* eslint-disable react-native/no-inline-styles */
import React, { useRef } from 'react';
import { View } from 'react-native';
import styles from './styles';
import {
  Alert,
  Text,
  TitleWihViewAllButton,
  BidPolicyModal,
  AddBidBottom,
  BidCard,
} from '@component';
import { Colors, fontSizes, getHeight, scale } from '@config';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useNavigationHooks } from '@hooks';
import { AuctionStackTypes } from '@navigation';
import { t } from 'i18next';
import { formatPrice } from '@helpers';
import Icon from '@Icon';
import { IconsName } from '@assets';
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import { AuctionHeader } from './AuctionHeader';
import { SukDetails } from './SukDetails';
import { RouteProp, useRoute } from '@react-navigation/native';
import { AuctionsStateTypes, getQueryData } from '@query';

function AuctionDetails() {
  const bidPolicyModalRef = useRef<BottomSheetModal>(null);
  const { navigate } = useNavigationHooks<AuctionStackTypes>();
  const { bids } = getQueryData<AuctionsStateTypes>('auctions');
  const {
    params: { item },
  } = useRoute<RouteProp<AuctionStackTypes, 'AuctionResult'>>();

  const showAll = () => {
    navigate('Bids');
  };
  const showPrivacy = () => {
    bidPolicyModalRef.current?.present();
  };

  const info: {
    title: string;
    value: string;
    icon: IconsName;
  }[] = [
    {
      title: `%${12}`,
      value: t('auction.annualReturn'),
      icon: 'dollar',
    },
    {
      title: `${12} ${t('myInvestmentCard.info.month')}`,
      value: t('myInvestmentCard.info.period'),
      icon: 'calendar3',
    },
    {
      title: `${formatPrice(10000)} ${t('home.rial')}`,
      value: t('auction.auctionDetails.versionSize'),
      icon: 'invoce',
    },
  ];

  const y = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: event => {
      y.value = event.contentOffset.y;
    },
  });

  return (
    <View style={styles.container}>
      <AuctionHeader
        onLeftPress={showPrivacy}
        title={t('auction.auctionDetails.bondBiddingOpportunity')}
        y={y}
      />

      <Animated.ScrollView
        scrollEventThrottle={0.00016}
        onScroll={onScroll}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        style={styles.scrollView}>
        <View style={styles.content}>
          {/* section 2  */}
          <View style={styles.investmentInfoContainer}>
            {info.map((option, index) => (
              <View
                key={`info_${index}`}
                style={[
                  styles.infoItemView,
                  {
                    alignItems: 'center',
                    height: getHeight(116),
                    justifyContent: 'center',
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
                <Text fontSize="FS14" style={{ lineHeight: fontSizes.FS18 }}>
                  {option.value}
                </Text>
              </View>
            ))}
          </View>

          {/* details  */}
          <SukDetails />

          <TitleWihViewAllButton
            title={t('auction.listOfBids.listOfBids')}
            withPodcastIcon
            onPress={showAll}
          />

          <Alert
            fontSize="FS14"
            icon="badgeCheck"
            style={styles.alert}
            text={t('auction.listOfBids.congratulations')}
          />

          {bids.slice(0, 4).map((_item: any, index: number) => (
            <BidCard item={_item} key={`BidCard${index}`} />
          ))}
        </View>
      </Animated.ScrollView>

      <BidPolicyModal forwardRef={bidPolicyModalRef} />
      <AddBidBottom status={item.status} />
    </View>
  );
}

export default AuctionDetails;
