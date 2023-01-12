import { StyleSheet } from 'react-native';
import { Colors, getHeight, spacing } from '@config';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: Colors.WHITE,
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
  registerButton: {
    marginTop: spacing.S32,
  },
  termsView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.S8,
  },
  termsAndConditionButton: {
    paddingVertical: spacing.S8,
  },
  signinButton: {
    padding: spacing.S8,
  },
  haveAnAccountView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    marginTop: spacing.S8,
  },
  haveAnAccountViewContainer: {
    width: '100%',
    alignItems: 'center',
  },
});

export default styles;
