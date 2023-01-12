import React from 'react';
import { FlatList, ListRenderItem, View } from 'react-native';
import styles from './styles';
import { Header, ShariaCommitteeCard } from '@component';
import { shariaCommitteeList } from '@config';
import { t } from 'i18next';

type ShariaCommitteeProps = {};
function ShariaCommittee({}: ShariaCommitteeProps) {
  const _ShariaCommitteeCard: ListRenderItem<any> = ({ item, index }) => (
    <ShariaCommitteeCard item={item} key={`_ShariaCommitteeCard${index}`} />
  );

  return (
    <View style={styles.container}>
      <Header
        leftButtonIcon="share"
        title={t('moreScreen.shariaCommitteeScreen.members')}
        type="simple"
      />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={shariaCommitteeList}
        renderItem={_ShariaCommitteeCard}
      />
    </View>
  );
}

export default ShariaCommittee;
