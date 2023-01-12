/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { FlatList, ListRenderItem, View } from 'react-native';
import styles from './styles';
import { Live } from '../../../assets/lottie';
import { Button, Card, StepperInput, Text, AddBidBottom, BidCard } from '@component';
import { Bid } from '@types';
import { filterBidsOptions, spacing } from '@config';
import { AuctionsStateTypes, getQueryData } from '@query';
import { t } from 'i18next';

function Bids() {
  const { bids } = getQueryData<AuctionsStateTypes>('auctions');
  const [filterBy, setFilter] = useState<'all' | 'my_bid'>('all');

  const RenderBidCard: ListRenderItem<Bid> = ({ item, index }) => (
    <BidCard key={`RenderBidCard${index}`} item={item} />
  );

  const ListHeaderComponent = () => {
    return (
      <View style={styles.listHeaderComponent}>
        <Card style={styles.coveredPriceCard}>
          <StepperInput value="1" />
          <Text
            style={{ marginTop: spacing.S4 }}
            fontSize="FS14">{`نسبة التغطية على هذا السعر 1400%`}</Text>
        </Card>

        {/* filter buttons  */}
        <View style={styles.filterButtonsView}>
          {filterBidsOptions.map((item, index) => (
            <Button
              key={`filterBidsOptions${index}`}
              onPress={() => setFilter(item.filter_key)}
              textStyle={{ fontSize: 'FS16' }}
              text={item.title}
              style={[
                styles.filterButton,
                filterBy === item.filter_key && styles.filterButtonActive,
              ]}
            />
          ))}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerTitleWithIcon}>
          <Text fontFamily="Bold" style={styles.headerTitle} fontSize="FS16">
            {t('auction.listOfBids.listOfBids')}
          </Text>
          <Live />
        </View>

        <Text color="LIGHT_BLUE" fontSize="FS14">{`${t('auction.listOfBids.youHave')} 3 ${t(
          'auction.listOfBids.bids',
        )}`}</Text>
      </View>

      <FlatList
        ListHeaderComponent={ListHeaderComponent}
        showsVerticalScrollIndicator={false}
        style={styles.flatlist}
        contentContainerStyle={styles.contentContainerStyle}
        data={
          filterBy === 'my_bid'
            ? bids.filter((item: any) => filterBy === 'my_bid' && item.isMe)
            : bids
        }
        renderItem={RenderBidCard}
      />

      <AddBidBottom status="ACTIVE" />
    </View>
  );
}

export default Bids;
