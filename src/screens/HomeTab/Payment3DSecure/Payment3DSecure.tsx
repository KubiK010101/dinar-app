/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import { RouteProp, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Linking, View } from 'react-native';
import styles from './styles';
import { WebView } from 'react-native-webview';
import { useNavigationHooks } from '@hooks';
import { createOrder, getPaymentStatus } from '@actions';
import { MainAppStackTypes } from '@navigation';
import { Header } from '@component';
import hyperpay from 'react-native-hyperpay-sdk';
import { useBottomSheetModal } from '@gorhom/bottom-sheet';
import { retry, wait } from '@helpers';
import { invalidateQuery } from '@query';

function Payment3DSecure() {
  const {
    params: { redirectURL, opportunityId, suksCount, amount },
  } = useRoute<RouteProp<MainAppStackTypes, 'Payment3DSecure'>>();
  const { goBack, navigate } = useNavigationHooks<MainAppStackTypes>();
  const { dismissAll } = useBottomSheetModal();

  useEffect(() => {
    Linking.removeAllListeners('url');
    Linking.addEventListener('url', e => {
      const { url } = e;
      let regex = /[?&]([^=#]+)=([^&#]*)/g,
        params: any = {},
        match: any;
      while ((match = regex.exec(url))) {
        params[match[1]] = match[2];
      }
      const { id, resourcePath } = params;
      if (id && resourcePath) {
        Linking.removeAllListeners('url');
        onPaymentStatus(id);
      }
    });
  }, []);

  const onCreateOrder = () => {
    createOrder({ opportunityId, suksCount }, async res => {
      if (res.ok) {
        dismissAll();
        setTimeout(() => {
          invalidateQuery('walletInfo');
        }, 20000);
        goBack();
        await wait(120);
        navigate('InvestSuccessful', { amount: amount });
      }
    });
  };

  const onPaymentStatus = (paymentId: string) => {
    const interval = retry(() => {
      getPaymentStatus({ ndc: paymentId }, async ({ data }) => {
        const paymentStatus = hyperpay.getPaymentStatus(`${data?.hyperpayCode}`);
        if (data?.status === 'WALLET_DEPOSITED') {
          onCreateOrder();
          clearInterval(interval);
        } else if (
          (paymentStatus.status === 'rejected' || paymentStatus.status === 'error') &&
          data?.hyperpayCode
        ) {
          clearInterval(interval);
          dismissAll();
          await wait(30);

          goBack();
          await wait(120);

          navigate('PaymentStatus', { paymentStatus });
        }
      });
    }, 150);
  };
  return (
    <View style={styles.container}>
      <Header type="simple" title={'Payment 3D Secure'} />
      <WebView source={{ uri: redirectURL }} style={{ flex: 1 }} />
    </View>
  );
}

export default Payment3DSecure;
