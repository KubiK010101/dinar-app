/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { Colors, getHeight, getWidth, scale, spacing } from '@config';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: Colors.WHITE,
  },
  content: {
    width: getWidth() - spacing.S44,
    marginTop: spacing.S8,
  },
  infoRowContainer: {
    width: '100%',
    paddingVertical: spacing.S16,
    backgroundColor: '#FAFBFC',
    alignItems: 'flex-end',
    paddingHorizontal: spacing.S16,
    borderRadius: scale(8),
    marginTop: spacing.S16,
  },
  verifyButton: {
    height: getHeight(30),
    width: undefined,
    paddingHorizontal: spacing.S10,
    marginTop: spacing.S12,
  },
  infoRowTitle: {
    width: getWidth(110),
    textAlign: 'left',
  },
  infoRowValueWithVerifyIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoRowTitleAndValue: {
    width: '100%',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  verifyIcon: {
    width: scale(16),
    height: scale(16),
  },
});

export default styles;
