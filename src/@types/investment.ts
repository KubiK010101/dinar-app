import { OpportunityTypes } from './opportunity';

export type InvestmentStatus =
  | 'FULFILLED'
  | 'PENDING'
  | 'ISSUED'
  | 'REJECTED'
  | 'MATURED'
  | 'CANCELED';
export type InvestmentStatusEn =
  | 'FULFILLED'
  | 'PENDING'
  | 'ISSUED'
  | 'REJECTED'
  | 'MATURED'
  | 'CANCELED';
export type InvestmentStatusAR =
  | 'FULFILLED'
  | 'قيد التنفيذ'
  | 'مصدر'
  | 'REJECTED'
  | 'مطفئ'
  | 'ملغي';

export type InvestmentType = {
  id: number;
  sukStatus: InvestmentStatus;
  statusEnglish: InvestmentStatusEn;
  statusArabic: InvestmentStatusAR;
  requestedSuks: number;
  confirmedSuks: number;
  sukOrderId: number;
  sukOrder: {
    id: number;
    walletId: string;
    opportunityId: number;
    opportunityWalletId: string;
    amount: number;
    fulfilledAmount: number;
    sukPriceInHalalah: number;
    allowPartialFulfillment: boolean;
    status: InvestmentStatus;
    note: string;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  opportunity: OpportunityTypes;
};

export type InvestmentOrderType = {
  id: number;
  status: InvestmentStatus;
  requestedSuksCount: number;
  fulfilledSuksCount: number;
  requestDto: {
    opportunityId: string;
    allowPartialFulfillment: boolean;
    amount: number;
    opportunityWalletId: string;
    sukPriceInHalalah: number;
    investorWalletId: string;
  };
  responseDto: {
    id: number;
    investorWalletId: string;
    opportunityId: string;
    opportunityWalletId: string;
    amount: number;
    fulfilledAmount: number;
    sukPriceInHalalah: number;
    allowPartialFulfillment: true;
    status: OpportunityTypes;
    note: string;
    orderId: string;
    createdAt: string;
    updatedAt: string;
  };
  sukOrderId: string;
  isSukIssued: boolean;
  createdAt: string;
  issuedSuk: null;
  opportunity: OpportunityTypes;
  statusArabic: InvestmentStatusAR;
  statusEnglish: InvestmentStatusEn;
};

export type InvestmentStatsTypes = {
  fulfilledOrdersCount: number;
  investmentsAmountTotalInHalalah: number;
  profitTotalInHalalah: number;
  weightedReturn: number;
};

export type CreateOrderType = {
  result: {
    code: string;
    description: string;
  };
  buildNumber: string;
  timestamp: string;
  ndc: string;
  id: string;
} & { suk: InvestmentType };
