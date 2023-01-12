import React from 'react';
import { View } from 'react-native';
import { IconsName } from '@assets';
import { SettingRow, Text } from '@component';
import styles from './styles';

const MoreSection = ({
  title,
  list = [],
}: {
  withAlert?: boolean;
  title: string;
  list: Array<{
    title: string;
    screenName: any;
    icon: IconsName;
    action?: () => void;
  }>;
}) => {
  return (
    <View style={styles.sectionContainer}>
      <Text color="GREEN2" style={styles.sectionTitle} fontFamily="SemiBold">
        {title}
      </Text>

      {list.map((item, index) => (
        <SettingRow
          action={item.action}
          withBorderBottom={list.length - 1 !== index}
          key={`setting_row${index}`}
          {...item}
        />
      ))}

      {/* Alert */}
      {/* {withAlert && <Button
                haptic='impactLight'
                buttonScale={.98}
                containerStyle={styles.sectionAlertContainer}>
                <Icon
                    width={scale(20)}
                    height={scale(20)}
                    name='chat-line' />
                <Text
                    fontSize='FS11'
                    style={styles.sectionAlertText} >
                    {"إذا كانت صاحب مشروع وترغب بتمويل مشروعك اضغط هنا"}
                </Text>
            </Button>} */}
    </View>
  );
};

export { MoreSection };
