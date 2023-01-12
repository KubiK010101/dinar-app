import React, { FC, memo } from 'react';
import { ActivityIndicator, TouchableOpacityProps } from 'react-native';
import { Svgs } from '@assets';
import { Colors } from '@config';
import Text from '../Text/Text';
import { ButtonProps } from './Button';
import { ScaleButton } from './ScaleButton';
import styles from './styles';

const DefaultButton: FC<TouchableOpacityProps & ButtonProps> = memo(
  ({
    text,
    iconName,
    iconContainerStyle,
    textContainerStyle,
    isLoading,
    indicatorColor,
    ...props
  }) => {
    return (
      <ScaleButton {...props} style={[styles.defaultButtonContainer, props.style]}>
        {iconName && !isLoading && (
          <Svgs name={iconName} style={iconContainerStyle} {...props.iconStyle} />
        )}

        {text && !isLoading ? (
          <Text
            fontSize="FS14"
            fontFamily="Regular"
            color={props.color || 'DARK_BLUE'}
            {...props.textStyle}
            style={[{}, textContainerStyle]}>
            {text}
          </Text>
        ) : null}
        {props.children}
        {isLoading && <ActivityIndicator size={'small'} color={indicatorColor || Colors.WHITE} />}
      </ScaleButton>
    );
  },
);

export { DefaultButton };
