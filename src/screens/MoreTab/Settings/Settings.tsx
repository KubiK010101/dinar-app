import React from 'react';

import { View } from 'react-native';
import styles from './styles';
import { Card, Header, SettingRow } from '@component';
import { MainNavigationAllScreensTypes } from '@navigation';
import { IconsName } from '@assets';
import { useTranslation } from 'react-i18next';
import { appFetchers } from '@config';

type SettingsProps = {};
function Settings({}: SettingsProps) {
  const { t } = useTranslation();
  const list: {
    screenName: keyof MainNavigationAllScreensTypes;
    title: string;
    icon: IconsName;
  }[] = [
    {
      icon: 'notifications',
      screenName: 'NotificationSetting',
      title: t('settings.notificationTitle'),
    },
    {
      icon: 'lock',
      screenName: 'ChangePassword',
      title: t('settings.passwordTitle'),
    },
  ];

  if (appFetchers.multi_language)
    list.push({
      icon: 'settings',
      screenName: 'Language',
      title: t('settings.languageTitle'),
    });
  return (
    <View style={styles.container}>
      <Header type="simple" title={t('settings.title')} />
      <Card style={styles.content}>
        {list.map((row, index) => (
          <SettingRow
            key={`SettingRow_${index}`}
            {...row}
            withBorderBottom={index !== list.length - 1}
          />
        ))}
      </Card>
    </View>
  );
}

export default Settings;
