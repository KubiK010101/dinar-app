import { ApiResponse } from 'apisauce';
import { BankTypes, ResponseType, ResponseTypeList, TransactionTypes, WalletTypes } from '@types';
import { request } from '../api/request';

export async function getWalletTransactions(
  body: { page?: number },
  callback?: (_res: ApiResponse<ResponseTypeList<TransactionTypes>>) => void,
  reset?: boolean,
) {
  const response = await request<ResponseTypeList<TransactionTypes>, {}>({
    method: 'post',
    endPoint: 'getWalletTransactions',
    callback,
    body,
  });
  if (response) return { ...response, reset };
}

export const getWalletInfo = (callback?: (_res: ApiResponse<WalletTypes>) => void) => {
  return request<WalletTypes, WalletTypes>({
    method: 'post',
    endPoint: 'getWalletInfo',
    callback,
  });
};

export async function addBankAccount(
  body: BankTypes,
  callback?: (_res: ApiResponse<ResponseType<{ processId: number }>>) => void,
) {
  await request<ResponseType<{ processId: number }>, BankTypes>({
    method: 'post',
    endPoint: 'addBankAccount',
    callback,
    body,
  });
}

export async function verifyBankAccount(
  body: { processId: number; code: string },
  callback?: (_res: ApiResponse<ResponseType<{ processId: number }>>) => void,
) {
  await request<ResponseType<{ processId: number }>, { processId: number; code: string }>({
    method: 'post',
    endPoint: 'verifyBankAccount',
    callback,
    body,
  });
}

export async function withdrawFunds(
  body: { amountInHalalah: number },
  callback?: (_res: ApiResponse<ResponseType<{}>>) => void,
) {
  await request<ResponseType<{}>, { amountInHalalah: number }>({
    method: 'post',
    endPoint: 'withdrawFunds',
    callback,
    body,
  });
}
