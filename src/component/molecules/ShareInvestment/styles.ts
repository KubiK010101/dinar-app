import { StyleSheet } from 'react-native';
import { Colors, getHeight, getWidth, scale, spacing } from '@config';

const styles = StyleSheet.create({
  shareViewContainer: {
    alignItems: 'center',
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
});

export default styles;
