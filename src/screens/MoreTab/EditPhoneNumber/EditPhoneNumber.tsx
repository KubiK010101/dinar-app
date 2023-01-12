import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view';
import { useFormik } from 'formik';
import React from 'react';
import { View } from 'react-native';
import { Button, Header, Input } from '@component';
import { updateMobileNoValidation } from '@helpers';
import { useLoader, useNavigationHooks } from '@hooks';
import { MainAppStackTypes } from '@navigation';
import { updatePhoneNumber } from '@actions';
import styles from './styles';
import { useTranslation } from 'react-i18next';
import { getQueryData, AuthStateTypes } from '@query';

function EditPhoneNumber() {
  const { navigate } = useNavigationHooks<MainAppStackTypes>();
  const isLoading = useLoader('updatePhoneNumber');
  const { profile } = getQueryData<AuthStateTypes>('auth');
  const { t } = useTranslation();
  const {
    values: { mobileNo },
    errors,
    handleSubmit,
    setFieldValue,
  } = useFormik<{ mobileNo: string }>({
    validationSchema: updateMobileNoValidation,
    initialValues: {
      mobileNo: profile?.mobileNumber || '',
    },
    validateOnChange: false,
    onSubmit: values => onUpdate(values),
  });

  const onUpdate = (data: { mobileNo: string }) => {
    updatePhoneNumber(data, res => {
      if (res.ok)
        navigate('VerificationCode', {
          flow: {
            type: 'verifyPhoneNumber',
            params: {
              processId: res.data?.data.processId,
            },
          },
        });
    });
  };

  return (
    <View style={styles.container}>
      <Header type="simple" title={t('editPhoneNumber.title')} />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        style={styles.flatlist}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}>
        <Input
          autoFocus
          keyboardType="number-pad"
          maxLength={10}
          onChangeText={text => setFieldValue('mobileNo', text)}
          error={errors.mobileNo}
          value={mobileNo}
          phone
          label={t('myProfile.phone')}
          placeholder="05xxxxxxxxx"
        />

        <Button
          isLoading={isLoading}
          onPress={handleSubmit}
          text={t('editEmail.submit')}
          type="standard"
          style={styles.updateButton}
        />
      </KeyboardAwareScrollView>
    </View>
  );
}

export default EditPhoneNumber;
