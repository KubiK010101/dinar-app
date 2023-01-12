import { StyleSheet } from 'react-native';
import { Colors, scale, spacing } from '@config';

const styles = StyleSheet.create({
  // handleComponentContainer: {
  //     width: "100%",
  //     height: getHeight(24),
  //     alignItems: "center",
  //     justifyContent: "center"
  // },
  // handleComponent: {
  //     width: getWidth(70.5),
  //     height: 3,
  //     backgroundColor: Colors.RGBA_BLACK(.1),
  //     borderRadius: 3 / 2,
  // },
  title: {
    width: '100%',
    textAlign: 'left',
    paddingHorizontal: spacing.S20,
    paddingVertical: spacing.S8,
  },
  backgroundStyle: {
    backgroundColor: Colors.WHITE,
    borderRadius: scale(20),
  },
  handleComponent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingLeft: spacing.S22,
    paddingTop: spacing.S16,
  },
  closeButton: {
    paddingHorizontal: spacing.S22,
    paddingVertical: spacing.S10,
  },
  closeButtonIcon: {
    width: scale(12),
    height: scale(16),
    color: Colors.LIGHT_BLUE,
  },
});
export default styles;
