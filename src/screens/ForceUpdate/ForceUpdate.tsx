import React from 'react';
import { useTranslation } from 'react-i18next';
import { Linking, View } from 'react-native';
import { Maintenance, Rocket } from '@assets';
import { Button, Text } from '@component';
import { getHeight, getWidth, spacing } from '@config';
import { isIos } from '@helpers';
import { AppStateTypes, getQueryData } from '@query';
import styles from './styles';

function ForceUpdate() {
  const { t } = useTranslation();
  const { appConfig } = getQueryData<AppStateTypes>('config');
  const onUpdate = () => {
    let url = 'https://play.google.com/store';
    if (isIos())
      url = 'https://apps.apple.com/us/app/%D8%AF%D9%8A%D9%86%D8%A7%D8%B1-dinar/id6443503999';
    Linking.openURL(url);
  };
  const isMaintenance = appConfig?.maintenanceMode;
  return (
    <View style={styles.container}>
      {isMaintenance ? <Maintenance /> : <Rocket />}
      <Text
        style={{
          marginTop: getHeight(30),
        }}
        fontSize="FS18"
        fontFamily="Bold"
        color="DARK_BLUE">
        {isMaintenance ? t('update.maintenance.true') : t('update.maintenance.false')}
      </Text>
      {!isMaintenance && (
        <Text
          style={{ marginTop: spacing.S40 }}
          fontSize="P"
          fontFamily="Regular"
          color="LIGHT_BLUE">
          {t('update.newFeatures')}
        </Text>
      )}

      <Text
        style={{ marginTop: spacing.S10, paddingHorizontal: spacing.S22 }}
        fontSize="FS14"
        color="DARK_BLUE">
        {isMaintenance ? appConfig?.maintenanceMessage : appConfig?.updateMessage}
      </Text>

      {!isMaintenance && (
        <Button
          onPress={onUpdate}
          style={{
            width: getWidth(200),
            marginTop: getHeight(60),
          }}
          type="border"
          text={t('update.updateNow')}
        />
      )}
    </View>
  );
}
export default ForceUpdate;
