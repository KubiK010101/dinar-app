import { StyleSheet } from 'react-native';
import { Colors, getHeight, spacing } from '@config';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: Colors.WHITE,
  },
  inputViewStyle: {
    height: getHeight(180),
    paddingVertical: spacing.S12,
  },
  sendButton: { marginTop: getHeight(50) },
});

export default styles;
