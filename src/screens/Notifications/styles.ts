import { StyleSheet } from 'react-native';
import { Colors, spacing } from '@config';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: Colors.WHITE,
  },
  flatlist: { width: '100%' },
  contentContainerStyle: {
    width: '100%',
    paddingHorizontal: spacing.S22,
  },
  titleView: {
    width: '100%',
    alignItems: 'flex-end',
    marginTop: spacing.S6,
  },
});

export default styles;
