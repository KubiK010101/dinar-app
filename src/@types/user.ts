import { PlatformOSType } from 'react-native';
import { BankTypes } from './wallet';

export type UserTypes = {
  userId: string;
  displayName: string;
  mobileNumber: string;
  email: string;
  roles: null;
  grants: Array<string>;
};
export type UpdateProfileTypes = {
  email: string;
  mobileNo: string;
  name?: string;
};

export type ContactUsTypes = {
  email: string;
  contactType: string;
  message: string;
};

export type SignInTypes = {
  email: string;
  password: string;
};
export type LoginTypes = {
  email: string;
  password: string;
  platform?: PlatformOSType;
};
export type LoginOTPTypes = {
  uuid: string;
  code: string;
};

export type RegisterTypes = {
  fullName?: string;
  email: string;
  mobileNo: string;
  password: string;
  hasAgreedOnTacs: boolean;
  userType: string;
};

export type RegisterResponseTypes = {
  userId: string;
  success: boolean;
  message: string;
  code: string;
  token: string;
  user: UserTypes;
  data: {
    token: string;
    user: UserTypes;
  };
};

export type ChangePasswordTypes = {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
};

export type VerifyIdentityTypes = {
  nin: string;
  dateOfBirth: string;
};

export type NotifictionSettingTypes = {
  email?: boolean;
  sms?: boolean;
  newUnderwriting?: boolean;
  distribution?: boolean;
  emailPublication?: boolean;
  blogNotifications?: boolean;
  newOffers?: boolean;
  newProducts?: boolean;
  dinarNews?: boolean;
};

export type VerifyIdentityOtpTypes = {
  code: string;
};

export type NationalAddressTypes = {
  postCode?: string;
  city: string;
  streetName?: string;
  hasAgreedToWikala?: boolean;
  district: string;
  buildingNumber?: string;
  additionalNumber?: string;
  locationCoordinates?: string;
  unitNumber?: string;
};

export type UpdateIndividualIncomesInfoKycTypes = {
  academicDegree: string;
  annualIncome: string;
  assetAmount: string;
  employerName?: string;
  hasAnyExperianceOnFinanceSector: boolean | null;
  hasWorkedInFinanceSectorLastFiveYears: boolean | null;
  isCurrentlyEmployee?: boolean | null;
  isIndividualHighProfileEmployee: boolean | null;
  isIndividualLeaderInEnrolledCompany: boolean | null;
  isIndividualRelatedToHighProfileEmployee: boolean | null;
  isIndividualRelatedToLeaderInEnrolledCompany: boolean | null;
  // isIndividualTheRealBeneficiary: boolean | null,
  jobTitle?: string;
  jobYears?: string;
  // realBeneficiaryName?: string,
  // realBeneficiaryNin?: string,
};

type TasksTypes =
  | 'verifyYakeen'
  | 'fillRegistrationForm'
  | 'fillInvestorForm'
  | 'fillFundRaiserForm';

export type RegistrationInfoTypes = {
  id: string;
  mobileNo: string;
  email: string;
  fullName: string;
  nin: string;
  dateOfBirth: string;
  isYakeenVerified: boolean;
  yakeenRecord: string;
  isMobileNoVerified: boolean;
  isEmailVerified: boolean;
  attirbutes: any;
  roles: [];
  lastLogin: string;
  createdAt: string;
  updatedAt: string;
  registration: {
    id: number;
    userId: string;
    userType: 'INVESTOR';
    accountType: null;
    investorType: null;
    investorOrgType: null;
    nin: string;
    dateOfBirth: string;
    isYakeenStarted: true;
    crNumber: null;
    createdAt: string;
    updatedAt: string;
    process: {
      currentTasks: Array<TasksTypes>;
      definedTasks: Array<{
        taskName: TasksTypes;
        taskType: 'UserTask';
      }>;
      inititalTasks: Array<TasksTypes>;
      completedTasks: Array<TasksTypes>;
    };
  };
};
export type NotificationSettingTypes =
  | 'email'
  | 'sms'
  | 'newUnderwriting'
  | 'distribution'
  | 'subscriptions'
  | 'blogNotifications'
  | 'newOffers'
  | 'newProducts'
  | 'dinarNews';
export type MyAccountTypes = {
  accountType: 'INVESTOR_INDIVIDUAL';
  id: number;
  accountName: string;
  approvalStatus: 'APPROVED';
  address: NationalAddressTypes;
  authorization: any;
  hasAgreedToWikala: boolean;
  isBankInfoUpdated: boolean;
  bank: BankTypes;
  notificationSettings: Record<NotificationSettingTypes, boolean>;
  crNumber: any;
  isCrNumberVerified: boolean;
  crNumberVerifiedDate: string;
  crInfo: any;
  documents: any;
  isInvestorUpgraded: boolean;
  createdAt: string;
  updatedAt: string;
  process: {
    currentTasks: ['user.account.bank.updateBankInfo'];
    definedTasks: [
      {
        taskName: 'start';
        taskType: 'UserTask';
      },
      {
        taskName: 'system.investor.individual.autoApproveInvestor';
        taskType: 'UserTask';
      },
      {
        taskName: 'admin.account.updateApprovalStatus';
        taskType: 'UserTask';
      },
    ];
    inititalTasks: ['start'];
    completedTasks: [
      'start',
      'investor.individual.updateKyc',
      'user.account.agreeInvestmentWikala',
      'system.investor.individual.autoApprove',
    ];
  };
  createdBy: {
    id: string;
    mobileNo: string;
    email: string;
    fullName: string;
    nin: string;
    dateOfBirth: string;
    isYakeenVerified: true;
    yakeenRecord: YakeenRecordTypes;
    isMobileNoVerified: null;
    isEmailVerified: null;
    attirbutes: {};
    roles: null;
    lastLogin: string;
    createdAt: string;
    updatedAt: string;
  };
  investorIndividualKyc: InvestorIndividualKycTypes & NationalAddressTypes;
  investorFundKyb: string;
  investorCompanyKyb: string;
  fundraiserKyb: string;
};

type YakeenRecordTypes = {
  nin: string;
  firstName: string;
  fatherName: string;
  grandFatherName: string;
  familyName: string;
  englishFirstName: string;
  englishSecondName: string;
  englishThirdName: string;
  englishLastName: string;
  idExpiryDate: string;
  gender: 'MALE';
  dateOfBirthH: string;
  created_at: '';
};
type InvestorIndividualKycTypes = {
  id: number;
  academicDegree: AcademicDegreeTypes;
  annualIncome: AnnualIncomeTypes;
  assetAmount: AssetAmountTypes;
  isCurrentlyEmployee: boolean;
  employerName: string;
  jobTitle: string;
  jobYears: string;
  hasWorkedInFinanceSectorLastFiveYears: boolean;
  hasAnyExperianceOnFinanceSector: boolean;
  isIndividualTheRealBeneficiary: boolean;
  isIndividualLeaderInEnrolledCompany: boolean;
  isIndividualRelatedToLeaderInEnrolledCompany: boolean;
  isIndividualHighProfileEmployee: boolean;
  isIndividualRelatedToHighProfileEmployee: boolean;
  agreedAt: string;
  realBeneficiaryName: string;
  realBeneficiaryNin: string;
};
type AcademicDegreeTypes = 'doctorate' | string;
type AnnualIncomeTypes = '100k~500k';
type AssetAmountTypes = 'assetAmount';
export type IndividualUpgradeProcessTypes = {
  id: number;
  reasonId: number;
  approvalStatus: 'SUBMITTED' | 'APPROVED';
  approvalMessage: string;
  document: string;
};
export type Reason = {
  title: string;
  key: string;
};
