/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, DownloadButton, Header, RadioButton, Text } from '@component';
import { spacing } from '@config';
import { useLoader, useNavigationHooks } from '@hooks';
import { MainAppStackTypes } from '@navigation';
import styles from './styles';
import * as DocumentPicker from 'react-native-document-picker';
import { uploadDocumentIndividualUpgrade, submitIndividualUpgrade } from '@actions';
import { CustomToast } from '@helpers';
import { useTranslation } from 'react-i18next';
import { getQueryData, AuthStateTypes } from '@query';

function UpgradeToInvestorStep1() {
  const { navigate, goBack } = useNavigationHooks<MainAppStackTypes>();
  const { t } = useTranslation();
  const [selectedReason, setSelectedReason] = useState('');
  const [filename, setFileName] = useState(t('upgradeToInvestor2.initState').toString());
  const isLoading = useLoader('submitIndividualUpgrade');
  const { reasons } = getQueryData<AuthStateTypes>('auth');

  const onSend = () => {
    DocumentPicker.pickSingle({}).then(async (res: DocumentPicker.DocumentPickerResponse) => {
      setFileName(`${res.name}`);
      const data = new FormData();
      data.append('file', res);
      uploadDocumentIndividualUpgrade(data, _res => {});
    });
  };

  const onSubmit = () => {
    if (selectedReason === '') {
      CustomToast(t('upgradeToInvestor2.selectConditions'), 'info');
    } else if (filename === t('upgradeToInvestor2.initState'))
      CustomToast(t('upgradeToInvestor2.upload'), 'info');
    else {
      submitIndividualUpgrade({ reasonKey: selectedReason }, ({ ok }) => {
        if (ok) {
          setTimeout(() => {
            navigate('VerificationCode', { flow: { type: 'verifyIndividualUpgrade' } });
          }, 100);
          goBack();
          goBack();
        }
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header type="simple" title={t('upgradeToInvestor2.header')} />

      <View style={styles.content}>
        <Text fontSize="FS14" color="GREEN" style={styles.pointsTitle}>
          {t('upgradeToInvestor2.description')}
        </Text>
        {reasons.map((reason, index) => (
          <View
            key={`data_${index}`}
            style={{
              flexDirection: 'row',
              marginTop: spacing.S16,
            }}>
            <RadioButton
              checked={selectedReason === reason.key}
              label={''}
              onPress={() => {
                setSelectedReason(reason.key);
              }}
            />
            <Text
              style={{
                textAlign: 'left',
                flex: 1,
                paddingLeft: spacing.S10,
              }}
              color="LIGHT_BLUE"
              fontSize={'P'}>
              {reason.title}
            </Text>
          </View>
        ))}

        <DownloadButton
          onPress={onSend}
          title={t('upgradeToInvestor2.downloadButton')}
          text={filename}
        />
        <Button
          isLoading={isLoading}
          onPress={onSubmit}
          text={t('upgradeToInvestor2.requestButton')}
          type="standard"
          containerStyle={styles.continueButton}
        />
      </View>
    </View>
  );
}

export default UpgradeToInvestorStep1;
