import React, { FC } from 'react';
import { View, ViewProps } from 'react-native';
import styles from './styles';
import { Text } from '@component';

type TextWithValueRowProps = {
  title: string;
  value: string;
} & ViewProps;
const TextWithValueRow: FC<TextWithValueRowProps> = ({ title, value, ...props }) => {
  return (
    <View {...props} style={[styles.infoItem, props.style]}>
      <Text fontSize="FS14" color="DARK_GRAY1" style={styles.infoItemText}>
        {title}
      </Text>

      <Text color="DARK_BLUE" fontSize="FS14">
        {value}
      </Text>
    </View>
  );
};

export default TextWithValueRow;
