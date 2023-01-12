import { StyleSheet } from 'react-native';
import { getWidth, spacing } from '@config';

const styles = StyleSheet.create({
  container: {
    width: getWidth(),
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.S16,
  },
});

export default styles;
