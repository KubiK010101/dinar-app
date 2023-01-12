import { StyleSheet } from 'react-native';
import { Colors, getHeight, spacing } from '@config';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: Colors.WHITE,
  },
  contentContainerStyle: {
    width: '100%',
    alignItems: 'center',
    paddingTop: getHeight(320),
    paddingBottom: spacing.S16,
  },
});

export default styles;
