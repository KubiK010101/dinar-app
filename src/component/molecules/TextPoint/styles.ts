import { StyleSheet } from 'react-native';
import { spacing } from '@config';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: spacing.S4,
  },
  text: {
    paddingLeft: spacing.S6,
    paddingRight: spacing.S22,
    textAlign: 'left',
  },
});

export default styles;
