/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import { View } from 'react-native';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { queryClient, asyncStoragePersistor } from './query';
import NavigationApp from './navigation';
import Toast from 'react-native-toast-message';
import { StatusBar } from 'react-native';
import moment from 'moment';
import 'moment/locale/ar';
import OneSignal from 'react-native-onesignal';
import HyperPay from 'react-native-hyperpay-sdk';
import { config } from '@config';
import { adjustInit } from '@helpers';

// OneSignal Initialization
OneSignal.setAppId(config.oneSignalAppId);
// promptForPushNotificationsWithUserResponse will show the native iOS or Android notification permission prompt.
// We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step 8)
OneSignal.promptForPushNotificationsWithUserResponse();

//Method for handling notifications received while app in foreground
OneSignal.setNotificationWillShowInForegroundHandler(notificationReceivedEvent => {
  console.log('OneSignal: notification will show in foreground:', notificationReceivedEvent);
  let notification = notificationReceivedEvent.getNotification();
  console.log('notification: ', notification);
  const data = notification.additionalData;
  console.log('additionalData: ', data);
  // Complete with null means don't show a notification.
  notificationReceivedEvent.complete(notification);
});

//Method for handling notifications opened
OneSignal.setNotificationOpenedHandler(notification => {
  console.log('OneSignal: notification opened:', notification);
});

const EntryPoint = (): React.ReactElement => {
  // Dinar7720@

  useEffect(() => {
    adjustInit('Sandbox');

    HyperPay.init({
      mode: 'LiveMode',
      merchantIdentifier: 'merchant.sa.dinar.app',
      shopperResultURL: 'dinar://result',
      countryCode: 'SA',
      supportedNetworks: ['mada'],
    });
  }, []);

  useEffect(() => {
    moment.locale('ar');
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle={'dark-content'} />
      <PersistQueryClientProvider
        client={queryClient}
        persistOptions={{ persister: asyncStoragePersistor }}>
        <NavigationApp />
        <Toast ref={ref => Toast.setRef(ref)} />
      </PersistQueryClientProvider>
    </View>
  );
};
export default EntryPoint;
