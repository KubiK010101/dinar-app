import { StyleSheet } from 'react-native';
import { Colors, getHeight, getWidth, spacing } from '@config';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: Colors.WHITE,
  },
  content: {
    alignItems: 'flex-start',
    marginTop: spacing.S24,
    paddingHorizontal: spacing.S22,
  },
  logo: {
    tintColor: Colors.DARK_BLUE,
    width: getWidth(212.61),
    height: getHeight(55.81),
  },
  socialMediaViewContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: getHeight(170),
  },
  scrollView: {
    width: '100%',
  },
});

export default styles;
