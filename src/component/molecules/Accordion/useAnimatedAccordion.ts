/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { getHeight } from '@config';
import { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { isRTL } from '@local';

type AccordionProps = {
  isActive: boolean;
};
const useAnimatedAccordion = ({ isActive }: AccordionProps) => {
  const [maxHeight, setMaxHeight] = useState(0);
  const animatedHeight = useSharedValue(getHeight(50));
  const [_isActive, _setActive] = useState(isActive);

  useEffect(() => {
    _setActive(isActive);
  }, [isActive]);

  useEffect(() => {
    animatedHeight.value = withSpring(_isActive ? maxHeight : getHeight(55), {
      damping: 30,
      stiffness: 200,
    });
  }, [_isActive, maxHeight]);

  const animatedArrow = useAnimatedStyle(() => {
    const rotate = withSpring(_isActive ? `${isRTL ? '-' : ''}90deg` : '0deg', {
      damping: 20,
      stiffness: 250,
    });
    return { transform: [{ rotate }] };
  });
  const animatedView = useAnimatedStyle(() => {
    return { height: animatedHeight.value };
  });

  return {
    animatedArrow,
    animatedView,
    setMaxHeight,
    _setActive,
    _isActive,
  };
};
export { useAnimatedAccordion };
