import React, { useEffect, useRef, useState } from 'react';
import { ListRenderItem, RefreshControl, View } from 'react-native';
import styles from './styles';
import { EmptyList, Header, Loader, MyInvestmentCard, ListModal, FetchError } from '@component';
import InvestmenrHeader from './Header';
import { FilterOptionTypes, InvestmentOrderType, InvestmentType } from '@types';
import Animated from 'react-native-reanimated';
import { Colors, getHeight } from '@config';
import { useNavigationHooks } from '@hooks';
import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { MainNavigationAllScreensTypes } from '@navigation';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import i18n from '@local';
import { useTranslation } from 'react-i18next';
import { fetchMyInvestments, fetchMyInvestmentsOrders, investmentOptions } from '../utils';
import { QueryKeys } from '@query';
import { onFilterOptions } from '@helpers';

const defaultFilters = [{ name: i18n.t('myInvestment.filterOptions.all'), value: 'ALL' }];

function MyInvestment() {
  const sortingModalRef = useRef<BottomSheetModal>(null);
  const [investmentPages, setInvestmentPages] = React.useState(1);
  let [filterOption, setFilterOption] = useState<FilterOptionTypes[]>(defaultFilters);
  const { t } = useTranslation();

  const {
    data: myInvestmentOrders,
    isFetching: isLoadingOrders,
    isError: isErrorOrders,
    refetch: refetchMyInvestmentOrder,
  } = useQuery({
    queryKey: [QueryKeys.investmentOrders, filterOption],
    queryFn: () => fetchMyInvestmentsOrders(filterOption),
  });

  const {
    data: myInvestments,
    isFetching: isLoadingInvesetments,
    isError: isErrorInvestments,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    refetch: refetchMyInvestments,
  } = useInfiniteQuery({
    queryKey: [QueryKeys.inverstments, filterOption],
    queryFn: ({ pageParam }) => fetchMyInvestments(pageParam, setInvestmentPages, filterOption),
    getNextPageParam: (_lastPage, pages) => {
      if (pages.length < investmentPages) {
        return pages.length + 1;
      } else return undefined;
    },
  });

  const [allInvestments, setAllInvestments] = React.useState<InvestmentOrderType[]>([]);
  const isLoading = isLoadingInvesetments || isLoadingOrders;
  const { navigate } = useNavigationHooks<MainNavigationAllScreensTypes>();

  useEffect(() => {
    //to make sure no undefined values are set in the array, this would be a safe guard condition in case of a bad fetch
    let arr: InvestmentOrderType[] = [];

    if (myInvestmentOrders && myInvestmentOrders.length > 0) arr = [...arr, ...myInvestmentOrders];
    if (myInvestments !== undefined && myInvestments.pages?.length > 0) {
      let flattedMyInvestments = myInvestments?.pages.flatMap(page => page);
      //@ts-ignore
      arr = [...arr, ...flattedMyInvestments];
    }

    setAllInvestments(arr);
  }, [myInvestmentOrders, myInvestments]);

  const refetchData = () => {
    refetchMyInvestmentOrder();
    refetchMyInvestments();
  };

  const renderItem: ListRenderItem<InvestmentType | InvestmentOrderType> = ({ item, index }) => (
    <MyInvestmentCard item={item} key={`MyInvestmentCard_${index}`} />
  );

  const ListEmptyComponent = () => {
    return isErrorInvestments || isErrorOrders ? (
      <FetchError error={t('myInvestment.error')} />
    ) : (
      <EmptyList
        onPress={() => navigate('Home')}
        isLoading={isLoading}
        buttonText={t('myInvestment.emptyList.button')}
        text={t('myInvestment.emptyList.text')}
      />
    );
  };

  const ListFooterComponent = () => <Loader isLoading={isLoading || isFetchingNextPage} />;

  const onLoadMore = () => {
    if (!isLoading && hasNextPage) fetchNextPage();
  };

  return (
    <View style={styles.container}>
      <Header type="main" />
      <Animated.FlatList
        keyExtractor={(item, index) => `${index}`}
        onEndReached={onLoadMore}
        onEndReachedThreshold={0.16}
        ListFooterComponent={ListFooterComponent}
        ListHeaderComponent={
          <InvestmenrHeader sortingModalRef={sortingModalRef} filterOption={filterOption} />
        }
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            progressViewOffset={getHeight(150)}
            tintColor={Colors.DARK_BLUE}
            onRefresh={refetchData}
          />
        }
        scrollEventThrottle={0.00016}
        showsVerticalScrollIndicator={false}
        style={styles.flatlist}
        contentContainerStyle={styles.contentContainerStyle}
        data={allInvestments}
        ListEmptyComponent={ListEmptyComponent}
        renderItem={renderItem}
      />
      <ListModal
        snapPoints={['53%']}
        selectedValues={filterOption.map((element: any) => element.value)}
        onSelected={val => setFilterOption(onFilterOptions(val, filterOption, defaultFilters))}
        forwardRef={sortingModalRef}
        title={t('myInvestment.arrangingSubscriptions')}
        data={filterOptions}
      />
    </View>
  );
}

const filterOptions: Array<FilterOptionTypes> = investmentOptions();
export default MyInvestment;
