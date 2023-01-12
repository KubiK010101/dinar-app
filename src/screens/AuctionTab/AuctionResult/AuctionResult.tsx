/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { FlatList, ListRenderItem, View } from 'react-native';
import styles from './styles';
import { Text, BidCard, StatsCard, Button } from '@component';
import { Bid } from '@types';
import { useNavigationHooks } from '@hooks';
import { Colors, spacing } from '@config';
import { IconsName } from '@assets';
import { AuctionStackTypes } from '@navigation';
import { RouteProp, useRoute } from '@react-navigation/native';
import { wait } from '@helpers';
import { getQueryData, AuctionsStateTypes } from '@query';

function AuctionResult() {
  const { bids } = getQueryData<AuctionsStateTypes>('auctions');
  const {
    params: { item },
  } = useRoute<RouteProp<AuctionStackTypes, 'AuctionResult'>>();
  const { navigate, goBack } = useNavigationHooks<AuctionStackTypes>();
  const RenderBidCard: ListRenderItem<Bid> = ({ item: bidItem, index }) => (
    <BidCard
      key={`RenderBidCard${index}`}
      item={{ ...bidItem, isMe: index === 0 }}
      withoutRemoveButton
    />
  );

  const stats: { color: string; icon: IconsName; title: string; value: string }[] = [
    {
      color: Colors.BLUE,
      icon: 'chat-line',
      title: ' 7.4',
      value: 'هامش الربح النهائي',
    },
    {
      color: Colors.BLUE,
      icon: 'percentage',
      title: '1200%',
      value: 'نسبة التغطية',
    },
    {
      color: Colors.BLUE,
      icon: 'file-invoice',
      title: '1000',
      value: 'كمية الصكوك',
    },
    {
      color: Colors.BLUE,
      icon: 'users',
      title: '140',
      value: 'عدد المشاركين',
    },
  ];

  const onNavigate = async () => {
    goBack();
    await wait(1);
    navigate('AuctionDetails', { item });
  };

  const ListHeaderComponent = () => {
    return (
      <View style={styles.listHeaderComponent}>
        <View style={styles.headerContainer}>
          <Text fontFamily="Bold" fontSize="FS16">
            {'ملخص المزاد'}
          </Text>
          <Button
            onPress={onNavigate}
            textStyle={{ color: 'GREEN', fontSize: 'FS16' }}
            text="تفاصيل المزايدة"
          />
        </View>

        <View style={styles.statsViewContent}>
          {stats.map((_item: any, index) => (
            <StatsCard key={`StatsCard${index}`} style={{ marginTop: spacing.S16 }} item={_item} />
          ))}
        </View>

        <Text style={{ marginTop: spacing.S16 }} fontFamily="Bold" color="GREEN">
          {'المزايدات الفائزة'}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={ListHeaderComponent}
        showsVerticalScrollIndicator={false}
        style={styles.flatlist}
        contentContainerStyle={styles.contentContainerStyle}
        data={bids.slice(0, 5)}
        renderItem={RenderBidCard}
      />
    </View>
  );
}

export default AuctionResult;
