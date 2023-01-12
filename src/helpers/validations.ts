import { boolean, object, ref, SchemaOf, string } from 'yup';
import {
  BankTypes,
  ChangePasswordTypes,
  ContactUsTypes,
  LoginTypes,
  NationalAddressTypes,
  RegisterTypes,
  UpdateIndividualIncomesInfoKycTypes,
  UpdateProfileTypes,
  VerifyIdentityTypes,
} from '../@types';
import i18n from '../local/i18n';

const phone = string()
  .length(10, i18n.t('validations.phone.length'))
  .required(i18n.t('validations.phone.required'));

const password = string()
  .min(8, i18n.t('validations.password.min'))
  .required(i18n.t('validations.password.required'));

const email = string()
  .email(i18n.t('validations.email.invalid'))
  .required(i18n.t('validations.email.required'));

export let registerValidation: SchemaOf<RegisterTypes> = object().shape({
  email: email,
  password: password,
  fullName: string().optional(),
  hasAgreedOnTacs: boolean()
    .equals([true], i18n.t('validations.termsAndConditions'))
    .required(i18n.t('validations.termsAndConditions')),
  mobileNo: phone,
  userType: string().required(''),
});

export let nationalAddressValidation: SchemaOf<NationalAddressTypes> = object().shape({
  buildingNumber: string().optional(),
  city: string().required(i18n.t('validations.address.city')),
  postCode: string().optional(),
  additionalNumber: string().optional(),
  district: string().required(i18n.t('validations.address.district')),
  streetName: string().optional(),
  hasAgreedToWikala: boolean()
    .equals([true], i18n.t('validations.address.agree'))
    .required(i18n.t('validations.address.agree')),
  locationCoordinates: string().optional(),
  unitNumber: string().optional(),
});

export let individualIncomesInfoKycTypesValidation: SchemaOf<UpdateIndividualIncomesInfoKycTypes> =
  object().shape({
    academicDegree: string().required(i18n.t('validations.kyc.academicDegree')),
    annualIncome: string().required(i18n.t('validations.kyc.annualIncome')),
    assetAmount: string().required(i18n.t('validations.kyc.assetAmount')),
    employerName: string().optional(),
    hasAnyExperianceOnFinanceSector: boolean().required('error'),
    hasWorkedInFinanceSectorLastFiveYears: boolean().required('error'),
    isCurrentlyEmployee: boolean().nullable().optional(),
    isIndividualHighProfileEmployee: boolean().required('error'),
    isIndividualLeaderInEnrolledCompany: boolean().required('error'),
    isIndividualRelatedToHighProfileEmployee: boolean().required('error'),
    isIndividualRelatedToLeaderInEnrolledCompany: boolean().required('error'),
    // isIndividualTheRealBeneficiary: boolean().required("error"),
    jobTitle: string().optional(),
    jobYears: string().optional(),
    // realBeneficiaryName: string().when("isIndividualTheRealBeneficiary", {
    //   is: false,
    //   then: string().required("test 11")
    // }),
    // realBeneficiaryNin: string().when("isIndividualTheRealBeneficiary", {
    //   is: false,
    //   then: string().required("test 11")
    // })
  });

export let loginValidation: SchemaOf<LoginTypes> = object().shape({
  email: email,
  password: password,
});

export let updateEmailValidation: SchemaOf<{ email: string }> = object().shape({
  email: email,
});
export let updateMobileNoValidation: SchemaOf<{ mobileNo: string }> = object().shape({
  mobileNo: phone,
});
export let updateProfileValidation: SchemaOf<UpdateProfileTypes> = object().shape({
  email: email,
  mobileNo: phone,
  name: string().optional(),
});
export let forgotPasswordValidation: SchemaOf<{ email: string }> = object().shape({
  email: email,
});

export let bankValidation: SchemaOf<BankTypes> = object().shape({
  bankName: string().required(i18n.t('validations.bank.selectBank')),
  iban: string()
    .length(22, i18n.t('validations.bank.iban'))
    .required(i18n.t('validations.bank.enterIban')),
  key: string().optional(),
  bankAccountName: string().required(i18n.t('validations.bank.enterAccountName')),
  accountName: string().optional(),
});

export let verifyIdentityValidation: SchemaOf<VerifyIdentityTypes> = object().shape({
  dateOfBirth: string().required(i18n.t('validations.identity.birthDate')),
  nin: string()
    .length(10, i18n.t('validations.identity.nin.length'))
    .required(i18n.t('validations.identity.nin.required')),
});

export let contactusValidation: SchemaOf<ContactUsTypes> = object().shape({
  contactType: string().required(i18n.t('validations.contactUs.contactType')),
  email: email,
  message: string().required(i18n.t('validations.contactUs.message')),
});

export let changePasswordValidation: SchemaOf<ChangePasswordTypes> = object().shape({
  oldPassword: string()
    .min(8, i18n.t('validations.changePassword.oldPassword.min'))
    .required(i18n.t('validations.changePassword.oldPassword.required')),
  newPassword: string()
    .min(8, i18n.t('validations.changePassword.newPassword.min'))
    .required(i18n.t('validations.changePassword.newPassword.required')),
  confirmPassword: string()
    .oneOf([ref('newPassword'), null], i18n.t('validations.changePassword.confirmPassword.same'))
    .required(i18n.t('validations.changePassword.confirmPassword.required')),
});

export let withdrawValidation: SchemaOf<{ amountInHalalah: string }> = object().shape({
  amountInHalalah: string().required(i18n.t('validations.withdraw')),
});

export let paymentValidation: SchemaOf<{
  paymentType: 'APPLE_PAY' | 'MADA';
  cardNumber?: string;
  expiryMonth?: string;
  expiryYear?: string;
  cvv?: string;
}> = object().shape({
  cardNumber: string().when('paymentType', {
    is: 'MADA',
    then: string().required('cardNumber').length(16, 'card number must be 16'),
  }),
  cvv: string().when('paymentType', {
    is: 'MADA',
    then: string().required('cvv').length(3, 'legnth 3'),
  }),
  expiryMonth: string().when('paymentType', {
    is: 'MADA',
    then: string().required('expiryMonth').length(2, 'length 2'),
  }),
  expiryYear: string().when('paymentType', {
    is: 'MADA',
    then: string().required('expiryYear').length(2, 'error'),
  }),
  paymentType: string()
    .equals(['APPLE_PAY', 'MADA'])
    .required(i18n.t('validations.bank.selectPayment')),
});
