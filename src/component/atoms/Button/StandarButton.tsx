/* eslint-disable react-native/no-inline-styles */
import React, { FC, memo } from 'react';
import { ActivityIndicator, TouchableOpacityProps } from 'react-native';
import { Svgs } from '@assets';
import { Colors, spacing } from '@config';
import Text from '../Text/Text';
import { ButtonProps } from './Button';
import { ScaleButton } from './ScaleButton';
import styles from './styles';

const StandarButton: FC<TouchableOpacityProps & ButtonProps> = memo(
  ({ text, iconName, iconContainerStyle, textContainerStyle, isLoading, ...props }) => {
    return (
      <ScaleButton
        {...props}
        style={[
          {
            ...styles.standarButtonContainer,
            backgroundColor: Colors.BLUE,
          },
          props.style,
          { opacity: !props.disabled ? 1 : 0.5 },
        ]}>
        {text && !isLoading && (
          <Text
            fontSize="FS14"
            fontFamily="Medium"
            color="WHITE"
            {...props.textStyle}
            style={[
              {
                paddingHorizontal: spacing.S8,
              },
              textContainerStyle,
            ]}>
            {text}
          </Text>
        )}
        {iconName && !isLoading && (
          <Svgs name={iconName} style={iconContainerStyle} {...props.iconStyle} />
        )}
        {props.children}
        {isLoading && <ActivityIndicator size={'small'} color={Colors.WHITE} />}
      </ScaleButton>
    );
  },
);

export { StandarButton };
