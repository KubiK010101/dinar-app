import Animated, { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { getHeight } from '@config';

const useAuctionAnimated = ({ y }: { y: Animated.SharedValue<number> }) => {
  const SCALE_CHART_VALUE = getHeight(500);
  const START_ANIMATED_FROM = getHeight(200);
  const END_ANIMATED_FROM = getHeight(300);
  const TOP_VALUE = getHeight(-100);
  const ANIMATED_BACKGROUND_HEIGHT = getHeight(600);

  const chartAnimated = useAnimatedStyle(() => {
    const scale = interpolate(y.value, [0, SCALE_CHART_VALUE], [1, 0], Extrapolate.CLAMP);
    const top = interpolate(y.value, [0, START_ANIMATED_FROM], [0, TOP_VALUE]);
    const opacity = interpolate(y.value, [0, START_ANIMATED_FROM], [1, 0], Extrapolate.CLAMP);
    return { transform: [{ scale }], top, opacity };
  });

  const backgroundAnimated = useAnimatedStyle(() => {
    const height = interpolate(
      y.value,
      [0, START_ANIMATED_FROM],
      [ANIMATED_BACKGROUND_HEIGHT, 0],
      Extrapolate.CLAMP,
    );
    return { height };
  });

  const animatedBackgroundHeader = useAnimatedStyle(() => {
    const backgroundColor = interpolate(
      y.value,
      [250, END_ANIMATED_FROM],
      [0, 1],
      Extrapolate.CLAMP,
    );
    return { backgroundColor: `rgba(255,255,255,${backgroundColor})` };
  });

  const animatedColor1 = useAnimatedStyle(() => {
    const opacity = interpolate(y.value, [START_ANIMATED_FROM, END_ANIMATED_FROM], [0, 1]);
    return { opacity };
  });

  const animatedColor2 = useAnimatedStyle(() => {
    const opacity = interpolate(y.value, [START_ANIMATED_FROM, END_ANIMATED_FROM], [1, 0]);
    return { opacity };
  });

  return {
    chartAnimated,
    backgroundAnimated,
    animatedBackgroundHeader,
    animatedColor1,
    animatedColor2,
  };
};

export { useAuctionAnimated };
