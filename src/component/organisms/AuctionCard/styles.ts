/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { Colors, getHeight, getWidth, scale, spacing } from '@config';
const styles = StyleSheet.create({
  container: {
    width: getWidth(343),
    maxHeight: getHeight(310),
    marginTop: spacing.S16,
  },
  titleAndAuctionStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    height: getHeight(47),
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: Colors.LIGHT_GRAY1,
    width: '100%',
  },
  auctionStatusView: {
    backgroundColor: '#0072E3',
    paddingHorizontal: spacing.S12,
    borderRadius: getHeight(15),
    height: getHeight(20),
    marginLeft: spacing.S8,
  },
  podcastAndAuctionStatus: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  auctionInfoContainer: {
    minHeight: getHeight(71),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  actionsView: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    height: getHeight(61.5),
    marginTop: getHeight(16),
    borderTopWidth: 1,
    borderColor: Colors.BORDER,
  },
  auctionDetails: {
    width: getWidth(172),
    height: getHeight(30),
    paddingVertical: 0,
    borderBottomWidth: 3,
  },
  bidListButton: {
    width: getWidth(122),
    height: getHeight(30),
    paddingVertical: 0,
    borderBottomWidth: 3,
    backgroundColor: Colors.WHITE,
    borderWidth: 1,
  },

  countDownView: {
    width: '100%',
    height: getHeight(40),
    backgroundColor: Colors.RGBA_LEIGHT_BLUE(0.1),
    marginTop: spacing.S12,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: spacing.S12,
  },
  bidInfoContent: {
    height: getHeight(62),
    width: '100%',
    borderWidth: 1,
    borderColor: Colors.BORDER,
    borderRadius: scale(4),
    flexDirection: 'row',
    alignItems: 'center',
  },
  counterText: {
    paddingRight: spacing.S6,
    letterSpacing: 0,
  },
});

export default styles;
