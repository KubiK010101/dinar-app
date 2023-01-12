import React, { FC } from 'react';
import { Text } from '..';
import styles from './styles';
import { Image, View } from 'react-native';
import { OnboardType } from '@config';
import { useTranslation } from 'react-i18next';

const OnBoardItem: FC<{
  item: OnboardType;
}> = ({ item }) => {
  const { t } = useTranslation();
  return (
    <View style={styles.onBoardContainer}>
      <Image style={styles.image} source={item.image} />
      <View style={styles.titleAndDetailsView}>
        <Text style={styles.title} fontSize="FS24" color="DARK_BLUE" fontFamily="Medium">
          {t(item.title)}
        </Text>

        <Text style={styles.details} color="GRAY" fontFamily="Medium" fontSize="FS14">
          {t(item.details)}
        </Text>
      </View>
    </View>
  );
};

export default OnBoardItem;
