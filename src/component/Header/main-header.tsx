import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, StatusBar, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { images, Svgs } from '@assets';
import { Colors, scale } from '@config';
import { useNavigationHooks } from '@hooks';
import { MainAppStackTypes } from '@navigation';
import { Button, Text } from '../atoms';
import { HeaderProps } from './Header';
import styles from './styles';
import { AuthStateTypes, getQueryData } from '@query';

function MainHeader({}: HeaderProps) {
  const { navigate } = useNavigationHooks<MainAppStackTypes>();
  const { profile } = getQueryData<AuthStateTypes>('auth');
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <StatusBar animated barStyle={'dark-content'} />
      <Image source={images.whiteHeader} resizeMode="cover" style={styles.background} />
      <Animated.View style={styles.homeHeaderUserAndNotification}>
        <Button onPress={() => navigate('MyProfile')} style={styles.homeHeaderWelcomeUser}>
          <Svgs color={Colors.DARK_BLUE} width={scale(12)} height={scale(18)} name="user" />
          <Text fontSize="FS14" style={styles.homeHeaderWelcomeUserText} color="DARK_BLUE">{`${t(
            'myInvestment.welcome',
          )} ${profile?.displayName.split(' ')[0]}`}</Text>
        </Button>
        {/* <Button
                    onPress={() => navigate("Notifications")}
                    haptic='impactLight'
                    iconStyle={{ color: Colors.DARK_BLUE }}
                    iconName='notifications'
                /> */}
      </Animated.View>
    </View>
  );
}

export { MainHeader };
