import React, { FC } from 'react';
import Lottie from 'lottie-react-native';
import { scale } from '@config';
import { StyleSheet, View, ViewProps } from 'react-native';

const Maintenance: FC<ViewProps> = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <Lottie
        style={styles.lottie}
        source={require('./json/maintenance.json')}
        autoPlay
        loop={true}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: scale(350),
  },
  lottie: {
    width: scale(320),
    height: scale(320),
  },
});
export default Maintenance;
