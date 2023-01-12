import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TransactionsStackTypes } from './navigation-types';
import { TransactionDetails, Transactions } from '@screens';
const Stack = createNativeStackNavigator<TransactionsStackTypes>();

function TransactionsStack() {
  return (
    <Stack.Navigator initialRouteName="Transactions" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Transactions" component={Transactions} />
      <Stack.Screen name="TransactionDetails" component={TransactionDetails} />
    </Stack.Navigator>
  );
}
export default TransactionsStack;
