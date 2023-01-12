import { StyleSheet } from 'react-native';
import { Colors, scale } from '@config';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  checkView: {
    width: scale(15),
    height: scale(15),
    borderRadius: scale(15 / 2),
    backgroundColor: Colors.DARK_BLUE,
  },
  borderView: {
    width: scale(23),
    height: scale(23),
    borderWidth: 1.5,
    borderRadius: scale(23 / 2),
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 0,
  },
});

export default styles;
