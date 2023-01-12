import React, { FC, memo } from 'react';
import { StyleProp, TextStyle, TouchableOpacityProps, ViewStyle } from 'react-native';
import { IconsName, IconsProps } from '@assets';
import { TextProps } from '../Text/Text';
import { DefaultButton } from './DefaultButton';
import { DropdownButton } from './DropdownButton';
import { StandarButton } from './StandarButton';
import ReactNativeHapticFeedback, { HapticFeedbackTypes } from 'react-native-haptic-feedback';
import { BorderButton } from './BorderButton';
import { ColorsTypes } from '@config';

export type ButtonProps = {
  text?: string;
  type?: 'default' | 'standard' | 'dropdown' | 'border';
  buttonScale?: number;
  iconName?: IconsName;
  textStyle?: TextProps;
  iconStyle?: IconsProps;
  iconContainerStyle?: StyleProp<ViewStyle>;
  textContainerStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  isLoading?: boolean;
  rightIcon?: IconsName;
  label?: string;
  placeholder?: string;
  color?: keyof ColorsTypes;
  phone?: boolean;
  passowrd?: boolean;
  maxLength?: number;
  value?: string;
  haptic?: HapticFeedbackTypes;
  error?: string;
  indicatorColor?: string;
  isRequired?: boolean;
} & TouchableOpacityProps;

const Button: FC<ButtonProps> = ({ type = 'default', haptic, disabled, ...props }) => {
  const onPress = (event: any) => {
    // const options = {
    //   enableVibrateFallback: true,
    //   ignoreAndroidSystemSettings: false,
    // };

    if (haptic) ReactNativeHapticFeedback.trigger(haptic);
    if (props.onPress) {
      props.onPress(event);
    }
  };

  const Component = {
    default: (
      <DefaultButton
        {...props}
        disabled={disabled || props.isLoading}
        onPress={onPress}
        type={type}
      />
    ),
    standard: (
      <StandarButton
        {...props}
        disabled={disabled || props.isLoading}
        type={type}
        onPress={onPress}
      />
    ),
    dropdown: (
      <DropdownButton
        {...props}
        disabled={disabled || props.isLoading}
        type={type}
        onPress={onPress}
      />
    ),
    border: (
      <BorderButton
        {...props}
        disabled={disabled || props.isLoading}
        type={type}
        onPress={onPress}
      />
    ),
  };
  return Component[type];
};

export default memo(Button);
