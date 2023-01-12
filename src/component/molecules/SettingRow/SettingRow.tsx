/* eslint-disable react-native/no-inline-styles */
import React, { FC } from 'react';
import { View, ViewProps } from 'react-native';
import Icon from '@Icon';
import { IconsName } from '@assets';
import { Button, Text } from '@component';
import { Colors, scale } from '@config';
import { useNavigationHooks } from '@hooks';
import styles from './styles';
import { isRTL } from '@local';

export const SettingRow: FC<
  ViewProps & {
    screenName: any;
    title: string;
    icon: IconsName;
    withBorderBottom?: boolean;
    action?: () => void;
    params?: any;
  }
> = ({ screenName, title, icon, style, withBorderBottom, params, action }) => {
  const { navigate } = useNavigationHooks<any>();
  return (
    <Button
      onPress={() => {
        if (action) action();
        else navigate(screenName, params);
      }}
      haptic="impactLight"
      style={[styles.item, style, { borderBottomWidth: withBorderBottom ? 1 : 0 }]}
      containerStyle={styles.container}>
      <View style={styles.itemTitleAndIcon}>
        <Icon color={'#CBD0D6'} width={scale(20)} height={scale(18)} name={icon} />
        <Text fontSize="FS14" style={styles.itemTitle}>
          {title}
        </Text>
      </View>
      <Icon
        rotate={isRTL ? 'right' : 'left'}
        width={scale(14.76)}
        height={scale(14)}
        color={Colors.LIGHT_GRAY}
        name="arrow-back"
      />
    </Button>
  );
};
export default SettingRow;
