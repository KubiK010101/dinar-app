import { StyleSheet } from 'react-native';
import { Colors, getHeight, spacing } from '@config';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: Colors.WHITE,
  },
  swiperContainerStyle: {
    height: getHeight() - getHeight(180),
  },
  nextButton: {
    marginTop: getHeight(56),
  },
  skipButton: {
    position: 'absolute',
    top: getHeight(57),
    zIndex: 100,
    right: 0,
    paddingHorizontal: spacing.S22,
  },
});

export default styles;
