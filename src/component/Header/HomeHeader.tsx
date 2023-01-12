/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, StatusBar, View } from 'react-native';
import { images } from '@assets';
import styles from './styles';
import { Colors, getHeight, scale } from '@config';
import { Button, Text } from '@component';
import Icon from '@Icon';
import { HeaderProps } from './Header';
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { useNavigationHooks } from '@hooks';
import { MainAppStackTypes } from '@navigation';
import { useTranslation } from 'react-i18next';
import { AuthStateTypes, getQueryData } from '@query';

function HomeHeader({ wallet, y }: HeaderProps) {
  const { t } = useTranslation();
  const { navigate } = useNavigationHooks<MainAppStackTypes>();
  const { profile } = getQueryData<AuthStateTypes>('auth');
  const TOP = getHeight(170);
  const MIN_WALLET_TOP = getHeight(100);
  const MAX_WALLET_TOP = getHeight(120);
  const animatedHeaderContainer = useAnimatedStyle(() => {
    const top = interpolate(y?.value || 0, [0, TOP], [0, -TOP], Extrapolate.CLAMP);
    return { top };
  });

  const animatedHeaderUserAndNotification = useAnimatedStyle(() => {
    const top = interpolate(y?.value || 0, [0, TOP], [0, TOP], Extrapolate.CLAMP);
    return { top };
  });

  const animatedHeaderWallet = useAnimatedStyle(() => {
    const top = interpolate(
      y?.value || 0,
      [0, TOP],
      [MIN_WALLET_TOP, MAX_WALLET_TOP],
      Extrapolate.CLAMP,
    );
    const _scale = interpolate(y?.value || 0, [0, TOP], [1, 0.7], Extrapolate.CLAMP);
    const opacity = interpolate(y?.value || 0, [0, TOP], [1, 0], Extrapolate.CLAMP);
    return { top, transform: [{ scale: _scale }], opacity };
  });

  return (
    <Animated.View style={[styles.homeHeaderContainer, animatedHeaderContainer]}>
      <StatusBar animated barStyle={'dark-content'} />
      <Image source={images.homeHeader} style={styles.homeHeaderBackground} />
      {/* User And Notification */}

      <Animated.View
        style={[styles.homeHeaderUserAndNotification, animatedHeaderUserAndNotification]}>
        <Button onPress={() => navigate('MyProfile')} style={styles.homeHeaderWelcomeUser}>
          <Icon width={scale(12)} height={scale(18)} name="user" />
          <Text fontSize="FS14" style={styles.homeHeaderWelcomeUserText} color="WHITE">{`${t(
            'home.welcome',
          )} ${profile?.displayName.split(' ')[0]}`}</Text>
        </Button>
      </Animated.View>

      <Animated.View style={[styles.homeHeaderWalletContainer, animatedHeaderWallet]}>
        {/* Wallet Text Content */}

        <View style={styles.homeHeaderWalletTextAndIcon}>
          <Icon name="wallet2" width={scale(40)} color={Colors.DARK_BLUE} height={scale(35)} />
          <View style={styles.homeHeaderWalletTextContent}>
            {wallet && (
              <Text fontFamily="Bold" fontSize="FS18">{`${wallet} ${t('home.rial')} `}</Text>
            )}

            <Text
              style={{ textAlign: 'right' }}
              fontSize="FS14"
              color="LIGHT_BLUE"
              fontFamily="SemiBold">
              {wallet ? t('home.walletBalance') : t('home.walletEmptyBalance')}
            </Text>
          </View>
        </View>

        <View style={{ zIndex: 10 }}>
          <Button
            onPress={() => navigate('DepoisteWallet')}
            haptic="impactLight"
            text={t('home.depositButton')}
            type="standard"
            style={styles.homeHeaderDepositButton}
          />
          <Button
            onPress={() => navigate('Withdraw')}
            haptic="impactLight"
            textStyle={{ color: 'DARK_BLUE' }}
            text={t('home.withdrawButton')}
            type="standard"
            style={styles.homeHeaderWithdraw}
          />
        </View>
        {/* wallet Pattern */}
        <Image
          resizeMode="stretch"
          source={images.walletPattern}
          style={styles.homeHeaderWalletPattern}
        />
      </Animated.View>
    </Animated.View>
  );
}

export default HomeHeader;
