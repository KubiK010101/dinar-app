import { StyleSheet } from 'react-native';
import { getHeight, getWidth, scale } from '@config';

const styles = StyleSheet.create({
  container: {
    height: getHeight(127),
    width: getWidth(165),
    alignItems: 'flex-start',
  },
  iconView: {
    width: getWidth(32),
    height: getHeight(32),
    borderRadius: scale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
