import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Button, Text } from '..';
import styles from './styles';

type CheckBoxProps = {
  isChecked?: boolean;
  label?: string;
  onChecked?: (_value: boolean) => void;
};

const CheckBox = ({ isChecked, label, onChecked }: CheckBoxProps) => {
  let [checked, setChecked] = useState(isChecked);

  useEffect(() => {
    setChecked(isChecked);
  }, [isChecked]);
  const _onCheck = () => {
    if (onChecked) onChecked(!checked);
    setChecked(!checked);
  };
  return (
    <View style={styles.container}>
      <Button
        haptic="impactLight"
        onPress={_onCheck}
        iconStyle={styles.icon}
        {...(checked && { iconName: 'check' })}
        style={styles.checkButton}
      />
      {label && <Text fontSize="FS14">{label}</Text>}
    </View>
  );
};
export default CheckBox;
