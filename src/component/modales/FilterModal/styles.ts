import { StyleSheet } from 'react-native';
import { Colors, getHeight, getWidth, spacing } from '@config';

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    width: '100%',
  },
  itemStyle: {
    width: '100%',
    justifyContent: 'space-between',
    height: '100%',
  },
  itemContainerStyle: {
    height: getHeight(54),
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: spacing.S22,
    borderBottomWidth: 1,
    borderBottomColor: Colors.LIGHT_GRAY1,
  },
  textAndIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: getWidth(30),
    height: getHeight(30),
    marginRight: spacing.S12,
  },
  contentContainerStyle: {
    width: getWidth(),
  },
});
export default styles;
