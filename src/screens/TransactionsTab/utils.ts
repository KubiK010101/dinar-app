import { getWalletTransactions } from '../../redux/actions';
import { TransactionTypes } from '../../@types';
import { orderingList } from '../../helpers';
import { InfiniteData } from '@tanstack/react-query';
import { TFunction } from 'i18next';

export const fetchData = async (pageParam = 1, setTotalPages: (_val: number) => void) => {
  pageParam = pageParam ?? 1;

  const res = await getWalletTransactions({ page: pageParam }, () => {}, true);
  setTotalPages(res?.meta?.totalPages || 1);
  if (res) return res?.items;
  else throw false;
};

export interface SortingOrder {
  comparisonKey: string;
  ascending: boolean;
}

export interface QueryArray {
  pageParams: [null] | [number];
  pages: Array<TransactionTypes>;
}

export const reOrderTransactions = (
  order: null | SortingOrder,
  data: InfiniteData<TransactionTypes[] | undefined> | undefined,
  setTransactionsData: (_val: TransactionTypes[]) => void,
) => {
  let hasData = data && data?.pages && data?.pages[0] && data?.pages.length > 0;
  if (hasData) {
    let nonSortedTransactions = data?.pages.flatMap(page => page);
    //apply filter added by user
    if (order && nonSortedTransactions) {
      let sortedTransactions = orderingList(
        nonSortedTransactions,
        order.comparisonKey,
        order.ascending,
      );
      setTransactionsData(sortedTransactions);
      //@ts-ignore
    } else setTransactionsData(nonSortedTransactions);
  } else setTransactionsData([]);
};

export const getSortingOrder = (sortingValue: string, t: TFunction) => {
  switch (sortingValue) {
    case t('transactions.data.first'):
      return { comparisonKey: 'createdAt', ascending: true };
    case t('transactions.data.second'):
      return { comparisonKey: 'createdAt', ascending: false };
    case t('transactions.data.third'):
      return { comparisonKey: 'amountInHalalah', ascending: false };
    case t('transactions.data.fourth'):
      return { comparisonKey: 'amountInHalalah', ascending: true };
    default:
      return null;
  }
};

export const getSortingOptions = (t: TFunction) => [
  t('transactions.data.first'),
  t('transactions.data.second'),
  t('transactions.data.third'),
  t('transactions.data.fourth'),
];

export type TransactionDetailsInfoType = { title: string; value: string };

export const TransactionDetailsInfo = (t: TFunction): TransactionDetailsInfoType[] => [
  { title: t('transactionsDetails.info.title1'), value: t('transactionsDetails.info.value1') },
  { title: t('transactionsDetails.info.title2'), value: t('transactionsDetails.info.value2') },
  { title: t('transactionsDetails.info.title3'), value: t('transactionsDetails.info.value3') },
  { title: t('transactionsDetails.info.title4'), value: t('transactionsDetails.info.value4') },
  { title: t('transactionsDetails.info.title5'), value: t('transactionsDetails.info.value5') },
  { title: t('transactionsDetails.info.title6'), value: t('transactionsDetails.info.value6') },
  { title: t('transactionsDetails.info.title7'), value: t('transactionsDetails.info.value7') },
];
