import { StyleSheet } from 'react-native';
import { Colors, getHeight, spacing } from '@config';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: Colors.WHITE,
  },
  filterContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    paddingHorizontal: spacing.S22,
    marginTop: spacing.S16,
    marginBottom: spacing.S16,
  },
  filterItem: {
    backgroundColor: Colors.WHITE,
    paddingHorizontal: spacing.S16,
    height: getHeight(30),
    borderRadius: getHeight(15),
    borderWidth: 1,
    borderColor: Colors.DARK_BLUE,
  },
  filterActiveItem: {
    backgroundColor: Colors.DARK_BLUE,
    borderWidth: 0,
  },
});

export default styles;
