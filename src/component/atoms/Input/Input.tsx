/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import React, { FC, useRef, useState } from 'react';
import { StyleProp, TextInput, TextInputProps, TextStyle, View, ViewStyle } from 'react-native';
import { Button, Text } from '..';
import Icon from '@Icon';
import { IconsName } from '@assets';
import { Colors, scale } from '@config';
import i18n, { isRTL } from '@local';
import styles from './styles';

type InputProps = {
  label?: string;
  placeholder?: string;
  phone?: boolean;
  passowrd?: boolean;
  maxLength?: number;
  icon?: IconsName;
  widthEditButton?: boolean;
  value?: string;
  onChangeText?: (_text: string) => void;
  onEdit?: () => void;
  autoFocus?: boolean;
  style?: StyleProp<ViewStyle>;
  inputViewStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  error?: string;
  isRequired?: boolean;
};
const Input: FC<InputProps & TextInputProps> = ({
  label,
  placeholder,
  passowrd,
  maxLength,
  icon,
  widthEditButton,
  value,
  onChangeText,
  onEdit,
  autoFocus,
  style,
  children,
  keyboardType,
  inputViewStyle,
  inputStyle,
  multiline,
  error,
  editable,
  isRequired,
  ...props
}) => {
  const [showPassword, setPassword] = useState(passowrd);
  const inputRef = useRef<TextInput>(null);
  const [isFocus, setFocus] = useState(false);

  const onFocus = (event: any) => {
    if (props.onFocus) props.onFocus(event);
    setFocus(true);
  };
  const onBlur = (event: any) => {
    if (props.onBlur) props.onBlur(event);
    setFocus(false);
  };

  return (
    <View style={[styles.container, style]}>
      {label && (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
          }}>
          <Text style={{ textAlign: 'left' }} fontSize="FS14">
            {label}
          </Text>
          {isRequired && (
            <Text fontSize="FS14" color="RED">
              {' '}
              *{' '}
            </Text>
          )}
        </View>
      )}

      <View
        style={[
          styles.content,
          {
            backgroundColor: widthEditButton ? Colors.RGBA_BLACK(0.1) : 'white',
            opacity: editable === false ? 0.5 : 1,
            borderColor: isFocus ? Colors.BLUE : Colors.LIGHT_GRAY,
          },
          inputViewStyle,
        ]}>
        {icon && <Icon style={styles.icon} width={scale(18)} height={scale(18)} name={icon} />}

        <TextInput
          onBlur={onBlur}
          onFocus={onFocus}
          multiline={multiline}
          keyboardType={keyboardType}
          autoFocus={autoFocus}
          ref={inputRef}
          editable={editable}
          onChangeText={onChangeText}
          value={value}
          maxLength={maxLength}
          secureTextEntry={showPassword}
          style={[
            styles.input,
            { textAlign: isRTL ? 'right' : 'left' },
            { ...(passowrd && value && { fontFamily: undefined }) },
            inputStyle,
          ]}
          placeholder={placeholder}
        />

        {widthEditButton && (
          <Button
            onPress={() => {
              if (onEdit) onEdit();
              inputRef.current?.focus();
            }}
            haptic="impactLight"
            style={styles.editButton}
            iconStyle={styles.editButtonIcon}
            text={i18n.t('input.changeMail')}
            textContainerStyle={styles.editButtonText}
            iconName="edit"
          />
        )}

        {/* {phone && <Text
                    color='LIGHT_BLUE'
                    style={styles.phoneCode}
                    fontFamily='Bold'>{"+966"}</Text>} */}
        {passowrd && (
          <Button
            haptic="impactLight"
            iconStyle={styles.eyeIcon}
            onPress={() => setPassword(!showPassword)}
            iconName={showPassword ? 'showPassword' : 'hidePassword'}
            style={styles.showPasswordButton}
          />
        )}
        {children}
      </View>
      {error && (
        <Text color="RED" fontSize="FS11" style={styles.error}>
          {error}
        </Text>
      )}
    </View>
  );
};

export default Input;
