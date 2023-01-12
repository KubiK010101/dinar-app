import React, { useEffect } from 'react';
import { Image, View } from 'react-native';
import { images } from '@assets';
import styles from './styles';
import { useNavigationHooks } from '@hooks';
import { MainAppStackTypes } from '@navigation';
import { isTestAccount, wait } from '@helpers';
import deviceInfoModule, { getBuildNumber } from 'react-native-device-info';
import { Text } from '@component';
import { AuthStateTypes, getQueryData } from '@query';
import {
  appConfig,
  getIndividualUpgradeProcess,
  getInvestmentStats,
  getMyAccountInfo,
  getNationalAddresses,
  getRegistrationInfo,
} from '@actions';

function Splash() {
  const { replace, reset } = useNavigationHooks<MainAppStackTypes>();

  useEffect(() => {
    setTimeout(() => {
      const { onboardingCompleted, token, profile, email } = getQueryData<AuthStateTypes>('auth');
      if (token) isTestAccount(`${profile?.email}`);
      appConfig(async configRes => {
        if (
          // eslint-disable-next-line radix
          (configRes.data && configRes.data?.minimumBuildNumber > parseInt(getBuildNumber())) ||
          configRes.data?.maintenanceMode
        ) {
          //  force update
          setTimeout(() => {
            reset({ routes: [{ name: 'ForceUpdate' }] });
          }, 1000);
        } else {
          if (token) {
            getMyAccountInfo(res => {
              if (res.data?.length) {
                if (!res.data[0].investorIndividualKyc) replace('RegisterKycStep1');
                else {
                  getNationalAddresses();
                  getInvestmentStats();
                  getIndividualUpgradeProcess();
                  replace('TabButton');
                }
              } else {
                getRegistrationInfo(infoRes => {
                  if (infoRes.ok) {
                    if (!infoRes.data?.registration.process.completedTasks.includes('verifyYakeen'))
                      replace('RegisterCheckIdentity');
                    else replace('Register');
                  }
                });
              }
            });
          } else {
            await wait(1000);
            replace(onboardingCompleted ? (email ? 'Login' : 'Register') : 'OnBoard');
          }
        }
      });
    }, 1);
  });

  return (
    <View style={styles.container}>
      <Image style={styles.splash} source={images.splash} />
      <Text fontSize="FS14" color="LIGHT_BLUE" style={styles.versionAndBuildNumber}>
        {`${deviceInfoModule.getReadableVersion()}`}
      </Text>
    </View>
  );
}

export default Splash;
