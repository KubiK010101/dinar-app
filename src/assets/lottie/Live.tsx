import React, { FC } from 'react';
import Lottie from 'lottie-react-native';
import { Colors, getHeight, getWidth, HEXtoRGBA } from '@config';
import { StyleSheet, View, ViewProps } from 'react-native';

const Live: FC<ViewProps> = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <Lottie style={styles.lottie} source={require('./json/live.json')} autoPlay loop={true} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: getHeight(20),
    width: getWidth(38),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: getHeight(10),
    borderColor: HEXtoRGBA(Colors.RED, 0.1),
  },
  lottie: {
    width: getWidth(38),
    height: getHeight(20),
  },
});
export default Live;
