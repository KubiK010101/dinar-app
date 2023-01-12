/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { scale, spacing } from '@config';

const styles = StyleSheet.create({
  card: {
    borderRadius: scale(6),
    borderWidth: 1,
    borderColor: '#E5EBF2',
    backgroundColor: 'white',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingHorizontal: spacing.S16,
  },
});
export default styles;
