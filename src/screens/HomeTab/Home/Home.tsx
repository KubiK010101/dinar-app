/* eslint-disable react-native/no-inline-styles */
import React, { useRef, useState } from 'react';
import { ListRenderItem, RefreshControl, View } from 'react-native';
import styles from './styles';
import { EmptyList, Header, InvestmentItem, ListModal, FetchError, Loader } from '@component';
import { Colors, getHeight } from '@config';
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import { FilterOptionTypes, OpportunityTypes } from '@types';
import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { formatPrice, onFilterOptions } from '@helpers';
import { useTranslation } from 'react-i18next';
import { filterOptions, defaultFilters, fetchAllOpportunities, fetchMyWalletInfo } from '../utils';
import LocalHeader from './Header';
import { QueryKeys } from '@query';

function Home() {
  const y = useSharedValue(0);
  const { t } = useTranslation();
  const sortingModalRef = useRef<BottomSheetModal>(null);
  let [filterOption, setFilterOption] = useState<FilterOptionTypes[]>(defaultFilters);
  const [totalPages, setTotalPages] = useState(1);

  const {
    data: opportunities,
    isFetching: isLoadingOpportunities,
    isError,
    refetch: refetchOpportunities,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isRefetching,
  } = useInfiniteQuery<any>({
    queryKey: [QueryKeys.opportunities, filterOption],
    queryFn: ({ pageParam }) => fetchAllOpportunities(pageParam, setTotalPages, filterOption),
    getNextPageParam: (_lastPage, pages) => {
      if (pages.length < totalPages) {
        return pages.length + 1;
      } else return undefined;
    },
  });

  const {
    data: walletInfo,
    isFetching: isLoadingUpdateWallet,
    refetch: refetchWallet,
  } = useQuery({ queryKey: [QueryKeys.walletInfo], queryFn: fetchMyWalletInfo });

  const onScroll = useAnimatedScrollHandler({
    onScroll: e => {
      y.value = e.contentOffset.y;
    },
  });

  const renderItem: ListRenderItem<OpportunityTypes> = ({ item, index }) => (
    <InvestmentItem item={item} key={`InvestmentItem_${index}`} />
  );

  const ListEmptyComponent = () => {
    return isError ? (
      <FetchError error={t('home.opportunities.error')} />
    ) : (
      <EmptyList
        isLoading={isLoadingOpportunities}
        buttonText={t('home.opportunities.remind')}
        text={t('home.opportunities.empty')}
      />
    );
  };

  const onLoadMore = () => {
    if (!isLoadingOpportunities && hasNextPage) fetchNextPage();
  };

  const ListFooterComponent = () => (
    <Loader isLoading={isFetchingNextPage || isLoadingOpportunities} />
  );

  return (
    <View style={styles.container}>
      <Header
        y={y}
        type="home"
        wallet={formatPrice(parseFloat(`${walletInfo?.balanceInHalalah}` || '0') / 100, true)}
      />
      <Animated.FlatList
        refreshControl={
          <RefreshControl
            refreshing={isLoadingOpportunities || isLoadingUpdateWallet || isRefetching}
            progressViewOffset={getHeight(310)}
            tintColor={Colors.DARK_BLUE}
            onRefresh={() => {
              refetchOpportunities();
              refetchWallet();
            }}
          />
        }
        onScroll={onScroll}
        scrollEventThrottle={0.00016}
        showsVerticalScrollIndicator={false}
        style={{ width: '100%' }}
        contentContainerStyle={styles.contentContainerStyle}
        ListHeaderComponent={
          <LocalHeader sortingModalRef={sortingModalRef} filterOption={filterOption} />
        }
        data={opportunities?.pages?.flatMap(page => page)}
        renderItem={renderItem}
        ListEmptyComponent={ListEmptyComponent}
        onEndReachedThreshold={0.16}
        onEndReached={onLoadMore}
        ListFooterComponent={ListFooterComponent}
      />
      <ListModal
        selectedValues={filterOption.map((element: any) => element.value)}
        snapPoints={['42%']}
        onSelected={val => setFilterOption(onFilterOptions(val, filterOption, defaultFilters))}
        forwardRef={sortingModalRef}
        title={t('home.arrangingSubscriptions')}
        data={filterOptions}
      />
    </View>
  );
}

export default Home;
