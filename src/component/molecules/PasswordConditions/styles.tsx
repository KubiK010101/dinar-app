import { StyleSheet } from 'react-native';
import { spacing } from '@config';

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    marginTop: spacing.S8,
    paddingHorizontal: spacing.S12,
    width: '100%',
  },
  progress: {
    width: '100%',
    height: 3,
    borderRadius: 3,
    marginBottom: spacing.S12,
  },
});

export default styles;
