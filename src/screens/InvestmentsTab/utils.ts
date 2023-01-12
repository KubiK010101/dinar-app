import { TFunction } from 'i18next';
import { IconsName } from '@assets';
import APIs from '@APIs';
import { formatPrice, fixNumber } from '@helpers';
import moment from 'moment';
import { Colors } from '@config';
import locali18n from '@local';
import {
  FilterOptionTypes,
  InvestmentOrderType,
  InvestmentStatsTypes,
  InvestmentType,
  OpportunityTypes,
  ScheduleType,
} from '@types';
import { getMyInvestment, getMyInvestmentOrders } from '@actions';

export const investmentOptions = () => {
  return [
    { name: locali18n.t('myInvestment.filterOptions.all'), value: 'ALL' },
    { name: locali18n.t('myInvestment.filterOptions.canceled'), value: 'CANCELED' },
    { name: locali18n.t('myInvestment.filterOptions.fulfilled'), value: 'FULFILLED' },
    { name: locali18n.t('myInvestment.filterOptions.issued'), value: 'ISSUED' },
    { name: locali18n.t('myInvestment.filterOptions.rejected'), value: 'REJECTED' },
    { name: locali18n.t('myInvestment.filterOptions.pending'), value: 'PENDING' },
    { name: locali18n.t('myInvestment.filterOptions.matured'), value: 'MATURED' },
  ];
};

export const totalInvestmentAndTotalWon = (
  t: TFunction,
  investmentStats: InvestmentStatsTypes,
): Array<{
  title: string;
  value: string;
  icon: IconsName;
  color: string;
}> => {
  return [
    {
      title: `${formatPrice(investmentStats?.profitTotalInHalalah / 100)} ${t(
        'myInvestment.invoice.title',
      )} `,
      value: t('myInvestment.invoice.value'),
      icon: 'invoce',
      color: Colors.BLUE,
    },
    {
      title: `${formatPrice(investmentStats?.investmentsAmountTotalInHalalah / 100)} ${t(
        'myInvestment.invoice.title',
      )} `,
      value: t('myInvestment.chatLine'),
      icon: 'chat-line',
      color: Colors.GREEN,
    },
  ];
};

const getFilters = (filterOption: FilterOptionTypes[]) =>
  filterOption.map(value => value.value).toString();

export const fetchMyInvestments = async (
  pageParam = 1,
  setInvesmentPages: (_val: number) => void,
  filterOption: FilterOptionTypes[],
) => {
  pageParam = pageParam ?? 1;
  const res = await getMyInvestment(
    {
      page: pageParam,
      filter: getFilters(filterOption),
    },
    () => {},
    true,
  );
  setInvesmentPages(res?.meta.totalPages || 1);
  if (res) return res.items;
  else throw false;
};

export const fetchMyInvestmentsOrders = async (
  filterOption: FilterOptionTypes[],
): Promise<InvestmentOrderType[] | undefined> => {
  const res = await getMyInvestmentOrders(
    {
      isSukIssued: false,
      filter: getFilters(filterOption),
    },
    () => {},
    true,
  );

  if (res) return res.items;
  else throw false;
};

export const defaultFilters = [
  { name: locali18n.t('myInvestment.filterOptions.all'), value: 'ALL' },
];

export const getItemInfo = (
  item: InvestmentType,
  t: TFunction,
): { title: string; value: string; icon: IconsName }[] => {
  return [
    {
      title: item.opportunity.issuance.program.programName,
      value: locali18n.t('myInvestmentDetails.info.value1'),
      icon: 'dollar',
    },
    {
      title: `${formatPrice(item.opportunity.issuance.program.programAmountInHalalah / 100)} ${t(
        'home.rial',
      )}`,
      value: locali18n.t('myInvestmentDetails.info.value2'),
      icon: 'invoce',
    },
    {
      title: locali18n.t('myInvestmentDetails.info.value3'),
      value: `${item.opportunity.issuance.issuanceSerialNo}`,
      icon: 'dollar',
    },

    {
      title: `${formatPrice(item.opportunity.issuance.issuanceAmountInHalalah / 100)} ${t(
        'home.rial',
      )}`,
      value: locali18n.t('myInvestmentDetails.info.value4'),
      icon: 'dollar',
    },
    {
      title: `${item.opportunity.issuance.apr}%`,
      value: locali18n.t('myInvestmentDetails.info.value5'),
      icon: 'dollar',
    },
    {
      title: `${formatPrice(
        item.opportunity.issuance.schedule.reduce(
          (prevValue, currentValue) => prevValue + currentValue.couponAmountInHalalah,
          0,
        ) / 100,
      )} ${t('home.rial')}`,
      value: locali18n.t('myInvestmentDetails.info.value6'),
      icon: 'chat-line',
    },
  ];
};

export const getScheduleInfo = (scheduleInfo: ScheduleType, t: TFunction) => {
  return [
    {
      title: locali18n.t('myInvestmentDetails.scheduleInfo.title1'),
      value: `${formatPrice(scheduleInfo.principalAmountInHalalah / 100)} ${t('home.rial')}`,
    },
    {
      title: locali18n.t('myInvestmentDetails.scheduleInfo.title2'),
      value: `${formatPrice(scheduleInfo.couponAmountInHalalah / 100)} ${t('home.rial')}`,
    },
    {
      title: locali18n.t('myInvestmentDetails.scheduleInfo.title3'),
      value: scheduleInfo.capitalPaid ? 'مدفوع' : 'غير مدفوع',
    },
    {
      title: locali18n.t('myInvestmentDetails.scheduleInfo.title4'),
      value: `${formatPrice(
        (scheduleInfo.principalAmountInHalalah + scheduleInfo.couponAmountInHalalah) / 100,
      )} ${t('home.rial')}`,
    },
  ];
};

export const getInvestmentDetailsInfo = (item: OpportunityTypes, t: TFunction) => {
  return [
    { title: t('investmentDetails.info.title1'), value: item.issuance.sector },
    { title: t('investmentDetails.info.title2'), value: item.issuance.issuanceSerialNo },
    { title: t('investmentDetails.info.title3'), value: item.issuance.fundPurpose },
    {
      title: t('investmentDetails.info.title4'),
      value: formatPrice(item.issuance.issuanceAmountInHalalah / 100),
    },
    { title: t('investmentDetails.info.title5'), value: item.issuance.sukukQty },
    {
      title: t('investmentDetails.info.title6'),
      value: fixNumber(moment(item.issuance.maturityDate).format('YYYY-MM-DD')),
    },
    {
      title: t('investmentDetails.info.title7'),
      value: `${item.issuance.maturity} ${t('myInvestmentCard.info.month')}`,
    },
    // { title: "نوع الصكوك", value: item.issuance.program.sukType }
  ];
};

export const getFiles = (item: OpportunityTypes, t: TFunction) => {
  return [
    {
      url: `${APIs.getIssuancePublishPdf}?opportunityId=${item.id}&documentId=${item.documents.fileOpportunityPublishedSummary}`,
      title: t('investmentDetails.files.title1'),
    },
    {
      url: `${APIs.getIssuancePublishPdf}?opportunityId=${item.id}&documentId=${item.documents.fileOpportunityPublish}`,
      title: t('investmentDetails.files.title2'),
    },
  ];
};
export const getScheduleDetailsInfo = (scheduleInfo: any, t: TFunction) => {
  return [
    {
      title: t('investmentDetails.scheduleInfo.title1'),
      value: fixNumber(moment(scheduleInfo.date).format('YYYY-MM-DD')),
    },
    {
      title: t('investmentDetails.scheduleInfo.title2'),
      value: `${scheduleInfo.principalAmountInHalalah / 100} ${t('home.rial')}`,
    },
    {
      title: t('investmentDetails.scheduleInfo.title3'),
      value: `${scheduleInfo.couponAmountInHalalah / 100} ${t('home.rial')}`,
    },
  ];
};

export const info = (item: OpportunityTypes, t: TFunction) => [
  { title: t('investmentDetails.info.title1'), value: item.issuance.sector },
  { title: t('investmentDetails.info.title2'), value: item.issuance.issuanceSerialNo },
  { title: t('investmentDetails.info.title3'), value: item.issuance.fundPurpose },
  {
    title: t('investmentDetails.info.title4'),
    value: formatPrice(item.issuance.issuanceAmountInHalalah / 100),
  },
  { title: t('investmentDetails.info.title5'), value: item.issuance.sukukQty },
  {
    title: t('investmentDetails.info.title6'),
    value: fixNumber(moment(item.issuance.maturityDate).format('YYYY-MM-DD')),
  },
  {
    title: t('investmentDetails.info.title7'),
    value: `${item.issuance.maturity} ${t('myInvestmentCard.info.month')}`,
  },
];

export const getScheduleInfoDetails = (scheduleInfo: ScheduleType, t: TFunction) => {
  return [
    {
      title: t('investmentDetails.scheduleInfo.title1'),
      value: fixNumber(moment(scheduleInfo.date).format('YYYY-MM-DD')),
    },
    {
      title: t('investmentDetails.scheduleInfo.title2'),
      value: `${scheduleInfo.principalAmountInHalalah / 100} ${t('home.rial')}`,
    },
    {
      title: t('investmentDetails.scheduleInfo.title3'),
      value: `${scheduleInfo.couponAmountInHalalah / 100} ${t('home.rial')}`,
    },
  ];
};
