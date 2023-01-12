import React, { FC } from 'react';
import styles from './styles';
import { Text, TextProps } from '@component';
import Animated from 'react-native-reanimated';
import { Svgs } from '@assets';
import { ViewProps } from 'react-native';
import { Colors, getHeight, HEXtoRGBA } from '@config';
import { IconsName } from '@assets';

interface AlertProps extends Omit<TextProps, 'children' | 'style'>, ViewProps {
  text: string;
  type?: 'warning' | 'success';
  icon?: IconsName;
}

const Alert: FC<AlertProps> = ({ text, style, type, icon, ...props }) => {
  return (
    <Animated.View
      style={[
        styles.container,
        style,
        type === 'success'
          ? {
              backgroundColor: HEXtoRGBA(Colors.GREEN3, 0.2),
              borderColor: Colors.GREEN3,
            }
          : {},
      ]}>
      <Svgs
        width={getHeight(16)}
        height={getHeight(16)}
        color={Colors.GREEN3}
        name={icon || (type === 'warning' ? 'info' : 'check-solid')}
      />
      <Text
        color={type === 'warning' ? 'ORANGE_DARK' : 'GREEN'}
        style={styles.textMessage}
        fontSize="FS10"
        {...props}>
        {text}
      </Text>
    </Animated.View>
  );
};

export default Alert;
