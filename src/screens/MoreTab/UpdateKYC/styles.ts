import { StyleSheet } from 'react-native';
import { Colors, spacing } from '@config';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: Colors.WHITE,
  },
  content: {
    width: '100%',
    alignItems: 'flex-start',
    paddingHorizontal: spacing.S22,
    paddingBottom: spacing.S30,
  },
  stepTitle: {
    marginTop: spacing.S24,
    textAlign: 'left',
  },
  title: {
    marginTop: spacing.S6,
  },
  nextButton: {
    marginTop: spacing.S40,
  },
});

export default styles;
