import { StyleSheet } from 'react-native';
import { Colors, scale, spacing } from '@config';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  checkButton: {
    width: scale(23),
    height: scale(23),
    borderWidth: 1,
    borderColor: Colors.DARK_BLUE,
    borderRadius: scale(6),
    marginRight: spacing.S8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: { color: Colors.DARK_BLUE },
});
export default styles;
