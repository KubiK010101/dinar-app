import { ApiResponse } from 'apisauce';
import {
  CreateOrderType,
  InvestmentOrderType,
  InvestmentStatsTypes,
  InvestmentType,
  OpportunityTypes,
  PaymentTypes,
  ResponseType,
  ResponseTypeList,
} from '@types';
import { request } from '../api/request';
import { setQueryData } from '@query';

export const getAllOpportunity = (
  body: { filter?: any; limit?: number; page?: number },
  callback?: (_res: ApiResponse<ResponseTypeList<OpportunityTypes>>) => void,
) => {
  return request<ResponseTypeList<OpportunityTypes>, {}>({
    method: 'post',
    endPoint: 'getAllOpportunity',
    callback,
    body,
  });
};

export const getMyInvestment = (
  body: { filter: string; page: number },
  callback?: (_res: ApiResponse<ResponseTypeList<InvestmentType>>) => void,
  _reset?: boolean,
) => {
  return request<ResponseTypeList<InvestmentType>, {}>({
    method: 'post',
    endPoint: 'getMyInvestment',
    callback,
    body,
  });
};

export const getMyInvestmentOrders = (
  body: { filter: string; page?: number; isSukIssued?: boolean },
  callback?: (_res: ApiResponse<ResponseTypeList<InvestmentOrderType>>) => void,
  _reset?: boolean,
) => {
  return request<ResponseTypeList<InvestmentOrderType>, {}>({
    method: 'post',
    endPoint: 'getMyInvestmentOrders',
    callback,
    body,
  });
};

export async function getInvestmentStats(
  callback?: (_res: ApiResponse<InvestmentStatsTypes>) => void,
) {
  const response = await request<InvestmentStatsTypes, {}>({
    method: 'post',
    endPoint: 'getInvestmentStats',
    callback,
  });
  if (response) {
    setQueryData('investmentStats', response);
  }
}

export async function createInvestment(
  body: {
    opportunityId: number;
    suks: number;
  },
  callback?: (_res: ApiResponse<{}>) => void,
) {
  await request<
    {
      opportunityId: number;
      suks: number;
    },
    {}
  >({
    method: 'post',
    endPoint: 'createInvestment',
    callback,
    body,
  });
}

type CreateCheckoutIdParam = {
  opportunityId: number;
  amountInHalalah: number;
  paymentType: PaymentTypes;
};
type CreateCheckoutIdResponse = {
  id: number;
  status: 'WALLET_DEPOSITED';
  hyperpayNdc: string;
  hyperpayCode: string;
};

export async function createCheckoutId(
  body: CreateCheckoutIdParam,
  callback?: (_res: ApiResponse<ResponseType<CreateCheckoutIdResponse>>) => void,
) {
  await request<ResponseType<CreateCheckoutIdResponse>, CreateCheckoutIdParam>({
    method: 'post',
    endPoint: 'createCheckoutId',
    callback,
    body,
  });
}

export async function getPaymentStatus(
  body: { ndc?: string; checkoutId?: string },
  callback?: (_res: ApiResponse<CreateCheckoutIdResponse>) => void,
) {
  await request<CreateCheckoutIdResponse, { ndc?: string; checkoutId?: string }>({
    method: 'post',
    endPoint: 'getPaymentStatus',
    callback,
    body,
  });
}

export async function createOrder(
  body: {
    opportunityId: number;
    suksCount: number;
    useWallet?: boolean;
    paymentType?: PaymentTypes;
  },
  callback?: (_res: ApiResponse<ResponseType<CreateOrderType>>) => void,
) {
  await request<
    ResponseType<CreateOrderType>,
    {
      opportunityId: number;
      suksCount: number;
      useWallet?: boolean;
      paymentType?: PaymentTypes;
    }
  >({
    method: 'post',
    endPoint: 'createOrder',
    callback,
    body,
  });
}
