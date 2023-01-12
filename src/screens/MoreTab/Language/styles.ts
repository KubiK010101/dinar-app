/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { Colors, getHeight, getWidth, spacing } from '@config';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: Colors.WHITE,
  },
  content: {
    width: getWidth() - spacing.S44,
    marginTop: spacing.S16,
    height: getHeight(109),
  },
  langCard: {
    width: '100%',
    height: '50%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderColor: '#E5EBF2',
  },
  cardRadioButtonContainerStyle: {
    width: '100%',
  },
  cardRadioButton: {
    height: '100%',
    justifyContent: 'flex-start',
  },
});

export default styles;
