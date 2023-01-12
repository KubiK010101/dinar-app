import { StyleSheet } from 'react-native';
import { Colors, getHeight, getWidth } from '@config';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: getWidth(160),
    marginTop: getHeight(50),
    borderRadius: 100,
  },
});

export default styles;
