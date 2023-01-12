import { StyleSheet } from 'react-native';
import { Colors, getHeight, getWidth, scale, spacing } from '@config';

const styles = StyleSheet.create({
  defaultButtonContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  borderButtonContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    width: getWidth() - spacing.S22 * 2,
    height: getHeight(44),
    borderRadius: scale(22),
    justifyContent: 'center',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: Colors.DARK_BLUE,
    backgroundColor: Colors.WHITE,
    borderBottomWidth: 3,
    borderWidth: 1,
  },
  standarButtonContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.BLUE,
    width: getWidth() - spacing.S22 * 2,
    height: getHeight(44),
    borderRadius: scale(22),
    justifyContent: 'center',
    borderBottomWidth: 4,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: Colors.DARK_BLUE,
  },
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
  input: {
    flex: 1,
    paddingHorizontal: spacing.S18,
    textAlign: 'left',
  },
  phoneCode: {
    paddingHorizontal: spacing.S18,
  },
  showPasswordButton: {
    margin: spacing.S18,
  },

  error: {
    width: '100%',
    textAlign: 'left',
  },
});

export default styles;
