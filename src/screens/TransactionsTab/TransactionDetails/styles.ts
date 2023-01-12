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
  listHeaderComponent: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: spacing.S22,
  },
  content: {
    width: '100%',
    alignItems: 'flex-start',
    paddingHorizontal: spacing.S22,
    marginTop: spacing.S6,
  },
  // share
  shareViewContainer: {
    position: 'absolute',
    bottom: getHeight(50),
  },
  shareViewContent: {
    flexDirection: 'row',
    alignItems: 'center',
    width: getWidth(127),
    justifyContent: 'space-between',
    marginTop: spacing.S8,
  },
  shareButtonIcon: {
    width: scale(16),
    height: scale(16),
    color: Colors.DARK_BLUE,
  },
  shareButton: {
    width: getWidth(57),
    height: getHeight(30),
  },
  infoContainer: {
    width: '100%',
    padding: spacing.S16,
    borderRadius: scale(6),
    backgroundColor: '#FAFBFC',
    marginTop: spacing.S26,
  },
  infoItem: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-end',
    marginBottom: spacing.S12,
  },
  infoItemText: {
    width: getWidth(120),
    textAlign: 'right',
  },
});

export default styles;
