/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Colors } from '@config';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import styles from './styles';

type DotProps = { active: boolean };

const DotItem = ({ active }: DotProps) => {
  const isActive = useSharedValue(0);

  useEffect(() => {
    isActive.value = withSpring(active ? 1 : 0, { damping: 30, stiffness: 300 });
  }, [active]);

  const dotAnimated = useAnimatedStyle(() => {
    const width = withSpring(active ? 26 : 6, { damping: 30, stiffness: 300 });
    const backgroundColor = interpolateColor(
      isActive.value,
      [0, 1],
      [Colors.LIGHT_GRAY, Colors.GREEN],
    );
    return {
      width,
      backgroundColor,
    };
  });
  return <Animated.View style={[styles.dot, dotAnimated]} />;
};

export { DotItem };
