/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, CodeInput, Header, Text } from '@component';
import styles from './styles';
import { Svgs } from '@assets';
import { useLoader, useNavigationHooks } from '@hooks';
import { MainAppStackTypes } from '@navigation';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Colors, getHeight, getWidth, scale, spacing } from '@config';
import {
  loginOtp,
  getMyAccountInfo,
  getRegistrationInfo,
  login,
  completeIndividualForm,
  getInvestmentStats,
} from '@actions';
import { useTranslation } from 'react-i18next';

type LoginOtpProps = {};

function LoginOtp({}: LoginOtpProps) {
  const [code, setCode] = useState('');
  const { replace, reset } = useNavigationHooks<MainAppStackTypes>();
  const {
    params: { uuid, email, password },
  } = useRoute<RouteProp<MainAppStackTypes, 'LoginOtp'>>();
  const isLoading = useLoader('login');
  const [_uuid, setUuid] = useState<string>(uuid);
  const { t } = useTranslation();

  const resendOtp = () => {
    login({ email, password }, res => {
      if (res.ok && res.data?.data) setUuid(res.data?.data.uuid);
    });
  };

  const onVerfiyOtp = (otp: string) => {
    loginOtp({ uuid: _uuid, code: otp }, res => {
      if (res.ok) {
        setTimeout(() => {
          getMyAccountInfo(accountInfoRes => {
            if (accountInfoRes.data?.length) {
              if (!accountInfoRes.data[0].investorIndividualKyc) replace('RegisterKycStep1');
              else {
                getInvestmentStats();
                reset({ routes: [{ name: 'TabButton' }] });
              }
            } else {
              getRegistrationInfo(registrationInfoRes => {
                if (registrationInfoRes.ok) {
                  if (
                    !registrationInfoRes.data?.registration.process.completedTasks.includes(
                      'verifyYakeen',
                    )
                  )
                    replace('RegisterCheckIdentity');
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
  };

  const onChangeText = (_code: string) => {
    if (code.length >= 3)
      setTimeout(() => {
        onVerfiyOtp(`${code}${_code}`);
      }, 100);

    if (code.length < 4 && _code !== 'x')
      setCode(_code === 'x' ? code.slice(0, code.length - 1) : `${code}` + _code);
    else if (_code === 'x') setCode(code.slice(0, code.length - 1));
  };
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Svgs name="key" />
        <Text style={styles.welcomeMessage} color="DARK_BLUE" fontFamily="Bold" fontSize="FS24">
          {t('loginOtp.message')}
        </Text>

        <View style={styles.inputContainer}>
          <CodeInput editable={false} value={code} />
          <Button
            indicatorColor={Colors.BLUE}
            isLoading={isLoading}
            textStyle={{ fontSize: 'FS16' }}
            haptic="impactLight"
            onPress={resendOtp}
            style={styles.verifyButton}
            text={t('loginOtp.button')}
          />
        </View>
      </View>

      <NumberKeyboard onChangeText={onChangeText} />
    </View>
  );
}

const NumberKeyboard = ({ onChangeText }: { onChangeText: (_value: string) => void }) => (
  <View
    style={{
      width: '100%',
      height: '35%',
      flexDirection: 'row',
      flexWrap: 'wrap',
      position: 'absolute',
      bottom: 0,
    }}>
    {[3, 2, 1, 6, 5, 4, 9, 8, 7, 'x', 0, '-'].map(num => (
      <Button
        key={`NumberKeyboard_${num}`}
        haptic="impactLight"
        iconStyle={{ height: scale(24), width: scale(32) }}
        {...(num === 'x' && { iconName: 'clear-number' })}
        text={`${num !== 'x' ? num : ''}`}
        onPress={() => onChangeText(`${num}`)}
        containerStyle={{
          alignItems: 'center',
          height: getHeight(48),
          marginTop: spacing.S12,
        }}
        style={{
          alignItems: 'center',
          width: getWidth() / 3,
          justifyContent: 'center',
          paddingVertical: 0,
          height: getHeight(48),
        }}
        textStyle={{
          fontSize: 'FS32',
          color: 'LIGHT_BLUE',
        }}
      />
    ))}
  </View>
);

export default LoginOtp;
