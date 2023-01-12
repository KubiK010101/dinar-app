import { StyleSheet } from 'react-native';
import { Colors, getHeight, spacing } from '@config';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  item: {
    width: '100%',
    height: getHeight(48),

    borderColor: Colors.BORDER,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  itemTitle: {
    paddingHorizontal: spacing.S10,
  },
  itemTitleAndIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
