/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { getHeight } from '@config';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#171717',
  },
  subscribeInfo: {
    backgroundColor: 'red',
    height: getHeight(114),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  orangeLine: {
    width: '100%',
    height: getHeight(7),
    backgroundColor: '#FFDD00',
    position: 'absolute',
    top: 0,
  },
});

export default styles;
