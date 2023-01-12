import { StyleSheet } from 'react-native';
import { Colors, scale, spacing } from '@config';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: Colors.BORDER,
    alignItems: 'flex-start',
    paddingLeft: spacing.S12,
    justifyContent: 'center',
  },
  reverseContent: {
    flexDirection: 'column-reverse',
  },
  withBorder: {
    borderRightWidth: 1,
  },
  title: {
    lineHeight: scale(20),
  },
  value: {
    paddingRight: spacing.S4,
  },
  valueWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
