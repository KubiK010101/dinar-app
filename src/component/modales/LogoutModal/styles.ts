import { StyleSheet } from 'react-native';
import { Colors, getHeight, getWidth, scale, spacing } from '@config';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: spacing.S30,
    flex: 1,
    justifyContent: 'flex-start',
  },
  content: {
    width: '90%',
    height: getHeight(300),
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(20),
  },
  btn: {
    marginTop: spacing.S12,
    width: getWidth(300),
  },
  message: {
    marginTop: spacing.S16,
    marginBottom: spacing.S10,
  },
});
export default styles;
