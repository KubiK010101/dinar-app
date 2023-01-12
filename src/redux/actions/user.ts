import { ApiResponse } from 'apisauce';
import {
  AppConfig,
  ChangePasswordTypes,
  ContactUsTypes,
  IndividualUpgradeProcessTypes,
  LoginOTPTypes,
  LoginTypes,
  MyAccountTypes,
  NationalAddressTypes,
  NotifictionSettingTypes,
  Reason,
  RegisterResponseTypes,
  RegisterTypes,
  RegistrationInfoTypes,
  ResponseType,
  UpdateIndividualIncomesInfoKycTypes,
  VerifyIdentityTypes,
} from '@types';
import { request } from '../api/request';
import { ApisTypes } from '../api/APIs';
import OneSignal from 'react-native-onesignal';
import { setAppConfig } from '@query';
import {
  setIndividualUpgradeProcess,
  setMyAccountInfo,
  setNationalAddresses,
  setReasons,
  setRegisterProfile,
  setUserProfile,
  userLogout,
} from '@query';

export async function contactUs(
  body: ContactUsTypes,
  callback?: (_res: ApiResponse<ResponseType<{}>>) => void,
) {
  request<ResponseType<{}>, ContactUsTypes>({
    method: 'post',
    endPoint: 'contactUs',
    callback,
    body,
  });
}

export async function login(
  body: LoginTypes,
  callback?: (_res: ApiResponse<ResponseType<{ uuid: string }>>) => void,
) {
  request<ResponseType<{ uuid: string }>, LoginTypes>({
    method: 'post',
    endPoint: 'login',
    callback,
    body,
  });
}

export async function forgotPassword(
  body: { email: string },
  callback?: (_res: ApiResponse<ResponseType<any>>) => void,
) {
  request<ResponseType<any>, { email: string }>({
    method: 'post',
    endPoint: 'forgotPassword',
    callback,
    body,
  });
}

export async function loginOtp(
  body: LoginOTPTypes,
  callback?: (_res: ApiResponse<ResponseType<RegisterResponseTypes>>) => void,
) {
  const deviceState = await OneSignal.getDeviceState();
  const response = await request<ResponseType<RegisterResponseTypes>, LoginOTPTypes>({
    method: 'post',
    endPoint: 'loginOtp',
    callback,
    body,
  });
  if (response) {
    if (deviceState?.pushToken) {
      setTimeout(() => {
        addPushToken({
          pushToken: deviceState?.pushToken,
          playerId: deviceState.userId,
        });
      }, 300);
    }
    setUserProfile(response);
  }
}

export async function register(
  body: RegisterTypes,
  callback?: (_res: ApiResponse<ResponseType<RegisterResponseTypes>>) => void,
) {
  const response = await request<ResponseType<RegisterResponseTypes>, RegisterTypes>({
    method: 'post',
    endPoint: 'register',
    callback,
    body,
  });
  if (response) {
    setRegisterProfile(response);
  }
}
export function verifyIdentity(
  body: VerifyIdentityTypes,
  callback?: (_res: ApiResponse<{}>) => void,
) {
  request<{}, VerifyIdentityTypes>({
    method: 'post',
    endPoint: 'verifyIdentity',
    callback,
    body,
  });
}

export function verifyOtp<T>(
  endPoint: keyof ApisTypes,
  body: T,
  callback?: (_res: ApiResponse<ResponseType<{}>>) => void,
) {
  request<ResponseType<{}>, T>({
    method: 'post',
    endPoint,
    callback,
    body,
  });
}

export function getRegistrationInfo(callback?: (_res: ApiResponse<RegistrationInfoTypes>) => void) {
  request<RegistrationInfoTypes>({
    method: 'post',
    endPoint: 'getRegistrationInfo',
    callback,
  });
}

export async function getMyAccountInfo(callback?: (_res: ApiResponse<MyAccountTypes[]>) => void) {
  const response = await request<MyAccountTypes[]>({
    method: 'post',
    endPoint: 'getMyAccountInfo',
    callback,
  });
  if (response) {
    if (response.length) setMyAccountInfo(response);
  }
}

export function changePassword(
  body: ChangePasswordTypes,
  callback?: (_res: ApiResponse<{}>) => void,
) {
  request<ResponseType<{}>, ChangePasswordTypes>({
    method: 'post',
    endPoint: 'changePassword',
    callback,
    body,
  });
}

export function updateNotificationSettings(
  body: NotifictionSettingTypes,
  callback?: (_res: ApiResponse<{}>) => void,
) {
  request<ResponseType<{}>, NotifictionSettingTypes>({
    method: 'post',
    endPoint: 'updateNotificationSettings',
    callback,
    body,
  });
}

export function updateIndividualKyc(
  body: UpdateIndividualIncomesInfoKycTypes & NationalAddressTypes,
  callback?: (_res: ApiResponse<{}>) => void,
) {
  request<{}, UpdateIndividualIncomesInfoKycTypes & NationalAddressTypes>({
    method: 'post',
    endPoint: 'updateIndividualKyc',
    callback,
    body,
  });
}

export function completeIndividualForm(callback?: (_res: ApiResponse<{}>) => void) {
  request<{}>({
    method: 'post',
    endPoint: 'completeIndividualForm',
    callback,
  });
}

// individualUpgrade
export function startIndividualUpgrade(callback?: (_res: ApiResponse<{}>) => void) {
  request({
    method: 'post',
    endPoint: 'startIndividualUpgrade',
    callback,
  });
}

export function uploadDocumentIndividualUpgrade(
  body: FormData,
  callback?: (_res: ApiResponse<{}>) => void,
) {
  request<{}, FormData>({
    method: 'post',
    endPoint: 'uploadDocumentIndividualUpgrade',
    callback,
    body,
  });
}

export function submitIndividualUpgrade(
  body: { reasonKey: string },
  callback?: (_res: ApiResponse<{}>) => void,
) {
  request<{}, { reasonKey: string }>({
    method: 'post',
    endPoint: 'submitIndividualUpgrade',
    callback,
    body,
  });
}

export async function getIndividualUpgradeProcess(callback?: (_res: ApiResponse<{}>) => void) {
  const response = await request<IndividualUpgradeProcessTypes>({
    method: 'post',
    endPoint: 'getIndividualUpgradeProcess',
    callback,
  });
  if (response) {
    setIndividualUpgradeProcess(response);
  }
}

export async function getAllReasons(callback?: (_res: ApiResponse<{}>) => void) {
  const response = await request<Reason[]>({
    method: 'post',
    endPoint: 'getAllReasons',
    callback,
  });
  if (response) {
    setReasons(response);
  }
}

export function updateEmail(
  body: { email: string },
  callback?: (_res: ApiResponse<ResponseType<{ processId: string }>>) => void,
) {
  request<ResponseType<{ processId: string }>, { email: string }>({
    method: 'post',
    endPoint: 'updateEmail',
    callback,
    body,
  });
}

export function updatePhoneNumber(
  body: { mobileNo: string },
  callback?: (_res: ApiResponse<ResponseType<{ processId: string }>>) => void,
) {
  request<ResponseType<{ processId: string }>, { mobileNo: string }>({
    method: 'post',
    endPoint: 'updatePhoneNumber',
    callback,
    body,
  });
}

export function addPushToken(
  body: { playerId: string; pushToken: string },
  callback?: (_res: ApiResponse<ResponseType<{}>>) => void,
) {
  request<ResponseType<{}>, { playerId: string; pushToken: string }>({
    method: 'post',
    endPoint: 'addPushToken',
    callback,
    body,
  });
}

export async function logout(callback?: (_res: ApiResponse<ResponseType<{}>>) => void) {
  const deviceState = await OneSignal.getDeviceState();
  const response = await request<ResponseType<{}>, { playerId: string }>({
    method: 'post',
    endPoint: 'logout',
    callback,
    body: { playerId: `${deviceState?.userId}` },
  });
  if (response) {
    userLogout();
  }
}

export async function getNationalAddresses(
  callback?: (_res: ApiResponse<NationalAddressTypes[]>) => void,
) {
  const response = await request<NationalAddressTypes[]>({
    method: 'post',
    endPoint: 'getNationalAddresses',
    callback,
  });
  if (response) {
    setNationalAddresses(response);
  }
}

export async function appConfig(callback?: (_res: ApiResponse<AppConfig>) => void) {
  const response = await request<AppConfig>({
    method: 'post',
    endPoint: 'appConfig',
    callback,
  });
  if (response) {
    setAppConfig(response);
  }
}
