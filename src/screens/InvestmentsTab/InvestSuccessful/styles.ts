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
    paddingTop: getHeight(300),
    alignItems: 'center',
    width: '100%',
    paddingBottom: getHeight(120),
  },
  message: {
    marginTop: spacing.S56,
    paddingHorizontal: spacing.S32,
  },
  image: {
    width: '100%',
    height: getHeight(300),
  },
  lottieIcon: { top: getHeight(160) },
  header: {
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 20,
    top: -120,
  },
  button: {
    position: 'absolute',
    bottom: getHeight(60),
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

  investmentListSection: {
    width: '100%',
    alignItems: 'flex-start',
    marginTop: spacing.S22,
  },
  investmentListSectionTitle: {
    paddingHorizontal: spacing.S22,
  },
  investmentListContentContainerStyle: {
    paddingBottom: spacing.S18,
    paddingHorizontal: spacing.S22,
  },

  shareInvestment: {
    marginTop: spacing.S16,
  },

  investmentNumberContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  investmentNumberText: {
    paddingRight: spacing.S8,
  },
  investmentNumberButton: {
    backgroundColor: HEXtoRGBA(Colors.DARK_BLUE, 0.1),
    width: getWidth(67),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.DARK_BLUE,
    borderRadius: 20,
    height: getHeight(22),
  },
});

export default styles;
