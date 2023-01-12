/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { Colors, getHeight, getWidth, HEXtoRGBA, scale, spacing } from '@config';

const styles = StyleSheet.create({
  // modal
  modalBackgroundStyle: {
    backgroundColor: Colors.WHITE,
    borderRadius: scale(20),
  },
  content: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },

  paymentMethodInfoContent: {
    width: '100%',
    alignItems: 'flex-start',
    marginTop: spacing.S10,
  },

  payByRowCardIconAndCardnumberView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  payByRowTitleAndIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  payByRowTitle: {
    paddingHorizontal: spacing.S10,
  },
  payByRowContainer: {
    width: '100%',
  },
  payByRow: {
    justifyContent: 'space-between',
    paddingVertical: spacing.S16,
  },
  payByRowCardNumber: {
    paddingHorizontal: spacing.S10,
  },

  // wallet Row
  walletRowContainer: {
    justifyContent: 'space-between',
    paddingVertical: spacing.S16,
    flexDirection: 'row',
    width: '100%',
    borderTopWidth: 1,
    borderColor: Colors.BORDER,
    borderBottomWidth: 1,
    alignItems: 'center',
    height: getHeight(70),
  },
  walletRowContent: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
  },
  walletRowBalanceAndRemainder: {
    alignItems: 'flex-start',
    width: '100%',
  },
  walletRowBalanceText: {
    paddingHorizontal: spacing.S10,
  },
  walletRowRemainderText: {
    paddingHorizontal: spacing.S10,
  },

  applepayButton: {
    width: '100%',
    backgroundColor: Colors.BLACK,
    borderBottomWidth: 0,
    marginTop: spacing.S28,
  },
  applepayButtonIcon: {
    width: scale(18),
    height: scale(18),
  },
  applepayButtonText: {
    paddingHorizontal: spacing.S6,
  },
  applepayButtonContainerStyle: {
    position: 'absolute',
    bottom: getHeight(32),
    width: '100%',
  },

  // invest Price Info Card

  investChangeCountContainer: {
    flexDirection: 'row',
    width: getWidth(122),
    justifyContent: 'space-between',
  },

  investPriceInfoContent: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '51%',
  },

  investPriveInfoTitleAndSubTitle: {
    alignItems: 'flex-start',
    paddingHorizontal: spacing.S6,
  },
  investPriceInfoCard: {
    width: '100%',
    height: getHeight(68),
    borderWidth: 1,
    borderRadius: scale(20),
    borderColor: Colors.BORDER,
    marginTop: spacing.S8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.S16,
    justifyContent: 'space-between',
  },
  investPriceInfoCardIcon: {
    width: getHeight(38),
    height: getHeight(38),
    backgroundColor: HEXtoRGBA(Colors.GREEN, 0.4),
    borderRadius: getHeight(19),
    alignItems: 'center',
    justifyContent: 'center',
  },

  investChangeCountButton: {
    width: scale(35),
    height: scale(35),
    borderWidth: 1,
    borderColor: Colors.LIGHT_BLUE,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  investCountNumberText: {
    width: scale(35),
    height: scale(35),
    borderWidth: 1,
    borderColor: Colors.BORDER,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },

  // handle Component
  handleComponent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingTop: spacing.S16,
    paddingLeft: spacing.S22,
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

  // Remainder Alert
  remainderAlertContainer: {
    width: '100%',
    alignItems: 'flex-start',
  },
  remainderAlertTextView: {
    width: '100%',
    minHeight: getHeight(55),
    backgroundColor: '#F9651014',
    borderRadius: scale(20),
    borderWidth: 1,
    borderColor: '#F96510',
    marginTop: spacing.S12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.S16,
    paddingVertical: spacing.S8,
  },
  remainderAlertTextMessage: {
    textAlign: 'left',
    paddingHorizontal: spacing.S16,
    flex: 1,
  },
  remainderWalletText: {
    marginTop: spacing.S10,
  },

  // PyamnetCards
  paymentCardsContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'flex-start',
    position: 'absolute',
  },
  paymentCardsContent: {
    width: '100%',
    alignItems: 'flex-start',
    paddingHorizontal: spacing.S22,
    marginBottom: spacing.S22,
  },
  paymentCardsHeaderTitle: {
    marginBottom: spacing.S18,
  },
  addNewCardButtonContainer: {
    width: '100%',
  },
  addNewCardButton: {
    flexDirection: 'row',
    paddingVertical: spacing.S16,
    marginTop: spacing.S8,
  },
  addNewCardButtonIcon: {
    width: scale(16),
    height: scale(16),
  },
  addNewCardButtonText: {
    paddingHorizontal: spacing.S12,
  },

  // card item
  cardItemStyle: {
    justifyContent: 'space-between',
    paddingVertical: spacing.S16,
    borderBottomWidth: 1,
    borderColor: Colors.BORDER,
  },
  cardItemContainerStyle: {
    width: '100%',
  },
  cardItemStatus: {
    paddingHorizontal: spacing.S10,
  },
  cardNumberText: {
    paddingHorizontal: spacing.S10,
  },
  cardItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  brandDeactiveIcon: {
    borderWidth: 0,
    borderColor: Colors.BORDER,
    opacity: 0.7,
  },
  scanCardButton: {
    paddingHorizontal: spacing.S16,
    paddingVertical: spacing.S10,
  },
  scanCardButtonIcon: {
    width: scale(30),
    height: scale(18),
  },
  cvvAndExpiryDateView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  input: {
    width: getWidth(165),
  },
  madaBtn: {
    marginTop: spacing.S8,
    backgroundColor: Colors.WHITE,
    borderColor: '#199FDD',
    borderWidth: 1,
  },
  applepayBtn: {
    backgroundColor: Colors.BLACK,
    borderColor: Colors.BLACK,
  },
});
export default styles;
