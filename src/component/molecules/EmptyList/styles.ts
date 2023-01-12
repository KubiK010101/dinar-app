import { StyleSheet } from 'react-native';
import { getHeight, getWidth, HEXtoRGBA, scale, spacing } from '@config';

const styles = StyleSheet.create({
  container: {
    width: getWidth(345),
    height: getHeight(214),
    backgroundColor: HEXtoRGBA('#F1F3F4', 0.7),
    borderRadius: scale(6),
    marginTop: spacing.S22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: getWidth(171),
    height: getHeight(30),
    marginTop: spacing.S24,
  },
});

export default styles;
