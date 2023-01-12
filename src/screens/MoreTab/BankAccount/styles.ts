import { StyleSheet } from 'react-native';
import { Colors, getHeight, spacing } from '@config';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.WHITE,
  },
  content: {
    paddingHorizontal: spacing.S22,
    alignItems: 'center',
    width: '100%',
    flex: 1,
  },
  message: {
    textAlign: 'left',
    marginTop: spacing.S16,
    width: '100%',
  },
  addBankAccountButton: {
    position: 'absolute',
    bottom: getHeight(50),
  },
  addBankAccountButtonText: {
    textDecorationLine: 'underline',
  },
  addButton: {
    padding: spacing.S12,
  },
});

export default styles;
