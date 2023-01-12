import { StyleSheet } from 'react-native';
import { Colors, getHeight, getWidth, spacing } from '@config';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: Colors.WHITE,
  },
  listHeaderComponent: {
    width: getWidth(),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: spacing.S22,
  },
  contentContainerStyle: {
    width: '100%',
    alignItems: 'center',
    paddingTop: getHeight(150),
  },
});

export default styles;
