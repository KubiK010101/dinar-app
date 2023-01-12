import React, { useRef, useState, useEffect } from 'react';
import { FlatList, ListRenderItem, RefreshControl, View } from 'react-native';
import { useInfiniteQuery } from '@tanstack/react-query';
import styles from './styles';
import { EmptyList, Header, Loader, TransactionItem, FetchError, ListModal } from '@component';
import { TransactionTypes } from '@types';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { Colors, getHeight } from '@config';
import { QueryKeys } from '@query';
import { useTranslation } from 'react-i18next';
import LocalHeader from './Header';

import {
  getSortingOptions,
  getSortingOrder,
  SortingOrder,
  reOrderTransactions,
  fetchData,
} from '../utils';

function Transactions() {
  const { t } = useTranslation();
  const sortingModalRef = useRef<BottomSheetModal>(null);
  const [order, setOrder] = useState<null | SortingOrder>(
    getSortingOrder(getSortingOptions(t)[1], t),
  );
  const [transactionsData, setTransactionsData] = useState<TransactionTypes[]>([]);
  const [totalPages, setTotalPages] = useState(1);

  const { data, hasNextPage, fetchNextPage, isFetchingNextPage, refetch, isFetching, isError } =
    useInfiniteQuery({
      queryKey: [QueryKeys.transactions],
      queryFn: ({ pageParam }) => fetchData(pageParam, setTotalPages),
      getNextPageParam: (_lastPage, pages) => {
        if (pages.length < totalPages) {
          return pages.length + 1;
        } else return undefined;
      },
    });

  useEffect(() => {
    reOrderTransactions(order, data, setTransactionsData);
  }, [data, order]);

  const onLoadMore = () => {
    if (!isFetching && hasNextPage) fetchNextPage();
  };

  const renderItem: ListRenderItem<TransactionTypes> = ({ item }) => (
    <TransactionItem item={item} key={`TransactionItem_${item.id}`} />
  );

  const ListEmptyComponent = () => {
    if (isError) {
      return <FetchError error={t('transactions.error')} />;
    } else {
      return (
        <EmptyList
          // onPress={() => navigate("Home")}
          isLoading={isFetching}
          icon="wallet2"
          buttonText={t('transactions.button')}
          text={t('transactions.text')}
        />
      );
    }
  };

  const ListFooterComponent = () => <Loader isLoading={isFetchingNextPage} />;

  return (
    <View style={styles.container}>
      <Header type="main" />

      <FlatList
        onEndReached={onLoadMore}
        refreshControl={
          <RefreshControl
            refreshing={isFetching}
            progressViewOffset={getHeight(150)}
            tintColor={Colors.DARK_BLUE}
            onRefresh={refetch}
          />
        }
        onEndReachedThreshold={0.16}
        ListEmptyComponent={ListEmptyComponent}
        ListFooterComponent={ListFooterComponent}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
        style={styles.flatlist}
        ListHeaderComponent={<LocalHeader sortingModalRef={sortingModalRef} />}
        data={transactionsData}
        renderItem={renderItem}
      />
      <ListModal
        snapPoints={['35%']}
        onSelected={val => setOrder(getSortingOrder(val, t))}
        forwardRef={sortingModalRef}
        title={t('transactions.order')}
        defaultIndex={1}
        data={getSortingOptions(t)}
      />
    </View>
  );
}

export default Transactions;
