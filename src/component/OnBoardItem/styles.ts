import { StyleSheet } from 'react-native';
import { fontSizes, getHeight, getWidth, spacing } from '@config';
const styles = StyleSheet.create({
  onBoardContainer: {
    width: getWidth(),
  },
  image: {
    width: getWidth(),
    height: getHeight(441),
  },
  titleAndDetailsView: {
    marginTop: getHeight(73),
  },
  title: {
    paddingHorizontal: spacing.S28,
    lineHeight: fontSizes.FS35,
  },
  details: {
    marginTop: spacing.S16,
    paddingHorizontal: spacing.S28,
    lineHeight: fontSizes.FS26,
  },
});

export default styles;
