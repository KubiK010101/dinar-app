import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { Text } from '../..';
import { Svgs } from '@assets';
import { FontSizeTypes } from '@config';

type TextPointProps = {
  text: string;
  fontSize?: keyof FontSizeTypes;
};
function TextPoint({ text, fontSize }: TextPointProps) {
  return (
    <View style={styles.container}>
      <Svgs name="point" />
      <Text color="LIGHT_BLUE" fontSize={fontSize || 'FS14'} style={styles.text}>
        {text}
      </Text>
    </View>
  );
}

export default TextPoint;
