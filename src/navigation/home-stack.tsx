import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeStackTypes } from './navigation-types';
import { AddBankAccount, Home } from '@screens';
const Stack = createNativeStackNavigator<HomeStackTypes>();

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="TabButtonsStack" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />

      <Stack.Screen name="AddBankAccount" component={AddBankAccount} />
    </Stack.Navigator>
  );
}
export default HomeStack;
