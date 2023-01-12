import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { Button, Text } from '@component';
import { Live } from '@assets';
import { t } from 'i18next';

const TitleWihViewAllButton = ({
  onPress,
  title,
  withPodcastIcon,
}: {
  withPodcastIcon: boolean;
  title: string;
  onPress: () => void;
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.title} fontFamily="Bold" fontSize="FS16">
          {title}
        </Text>
        {withPodcastIcon && <Live />}
      </View>
      <Button onPress={onPress} color="GREEN2" text={t('auction.auctionDetails.viewAll')} />
    </View>
  );
};

export default TitleWihViewAllButton;
