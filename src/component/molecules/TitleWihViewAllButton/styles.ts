import { StyleSheet } from 'react-native';
import { getHeight, spacing } from '@config';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: spacing.S22,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: getHeight(58),
  },
  titleView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: { paddingRight: spacing.S12 },
});

export default styles;
