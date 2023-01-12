/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { LayoutChangeEvent, View } from 'react-native';
import styles from './styles';
import { Button, Text } from '@component';
import { getHeight, scale, spacing } from '@config';
import { Svgs } from '@assets';
import Animated from 'react-native-reanimated';
import { isRTL } from '@local';
import { useAnimatedAccordion } from './useAnimatedAccordion';

type AccordionProps = {
  isActive: boolean;
  setActive: () => void;
  title?: string;
  content?: string;
};
const Accordion = ({ isActive, setActive, content, title }: AccordionProps) => {
  const { animatedArrow, animatedView, setMaxHeight, _setActive, _isActive } = useAnimatedAccordion(
    { isActive },
  );

  const onLayout = (event: LayoutChangeEvent) => {
    setMaxHeight(event.nativeEvent.layout.height + spacing.S24 + getHeight(50) + spacing.S8);
  };

  const onPress = () => {
    setActive();
    _setActive(!_isActive);
  };

  return (
    <Animated.View style={[styles.container, animatedView]}>
      <Button onPress={onPress} buttonScale={1} style={styles.button}>
        <Text style={{ textAlign: 'left' }} fontSize="FS14">
          {title}
        </Text>
        {/*animated arrow  */}
        <Animated.View style={animatedArrow}>
          <Svgs
            rotate={isRTL ? 'left' : 'right'}
            width={scale(8)}
            height={scale(14)}
            name="arrow"
          />
        </Animated.View>
      </Button>

      {/* content */}
      <View style={styles.content}>
        <Text onLayout={onLayout} style={styles.contentText} fontSize="P">
          {content}
        </Text>
      </View>
    </Animated.View>
  );
};
export default Accordion;
