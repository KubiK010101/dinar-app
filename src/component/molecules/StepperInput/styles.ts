import { StyleSheet } from 'react-native';
import { Colors, getHeight, getWidth, scale, spacing } from '@config';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  stepperButton: {
    width: getHeight(30),
    height: getHeight(30),
    borderWidth: 1,
    borderColor: Colors.LIGHT_BLUE,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(10),
  },
  stepperInput: {
    height: getHeight(30),
    minWidth: getWidth(60),
    borderWidth: 1,
    borderColor: Colors.LIGHT_GRAY,
    borderRadius: scale(12),
    marginHorizontal: spacing.S12,
    textAlign: 'center',
  },
  minusIcon: {
    color: Colors.LIGHT_BLUE,
    width: scale(9),
    height: scale(9),
  },
  plusIcon: {
    color: Colors.LIGHT_BLUE,
    width: scale(10),
    height: scale(10),
  },
});

export default styles;
