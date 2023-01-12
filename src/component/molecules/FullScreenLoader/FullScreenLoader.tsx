/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ActivityIndicator } from 'react-native';
import styles from './styles';
import { Colors } from '@config';
import { BlurView } from '@react-native-community/blur';
import Animated from 'react-native-reanimated';
import Modal from 'react-native-modal';
const AnimatedView = Animated.createAnimatedComponent(BlurView);
type FullScreenLoaderProps = {
  isLoading?: boolean;
};
function FullScreenLoader({ isLoading }: FullScreenLoaderProps) {
  return (
    <Modal
      style={{ margin: 0 }}
      backdropOpacity={0}
      isVisible={isLoading}
      animationIn={'fadeIn'}
      animationOut="fadeOut">
      <AnimatedView blurType="light" blurAmount={1} style={styles.container}>
        <ActivityIndicator color={Colors.DARK_BLUE} style={styles.indicator} size={'large'} />
      </AnimatedView>
    </Modal>
  );
}

export default FullScreenLoader;
