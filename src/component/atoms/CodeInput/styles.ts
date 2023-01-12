import { StyleSheet } from 'react-native';
import { Colors, getHeight, getWidth, scale, spacing } from '@config';
import { isRTL } from '@local';

const styles = StyleSheet.create({
  input: {
    fontSize: 1,
    position: 'absolute',
    color: Colors.WHITE,
  },
  maskInputView: {
    width: getHeight(76),
    height: getWidth(70),
    borderRadius: scale(20),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  textInputContainer: {
    flexDirection: isRTL ? 'row-reverse' : 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: spacing.S16,
    alignItems: 'center',
    paddingVertical: 0,
  },
});
export default styles;
