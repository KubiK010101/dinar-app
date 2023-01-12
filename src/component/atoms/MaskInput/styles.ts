import { StyleSheet } from 'react-native';
import { Colors, getHeight, getWidth, spacing } from '@config';
import { isRTL } from '@local';

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
  lable: {
    textAlign: 'left',
    width: '100%',
  },
  input: {
    fontSize: 1,
    color: Colors.WHITE,
  },
  textValue: {
    flex: 1,
    textAlign: 'left',
    paddingLeft: spacing.S12,
  },
  rtlTextValue: {
    flex: 1,
    textAlign: 'right',
    paddingRight: spacing.S12,
  },
  error: {
    width: '100%',
    textAlign: 'left',
    marginTop: spacing.S4,
  },
  contentStyle: {
    flexDirection: isRTL ? 'row' : 'row-reverse',
  },
});
export default styles;
