/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { boxShadow, Colors, getHeight, getWidth, scale, spacing } from '@config';
const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: getHeight(153),
    position: 'absolute',
    bottom: 0,
    backgroundColor: Colors.WHITE,
    ...boxShadow(10),
    borderTopRightRadius: scale(24),
    borderTopLeftRadius: scale(24),
    alignItems: 'center',
  },
  content: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
  },
  scrollview: {
    width: '100%',
  },
  newBidButton: {
    marginTop: getHeight(27),
  },
  newBidButtonContainer: {
    position: 'absolute',
    bottom: getHeight(30),
  },

  // message
  messageContainer: {
    width: '100%',
    alignContent: 'center',
  },
  messageContent: {
    width: getWidth(342),
    height: getHeight(74),
    backgroundColor: '#E1EBF8',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: spacing.S24,
    borderRadius: scale(10),
    top: getHeight(6),
    position: 'absolute',
    left: spacing.S24,
  },
  message: {
    textAlign: 'left',
  },

  // header
  header: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.S24,
    alignItems: 'flex-start',
    paddingTop: getHeight(22),
    height: getHeight(59),
  },
  startBidText: {
    paddingRight: spacing.S10,
  },
  headerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countdownStyle: {
    letterSpacing: 1,
    paddingRight: spacing.S8,
  },

  // send Bid
  sendBidFormContainer: {
    position: 'absolute',
    bottom: 0,
    height: getHeight(197),
    width: '100%',
    zIndex: 10,
    alignItems: 'center',
    opacity: 1,
    paddingTop: getHeight(6),
  },
  sendBidForm: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: spacing.S24,
  },
  sendBidButtonContainer: {
    position: 'absolute',
    bottom: getHeight(30),
  },
  sendBidButton: {
    marginTop: getHeight(27),
  },
  profitMargin: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  profitMarginText: {
    marginBottom: getHeight(15),
  },
  requiredQuantity: {
    width: getWidth(162),
    marginTop: 0,
  },
  auctionStatusView: {
    height: getHeight(59),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: getHeight(22),
  },
});

export default styles;
