import {
  IndividualUpgradeProcessTypes,
  MyAccountTypes,
  NationalAddressTypes,
  Reason,
  UserTypes,
} from '@types';

export type AuthStateTypes = {
  profile?: UserTypes | null;
  token: string;
  email: string;
  onboardingCompleted?: boolean;
  myAccountInfo?: MyAccountTypes | null;
  individualUpgradeProcess?: IndividualUpgradeProcessTypes | null;
  nationalAddresses: NationalAddressTypes[];
  reasons: Array<Reason>;
};

export const authInitialState: AuthStateTypes = {
  token: '',
  onboardingCompleted: false,
  email: '',
  nationalAddresses: [],
  reasons: [],
  individualUpgradeProcess: null,
  myAccountInfo: null,
  profile: null,
};

export * from './actions';
