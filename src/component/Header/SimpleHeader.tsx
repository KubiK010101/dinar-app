/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';
import { useNavigationHooks } from '@hooks';
import { Button, Text } from '../atoms';
import { HeaderProps } from './Header';
import styles from './styles';
import { isRTL } from '@local';

function SimpleHeader({
  title,
  withoutBack,
  onBack,
  withoutStatusBar,
  onLeftPress,
  leftButtonIcon,
  leftButtonLoader,
}: HeaderProps) {
  const { goBack, canGoBack } = useNavigationHooks();

  return (
    <View style={styles.simpleHeaderContainer}>
      {!withoutStatusBar && <View style={styles.simpleHeaderStatusView} />}
      <View style={styles.simpleHeaderContent}>
        <Text color="LIGHT_BLUE">{title}</Text>
        {((!withoutBack && canGoBack()) || onBack) && (
          <Button
            haptic="impactLight"
            onPress={onBack || goBack}
            containerStyle={styles.simpleHeaderBackButtonContainer}
            style={styles.simpleHeaderBackButton}
            iconName="arrow-back"
            iconStyle={{ ...styles.simpleHeaderBackIcon, rotate: isRTL ? 'left' : 'right' }}
          />
        )}

        {onLeftPress && (
          <Button
            haptic="impactLight"
            isLoading={leftButtonLoader}
            indicatorColor="gray"
            onPress={onLeftPress}
            containerStyle={styles.headerAnimatedTitleEditButton}
            style={styles.headerAnimatedTitleButton}
            iconName={leftButtonIcon || 'edit'}
            iconStyle={styles.headerAnimatedTitleButtonIcon}
          />
        )}
      </View>
    </View>
  );
}

export { SimpleHeader };
