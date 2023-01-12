import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { Button, Text } from '@component';
import moment from 'moment';

type NotificationItemProps = {
  item: any;
  renderMonthHeader: boolean;
};
function NotificationItem({ item, renderMonthHeader }: NotificationItemProps) {
  return (
    <View style={styles.container}>
      {renderMonthHeader && (
        <Text color="GREEN" style={styles.monthHeaderTitle}>
          {moment(item.created_at).format('[شهر] MMMM')}
        </Text>
      )}

      <Button style={styles.notificationItem}>
        <View style={styles.notificationItemContent}>
          <Text color="LIGHT_BLUE" fontFamily="Bold" fontSize="FS14">
            {item.title}
          </Text>

          <Text color="LIGHT_GRAY" fontSize="P">
            {moment(item.created_at).fromNow()}
          </Text>
        </View>

        <Text color="LIGHT_BLUE" fontSize="P">
          {item.body}
        </Text>
      </Button>
    </View>
  );
}

export default NotificationItem;
