import React, { FC } from 'react';
import { StyleProp, View, ViewProps, ViewStyle } from 'react-native';
import styles from './styles';
import { Button, Text } from '..';
import { spacing } from '@config';

const RadioButton: FC<
  {
    label?: string;
    checked: boolean;
    onPress?: () => void;
    containerStyle?: StyleProp<ViewStyle>;
    disabled?: boolean;
  } & ViewProps
> = ({ label, checked, onPress, style, containerStyle, disabled }) => (
  <Button
    disabled={disabled}
    containerStyle={containerStyle}
    haptic="impactLight"
    onPress={onPress}
    style={[[styles.container], style]}>
    <View style={styles.borderView}>{checked && <View style={styles.checkView} />}</View>
    <Text style={{ paddingLeft: spacing.S8 }} fontSize="FS14">
      {label}
    </Text>
  </Button>
);

export default RadioButton;
