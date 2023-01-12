import { StyleSheet } from 'react-native';
import { Colors, spacing } from '@config';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'flex-start',
    borderColor: Colors.BORDER,
    paddingBottom: spacing.S12,
    marginTop: spacing.S16,
  },
  title: {
    marginBottom: spacing.S8,
    textAlign: 'left',
  },
});

export default styles;
