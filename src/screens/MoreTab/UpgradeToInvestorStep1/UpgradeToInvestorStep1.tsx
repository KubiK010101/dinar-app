/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';
import { Alert, Button, Header, Text, TextPoint } from '@component';
import { spacing } from '@config';
import { useLoader, useNavigationHooks } from '@hooks';
import { MoreStackTypes } from '@navigation';
import { getAllReasons, getIndividualUpgradeProcess, startIndividualUpgrade } from '@actions';
import { useTranslation } from 'react-i18next';
import styles from './styles';
import { AuthStateTypes, getQueryData } from '@query';

function UpgradeToInvestorStep1() {
  const { navigate } = useNavigationHooks<MoreStackTypes>();
  const isLoading = useLoader('startIndividualUpgrade');
  const isLoadingReasons = useLoader('getAllReasons');
  const { individualUpgradeProcess, myAccountInfo } = getQueryData<AuthStateTypes>('auth');
  const isUpgraded = myAccountInfo?.isInvestorUpgraded;
  const { t } = useTranslation();

  const onStart = () => {
    getAllReasons(_res => {
      startIndividualUpgrade(res => {
        if (res.ok) {
          navigate('UpgradeToInvestorStep2');
        } else {
          getIndividualUpgradeProcess(__res => {
            if (__res.ok) {
              navigate('UpgradeToInvestorStep2');
            }
          });
        }
      });
    });
  };

  return (
    <View style={styles.container}>
      <Header type="simple" title={t('upgradeToInvestor1.title')} />
      {isUpgraded ? (
        <View style={{ width: '100%', alignItems: 'center' }}>
          <Alert type="success" text={t('upgradeToInvestor1.successAlert')} />
        </View>
      ) : (
        <View style={styles.content}>
          {individualUpgradeProcess?.approvalStatus === 'SUBMITTED' && (
            <Alert type="success" text={t('upgradeToInvestor1.submittedAlert')} />
          )}

          <Text color="GRAY" fontSize="FS11" style={{ textAlign: 'left', marginTop: spacing.S20 }}>
            {t('upgradeToInvestor1.description')}
          </Text>

          <Text fontSize="FS14" style={styles.pointsTitle}>
            {t('upgradeToInvestor1.limitsListTitle')}
          </Text>

          {[t('upgradeToInvestor1.limit1'), t('upgradeToInvestor1.limit2')].map((point, index) => (
            <TextPoint key={`${index}`} text={point} />
          ))}

          {individualUpgradeProcess?.approvalStatus !== 'SUBMITTED' && (
            <Button
              isLoading={isLoading || isLoadingReasons}
              onPress={onStart}
              text={t('upgradeToInvestor1.button')}
              type="standard"
              containerStyle={styles.continueButton}
            />
          )}
        </View>
      )}
    </View>
  );
}

export default UpgradeToInvestorStep1;
