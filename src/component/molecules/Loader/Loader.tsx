import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Colors } from '@config';
import styles from './styles';

const Loader = ({ isLoading }: { isLoading?: boolean }) => {
  return isLoading ? (
    <View style={styles.container}>
      <ActivityIndicator color={Colors.DARK_BLUE} size="large" />
    </View>
  ) : null;
};
export default Loader;
