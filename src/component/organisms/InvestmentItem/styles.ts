/* eslint-disable react-native/no-color-literals */
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

  investmentInfoIcon: {
    width: scale(32),
    height: scale(32),
    backgroundColor: 'white',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: getHeight(12),
    shadowRadius: 10,
    shadowOpacity: 0.08,
  },
  infoItemView: {
    alignItems: 'flex-start',
  },
  progressAndTotalInvestmentView: {
    minHeight: getHeight(80),
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
    borderBottomWidth: 1,
    borderColor: Colors.LIGHT_GRAY1,
  },

  progressContainer: {
    minWidth: getWidth(110),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: spacing.S4,
  },
  progress: {
    width: '100%',
    height: getHeight(4),
    alignItems: 'flex-start',
    backgroundColor: '#CBD0D68B',
    marginTop: spacing.S6,
  },
  progressValue: {
    width: '50%',
    height: '100%',
    backgroundColor: Colors.GREEN,
  },
  viewsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.S6,
  },
  viewsText: {
    paddingRight: spacing.S4,
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
    paddingVertical: 0,
    borderBottomWidth: 3,
  },
  detailsButton: {
    width: getWidth(122),
    height: getHeight(30),
    paddingVertical: 0,
    borderBottomWidth: 3,
    backgroundColor: Colors.WHITE,
    borderWidth: 1,
  },
  reminderButton: {
    paddingHorizontal: spacing.S16,
  },
  reminderButtonContainer: {
    position: 'absolute',
    left: 0,
  },
  countDownView: {
    width: '100%',
    height: getHeight(40),
    backgroundColor: Colors.RGBA_LEIGHT_BLUE(0.1),
    marginTop: spacing.S16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
