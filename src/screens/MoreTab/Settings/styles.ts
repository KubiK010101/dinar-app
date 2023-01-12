import { StyleSheet } from 'react-native';
import { Colors, getWidth, spacing } from '@config';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: Colors.WHITE,
  },
  content: {
    width: getWidth() - spacing.S44,
    marginTop: spacing.S16,
  },
});

export default styles;
