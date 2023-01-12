import { StyleSheet } from 'react-native';
import { Colors, getWidth, spacing } from '@config';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: Colors.WHITE,
  },
  contentContainerStyle: {
    width: getWidth(),
    alignItems: 'center',
  },
  content: {
    width: '100%',
  },
  welcomeMessage: {
    textAlign: 'right',
    marginTop: spacing.S16,
  },
  button: {
    marginTop: spacing.S32,
  },
  passwordConditions: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: spacing.S22,
  },
});

export default styles;
