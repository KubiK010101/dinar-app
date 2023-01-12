import React, { FC } from 'react';
import { Colors } from '@config';
import { Switch as RNSwitch, SwitchProps } from 'react-native';

const Switch: FC<SwitchProps> = ({ ...props }) => {
  return <RNSwitch {...props} trackColor={{ true: Colors.DARK_BLUE }} />;
};

export default Switch;
