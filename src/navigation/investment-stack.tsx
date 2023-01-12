import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { InvestmentStackTypes } from './navigation-types';
import { MyInvestment, MyInvestmentDetails } from '@screens';
const Stack = createNativeStackNavigator<InvestmentStackTypes>();

function InvestmentStack() {
  return (
    <Stack.Navigator initialRouteName="MyInvestment" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MyInvestment" component={MyInvestment} />
      <Stack.Screen name="MyInvestmentDetails" component={MyInvestmentDetails} />
    </Stack.Navigator>
  );
}
export default InvestmentStack;
