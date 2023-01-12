/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { Colors, getHeight, spacing } from '@config';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: Colors.WHITE,
  },
  scrollView: {
    width: '100%',
  },
  contentContainerStyle: {
    alignItems: 'center',
    paddingBottom: spacing.S26,
    paddingTop: getHeight(150),
  },
  body: {
    paddingHorizontal: spacing.S22,
    textAlign: 'right',
    paddingTop: spacing.S24,
  },
  button: {
    marginTop: spacing.S40,
    backgroundColor: 'rgba(54,139,206,.29)',
    borderColor: '#368BCE',
  },
  pdfStyle: { width: '100%', height: '100%' },
});

export default styles;
