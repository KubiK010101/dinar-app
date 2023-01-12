/* eslint-disable radix */
import React from 'react';
import styles from './styles';
import { Button, Text } from '@component';
import { Colors, scale } from '@config';
import { TextInput, View } from 'react-native';
import Icon from '@Icon';
import { IconsName } from '@assets';

const InvestPriceInfoCard = ({
  icon,
  title,
  subTitle,
  onChangeCount,
  investCount = 1,
}: {
  icon: IconsName;
  title: string;
  subTitle: string;
  onChangeCount?: (_value: number) => void;
  investCount?: number;
}) => (
  <View style={styles.investPriceInfoCard}>
    {/* invest info  */}
    <View style={styles.investPriceInfoContent}>
      <View style={styles.investPriceInfoCardIcon}>
        <Icon color={Colors.WHITE} width={scale(16)} height={scale(16)} name={icon} />
      </View>

      <View style={styles.investPriveInfoTitleAndSubTitle}>
        <Text fontSize="FS14" numberOfLines={1}>
          {title}
        </Text>
        <Text fontSize="FS14" numberOfLines={1}>
          {subTitle}
        </Text>
      </View>
    </View>

    {/* invest Change Count  */}
    {onChangeCount ? (
      <View style={styles.investChangeCountContainer}>
        <Button
          onPress={() => onChangeCount(investCount + 1)}
          text="+"
          style={styles.investChangeCountButton}
        />
        <View style={styles.investCountNumberText}>
          <TextInput
            maxLength={3}
            keyboardType="number-pad"
            value={`${investCount}`}
            onChangeText={value => onChangeCount(parseInt(value))}
            style={styles.investCountNumberText}
          />
          {/* <Text>{`${investCount}`}</Text> */}
        </View>

        <Button
          onPress={() => onChangeCount(investCount - 1)}
          text="-"
          style={styles.investChangeCountButton}
        />
      </View>
    ) : (
      <View />
    )}
  </View>
);

export { InvestPriceInfoCard };
