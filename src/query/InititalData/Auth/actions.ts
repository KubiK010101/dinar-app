import {
  ResponseType,
  RegisterResponseTypes,
  MyAccountTypes,
  IndividualUpgradeProcessTypes,
  Reason,
  NationalAddressTypes,
} from '@types';
import { getQueryData, setQueryData } from '../../utils';
import { AuthStateTypes } from '.';
import { resetAuctionsData } from '../Auctions';

const currentAuthState = () => getQueryData<AuthStateTypes>('auth');

const changeAuthQueryData = (data: Partial<AuthStateTypes>) => {
  setQueryData<AuthStateTypes>('auth', {
    ...currentAuthState(),
    ...data,
  });
};

export const setUserProfile = (user: ResponseType<RegisterResponseTypes>) => {
  changeAuthQueryData({
    token: user.data.token,
    profile: user.data.user,
    email: user.data.user.email,
  });
};

export const setRegisterProfile = (user: ResponseType<RegisterResponseTypes>) => {
  changeAuthQueryData({
    token: user.data.token,
    profile: user.data.user,
    email: user.data.user.email,
  });
};

export const clearEmail = () => {
  changeAuthQueryData({
    email: '',
  });
};

export const setMyAccountInfo = (accountInfo: MyAccountTypes[]) => {
  const currentProfileState = getQueryData<AuthStateTypes>('auth');
  changeAuthQueryData({
    myAccountInfo: accountInfo[0],
    ...(currentProfileState.profile
      ? {
          profile: {
            ...currentProfileState.profile,
            mobileNumber: accountInfo[0].createdBy.mobileNo,
            email: accountInfo[0].createdBy.email,
            displayName: accountInfo[0].createdBy.fullName,
          },
        }
      : {}),
  });
};

export const setOnboardingCompleted = (isCompleted?: boolean) => {
  changeAuthQueryData({
    onboardingCompleted: isCompleted || true,
  });
};

export const setIndividualUpgradeProcess = (
  individualUpgradeProcess: IndividualUpgradeProcessTypes,
) => {
  changeAuthQueryData({
    individualUpgradeProcess,
  });
};

export const setReasons = (reasons: Reason[]) => {
  changeAuthQueryData({
    reasons,
  });
};

export const userLogout = () => {
  changeAuthQueryData({
    profile: null,
    token: '',
    individualUpgradeProcess: undefined,
  });
  resetAuctionsData();
};

export const setNationalAddresses = (nationalAddresses: NationalAddressTypes[]) => {
  changeAuthQueryData({
    nationalAddresses,
  });
};
