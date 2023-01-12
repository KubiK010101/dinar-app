import { StyleSheet } from 'react-native';
import { Colors, spacing } from '@config';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: Colors.GRAY,
  },
  splash: {
    width: '100%',
    height: '100%',
  },
  versionAndBuildNumber: {
    width: '100%',
    textAlign: 'center',
    position: 'absolute',
    bottom: spacing.S32,
  },
});

export default styles;
