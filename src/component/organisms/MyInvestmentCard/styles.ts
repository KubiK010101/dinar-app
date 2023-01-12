import { StyleSheet } from 'react-native';
import { Colors, getHeight, getWidth, scale, spacing } from '@config';
const styles = StyleSheet.create({
  container: {
    width: getWidth(343),
    height: getHeight(254),
    marginTop: spacing.S16,
  },
  containerWithDetailsStyle: {
    shadowOpacity: 0,
    marginTop: 0,
    width: '100%',
    borderWidth: 0,
  },
  shareButton: {
    paddingLeft: spacing.S12,
  },
  shareButtonIcon: {
    width: scale(17),
    height: scale(17),
  },
  titleAndInvestmentStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    height: getHeight(47),
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: Colors.LIGHT_GRAY1,
    width: '100%',
  },
  investmentStatusView: {
    backgroundColor: Colors.GREEN,
    paddingVertical: spacing.S4,
    paddingHorizontal: spacing.S14,
    borderRadius: getHeight(15),
  },
  shareButtonAndInvestmentStatus: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  investmentInfoContainer: {
    minHeight: getHeight(67.5),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    borderBottomWidth: 1,
    borderColor: Colors.LIGHT_GRAY1,
  },
  infoItemView: {
    alignItems: 'flex-start',
  },

  actionsView: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
  },
  investNowButton: {
    width: getWidth(172),
    height: getHeight(30),
  },
  detailsButton: {
    width: getWidth(122),
    height: getHeight(30),
    paddingVertical: 0,
    borderBottomWidth: 3,
    backgroundColor: Colors.WHITE,
    borderWidth: 1,
  },

  investCountAndTotalAmountSection: {
    height: getHeight(74),
    width: '100%',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: Colors.BORDER,
  },

  investCountAndTotalAmountContent: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
    justifyContent: 'flex-start',
  },

  investCountAndTotalAmountView: {
    alignItems: 'flex-start',
    paddingLeft: spacing.S8,
  },
});

export default styles;
