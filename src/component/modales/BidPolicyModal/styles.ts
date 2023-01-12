import { StyleSheet } from 'react-native';
import { getHeight, spacing } from '@config';

const styles = StyleSheet.create({
  content_text: {
    textAlign: 'left',
    paddingHorizontal: spacing.S24,
  },
  contentContainerStyle: {
    paddingBottom: getHeight(24),
  },
});
export default styles;
