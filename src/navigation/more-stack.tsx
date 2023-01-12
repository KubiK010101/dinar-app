import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MoreStackTypes } from './navigation-types';
import {
  AboutUs,
  AddBankAccount,
  BankAccount,
  ChangePassword,
  ContactUs,
  FAQ,
  Language,
  More,
  NotificationSetting,
  Settings,
  ShariaCommittee,
  UpdateKYC,
  UpgradeToInvestorStep1,
  UpgradeToInvestorStep2,
  ViewKYC,
  TestPayment,
} from '@screens';
const Stack = createNativeStackNavigator<MoreStackTypes>();

function MoreStack() {
  return (
    <Stack.Navigator initialRouteName="More" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="More" component={More} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Language" component={Language} />
      <Stack.Screen name="NotificationSetting" component={NotificationSetting} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="FAQ" component={FAQ} />
      <Stack.Screen name="AboutUs" component={AboutUs} />

      <Stack.Screen name="ContactUs" component={ContactUs} />

      <Stack.Screen name="AddBankAccount" component={AddBankAccount} />
      <Stack.Screen name="BankAccount" component={BankAccount} />

      <Stack.Screen name="UpgradeToInvestorStep1" component={UpgradeToInvestorStep1} />

      <Stack.Screen name="UpgradeToInvestorStep2" component={UpgradeToInvestorStep2} />
      <Stack.Screen name="UpdateKYC" component={UpdateKYC} />
      <Stack.Screen name="ViewKYC" component={ViewKYC} />
      <Stack.Screen name="ShariaCommittee" component={ShariaCommittee} />

      <Stack.Screen name="TestPayment" component={TestPayment} />
    </Stack.Navigator>
  );
}
export default MoreStack;
