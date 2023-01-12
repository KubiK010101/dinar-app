import { PaymentTypes } from '@types';
import { getHeight } from '@config';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

type AnimatedPaymentModalProps = {
  paymentType: PaymentTypes;
  animatedPosition: Animated.SharedValue<number>;
  errors: any;
};

const useAnimatedPaymentModal = ({
  errors,
  animatedPosition,
  paymentType,
}: AnimatedPaymentModalProps) => {
  const animatedContainer = useAnimatedStyle(() => {
    const opacity = interpolate(animatedPosition.value, [0, 100], [1, 0], Extrapolate.CLAMP);
    const zIndex = interpolate(animatedPosition.value, [0, 100], [1, 0], Extrapolate.CLAMP);
    return { opacity, zIndex };
  });

  const MAX_HEIGHT = getHeight(
    errors.cardNumber && (errors.cvv || errors.expiryMonth || errors.expiryYear)
      ? 225
      : errors.cardNumber || errors.cvv || errors.expiryMonth || errors.expiryYear
      ? 205
      : 185,
  );

  const animatedPaymentForm = useAnimatedStyle(() => {
    const height =
      Object.keys(errors).length && paymentType === 'MADA'
        ? interpolate(1, [0, 1], [0, MAX_HEIGHT])
        : withSpring(interpolate(paymentType === 'APPLE_PAY' ? 0 : 1, [0, 1], [0, MAX_HEIGHT]), {
            damping: 50,
            stiffness: 300,
            mass: 1,
          });
    const opacity = withTiming(interpolate(paymentType === 'APPLE_PAY' ? 0 : 1, [0, 1], [0, 1]));
    return { height, opacity };
  });

  const paymentModalAnimatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(animatedPosition.value, [0, 100], [0, 1], Extrapolate.CLAMP);
    return { opacity };
  });
  return {
    animatedContainer,
    animatedPaymentForm,
    paymentModalAnimatedStyle,
  };
};

export { useAnimatedPaymentModal };
