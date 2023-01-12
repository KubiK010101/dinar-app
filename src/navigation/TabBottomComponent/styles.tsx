import { StyleSheet } from 'react-native';
import { Colors } from '@config';
import { getHeight } from '@config';

const styles = StyleSheet.create({
  buttonItem: {
    height: getHeight(80),
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: getHeight(30),
    elevation: 10,
    overflow: 'hidden',
  },
  tabsContainer: {
    flexDirection: 'row',
    height: getHeight(80),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.WHITE,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.04,
    shadowRadius: 10,
    elevation: 10,
  },
});

export default styles;
