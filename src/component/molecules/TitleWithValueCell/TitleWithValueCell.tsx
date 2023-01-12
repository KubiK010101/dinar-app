import React from 'react';
import { View } from 'react-native';
import { Text } from '../..';
import * as Progress from 'react-native-progress';
import { Svgs } from '@assets';
import styles from './styles';
import { Colors, ColorsTypes, FontSizeTypes, getHeight } from '@config';

type TitleWithValueCellProps = {
  title: string;
  value: string;
  accepted_percentage?: number;
  reverse?: boolean;
  wtihBorder?: boolean;
  color?: keyof ColorsTypes;
  fontSize?: keyof FontSizeTypes;
  iconColor?: keyof ColorsTypes;
};

function TitleWithValueCell({ iconColor, wtihBorder, reverse, ...props }: TitleWithValueCellProps) {
  return (
    <View
      style={[styles.container, wtihBorder && styles.withBorder, reverse && styles.reverseContent]}>
      <View style={styles.valueWithIcon}>
        <Text
          numberOfLines={1}
          color={props.color}
          fontFamily="Bold"
          style={styles.value}
          fontSize={props.fontSize || 'FS14'}>
          {props.value}
        </Text>

        {typeof props.accepted_percentage !== 'undefined' && props.accepted_percentage !== 0 && (
          <Progress.Pie
            borderWidth={2}
            color={Colors.GREEN}
            progress={props.accepted_percentage / 100}
            size={getHeight(12)}
          />
        )}

        {props.accepted_percentage === 0 && (
          <Svgs
            color={iconColor && Colors[iconColor]}
            width={getHeight(12)}
            height={getHeight(12)}
            name="remove"
          />
        )}
      </View>

      <Text numberOfLines={1} color={props.color} style={styles.title} fontSize={'FS14'}>
        {props.title}
      </Text>
    </View>
  );
}

export default TitleWithValueCell;
