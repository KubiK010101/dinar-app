import { getHeight } from '@config';
import {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const useBidAnimated = () => {
  // constants
  const animatedValue = useSharedValue(0);
  const BASIC_HEIGHT = getHeight(153);
  const ADD_FORM_HEIGHT = getHeight(256);
  const MESSAGE_HEIGHT = getHeight(231);
  const MAX_HEIGHT = getHeight(256 + 280);
  const BOTTOM = getHeight(280);

  const animatedHeight = useAnimatedStyle(() => {
    const height = withTiming(
      interpolate(
        animatedValue.value,
        [0, 1, 2, 3],
        [BASIC_HEIGHT, MESSAGE_HEIGHT, ADD_FORM_HEIGHT, MAX_HEIGHT],
        Extrapolate.CLAMP,
      ),
      {},
    );
    return { height };
  });

  const animatedAddForm = useAnimatedStyle(() => {
    const zIndex = interpolate(animatedValue.value, [0, 1, 2, 3], [0, 0, 3, 3], Extrapolate.CLAMP);
    const opacity = withTiming(
      interpolate(animatedValue.value, [0, 1, 2, 3], [0, 0, 1, 1], Extrapolate.CLAMP),
      { duration: 200 },
    );
    const bottom = withTiming(
      interpolate(animatedValue.value, [0, 1, 2, 3], [0, 0, 0, BOTTOM], Extrapolate.CLAMP),
      { duration: 300 },
    );

    return { opacity, zIndex, bottom };
  });

  const animatedAlert = useAnimatedStyle(() => {
    const zIndex = interpolate(animatedValue.value, [0, 1, 2, 3], [0, 3, 0, 0], Extrapolate.CLAMP);
    const opacity = withTiming(
      interpolate(animatedValue.value, [0, 1, 2, 3], [0, 1, 0, 0], Extrapolate.CLAMP),
      { duration: 200 },
    );
    return { opacity, zIndex };
  });

  const animatedButton = useAnimatedStyle(() => {
    const opacity = withTiming(
      interpolate(animatedValue.value, [0, 1, 2, 3], [1, 1, 0, 0], Extrapolate.CLAMP),
      { duration: 200 },
    );
    return { opacity };
  });

  const setAnimatedValue = (value: number) => {
    animatedValue.value = value;
  };

  return {
    animatedButton,
    animatedAlert,
    animatedAddForm,
    animatedHeight,
    setAnimatedValue,
  };
};

export { useBidAnimated };
