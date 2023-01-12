import { StyleSheet } from 'react-native';
import { Colors, getHeight, spacing } from '@config';

const styles = StyleSheet.create({
  container: { width: '100%' },
  monthHeaderTitle: {
    width: '100%',
    textAlign: 'left',
    marginTop: spacing.S20,
  },
  notificationItem: {
    alignItems: 'flex-start',
    height: getHeight(60),
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: Colors.BORDER,
    marginTop: spacing.S16,
    flexDirection: 'column',
  },
  notificationItemContent: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
});

export default styles;
