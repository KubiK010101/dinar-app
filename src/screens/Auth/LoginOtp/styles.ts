import { StyleSheet } from 'react-native';
import { Colors, fontSizes, getHeight, spacing } from '@config';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: Colors.WHITE,
  },
  message: {
    marginTop: spacing.S18,
    textAlign: 'right',
  },
  content: {
    width: '100%',
    paddingHorizontal: spacing.S22,
    marginTop: getHeight(150) + spacing.S32,
    alignItems: 'flex-start',
  },
  welcomeMessage: {
    textAlign: 'left',
    marginTop: spacing.S16,
    lineHeight: fontSizes.FS40,
    width: '100%',
  },
  verifyButton: {
    marginTop: spacing.S64,
    justifyContent: 'center',
  },

  inputContainer: {
    width: '100%',
    marginTop: spacing.S16,
  },
});

export default styles;
