import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  AddNewPaymentCard,
  PdfViewr,
  AgencyAgreement2,
  CreatePassword,
  DepoisteWallet,
  EditEmail,
  EditPhoneNumber,
  EditProfile,
  ForceUpdate,
  ForgotPassword,
  IndividualUpgradeSuccessful,
  InvestmentDetails,
  InvestSuccessful,
  KYCSuccessful,
  Login,
  LoginOtp,
  MyProfile,
  Notifications,
  OnBoard,
  Payment3DSecure,
  PaymentStatus,
  Register,
  RegisterCheckIdentity,
  RegisterKycStep1,
  RegisterKycStep2,
  RegisterSuccessful,
  Splash,
  TermsAndConditions,
  VerificationCode,
  Withdraw,
  AuctionDetails,
  Bids,
} from '@screens';
import { MainAppStackTypes } from './navigation-types';
import TabButtonsStack from './tab-buttons-stack';

const Stack = createNativeStackNavigator<MainAppStackTypes>();

function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
      <Stack.Screen name="TabButton" component={TabButtonsStack} />
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="OnBoard" component={OnBoard} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="RegisterCheckIdentity" component={RegisterCheckIdentity} />
      <Stack.Screen name="VerificationCode" component={VerificationCode} />
      <Stack.Screen name="RegisterSuccessful" component={RegisterSuccessful} />

      <Stack.Screen name="KYCSuccessful" component={KYCSuccessful} />
      <Stack.Screen name="TermsAndConditions" component={TermsAndConditions} />
      <Stack.Screen name="RegisterKycStep1" component={RegisterKycStep1} />
      <Stack.Screen name="RegisterKycStep2" component={RegisterKycStep2} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="LoginOtp" component={LoginOtp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="CreatePassword" component={CreatePassword} />

      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen
        options={{ presentation: 'modal' }}
        name="AddNewPaymentCard"
        component={AddNewPaymentCard}
      />

      <Stack.Screen name="InvestmentDetails" component={InvestmentDetails} />
      <Stack.Screen name="InvestSuccessful" component={InvestSuccessful} />
      <Stack.Screen
        options={{ presentation: 'modal' }}
        name="DepoisteWallet"
        component={DepoisteWallet}
      />
      <Stack.Screen options={{ presentation: 'modal' }} name="Withdraw" component={Withdraw} />
      <Stack.Screen name="MyProfile" component={MyProfile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="EditEmail" component={EditEmail} />
      <Stack.Screen name="EditPhoneNumber" component={EditPhoneNumber} />
      <Stack.Screen name="PdfViewr" component={PdfViewr} />
      <Stack.Screen name="AgencyAgreement2" component={AgencyAgreement2} />

      <Stack.Screen name="IndividualUpgradeSuccessful" component={IndividualUpgradeSuccessful} />
      <Stack.Screen name="PaymentStatus" component={PaymentStatus} />
      <Stack.Screen
        options={{ presentation: 'modal' }}
        name="Payment3DSecure"
        component={Payment3DSecure}
      />
      <Stack.Screen options={{ animation: 'fade' }} name="LoginWithOutSwipe" component={Login} />
      <Stack.Screen
        options={{ animation: 'fade_from_bottom' }}
        name="ForceUpdate"
        component={ForceUpdate}
      />
      <Stack.Screen name="AuctionDetails" component={AuctionDetails} />
      <Stack.Screen options={{ presentation: 'modal' }} name="Bids" component={Bids} />
    </Stack.Navigator>
  );
}

export default MainStack;
