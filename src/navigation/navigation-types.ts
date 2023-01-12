import { PaymentStatus } from 'react-native-hyperpay-sdk';
import {
  Auction,
  InvestmentType,
  NationalAddressTypes,
  OpportunityTypes,
  TransactionTypes,
} from '../@types';
import { IconsName } from '@assets';

export type MainAppStackTypes = {
  TabButton: undefined;
  Splash: undefined;
  OnBoard: undefined;
  Register?: { agree: boolean };
  RegisterCheckIdentity: undefined;
  VerificationCode: {
    flow: {
      type:
        | 'verifyBankAccount'
        | 'verifyIdentityOtp'
        | 'verifyIndividualUpgrade'
        | 'loginOtp'
        | 'verifyPhoneNumber'
        | 'verifyEmail'
        | 'updatePhoneNumberVerifyAbsher'
        | 'updateEmailVerifyAbsher';
      params?: any;
    };
  };
  RegisterSuccessful: undefined;
  KYCSuccessful: undefined;
  TermsAndConditions: undefined;
  RegisterKycStep2: { nationalAddress: NationalAddressTypes };
  RegisterKycStep1: undefined;
  Login: undefined;
  LoginOtp: { uuid: string; email: string; password: string };
  ForgotPassword: undefined;
  CreatePassword: undefined;
  Notifications: undefined;
  InvestmentDetails: { item: InvestmentType };
  AddNewPaymentCard: undefined;
  InvestSuccessful: { amount: number };
  DepoisteWallet: undefined;
  Withdraw: undefined;
  MyProfile: undefined;
  EditProfile: undefined;
  EditPhoneNumber: undefined;
  EditEmail: undefined;
  PdfViewr: { endpoint?: string; title: string; method: 'POST' | 'GET' };
  AgencyAgreement2: undefined;
  IndividualUpgradeSuccessful: undefined;
  Payment3DSecure: {
    redirectURL: string;
    opportunityId: number;
    suksCount: number;
    amount: number;
  };
  PaymentStatus: { paymentStatus: PaymentStatus };
  LoginWithOutSwipe: undefined;
  ForceUpdate: undefined;
  AuctionDetails: undefined;
  Bids: undefined;
};

export type InvestmentStackTypes = {
  MyInvestment: undefined;
  MyInvestmentDetails: { item: InvestmentType };
};
export type HomeStackTypes = {
  Home: undefined;
  TabButtonsStack: undefined;
  InvestmentDetails: { item: OpportunityTypes };
  AddBankAccount: undefined;
};

export type AuctionStackTypes = {
  Auctions: undefined;
  AuctionDetails: { item: Auction };
  Bids: undefined;
  AuctionResult: { item: Auction };
};
export type MoreStackTypes = {
  More: undefined;
  Settings: undefined;
  Language: undefined;
  NotificationSetting: undefined;
  ChangePassword: undefined;
  FAQ: undefined;
  AboutUs: undefined;
  ContactUs: undefined;
  AddBankAccount: undefined;
  BankAccount: undefined;
  UpgradeToInvestorStep1: undefined;
  UpgradeToInvestorStep2: undefined;
  UpdateKYC: undefined;
  ViewKYC: undefined;
  ShariaCommittee: undefined;
  TestPayment: undefined;
};
export type TransactionsStackTypes = {
  Transactions: undefined;
  TransactionDetails: { item: TransactionTypes };
};
export type TabButtonStackTypes = {
  HomeStack: { icon: IconsName; text: string };
  TransactionsStack: { icon: IconsName; text: string };
  InvestmentStack?: { icon: IconsName; text: string };
  MoreStack: { icon: IconsName; text: string };
  AuctionStack: { icon: IconsName; text: string };
};

export type MainNavigationTypes =
  | HomeStackTypes
  | MainAppStackTypes
  | TabButtonStackTypes
  | MoreStackTypes
  | TransactionsStackTypes
  | InvestmentStackTypes
  | TabButtonStackTypes
  | AuctionStackTypes;

export type MainNavigationAllScreensTypes = HomeStackTypes &
  MainAppStackTypes &
  TabButtonStackTypes &
  MoreStackTypes &
  TransactionsStackTypes &
  InvestmentStackTypes &
  AuctionStackTypes;
