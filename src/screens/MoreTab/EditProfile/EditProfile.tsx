import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view';
import { useFormik } from 'formik';
import React from 'react';
import { View } from 'react-native';
import { UpdateProfileTypes } from '@types';
import { Alert, Button, Header, Input } from '@component';
import { CustomToast, updateProfileValidation } from '@helpers';
import { useLoader, useNavigationHooks } from '@hooks';
import { MainAppStackTypes } from '@navigation';
import { updateEmail, updatePhoneNumber } from '@actions';
import styles from './styles';
import { useTranslation } from 'react-i18next';
import { AuthStateTypes, getQueryData } from '@query';

function EditProfile() {
  const { t } = useTranslation();
  const { goBack, navigate } = useNavigationHooks<MainAppStackTypes>();
  const { profile } = getQueryData<AuthStateTypes>('auth');
  const isLoadingUpdateEmail = useLoader('updateEmail');
  const isLoadingUpdatePhoneNumber = useLoader('updatePhoneNumber');

  const {
    values: { email, mobileNo, name },
    errors,
    handleSubmit,
    setFieldValue,
  } = useFormik<UpdateProfileTypes>({
    validationSchema: updateProfileValidation,
    initialValues: {
      name: `${profile?.displayName}`,
      mobileNo: `${profile?.mobileNumber}`,
      email: `${profile?.email}`,
    },
    validateOnChange: false,
    onSubmit: values => onUpdate(values),
  });

  const onUpdate = (_data: UpdateProfileTypes) => {
    if (mobileNo !== profile?.mobileNumber && email !== profile?.email) {
      CustomToast(t('editProfile.message'), 'info');
    } else {
      if (mobileNo !== profile.mobileNumber) {
        updatePhoneNumber({ mobileNo }, res => {
          if (res.ok)
            navigate('VerificationCode', {
              flow: { type: 'verifyPhoneNumber', params: { processId: res.data?.data.processId } },
            });
        });
      } else if (email !== profile.email) {
        updateEmail({ email }, res => {
          if (res.ok)
            navigate('VerificationCode', {
              flow: { type: 'verifyEmail', params: { processId: res.data?.data.processId } },
            });
        });
      } else goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Header type="simple" title={t('editProfile.title')} />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        style={styles.flatlist}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}>
        <Input
          editable={false}
          onChangeText={text => setFieldValue('name', text)}
          error={errors.name}
          value={name}
          label={t('myProfile.name')}
          placeholder={t('myProfile.name')}
        />

        <Input
          keyboardType="number-pad"
          maxLength={10}
          onChangeText={text => setFieldValue('mobileNo', text)}
          error={errors.mobileNo}
          value={mobileNo}
          phone
          label={t('myProfile.phone')}
          placeholder="05xxxxxxxxx"
        />

        <Input
          onChangeText={text => setFieldValue('email', text)}
          error={errors.email}
          value={email}
          label={t('myProfile.email')}
          placeholder={t('myProfile.email')}
        />
        <Alert style={styles.alert} text={t('editProfile.verMessage')} />
        <Button
          isLoading={isLoadingUpdateEmail || isLoadingUpdatePhoneNumber}
          onPress={handleSubmit}
          text={t('editProfile.updateButton')}
          type="standard"
          style={styles.updateButton}
        />
      </KeyboardAwareScrollView>
    </View>
  );
}

export default EditProfile;
