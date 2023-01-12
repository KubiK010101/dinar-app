import { StyleSheet } from 'react-native';
import { getWidth, spacing } from '@config';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'flex-start',
    marginTop: spacing.S16,
  },
  title: {
    width: getWidth(340),
    textAlign: 'left',
  },
  options: {
    flexDirection: 'row',
    width: getWidth(200),
    justifyContent: 'space-between',
    marginTop: spacing.S8,
  },
});

export default styles;
