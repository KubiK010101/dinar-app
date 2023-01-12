import React, { FC } from 'react';
import { View, ViewProps } from 'react-native';
import styles from './styles';
import { Text, TextWithValueRow } from '../..';
import { spacing } from '@config';

type InfoTableProps = {
  data: Array<{
    title: string;
    value: string;
  }>;
  title: string;
};
const InfoTable: FC<InfoTableProps & ViewProps> = ({ data = [], title, ...props }) => {
  return (
    <View {...props}>
      <View style={styles.titleView}>
        <Text fontFamily="Bold" fontSize="FS14">
          {title}
        </Text>
      </View>
      {data.map((infoItem, index) => (
        <TextWithValueRow
          key={`infoItem_${index}`}
          title={infoItem.title}
          value={infoItem.value}
          style={{ paddingHorizontal: spacing.S16 }}
        />
      ))}
    </View>
  );
};

export default InfoTable;
