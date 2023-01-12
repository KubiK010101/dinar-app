import React, { FC } from 'react';
import { View, ViewProps } from 'react-native';
import styles from './styles';

const Card: FC<ViewProps & { shadow?: 'small' | 'medium' | 'larg' }> = ({
  style,
  shadow,
  ...props
}) => {
  const shadowOpacity = (): number => {
    switch (shadow) {
      case (shadow = 'small'):
        return 0.05;
      case (shadow = 'medium'):
        return 0.1;
      case (shadow = 'larg'):
        return 0.15;
      default:
        return 0;
    }
  };
  return <View style={[styles.card, { shadowOpacity: shadowOpacity() }, style]} {...props} />;
};

export default Card;
