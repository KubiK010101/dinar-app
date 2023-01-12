import { StyleSheet } from 'react-native';
import { getHeight, HEXtoRGBA, spacing } from '@config';
const styles = StyleSheet.create({
  titleView: {
    width: '100%',
    height: getHeight(50),
    backgroundColor: HEXtoRGBA('#9CB1CC', 0.1),
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: spacing.S16,
    marginVertical: spacing.S16,
    marginTop: spacing.S22,
  },
});

export default styles;
