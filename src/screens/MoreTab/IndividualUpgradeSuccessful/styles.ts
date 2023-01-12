import { StyleSheet } from 'react-native';
import { Colors, getHeight, spacing } from '@config';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: Colors.WHITE,
  },
  message: {
    marginTop: spacing.S18,
  },
  image: {
    width: '100%',
    height: getHeight(300),
  },
  button: {
    position: 'absolute',
    bottom: getHeight(60),
  },
});

export default styles;
