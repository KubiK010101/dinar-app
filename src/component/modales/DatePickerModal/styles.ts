/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { fonts, fontSizes, getHeight, getWidth, spacing } from '@config';

const styles = StyleSheet.create({
  cancelButton: {
    marginTop: spacing.S18,
    width: getWidth(130),
    backgroundColor: 'white',
    borderWidth: 1,
  },
  saveButton: {
    marginTop: spacing.S18,
    width: getWidth(130),
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    paddingHorizontal: spacing.S22,
  },
  content: {
    alignItems: 'center',
    marginTop: spacing.S30,
  },
  pickerItem: {
    color: 'black',
    fontSize: fontSizes.FS14,
    fontFamily: fonts.Regular,
  },
  pickerContainer: {
    flexDirection: 'row',
    width: '100%',
    height: getHeight(150),
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default styles;
