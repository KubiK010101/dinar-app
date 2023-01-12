/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { Colors, getHeight, getWidth, scale, spacing } from '@config';
const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    zIndex: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: getWidth(137.75),
    height: getHeight(36.16),
    position: 'absolute',
    top: getHeight(50),
  },
  background: {
    width: '100%',
    height: getHeight(150),
  },
  backButtonContainer: {
    position: 'absolute',
    left: 0,
    top: getHeight(50),
  },
  backButton: {
    padding: spacing.S16,
  },
  backButtonIcon: {
    color: Colors.WHITE,
    width: scale(18),
    height: scale(18),
  },

  // Simple Header

  simpleHeaderContainer: {
    width: '100%',
    height: getHeight(100),
    backgroundColor: Colors.WHITE,
  },
  simpleHeaderStatusView: {
    height: getHeight(44),
  },
  simpleHeaderContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  simpleHeaderBackIcon: {
    color: Colors.LIGHT_BLUE,
    width: scale(18),
    height: scale(18),
  },
  simpleHeaderBackButton: {
    paddingHorizontal: spacing.S22,
  },
  simpleHeaderBackButtonContainer: {
    position: 'absolute',
    left: 0,
  },

  // Home Header
  homeHeaderBackground: {
    width: '100%',
    height: getHeight(300),
    position: 'absolute',
  },
  homeHeaderContainer: {
    width: '100%',
    height: getHeight(300),
    alignItems: 'center',
    position: 'absolute',
    zIndex: 100,
  },
  homeHeaderWalletPattern: {
    height: getHeight(23),
    bottom: 0,
    width: getWidth(140),
    position: 'absolute',
    right: getWidth(15),
  },
  homeHeaderUserAndNotification: {
    height: getHeight(56),
    marginTop: getHeight(44),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    // paddingHorizontal: spacing.S22,
    position: 'absolute',
    zIndex: 10,
  },
  homeHeaderWelcomeUserText: {
    paddingHorizontal: spacing.S12,
  },
  homeHeaderWelcomeUser: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.S12,
    paddingHorizontal: spacing.S22,
  },
  homeHeaderWalletContainer: {
    width: getWidth() - spacing.S44,
    height: getHeight(115),
    backgroundColor: Colors.WHITE,
    borderRadius: scale(6),
    marginTop: getHeight(24),
    justifyContent: 'space-between',
    paddingHorizontal: spacing.S16,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
  },
  homeHeaderDepositButton: {
    width: getWidth(103),
    height: getHeight(30),
    paddingVertical: 0,
    borderBottomWidth: 3,
  },
  homeHeaderWithdraw: {
    width: getWidth(103),
    height: getHeight(30),
    paddingVertical: 0,
    marginTop: spacing.S8,
    backgroundColor: '#C4DDF1',
    borderColor: '#8CB6D6',
    borderBottomWidth: 3,
  },
  homeHeaderWalletTextContent: {
    alignItems: 'flex-start',
    paddingHorizontal: spacing.S12,
  },
  homeHeaderWalletTextAndIcon: {
    zIndex: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  // Simple Header

  headerAnimatedTitleContainer: {
    width: '100%',
    height: getHeight(150),
    backgroundColor: Colors.WHITE,
  },
  headerAnimatedTitleStatusView: {
    height: getHeight(44),
  },
  headerAnimatedTitleContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerAnimatedTitleButtonIcon: {
    color: Colors.LIGHT_BLUE,
    width: scale(22),
    height: scale(20),
  },
  headerAnimatedTitleButton: {
    paddingHorizontal: spacing.S22,
  },
  headerAnimatedTitleButtonContainer: {
    position: 'absolute',
    right: 0,
  },

  headerAnimatedTitleEditButton: { right: 0, position: 'absolute' },

  //  auction Header

  auctionHeaderContainer: {
    width: '100%',
    height: getHeight(100),
    position: 'absolute',
    zIndex: 100,
  },
  auctionHeaderStatusView: {
    height: getHeight(44),
  },
  auctionHeaderContent: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  auctionHeaderBackIcon: {
    color: Colors.LIGHT_BLUE,
    width: scale(18),
    height: scale(18),
  },
  auctionHeaderBackButton: {
    paddingHorizontal: spacing.S22,
  },
  auctionHeaderBackButtonContainer: {
    position: 'absolute',
    left: 0,
  },
  auctionAnimatedTitleEditButton: {
    right: 0,
    position: 'absolute',
  },
  auctionAnimatedTitleButton: {
    paddingHorizontal: spacing.S22,
  },
});
export default styles;
