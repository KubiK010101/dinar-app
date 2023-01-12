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
    alignItems: 'flex-start',
    paddingHorizontal: spacing.S22,
    width: '100%',
    flex: 1,
    paddingTop: getHeight(150),
  },
  content: {
    width: '100%',
    marginTop: spacing.S30,
  },
  welcomeMessage: {
    textAlign: 'left',
    marginTop: spacing.S16,
  },
});

export default styles;
