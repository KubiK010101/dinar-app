/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { Colors, getHeight, getWidth, scale, spacing } from '@config';
import { isRTL } from '@local';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: Colors.WHITE,
  },
  addButton: {
    marginTop: spacing.S64,
  },

  contentContainerStyle: {
    alignItems: 'center',
    paddingHorizontal: spacing.S22,
  },
  flatlist: {
    width: '100%',
  },
  saText: {
    paddingRight: isRTL ? spacing.S16 : 0,
    paddingLeft: isRTL ? 0 : spacing.S16,
  },
  bankCertificationView: {
    width: '100%',
    alignItems: 'flex-end',
    paddingHorizontal: spacing.S22,
    marginTop: spacing.S24,
  },
  bankCertificationButton: {
    flexDirection: 'row-reverse',
    backgroundColor: '#F5F7FA',
    width: getWidth(343),
    alignItems: 'center',
    justifyContent: 'center',
    height: getHeight(50),
    borderRadius: scale(10),
    borderWidth: 1,
    borderColor: Colors.BORDER,
    marginTop: spacing.S8,
  },
  bankCertificationButtonIcon: {
    width: scale(18),
    height: scale(18),
  },
});

export default styles;
