/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { Colors, getHeight, getWidth, HEXtoRGBA, scale, spacing } from '@config';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: Colors.WHITE,
  },
  scrollView: { width: '100%' },
  contentContainerStyle: {
    alignItems: 'center',
    paddingBottom: getHeight(120),
    paddingTop: getHeight(150),
  },
  content: {
    width: getWidth(346),
    backgroundColor: Colors.WHITE,
    shadowRadius: 10,
    shadowOpacity: 0.08,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: 'black',
    borderRadius: scale(6),
    marginTop: spacing.S16,
    paddingBottom: spacing.S16,
    elevation: 10,
  },
  investmentInfoSection: {
    width: '100%',
    // height: getHeight(260),
    paddingVertical: spacing.S16,
    backgroundColor: '#FAFBFC',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.S16,
    borderRadius: scale(6),
  },

  certificateBadge: {
    position: 'absolute',
    top: getHeight(230),
    right: spacing.S16,
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
