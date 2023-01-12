import { StyleSheet } from 'react-native';
import { Colors, getHeight, getWidth, scale, spacing } from '@config';

const styles = StyleSheet.create({
  container: {
    width: getWidth(),
    paddingHorizontal: spacing.S20,
    paddingVertical: spacing.S16,
    borderBottomWidth: 1,
    borderColor: Colors.BORDER,
  },
  content: {
    flexDirection: 'row',
  },
  image: {
    width: getWidth(78),
    height: getHeight(78),
    borderRadius: scale(10),
    borderWidth: 1,
    borderColor: Colors.BORDER,
  },
  details: {
    textAlign: 'left',
    marginTop: spacing.S10,
  },
  name_and_job_title: {
    alignItems: 'flex-start',
    paddingHorizontal: spacing.S16,
    justifyContent: 'center',
  },
});

export default styles;
