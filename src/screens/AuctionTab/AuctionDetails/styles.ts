/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { Colors, fonts, fontSizes, getHeight, getWidth, HEXtoRGBA, scale, spacing } from '@config';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: Colors.WHITE,
  },
  content: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    width: '100%',
    borderTopRightRadius: scale(20),
    borderTopLeftRadius: scale(20),
    alignItems: 'center',
  },

  // details
  detailsSectionButton: {
    height: getHeight(58),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.S24,
    borderBottomWidth: 1,
    borderColor: Colors.BORDER,
  },

  contentContainerStyle: {
    paddingTop: getHeight(310),
    paddingBottom: getHeight(200),
  },
  scrollView: { width: '100%' },
  alert: {
    backgroundColor: '#EDF0F3',
    borderWidth: 0,
    borderRadius: scale(6),
    marginTop: 0,
  },

  investmentInfoContainer: {
    minHeight: getHeight(67.5),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    borderBottomWidth: 1,
    borderColor: Colors.LIGHT_GRAY1,
    paddingHorizontal: spacing.S32,
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

  //   Header
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

  auctionHeaderBackground: {
    width: '100%',
    minHeight: getHeight(327),
    backgroundColor: Colors.BLUE,
    paddingHorizontal: spacing.S20,
    position: 'absolute',
    transform: [{ scale: 1 }],
  },
  chartView: {
    zIndex: 1,
    position: 'absolute',
    paddingTop: getHeight(103),
    height: getHeight(327),
  },
  chartYAxisTextStyle: {
    color: Colors.WHITE,
    fontSize: fontSizes.FS11,
    fontFamily: fonts.Medium,
  },
  chartXAxisLabelTextStyle: {
    color: Colors.WHITE,
    fontSize: fontSizes.FS11,
    fontFamily: fonts.Bold,
    left: -5,
  },

  // details
  detailsContent: {
    width: getWidth(346),
    borderRadius: scale(6),
    marginTop: spacing.S16,
    paddingBottom: spacing.S16,
  },
  investmentInfoSection: {
    width: '100%',
    paddingVertical: spacing.S16,
    alignItems: 'center',
    justifyContent: 'center',
  },

  certificateBadge: {
    position: 'absolute',
    top: -10,
    right: spacing.S4,
  },

  continueButtonView: {
    width: getWidth(),
    height: getHeight(90),
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    shadowOpacity: 0.1,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: -2 },
    shadowRadius: 10,
    borderTopRightRadius: scale(10),
    borderTopLeftRadius: scale(10),
    paddingTop: spacing.S12,
  },
  // attachment
  attachmentButton: {
    width: '100%',
    height: getHeight(50),
    backgroundColor: HEXtoRGBA('#F5F7FA', 0.3),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.BORDER,
    flexDirection: 'row',
    paddingHorizontal: spacing.S16,
  },
  attachmentButtonContainer: {
    width: '100%',
    marginTop: spacing.S16,
  },
  attachmentButtonText: {
    paddingHorizontal: spacing.S22,
  },

  paymentsTitleView: {
    width: '100%',
    height: getHeight(50),
    backgroundColor: HEXtoRGBA('#9CB1CC', 0.1),
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: spacing.S16,
    marginVertical: spacing.S16,
  },
  // details Section
  detailsSection: {
    width: '100%',
    alignItems: 'flex-start',
  },
  detailsSectionTitle: {
    marginTop: spacing.S24,
  },
});

export default styles;
