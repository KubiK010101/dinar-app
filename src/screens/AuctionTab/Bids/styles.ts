import { StyleSheet } from 'react-native';
import { Colors, getHeight, getWidth, HEXtoRGBA, scale, spacing } from '@config';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: Colors.WHITE,
  },
  headerContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.S24,
    marginVertical: spacing.S18,
  },
  headerTitleWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    paddingRight: spacing.S12,
  },
  contentContainerStyle: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: getHeight(160),
  },
  flatlist: { width: '100%' },
  filterButtonsView: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: spacing.S4,
    paddingTop: spacing.S16,
    width: '100%',
    paddingHorizontal: spacing.S24,
  },
  filterButton: {
    height: getHeight(40),
    borderWidth: 1,
    borderColor: Colors.BORDER,
    paddingHorizontal: spacing.S16,
    borderRadius: scale(10),
    marginRight: spacing.S10,
    backgroundColor: Colors.WHITE,
  },
  filterButtonActive: {
    backgroundColor: HEXtoRGBA(Colors.BLUE, 0.24),
  },
  listHeaderComponent: {
    width: getWidth(),
    alignItems: 'center',
  },
  coveredPriceCard: {
    width: getWidth(343),
    height: getHeight(77),
    backgroundColor: HEXtoRGBA('#9CB1CC', 0.1),
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});

export default styles;
