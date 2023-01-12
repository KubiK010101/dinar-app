import React, { useRef } from 'react';
import { TextInput, View } from 'react-native';
import { Button, Text } from '@component';
import styles from './styles';
import { Colors } from '@config';

type CodeInputProps = {
  onChangeText?: (_text: string) => void;
  value: string;
  editable?: boolean;
};

const CodeInput = ({ onChangeText, value, editable = true }: CodeInputProps) => {
  const inputRef = useRef<TextInput>(null);

  const onPress = () => {
    inputRef.current?.focus();
  };
  return (
    <Button onPress={onPress} buttonScale={1} style={styles.textInputContainer}>
      {new Array(4).fill({}).map((item, index) => (
        <View
          key={`CodeInput_${index}`}
          style={[
            styles.maskInputView,
            {
              borderColor:
                value[index] || value.length === index ? Colors.DARK_BLUE : Colors.LIGHT_GRAY,
            },
          ]}>
          <Text fontFamily="Bold" fontSize="FS32">
            {value[index]}
          </Text>
        </View>
      ))}
      <TextInput
        textContentType="oneTimeCode"
        autoComplete="sms-otp"
        editable={editable}
        autoFocus
        onChangeText={onChangeText}
        maxLength={4}
        disableFullscreenUI
        caretHidden={true}
        spellCheck={false}
        autoCorrect={false}
        blurOnSubmit={false}
        clearButtonMode="never"
        autoCapitalize="characters"
        keyboardType="number-pad"
        underlineColorAndroid="transparent"
        value={value}
        ref={inputRef}
        style={styles.input}
      />
    </Button>
  );
};
export default CodeInput;
