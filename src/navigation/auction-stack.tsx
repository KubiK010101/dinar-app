import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuctionStackTypes } from './navigation-types';
import { Bids, Auctions, AuctionResult } from '@screens';

const Stack = createNativeStackNavigator<AuctionStackTypes>();

function AuctionStack() {
  return (
    <Stack.Navigator initialRouteName="Auctions" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Auctions" component={Auctions} />
      {/* <Stack.Screen name="AuctionDetails" component={AuctionDetails} /> */}
      <Stack.Screen options={{ presentation: 'modal' }} name="Bids" component={Bids} />
      <Stack.Screen
        options={{ presentation: 'modal' }}
        name="AuctionResult"
        component={AuctionResult}
      />
    </Stack.Navigator>
  );
}
export default AuctionStack;
