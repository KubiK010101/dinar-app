import { StyleSheet } from 'react-native';
import { Colors, getWidth, scale, spacing } from '@config';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: Colors.WHITE,
  },
  paymentBrandsView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    paddingHorizontal: spacing.S22,
  },
  brandActiveIcon: {
    borderWidth: 1,
    borderColor: Colors.GREEN,
    borderRadius: 5,
    overflow: 'hidden',
    opacity: 1,
    marginRight: spacing.S12,
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
    width: scale(18),
    height: scale(18),
  },
  cvvAndExpiryDateView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.S22,
  },
  input: {
    width: getWidth(165),
  },
  addButton: {
    marginTop: spacing.S26,
  },
});

export default styles;
