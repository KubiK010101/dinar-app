import { StyleSheet } from 'react-native';
import { Colors, getHeight, spacing } from '@config';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: Colors.WHITE,
  },
  message: {
    marginTop: spacing.S18,
    textAlign: 'left',
  },
  contentContainerStyle: {
    alignItems: 'flex-end',
    width: '100%',
    paddingTop: getHeight(150),
  },
  content: {
    width: '100%',
    paddingHorizontal: spacing.S22,
    marginTop: spacing.S30,
  },
  welcomeMessage: {
    textAlign: 'right',
    marginTop: spacing.S16,
  },
  verifyButton: {
    marginTop: spacing.S56,
  },
  inputContainer: {
    width: '100%',
    marginTop: spacing.S16,
  },
});

export default styles;
