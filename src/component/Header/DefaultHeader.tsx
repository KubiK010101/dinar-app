/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, StatusBar, View } from 'react-native';
import { images } from '@assets';
import { useNavigationHooks } from '@hooks';
import { Button, Text } from '../atoms';
import { HeaderProps } from './Header';
import styles from './styles';
import { isRTL } from '@local';

function DefaultHeader({ title }: HeaderProps) {
  const { goBack, canGoBack } = useNavigationHooks();
  return (
    <View style={styles.container}>
      <StatusBar animated barStyle={'dark-content'} />
      <Image source={images.header} resizeMode="cover" style={styles.background} />
      {title ? (
        <Text color="WHITE" style={{ position: 'absolute' }}>
          {title}
        </Text>
      ) : (
        <Image source={images.logo} resizeMode="contain" style={styles.logo} />
      )}
      {canGoBack() && (
        <Button
          haptic="impactLight"
          onPress={goBack}
          iconStyle={{ ...styles.backButtonIcon, rotate: isRTL ? 'left' : 'right' }}
          iconName="arrow-back"
          containerStyle={styles.backButtonContainer}
          style={styles.backButton}
        />
      )}
    </View>
  );
}

export { DefaultHeader };
