/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Image, View } from 'react-native';
import { Button, CodeInput, RegistrationTemplate, Text } from '@component';
import styles from './styles';
import { useLoader, useNavigationHooks } from '@hooks';
import { MainAppStackTypes } from '@navigation';
import { CustomToast, fixNumber, trackEvent } from '@helpers';
import { RouteProp, useRoute } from '@react-navigation/native';
import { images } from '@assets';
import { getHeight, getWidth } from '@config';
import { ApisTypes } from '@APIs';
import i18n from '@local';
import { useTranslation } from 'react-i18next';
import {
  completeIndividualForm,
  getIndividualUpgradeProcess,
  getInvestmentStats,
  getMyAccountInfo,
  getRegistrationInfo,
  loginOtp,
  verifyOtp,
} from '@actions';

type VerificationCodeProps = {};

function VerificationCode({}: VerificationCodeProps) {
  const [code, setCode] = useState('');
  const { replace, goBack, reset } = useNavigationHooks<MainAppStackTypes>();
  const { params } = useRoute<RouteProp<MainAppStackTypes, 'VerificationCode'>>();
  const isLoading = useLoader(params.flow.type);
  const { t } = useTranslation();
  const onChangeText = (value: string) => {
    if (value.length === 4) onVerify(value);
    setCode(fixNumber(value));
  };
  const isAbsher =
    params.flow.type === 'verifyIndividualUpgrade' ||
    params.flow.type === 'verifyBankAccount' ||
    params.flow.type === 'updateEmailVerifyAbsher' ||
    params.flow.type === 'updatePhoneNumberVerifyAbsher' ||
    params.flow.type === 'verifyIdentityOtp';
  const onSend = () => {
    if (code.length === 4) onVerify(code);
    else {
      CustomToast(t('verificationCode.description'), 'info');
    }
  };
  const onVerify = (_code: string) => {
    const data: any = { code: _code, ...params.flow?.params };

    if (params.flow.type === 'loginOtp')
      loginOtp(data, res => {
        if (res.ok) {
          trackEvent('login');
          setTimeout(() => {
            getMyAccountInfo(accountInfoRes => {
              if (accountInfoRes.data?.length) {
                if (!accountInfoRes.data[0].investorIndividualKyc) replace('RegisterKycStep1');
                else {
                  getInvestmentStats();
                  reset({ routes: [{ name: 'TabButton' }] });
                  getIndividualUpgradeProcess();
                }
              } else {
                getRegistrationInfo(registrationInfoRes => {
                  if (registrationInfoRes.ok) {
                    if (
                      !registrationInfoRes.data?.registration.process.completedTasks.includes(
                        'verifyYakeen',
                      )
                    ) {
                      replace('RegisterCheckIdentity');
                    }
                    completeIndividualForm(_res => {
                      if (_res.ok) replace('RegisterSuccessful');
                    });
                  }
                });
              }
            });
          }, 1);
        }
        setCode('');
      });
    else {
      verifyOtp(params.flow.type, data, res => {
        if (res.ok) {
          if (
            params.flow.type === 'verifyBankAccount' ||
            params.flow.type === 'updateEmailVerifyAbsher' ||
            params.flow.type === 'updatePhoneNumberVerifyAbsher'
          )
            getMyAccountInfo(_res => {
              if (_res.ok) {
                CustomToast(`${res.data?.message}`, 'success');
                goBack();
              }
            });
          else if (params.flow.type === 'verifyEmail' || params.flow.type === 'verifyPhoneNumber')
            replace('VerificationCode', {
              flow: {
                type:
                  params.flow.type === 'verifyEmail'
                    ? 'updateEmailVerifyAbsher'
                    : 'updatePhoneNumberVerifyAbsher',
                params: params.flow.params,
              },
            });
          else if (params.flow.type === 'verifyIndividualUpgrade') {
            replace('IndividualUpgradeSuccessful');
            getMyAccountInfo();
            getIndividualUpgradeProcess();
          } else
            completeIndividualForm(_res => {
              if (res.ok) replace('RegisterSuccessful');
            });
        }
        setCode('');
      });
    }
  };

  return (
    <RegistrationTemplate title={t('verificationCode.title')} icon="unlock">
      <Text fontSize="FS14" style={styles.message} color="LIGHT_BLUE">
        {getMessage(params.flow.type)}
      </Text>
      {isAbsher && (
        <View
          style={{
            width: '100%',
            alignItems: 'center',
          }}>
          <Image
            resizeMode="contain"
            source={images.abshar}
            style={{
              width: getWidth(100),
              height: getHeight(100),
            }}
          />
        </View>
      )}
      <View style={styles.inputContainer}>
        <CodeInput value={code} onChangeText={onChangeText} />
        <Button
          isLoading={isLoading}
          haptic="impactLight"
          onPress={onSend}
          style={styles.verifyButton}
          type="standard"
          text={t('verificationCode.verify')}
        />
      </View>
    </RegistrationTemplate>
  );
}

const getMessage = (type: keyof ApisTypes) => {
  switch (type) {
    case 'loginOtp':
      return i18n.t('verificationCode.loginOtp');
    case 'verifyBankAccount':
      return i18n.t('verificationCode.verifyBankAccount');
    case 'verifyEmail':
      return i18n.t('verificationCode.verifyEmail');
    case 'verifyPhoneNumber':
      return i18n.t('verificationCode.verifyPhoneNumber');
    case 'verifyIndividualUpgrade':
      return i18n.t('verificationCode.verifyIndividualUpgrade');
    case 'verifyIdentityOtp':
    case 'updateEmailVerifyAbsher':
    case 'updatePhoneNumberVerifyAbsher':
      return i18n.t('verificationCode.updatePhoneNumberVerifyAbsher');
    default:
      return '';
  }
};
export default VerificationCode;
