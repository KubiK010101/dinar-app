import { StyleSheet } from 'react-native';
import { Colors, spacing } from '@config';

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    width: '100%',
    height: '100%',
    backgroundColor: Colors.WHITE,
  },
  content: {
    paddingHorizontal: spacing.S22,
    alignItems: 'center',
    width: '100%',
  },
  bankNote: {
    textAlign: 'center',
    width: '100%',
  },
  withdrawButton: {
    marginTop: spacing.S8,
  },
  walletBalanceAndIconView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.S16,
    width: '100%',
    justifyContent: 'flex-start',
  },
  walletBalanceView: {
    alignItems: 'flex-start',
    paddingHorizontal: spacing.S12,
  },
});

export default styles;
