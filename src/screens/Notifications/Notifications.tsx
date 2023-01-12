import React from 'react';
import { FlatList, ListRenderItem, View } from 'react-native';
import styles from './styles';
import { Header, NotificationItem } from '@component';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import i18n from '@local';

type NotificationsProps = {};
function Notifications({}: NotificationsProps) {
  const { t } = useTranslation();
  const renderItem: ListRenderItem<{
    title: string;
    body: string;
    created_at: string;
  }> = ({ item, index }) => {
    const renderMonthHeader =
      index === 0 ||
      moment(item.created_at).get('month') !==
        moment(notificationList[index > 0 ? index - 1 : 0].created_at).get('month');
    return (
      <NotificationItem
        key={`NotificationItem_${index}`}
        item={item}
        renderMonthHeader={renderMonthHeader}
      />
    );
  };
  // const ListFooterComponent = () => (
  //   <View style={styles.titleView}>
  //     <Text fontFamily="Bold" color="LIGHT_BLUE" fontSize="FS24">
  //       {t('notifications.title')}
  //     </Text>
  //   </View>
  // );

  return (
    <View style={styles.container}>
      <Header title={t('notifications.title')} type="simple" />
      <FlatList
        // ListHeaderComponent={ListFooterComponent}
        showsVerticalScrollIndicator={false}
        style={styles.flatlist}
        contentContainerStyle={styles.contentContainerStyle}
        data={notificationList}
        renderItem={renderItem}
      />
    </View>
  );
}

const notificationList: Array<{ title: string; body: string; created_at: string }> = [
  {
    title: i18n.t('notifications.notificationList.title1'),
    body: i18n.t('notifications.notificationList.body1'),
    created_at: '2022-08-10T16:29:11',
  },
  {
    title: i18n.t('notifications.notificationList.title1'),
    body: i18n.t('notifications.notificationList.body1'),
    created_at: '2022-08-07T16:29:11',
  },
  {
    title: i18n.t('notifications.notificationList.title1'),
    body: i18n.t('notifications.notificationList.body1'),
    created_at: '2022-08-05T16:29:11',
  },
  {
    title: i18n.t('notifications.notificationList.title1'),
    body: i18n.t('notifications.notificationList.body1'),
    created_at: '2022-08-02T16:29:11',
  },
  {
    title: i18n.t('notifications.notificationList.title1'),
    body: i18n.t('notifications.notificationList.body1'),
    created_at: '2022-08-01T16:29:11',
  },
  {
    title: i18n.t('notifications.notificationList.title1'),
    body: i18n.t('notifications.notificationList.body1'),
    created_at: '2022-07-02T16:29:11',
  },
  {
    title: i18n.t('notifications.notificationList.title1'),
    body: i18n.t('notifications.notificationList.body1'),
    created_at: '2022-07-02T16:29:11',
  },
  {
    title: i18n.t('notifications.notificationList.title1'),
    body: i18n.t('notifications.notificationList.body1'),
    created_at: '2022-07-02T16:29:11',
  },
  {
    title: i18n.t('notifications.notificationList.title1'),
    body: i18n.t('notifications.notificationList.body1'),
    created_at: '2022-06-02T16:29:11',
  },
  {
    title: i18n.t('notifications.notificationList.title1'),
    body: i18n.t('notifications.notificationList.body1'),
    created_at: '2022-06-02T16:29:11',
  },
  {
    title: i18n.t('notifications.notificationList.title1'),
    body: i18n.t('notifications.notificationList.body1'),
    created_at: '2022-06-02T16:29:11',
  },
  {
    title: i18n.t('notifications.notificationList.title1'),
    body: i18n.t('notifications.notificationList.body1'),
    created_at: '2022-06-01T16:29:11',
  },
];

export default Notifications;
