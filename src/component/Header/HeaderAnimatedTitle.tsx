/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';
import { spacing } from '@config';
import { useNavigationHooks } from '@hooks';
import { Button, Text } from '../atoms';
import { HeaderProps } from './Header';
import styles from './styles';

function HeaderAnimatedTitle({
  title,
  withoutBack,
  onBack,
  withoutStatusBar,
  onLeftPress,
}: HeaderProps) {
  const { goBack } = useNavigationHooks();
  return (
    <View style={styles.headerAnimatedTitleContainer}>
      {!withoutStatusBar && <View style={styles.headerAnimatedTitleStatusView} />}
      <View style={styles.headerAnimatedTitleContent}>
        {!withoutBack && (
          <Button
            haptic="impactLight"
            onPress={onBack || goBack}
            containerStyle={styles.headerAnimatedTitleButtonContainer}
            style={styles.headerAnimatedTitleButton}
            iconName="arrow-back"
            iconStyle={styles.headerAnimatedTitleButtonIcon}
          />
        )}

        {onLeftPress && (
          <Button
            haptic="impactLight"
            onPress={onLeftPress}
            containerStyle={styles.headerAnimatedTitleEditButton}
            style={styles.headerAnimatedTitleButton}
            iconName="edit"
            iconStyle={styles.headerAnimatedTitleButtonIcon}
          />
        )}
      </View>
      <Text
        fontFamily="Bold"
        fontSize="FS24"
        style={{
          textAlign: 'right',
          paddingHorizontal: spacing.S22,
        }}
        color="LIGHT_BLUE">
        {title}
      </Text>
    </View>
  );
}

export { HeaderAnimatedTitle };
