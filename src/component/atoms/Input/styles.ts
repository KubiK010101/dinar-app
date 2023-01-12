import { StyleSheet } from 'react-native';
import { Colors, fonts, fontSizes, getHeight, getWidth, scale, spacing } from '@config';

const styles = StyleSheet.create({
  container: {
    width: getWidth() - spacing.S22 * 2,
    alignItems: 'flex-end',
    marginTop: spacing.S16,
  },
  content: {
    width: '100%',
    height: getHeight(44),
    borderRadius: getHeight(22),
    borderColor: Colors.LIGHT_GRAY,
    borderWidth: 1,
    marginTop: spacing.S8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  editButtonIcon: {
    width: scale(18),
    height: scale(18),
  },
  editButton: {
    paddingLeft: spacing.S16,
    flexDirection: 'row-reverse',
  },
  editButtonText: {
    paddingRight: spacing.S8,
  },
  input: {
    flex: 1,
    paddingHorizontal: spacing.S16,
    textAlign: 'right',
    height: '100%',
    fontFamily: fonts.Regular,
    fontSize: fontSizes.FS14,
  },
  phoneCode: {
    paddingHorizontal: spacing.S16,
  },
  showPasswordButton: {
    padding: spacing.S18,
  },
  icon: {
    marginLeft: spacing.S16,
  },
  eyeIcon: {
    width: scale(22),
    height: scale(20),
  },
  error: {
    width: '100%',
    textAlign: 'left',
    marginTop: spacing.S4,
  },
});
export default styles;
