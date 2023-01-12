import { StyleSheet } from 'react-native';
import { Colors, getHeight, getWidth, scale } from '@config';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.RGBA_BLACK(0.4),
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 1,
  },
  indicator: {
    width: getWidth(80),
    height: getHeight(80),
    backgroundColor: Colors.WHITE,
    borderRadius: scale(10),
  },
});

export default styles;
