import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view';
import { useFormik } from 'formik';
import React from 'react';
import { View } from 'react-native';
import { Button, Header, Input } from '@component';
import { updateEmailValidation } from '@helpers';
import { useLoader, useNavigationHooks } from '@hooks';
import { MainAppStackTypes } from '@navigation';
import { updateEmail } from '@actions';
import styles from './styles';
import { useTranslation } from 'react-i18next';
import { AuthStateTypes, getQueryData } from '@query';

function EditEmail() {
  const { navigate } = useNavigationHooks<MainAppStackTypes>();
  const isLoading = useLoader('updateEmail');
  const { profile } = getQueryData<AuthStateTypes>('auth');
  const { t } = useTranslation();
  const {
    values: { email },
    errors,
    handleSubmit,
    setFieldValue,
  } = useFormik<{ email: string }>({
    validationSchema: updateEmailValidation,
    initialValues: {
      email: profile?.email || '',
    },
    validateOnChange: false,
    onSubmit: values => onUpdate(values),
  });

  const onUpdate = (data: { email: string }) => {
    updateEmail(data, res => {
      if (res.ok)
        navigate('VerificationCode', {
          flow: {
            type: 'verifyEmail',
            params: {
              processId: res.data?.data.processId,
            },
          },
        });
    });
  };

  return (
    <View style={styles.container}>
      <Header type="simple" title={t('editEmail.title')} />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        style={styles.flatlist}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}>
        <Input
          autoFocus
          onChangeText={text => setFieldValue('email', text.split(' ').join(''))}
          error={errors.email}
          value={email}
          label={t('login.email')}
          placeholder={t('login.email')}
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

export default EditEmail;
