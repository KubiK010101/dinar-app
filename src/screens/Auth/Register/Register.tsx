/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import { View } from 'react-native';
import Icon from '@Icon';
import { Button, CheckBox, Header, Input, PasswordConditions, Text } from '@component';
import styles from './styles';
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view';
import { useLoader, useNavigationHooks } from '@hooks';
import { MainAppStackTypes } from '@navigation';
import { useFormik } from 'formik';
import { RegisterTypes } from '@types';
import { isTestAccount, registerValidation, validatePassword } from '@helpers';
import { register } from '@actions';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
type RegisterProps = {};

function Register({}: RegisterProps) {
  const { t } = useTranslation();

  const {
    values: { email, mobileNo, password, hasAgreedOnTacs },
    errors,
    handleSubmit,
    setFieldValue,
  } = useFormik<RegisterTypes>({
    validationSchema: registerValidation,
    initialValues: {
      email: '',
      fullName: '',
      hasAgreedOnTacs: false,
      mobileNo: '',
      password: '',
      userType: 'INVESTOR',
    },
    validateOnChange: false,
    onSubmit: values => onRegister(values),
  });
  const isLoading = useLoader('register');
  const { navigate } = useNavigationHooks<MainAppStackTypes>();
  const { params } = useRoute<RouteProp<MainAppStackTypes, 'Register'>>();

  const { conditions, strength, isValid } = validatePassword({ password, email });

  useEffect(() => {
    if (params) setFieldValue('hasAgreedOnTacs', params.agree);
  }, [params]);

  const onRegister = (values: RegisterTypes) => {
    isTestAccount(values.email);
    register({ ...values, mobileNo: `${values.mobileNo}` }, res => {
      if (res.ok)
        setTimeout(() => {
          navigate('RegisterCheckIdentity');
        }, 300);
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        style={styles.content}>
        <Icon name="key" />
        <Text style={styles.welcomeMessage} color="DARK_BLUE" fontFamily="Bold" fontSize="FS24">
          {t('registration.welcomeMessage')}
        </Text>

        <Input
          value={email}
          error={errors.email}
          onChangeText={text => setFieldValue('email', text.split(' ').join(''))}
          autoFocus
          label={t('registration.email')}
          placeholder={t('registration.email')}
        />

        <Input
          value={mobileNo}
          error={errors.mobileNo}
          onChangeText={text => setFieldValue('mobileNo', text)}
          maxLength={10}
          phone
          keyboardType="number-pad"
          label={t('registration.mobileNumber')}
          placeholder={'05xxxxxxx'}
        />

        <Input
          value={password}
          error={errors.password}
          onChangeText={text => setFieldValue('password', text)}
          passowrd
          label={t('registration.password')}
          placeholder={t('registration.password')}
        />

        <PasswordConditions conditions={conditions} strength={strength} />

        <View style={{ alignItems: 'flex-start' }}>
          <View style={styles.termsView}>
            <CheckBox
              isChecked={hasAgreedOnTacs}
              onChecked={value => setFieldValue('hasAgreedOnTacs', value)}
              label={t('registration.agree')}
            />
            <Button
              haptic="impactLight"
              onPress={() => navigate('TermsAndConditions')}
              textStyle={{ fontFamily: 'Bold', fontSize: 'FS14' }}
              style={styles.termsAndConditionButton}
              text={t('registration.termsAndConditions')}
            />
          </View>
          {errors.hasAgreedOnTacs && (
            <Text fontSize="P" color="RED">
              {errors.hasAgreedOnTacs}
            </Text>
          )}
        </View>

        <Button
          disabled={!isValid}
          isLoading={isLoading}
          haptic="impactLight"
          onPress={handleSubmit}
          style={styles.registerButton}
          type="standard"
          text={t('registration.register')}
        />

        <View style={styles.haveAnAccountViewContainer}>
          <View style={styles.haveAnAccountView}>
            <Text fontSize="FS14" color="LIGHT_BLUE">
              {t('registration.haveAnAccount')}
            </Text>
            <Button
              haptic="impactLight"
              onPress={() => navigate('Login')}
              textStyle={{
                fontFamily: 'Medium',
              }}
              style={styles.signinButton}
              text={t('registration.signIn')}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}

export default Register;
