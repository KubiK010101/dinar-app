/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { Colors, getHeight, getWidth, scale, spacing } from '@config';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'flex-start',
    // paddingHorizontal: spacing.S22,
    marginTop: spacing.S24,
  },
  button: {
    backgroundColor: '#F5F7FA',
    width: getWidth(343),
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: getHeight(50),
    borderRadius: scale(10),
    paddingHorizontal: spacing.S26,
    borderWidth: 1,
    borderColor: Colors.BORDER,
    marginTop: spacing.S8,
  },
  buttonIcon: {
    width: scale(18),
    height: scale(18),
  },
});

export default styles;
