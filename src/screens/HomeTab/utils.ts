import { FilterOptionTypes, OpportunityTypes } from '@types';
import i18n from '@local';
import { getAllOpportunity, getWalletInfo } from '@actions';

export const filterOptions: Array<FilterOptionTypes> = [
  { name: i18n.t('home.filterOptions.allChances'), value: 'ALL' },
  { name: i18n.t('home.filterOptions.available'), value: 'AVAILABLE' },
  { name: i18n.t('home.filterOptions.coming'), value: 'COMING' },
  { name: i18n.t('home.filterOptions.closed'), value: 'CLOSED' },
];

export const defaultFilters = [filterOptions[0]];

export const fetchAllOpportunities = async (
  pageParam = 1,
  setTotalPages: (_val: number) => void,
  filterOption: FilterOptionTypes[],
): Promise<OpportunityTypes[] | undefined> => {
  pageParam = pageParam ?? 1;
  const res = await getAllOpportunity(
    { filter: filterOption.map(value => value.value).toString(), page: pageParam },
    () => {},
  );
  setTotalPages(res?.meta?.totalPages || 1);

  if (res) return res.items;
  else throw false;
};

export const fetchMyWalletInfo = async () => {
  let res = await getWalletInfo();

  if (res) return res;
  else throw false;
};
