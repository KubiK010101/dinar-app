/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Platform, View } from 'react-native';
import { Button, Input, Text, RegistrationTemplate } from '@component';
import styles from './styles';
import { useLoader, useNavigationHooks } from '@hooks';
import { MainAppStackTypes } from '@navigation';
import { useFormik } from 'formik';
import { LoginTypes } from '@types';
import { isTestAccount, loginValidation } from '@helpers';
import { login } from '@actions';
import { useTranslation } from 'react-i18next';
import deviceInfoModule from 'react-native-device-info';
import { clearEmail, getQueryData, AuthStateTypes } from '@query';

function Login() {
  const { navigate } = useNavigationHooks<MainAppStackTypes>();
  const _email = getQueryData<AuthStateTypes>('auth').email;
  const { t } = useTranslation();
  const {
    values: { email, password },
    errors,
    handleSubmit,
    setFieldValue,
  } = useFormik<LoginTypes>({
    validationSchema: loginValidation,
    initialValues: {
      // email: "Ahmad@dinar.sa",
      // password: "Dinar7720@"
      email: _email,
      password: '',
    },
    validateOnChange: false,
    onSubmit: values => onLogin(values),
  });
  const isLoading = useLoader('login');
  const onLogin = (data: LoginTypes) => {
    isTestAccount(data.email);
    //Send the platform parameter to prevent the fundraisers & institutions from using the app
    login({ ...data, platform: Platform.OS }, res => {
      if (res.ok && res.data?.data)
        navigate('VerificationCode', {
          flow: {
            type: 'loginOtp',
            params: { uuid: res.data?.data.uuid, email, password },
          },
        });
    });
  };

  const onEditEmail = async () => {
    clearEmail();
    setFieldValue('email', '');
  };

  return (
    <RegistrationTemplate icon={'key'} title={t('login.welcomeMessage')}>
      <Input
        value={email}
        error={errors.email}
        onChangeText={text => {
          if (!_email) setFieldValue('email', text.split(' ').join(''));
        }}
        onEdit={onEditEmail}
        widthEditButton={_email ? true : false}
        icon="email"
        label={t('login.email')}
        placeholder={t('login.email')}
      />

      <Input
        value={password}
        error={errors.password}
        onChangeText={text => setFieldValue('password', text)}
        icon="lock"
        passowrd
        label={t('login.password')}
        placeholder={t('login.password')}
      />

      <View style={styles.termsView}>
        <Button
          haptic="impactLight"
          onPress={() => navigate('ForgotPassword')}
          textStyle={{ fontFamily: 'Bold' }}
          style={styles.termsAndConditionButton}
          text={t('login.forgotPassword')}
        />
      </View>

      <Button
        isLoading={isLoading}
        haptic="impactLight"
        onPress={handleSubmit}
        style={styles.registerButton}
        type="standard"
        text={t('login.signIn')}
      />

      <View style={styles.haveAnAccountViewContainer}>
        <View style={styles.haveAnAccountView}>
          <Text color="LIGHT_BLUE">{t('login.haveAnAccount')}</Text>
          <Button
            onPress={() => navigate('Register')}
            haptic="impactLight"
            textStyle={{
              fontFamily: 'Medium',
            }}
            style={styles.signinButton}
            text={t('login.register')}
          />
        </View>
      </View>
      <Text style={styles.versionAndBuildNumber} fontSize="FS14" color="LIGHT_BLUE">
        {`${deviceInfoModule.getReadableVersion()}`}
      </Text>
    </RegistrationTemplate>
  );
}

export default Login;
