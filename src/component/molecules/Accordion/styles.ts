/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { Colors, getHeight, getWidth, scale, spacing } from '@config';

const styles = StyleSheet.create({
  container: {
    width: getWidth(345),
    alignItems: 'center',
    marginTop: spacing.S16,
    overflow: 'hidden',
  },
  content: {
    width: '100%',
    backgroundColor: '#FAFBFC',
    marginTop: spacing.S8,
    borderRadius: scale(10),
    padding: spacing.S12,
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden',
  },
  contentText: {
    textAlign: 'left',
    position: 'absolute',
    top: spacing.S12,
  },
  button: {
    width: getWidth(345),
    height: getHeight(55),
    borderWidth: 1,
    borderColor: Colors.BORDER,
    justifyContent: 'space-between',
    paddingHorizontal: spacing.S16,
    borderRadius: scale(10),
  },
});

export default styles;
