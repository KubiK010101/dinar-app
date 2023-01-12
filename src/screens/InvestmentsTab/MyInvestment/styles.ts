import { StyleSheet } from 'react-native';
import { Colors, getHeight, getWidth, spacing } from '@config';

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
    alignItems: 'center',
    paddingTop: getHeight(150),
  },
  content: {
    paddingTop: getHeight(150),
    width: '100%',
    paddingHorizontal: spacing.S22,
  },
  listHeaderComponent: {
    width: getWidth(),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: spacing.S22,
  },
  totalInvestmentContainer: {
    width: getWidth(),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.S22,
    alignItems: 'center',
    marginTop: spacing.S8,
  },
});

export default styles;
