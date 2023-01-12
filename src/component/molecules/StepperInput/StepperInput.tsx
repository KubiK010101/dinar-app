/* eslint-disable react-native/no-inline-styles */
import React, { FC } from 'react';
import { TextInputProps, View } from 'react-native';
import styles from './styles';
import { Button } from '@component';
import { TextInput } from 'react-native-gesture-handler';

interface StepperInputProps extends TextInputProps {
  onPress?: (_sign: '+' | '-') => void;
}

const StepperInput: FC<StepperInputProps> = ({ onPress = () => {}, value, ...props }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Button
        onPress={() => onPress('+')}
        iconStyle={styles.plusIcon}
        iconName="plus2"
        style={styles.stepperButton}
      />

      <TextInput keyboardType="numeric" {...props} style={styles.stepperInput} value={`${value}`} />

      <Button
        onPress={() => onPress('-')}
        iconStyle={styles.minusIcon}
        iconName="minus"
        style={styles.stepperButton}
      />
    </View>
  );
};

export default StepperInput;
