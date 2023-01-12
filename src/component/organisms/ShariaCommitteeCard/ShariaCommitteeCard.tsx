/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { Image, View } from 'react-native';
import { Text } from '@component';
import styles from './styles';

type ShariaCommitteeProps = { item: any };

function ShariaCommitteeCard({ item }: ShariaCommitteeProps) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.image} source={item.image} />
        <View style={styles.name_and_job_title}>
          <Text fontFamily="Bold">{item.name}</Text>
          <Text style={{ color: '#73A1C2' }}>{item.title}</Text>
        </View>
      </View>
      <Text style={styles.details} fontSize="FS14">
        {item.details}
      </Text>
    </View>
  );
}

export default ShariaCommitteeCard;
