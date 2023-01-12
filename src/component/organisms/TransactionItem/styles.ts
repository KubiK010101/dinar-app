import { StyleSheet } from 'react-native';
import { getHeight, getWidth, scale, spacing } from '@config';
const styles = StyleSheet.create({
  container: {
    width: getWidth(),
    height: getHeight(48 + spacing.S16),
    paddingHorizontal: spacing.S22,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: spacing.S16,
  },
  viewIcon: {
    width: scale(42),
    height: scale(42),
    borderRadius: scale(42 / 2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'flex-start',
    paddingLeft: spacing.S16,
    justifyContent: 'center',
    flex: 1,
  },
  titleAndAmount: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default styles;
