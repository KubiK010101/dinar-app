/* eslint-disable react-native/no-inline-styles */
import React, { FC, memo } from 'react';
import { ActivityIndicator, TouchableOpacityProps } from 'react-native';
import { Svgs } from '@assets';
import { Colors, spacing } from '@config';
import Text from '../Text/Text';
import { ButtonProps } from './Button';
import { ScaleButton } from './ScaleButton';
import styles from './styles';

const BorderButton: FC<TouchableOpacityProps & ButtonProps> = memo(
  ({
    text,
    iconName,
    iconContainerStyle,
    textContainerStyle,
    isLoading,
    color = Colors.DARK_BLUE,
    indicatorColor,
    ...props
  }) => {
    return (
      <ScaleButton
        {...props}
        style={[
          { ...styles.borderButtonContainer },
          props.style,
          {
            opacity: !props.disabled ? 1 : 0.5,
            borderColor: color,
          },
        ]}>
        {iconName && !isLoading && (
          <Svgs name={iconName} style={iconContainerStyle} {...props.iconStyle} />
        )}
        {text && !isLoading && (
          <Text
            fontSize="FS14"
            fontFamily="Medium"
            {...props.textStyle}
            style={[
              {
                paddingHorizontal: spacing.S8,
                color: color,
              },
              textContainerStyle,
            ]}>
            {text}
          </Text>
        )}
        {props.children}
        {isLoading && <ActivityIndicator size={'small'} color={indicatorColor || Colors.WHITE} />}
      </ScaleButton>
    );
  },
);

export { BorderButton };
