import Toast from 'react-native-toast-message';
import ReactNativeHapticFeedback, { HapticFeedbackTypes } from 'react-native-haptic-feedback';
export const CustomToast = (text: string, type: 'error' | 'success' | 'info', _text2?: string) => {
  let hapticType: HapticFeedbackTypes = 'notificationSuccess';
  switch (type) {
    case 'error':
      hapticType = 'notificationError';
      break;
    case 'success':
      hapticType = 'notificationSuccess';
      break;
    case 'info':
      hapticType = 'notificationWarning';
      break;
    default:
      break;
  }
  ReactNativeHapticFeedback.trigger(hapticType);
  Toast.show({
    type: type,
    text1: capitalize(type),
    position: 'top',
    text2: text,
  });
};

const capitalize = (text: string) => {
  const _text = text.split(' ');
  const capitalizeText = (str: string) => str[0].toUpperCase() + str.slice(1, str.length);
  if (_text.length === 1) return capitalizeText(text);
  const newText = _text.reduce(
    (priv, current) => `${capitalizeText(priv)} ${capitalizeText(current)}`,
  );
  return newText;
};
