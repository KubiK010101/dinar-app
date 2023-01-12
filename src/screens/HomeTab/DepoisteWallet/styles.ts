import { StyleSheet } from 'react-native';
import { Colors, HEXtoRGBA, spacing } from '@config';

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
    textAlign: 'left',
    width: '100%',
  },
  depoisteNote: {
    textAlign: 'center',
    paddingHorizontal: spacing.S22,
    color: HEXtoRGBA(Colors.LIGHT_BLUE, 0.4),
    marginTop: spacing.S16,
  },
});

export default styles;
