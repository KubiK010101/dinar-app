import { StyleSheet } from 'react-native';
import { Colors, getHeight, getWidth, spacing } from '@config';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: Colors.WHITE,
  },
  contentContainerStyle: {
    alignItems: 'flex-start',
    width: getWidth(),
    paddingTop: getHeight(150),
    paddingHorizontal: spacing.S22,
  },
  content: {
    width: '100%',
    marginTop: spacing.S30,
  },
  welcomeMessage: {
    textAlign: 'left',
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
