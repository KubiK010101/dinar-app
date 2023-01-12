/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import styles from './styles';
import { Button, Text } from '@component';
import { scale, spacing } from '@config';
import { Svgs } from '@assets';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { IconsName } from '@assets';

const EmptyList = ({
  text,
  buttonText,
  onPress,
  isLoading,
  icon,
}: {
  text: string;
  onPress?: () => void;
  buttonText?: string;
  isLoading?: boolean;
  icon?: IconsName;
}) => {
  const _opacity = useSharedValue(0);

  const animatedContainer = useAnimatedStyle(() => {
    const opacity = withTiming(interpolate(_opacity.value, [0, 1], [0, 1]));
    return { opacity };
  });

  useEffect(() => {
    _opacity.value = isLoading ? 0 : 1;
  }, [isLoading]);

  return !isLoading ? (
    <Animated.View style={[styles.container, animatedContainer]}>
      <Svgs width={scale(45)} height={scale(45)} color={'#b7b9c5'} name={icon || 'money'} />
      <Text fontSize="FS14" style={{ marginTop: spacing.S8 }}>
        {text}
      </Text>
      {onPress && (
        <Button onPress={onPress} style={styles.button} type="border" text={buttonText} />
      )}
    </Animated.View>
  ) : null;
};
export default EmptyList;
