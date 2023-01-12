/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useRef } from 'react';
import { FlatList, ListRenderItem, View } from 'react-native';
import styles from './styles';
import { Header, Text, AuctionCard, Button, FilterModal, AuctionCompletedModal } from '@component';
import { Auction } from '@types';
import { useTranslation } from 'react-i18next';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { getQueryData, AuctionsStateTypes } from '@query';

type AuctionsProps = {};

function Auctions({}: AuctionsProps) {
  const { auctions } = getQueryData<AuctionsStateTypes>('auctions');
  const filterModalRef = useRef<BottomSheetModal>(null);
  const auctionCompletedModalRef = useRef<BottomSheetModal>(null);
  const { t } = useTranslation();

  const ListHeaderComponent = () => (
    <View style={styles.listHeaderComponent}>
      <Text fontFamily="Bold" fontSize="FS24">
        {t('tabButtonStack.auction')}
      </Text>
      <Button
        style={{ flexDirection: 'row-reverse' }}
        text={t('auction.allAuctions')}
        onPress={() => {
          filterModalRef.current?.present();
        }}
        iconName="filter"
      />
    </View>
  );

  const RenderAuctionCard: ListRenderItem<Auction> = ({ item, index }) => (
    <AuctionCard key={`RenderAuctionCard${index}`} item={item} />
  );

  useEffect(() => {
    setTimeout(() => {
      auctionCompletedModalRef.current?.present();
    }, 2000);
  }, []);

  const filterOptions = [
    { name: t('auction.filterOptions.everyone') },
    { name: t('auction.filterOptions.auctionsAvailable') },
    { name: t('auction.filterOptions.myBids') },
    { name: t('auction.filterOptions.closedBids') },
  ];

  return (
    <View style={styles.container}>
      <Header type="main" />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={auctions}
        style={{ width: '100%' }}
        ListHeaderComponent={ListHeaderComponent}
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={RenderAuctionCard}
      />

      <FilterModal
        snapPoints={['41%']}
        filters={[]}
        onAppyFilter={_filters => {}}
        forwardRef={filterModalRef}
        title={t('auction.filterBids')}
        data={filterOptions}
      />

      <AuctionCompletedModal forwardRef={auctionCompletedModalRef} />
    </View>
  );
}

export default Auctions;
