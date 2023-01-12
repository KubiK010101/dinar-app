/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import styles from './styles';
import { Card, Header, Switch, Text, ViewSection } from '@component';
import { getMyAccountInfo, updateNotificationSettings } from '@actions';
import { useNavigationHooks } from '@hooks';
import { useTranslation } from 'react-i18next';
import { AuthStateTypes, getQueryData } from '@query';

function NotificationSetting() {
  const notificationSettings =
    getQueryData<AuthStateTypes>('auth').myAccountInfo?.notificationSettings;
  const { goBack } = useNavigationHooks();
  const { t } = useTranslation();
  const noticationSections: {
    title: string;
    actions: {
      title: string;
      action: string;
      value: boolean;
    }[];
  }[] = [
    {
      title: t('settings.notifications.firstSection.title'),
      actions: [
        {
          title: t('settings.notifications.firstSection.actions.title1'),
          action: 'email',
          value: notificationSettings?.email || false,
        },
        {
          title: t('settings.notifications.firstSection.actions.title1'),
          action: 'sms',
          value: notificationSettings?.sms || false,
        },
      ],
    },
    {
      title: t('settings.notifications.secondSection.title'),
      actions: [
        {
          title: t('settings.notifications.secondSection.actions.title1'),
          action: 'newUnderwriting',
          value: notificationSettings?.newUnderwriting || false,
        },
        {
          title: t('settings.notifications.secondSection.actions.title2'),
          action: 'distribution',
          value: notificationSettings?.distribution || false,
        },
      ],
    },
    {
      title: t('settings.notifications.thirdSection.title'),
      actions: [
        {
          title: t('settings.notifications.thirdSection.actions.title1'),
          action: 'subscriptions',
          value: notificationSettings?.subscriptions || false,
        },
        {
          title: t('settings.notifications.thirdSection.actions.title2'),
          action: 'blogNotifications',
          value: notificationSettings?.blogNotifications || false,
        },
        {
          title: t('settings.notifications.thirdSection.actions.title3'),
          action: 'newOffers',
          value: notificationSettings?.newOffers || false,
        },
        {
          title: t('settings.notifications.thirdSection.actions.title4'),
          action: 'newProducts',
          value: notificationSettings?.newProducts || false,
        },
        {
          title: t('settings.notifications.thirdSection.actions.title5'),
          action: 'dinarNews',
          value: notificationSettings?.dinarNews || false,
        },
      ],
    },
  ];

  let [actions, setActionStatus] = useState<Record<string, boolean>>({});

  const onChange = (action: string, value: boolean) => {
    updateNotificationSettings({ [action]: value });
    setActionStatus(state => {
      return { ...state, [action]: value };
    });
  };

  useEffect(() => {
    // set values for actions
    noticationSections.map(section => {
      section.actions.map(action => {
        setActionStatus(state => {
          return { ...state, [action.action]: action.value };
        });
      });
    });
  }, []);

  const onBack = () => {
    getMyAccountInfo();
    goBack();
  };
  return (
    <View style={styles.container}>
      <Header onBack={onBack} type="simple" title={t('settings.notificationTitle')} />
      <Card style={styles.content}>
        {noticationSections.map((section, sectionIndex) => (
          <ViewSection
            key={`noticationSections_${sectionIndex}`}
            withBottomWidth={sectionIndex !== 2}
            title={section.title}>
            {section.actions.map((action, actionIndex) => (
              <View key={`actionIndex_${actionIndex}`} style={styles.notificationCard}>
                <Text style={{ flex: 1, textAlign: 'left' }} fontSize="FS14">
                  {action.title}
                </Text>
                <Switch
                  onValueChange={value => onChange(action.action, value)}
                  value={actions[action.action]}
                />
              </View>
            ))}
          </ViewSection>
        ))}
      </Card>
    </View>
  );
}

export default NotificationSetting;
