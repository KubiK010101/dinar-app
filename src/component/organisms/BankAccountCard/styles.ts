import { StyleSheet } from 'react-native';
import { getHeight, getWidth, HEXtoRGBA, scale, spacing } from '@config';
import { isRTL } from '@local';
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: getHeight(135),
    backgroundColor: HEXtoRGBA('#F1F3F4', 0.75),
    borderRadius: scale(6),
    marginVertical: spacing.S16,
    justifyContent: 'center',
    alignItems: isRTL ? 'flex-end' : 'flex-start',
    paddingHorizontal: spacing.S16,
  },
  bankLogo: {
    width: getWidth(45),
    height: getHeight(45),
  },
  copyButton: {
    paddingHorizontal: spacing.S10,
  },
  bankNumberAndCopyButtonView: {
    flexDirection: isRTL ? 'row' : 'row-reverse',
  },
  bankHolder: {
    marginVertical: spacing.S6,
  },
});

export default styles;
