import React, { FC } from 'react';
import Lottie from 'lottie-react-native';
import { getHeight, scale } from '@config';
import { StyleSheet, View, ViewProps } from 'react-native';

const Success: FC<ViewProps> = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <Lottie
        style={styles.lottie}
        source={require('./json/lottie-success.json')}
        autoPlay
        loop={false}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: scale(240),
    height: scale(240),
    position: 'absolute',
    top: getHeight(105),
  },
  lottie: {
    width: scale(240),
    height: scale(240),
  },
});
export default Success;
