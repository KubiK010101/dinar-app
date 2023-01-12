/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { borderRadius, boxShadow, Colors, getHeight, getWidth, scale, spacing } from '@config';
const styles = StyleSheet.create({
  container: {
    width: getWidth() - spacing.S44,
    height: getHeight(65),
    marginTop: spacing.S10,
    paddingLeft: spacing.S26,
    backgroundColor: Colors.WHITE,
  },
  content: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    right: -scale(16),
    ...boxShadow(10, 0.1),
  },
  button: {
    ...borderRadius(scale(34)),
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIcon: {
    width: scale(10),
    height: scale(10),
    color: Colors.RED,
  },
  container_background: {
    backgroundColor: Colors.GREEN2,
  },
  info: { alignItems: 'flex-start', flex: 1 },
});

export default styles;
