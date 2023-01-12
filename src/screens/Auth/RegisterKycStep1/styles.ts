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
    marginTop: spacing.S24,
  },
  title: {
    marginTop: spacing.S6,
  },
  nextButton: {
    marginTop: spacing.S40,
  },
  termsView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.S8,
  },
  termsAndConditionButton: {
    paddingVertical: spacing.S8,
  },
});

export default styles;
