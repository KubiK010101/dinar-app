import { Colors, getHeight, getWidth, scale, spacing } from '@config';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    width: getWidth(241),
    marginTop: getHeight(34),
  },
  content: {
    width: '100%',
    alignItems: 'flex-start',
    paddingHorizontal: spacing.S16,
  },
  details: {
    marginTop: getHeight(10),
    textAlign: 'left',
  },
  lgBackground: {
    width: '100%',
    height: getHeight(191),
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: Colors.WHITE,
    width: scale(13),
    height: scale(13),
  },
  btnCloseContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  btnClose: {
    padding: spacing.S16,
  },
});
export default styles;
