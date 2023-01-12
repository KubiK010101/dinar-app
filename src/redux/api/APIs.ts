export interface ApisTypes<T = string> {
  login: T;
  loginOtp: T;
  register: T;
  verifyIdentity: T;
  verifyIdentityOtp: T;
  refreshToken: T;
  getRegistrationInfo: T;
  updateIndividualKyc: T;
  contactUs: T;
  changePassword: T;
  completeIndividualForm: T;
  updateNotificationSettings: T;
  getMyAccountInfo: T;
  getAllOpportunity: T;
  getWalletTransactions: T;
  getMyInvestment: T;
  getMyInvestmentOrders: T;
  getWalletInfo: T;
  getInvestmentStats: T;
  addBankAccount: T;
  forgotPassword: T;
  verifyBankAccount: T;
  createOrder: T;

  // Individual Upgrade
  startIndividualUpgrade: T;
  uploadDocumentIndividualUpgrade: T;
  getAllReasons: T;
  submitIndividualUpgrade: T;
  getIndividualUpgradeProcess: T;
  verifyIndividualUpgrade: T;
  createInvestment: T;

  updateEmail: T;
  verifyEmail: T;
  updateEmailVerifyAbsher: T;
  updatePhoneNumber: T;
  verifyPhoneNumber: T;
  updatePhoneNumberVerifyAbsher: T;
  withdrawFunds: T;
  getAgencyAgreementPdf: T;
  getIssuancePublishPdf: T;
  getIssuancePublishedSummaryPdf: T;
  addPushToken: T;
  logout: T;
  appConfig: T;

  getNationalAddresses: T;
  getPaymentStatus: T;

  createCheckoutId: T;
}
const APIs: ApisTypes = {
  login: '/auth/commands/user.login.sendOtp',
  loginOtp: '/auth/commands/user.login.verifyOtp',
  register: '/registration/commands/user.register',
  verifyIdentity: '/registration/commands/user.yakeen.start',
  verifyIdentityOtp: '/registration/commands/user.yakeen.verify',
  refreshToken: '/auth/commands/user.refreshToken',
  getRegistrationInfo: '/auth/queries/user.getMyInfo',
  updateIndividualKyc: '/accounts/commands/investor.individual.updateKyc',
  contactUs: '/registration/commands/public.contactUs',
  changePassword: '/users/commands/user.password.change',
  completeIndividualForm: '/registration/commands/user.investor.individual.completeForm',
  updateNotificationSettings: '/accounts/commands/user.account.updateNotificationSettings',
  getMyAccountInfo: '/accounts/queries/user.getMyAccounts',
  getAllOpportunity: '/opportunities/queries/user.opportunity.findAll',
  getWalletTransactions: '/wallet/queries/user.wallet.getMyTransactions',
  getMyInvestment: '/opportunities/queries/user.suk.findAll',
  getMyInvestmentOrders: '/opportunities/queries/user.sukRequest.findAll',
  getWalletInfo: '/wallet/queries/user.wallet.getMyWalletInfo',
  getInvestmentStats: '/opportunities/queries/user.suk.getStats',
  addBankAccount: '/processBankUpdate/commands/individual.process.addInfoAndSubmit',
  forgotPassword: '/auth/commands/public.resetPassword.sendOtp',
  verifyBankAccount: '/processBankUpdate/commands/individual.process.verifyAbsher',

  // Individual Upgrade
  startIndividualUpgrade: '/processIndividualUpgrade/commands/user.process.start',
  uploadDocumentIndividualUpgrade: '/processIndividualUpgrade/commands/user.process.uploadDocument',
  getAllReasons: '/processIndividualUpgrade/queries/user.findReasons',
  submitIndividualUpgrade: '/processIndividualUpgrade/commands/user.process.submit',
  getIndividualUpgradeProcess: '/processIndividualUpgrade/queries/user.process.findCurrentOne',
  getIssuancePublishPdf: '/opportunities/queries/user.opportunity.document.findById/',
  getIssuancePublishedSummaryPdf: '',
  verifyIndividualUpgrade: '/processIndividualUpgrade/commands/user.process.verifyAbsher',
  createInvestment: '/opportunities/commands/user.opportunity.buySuk',

  createOrder: '/opportunities/commands/user.opportunity.placeOrder',

  updateEmail: '/processEmailUpdate/commands/user.process.start',
  verifyEmail: '/processEmailUpdate/commands/user.process.verifyOtp',
  updateEmailVerifyAbsher: '/processEmailUpdate/commands/user.process.verifyAbsher',

  updatePhoneNumber: '/processMobileNoUpdate/commands/user.process.start',
  verifyPhoneNumber: '/processMobileNoUpdate/commands/user.process.verifyOtp',
  updatePhoneNumberVerifyAbsher: '/processMobileNoUpdate/commands/user.process.verifyAbsher',

  withdrawFunds: '/wallet/commands/user.withdrawFunds',
  getAgencyAgreementPdf: '/accounts/commands/user.investor.getWikalaPdf',

  addPushToken: '/notifications/commands/user.onesignal.addDevice',
  logout: '/auth/commands/user.logout',
  appConfig: '/users/queries/public.getAppConfig',

  getNationalAddresses: '/accounts/queries/user.fetchNationalAddresses',
  getPaymentStatus: '/hyperpay/queries/user.hyperPay.getCheckoutStatus',
  createCheckoutId: 'hyperpay/commands/user.hyperPay.createCheckout',
};

export default APIs;
