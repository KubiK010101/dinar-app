/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { Colors, getHeight, getWidth, scale, spacing } from '@config';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.WHITE,
  },
  content: {
    width: '100%',
    paddingHorizontal: spacing.S22,
    alignItems: 'flex-start',
    flex: 1,
  },
  imageView: {
    width: '100%',
    height: getHeight(156),
    backgroundColor: '#699EB6',
    borderRadius: scale(6),
    marginTop: spacing.S24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: getWidth(200),
    height: getHeight(50),
  },
  pointsTitle: {
    marginTop: spacing.S20,
    marginBottom: spacing.S10,
  },
  continueButton: {
    position: 'absolute',
    bottom: getHeight(60),
    left: spacing.S22,
  },
});

export default styles;
