import React, { FC, useRef, useState } from 'react';
import {
  KeyboardTypeOptions,
  StyleProp,
  TextInput,
  TextStyle,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import { Button, Text } from '..';
import { Colors } from '@config';
import styles from './styles';
import { isRTL } from '@local';

interface InputProps extends ViewProps {
  label: string;
  placeholder?: string;
  maxLength?: number;
  value?: string;
  onChangeText?: (_text: string) => void;
  autoFocus?: boolean;
  style?: StyleProp<ViewStyle>;
  error?: string;
  maskValue?: string;
  textStyle?: StyleProp<TextStyle>;
  keyboardType?: KeyboardTypeOptions | undefined;
}
const MaskInput: FC<InputProps> = ({
  label,
  placeholder,
  maxLength,
  value,
  onChangeText,
  autoFocus,
  style,
  children,
  error,
  maskValue,
  textStyle,
  keyboardType,
}) => {
  const inputRef = useRef<TextInput>(null);
  const [isFocus, setFocus] = useState(false);

  const onFocus = () => {
    setFocus(true);
  };
  const onBlur = () => {
    setFocus(false);
  };

  return (
    <View style={[styles.container, style]}>
      <View style={[styles.container, style]}>
        {label && (
          <Text style={styles.lable} fontSize="FS14">
            {label}
          </Text>
        )}
        <Button
          buttonScale={1}
          style={styles.contentStyle}
          onPress={() => inputRef.current?.focus()}
          containerStyle={[
            styles.content,
            {
              backgroundColor: Colors.WHITE,
              borderColor: isFocus ? Colors.BLUE : Colors.LIGHT_GRAY,
            },
          ]}>
          <TextInput
            onFocus={onFocus}
            onBlur={onBlur}
            onChangeText={onChangeText}
            caretHidden={true}
            spellCheck={false}
            autoCorrect={false}
            blurOnSubmit={false}
            clearButtonMode="never"
            autoCapitalize="characters"
            keyboardType={keyboardType}
            underlineColorAndroid="transparent"
            ref={inputRef}
            value={value}
            autoFocus={autoFocus}
            maxLength={maxLength}
            style={styles.input}
          />
          <Text
            color={maskValue ? 'DARK_BLUE' : 'LIGHT_BLUE'}
            style={[isRTL ? styles.rtlTextValue : styles.textValue, textStyle]}>
            {maskValue ? `${maskValue}` : placeholder}
          </Text>
          {children}
        </Button>
      </View>
      {error && (
        <Text color="RED" fontSize="FS11" style={styles.error}>
          {error}
        </Text>
      )}
    </View>
  );
};

export default MaskInput;
