import { Dimensions, StyleSheet } from 'react-native';
const { width } = Dimensions.get('screen');
const styles = StyleSheet.create({
  swiperContainer: {
    width: width,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: width,
    position: 'absolute',
    bottom: 0,
  },
  dot: {
    height: 6,
    borderRadius: 3,
    marginHorizontal: 2,
  },
});

export default styles;
