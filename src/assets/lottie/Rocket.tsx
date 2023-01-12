import React, { FC } from 'react';
import Lottie from 'lottie-react-native';
import { scale } from '@config';
import { StyleSheet, View, ViewProps } from 'react-native';

const Rocket: FC<ViewProps> = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <Lottie style={styles.lottie} source={require('./json/rocket.json')} autoPlay loop={true} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: scale(270),
  },
  lottie: {
    width: scale(270),
    height: scale(270),
  },
});
export default Rocket;
