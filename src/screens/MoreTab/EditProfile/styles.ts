import { StyleSheet } from 'react-native';
import { Colors, spacing } from '@config';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: Colors.WHITE,
  },

  updateButton: {
    marginTop: spacing.S64,
  },
  alert: { marginTop: spacing.S30 },
  contentContainerStyle: { alignItems: 'center' },
  flatlist: { width: '100%' },
});

export default styles;
