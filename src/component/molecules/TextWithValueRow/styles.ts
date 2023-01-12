import { StyleSheet } from 'react-native';
import { getWidth, spacing } from '@config';

const styles = StyleSheet.create({
  infoItem: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    marginBottom: spacing.S12,
  },
  infoItemText: {
    width: getWidth(120),
    textAlign: 'left',
  },
});

export default styles;
