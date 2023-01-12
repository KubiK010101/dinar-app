/* eslint-disable react-native/no-inline-styles */
import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { Svgs } from '@assets';
import { Button, Text } from '@component';
import { Colors, getWidth, spacing } from '@config';
import { useNavigationHooks } from '@hooks';
import { MainAppStackTypes } from '@navigation';
import styles from './styles';

function PaymentStatus() {
  const {
    params: { paymentStatus },
  } = useRoute<RouteProp<MainAppStackTypes, 'PaymentStatus'>>();
  const { goBack } = useNavigationHooks();
  const onPress = () => {
    goBack();
  };

  const paymentSuccess = paymentStatus.status === 'successfully';
  return (
    <View style={styles.container}>
      <Svgs
        color={paymentSuccess ? Colors.GREEN : Colors.RED}
        name={paymentSuccess ? 'check' : 'info-solid'}
        width={100}
        height={100}
      />
      <Text
        fontFamily={'Bold'}
        fontSize="FS24"
        color={'DARK_BLUE'}
        style={{
          marginTop: spacing.S18,
          lineHeight: 45,
        }}>
        {paymentSuccess ? 'Payment Success' : 'Payment Failed'}
      </Text>
      <Text
        fontFamily={'Medium'}
        fontSize="FS16"
        style={{
          width: getWidth(350),
          marginTop: spacing.S8,
          lineHeight: 26,
          textAlign: 'center',
        }}
        color={'DARK_BLUE'}>
        {paymentSuccess ? 'paymentSuccessMessage' : paymentStatus.description}
      </Text>
      <Button
        style={{ marginTop: spacing.S20, width: getWidth(200) }}
        onPress={onPress}
        type="border"
        text={paymentSuccess ? 'Go Back' : 'Try Again'}
      />
    </View>
  );
}

export default PaymentStatus;
