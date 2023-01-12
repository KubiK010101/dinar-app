/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { Colors, getHeight, HEXtoRGBA, scale, spacing } from '@config';
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.WHITE,
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
    alignItems: 'flex-end',
  },
  paymentsTitleView: {
    width: '100%',
    height: getHeight(50),
    backgroundColor: HEXtoRGBA('#9CB1CC', 0.1),
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: spacing.S16,
    marginVertical: spacing.S16,
    marginTop: spacing.S22,
  },
  // details Section
  detailsSection: {
    width: '100%',
    alignItems: 'flex-end',
  },
  detailsSectionTitle: {
    marginTop: spacing.S24,
  },
});

export default styles;
