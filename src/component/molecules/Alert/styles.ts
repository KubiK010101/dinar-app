/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { Colors, getHeight, getWidth, scale, spacing } from '@config';

const styles = StyleSheet.create({
  container: {
    width: getWidth() - spacing.S44,
    minHeight: getHeight(49),
    backgroundColor: '#F9651014',
    borderRadius: scale(20),
    borderWidth: 1,
    borderColor: Colors.ORANGE_DARK,
    marginTop: spacing.S12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.S16,
    paddingVertical: spacing.S8,
  },
  textMessage: {
    textAlign: 'left',
    paddingHorizontal: spacing.S16,
    flex: 1,
  },
});
export default styles;
