import React, { FC } from 'react';
import { View, ViewProps } from 'react-native';
import styles from './styles';
import { Card, Text } from '@component';
import { Colors, scale, spacing } from '@config';
import { IconsName, Svgs } from '@assets';

type StatsCardProps = {
  item: { color: string; icon: IconsName; value: string; title: string };
};

const StatsCard: FC<StatsCardProps & ViewProps> = ({ item, style }) => {
  return (
    <Card shadow="small" style={[styles.container, style]}>
      <View style={[styles.iconView, { backgroundColor: item.color }]}>
        <Svgs name={item.icon} color={Colors.WHITE} width={scale(16)} height={scale(16)} />
      </View>

      <Text numberOfLines={1} fontFamily="Bold" fontSize="FS20" style={{ marginTop: spacing.S6 }}>
        {item.title}
      </Text>

      <Text numberOfLines={1} fontSize="FS13">
        {item.value}
      </Text>
    </Card>
  );
};
export default StatsCard;
