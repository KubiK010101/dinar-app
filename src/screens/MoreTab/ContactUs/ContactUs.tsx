/* eslint-disable react-native/no-inline-styles */
import React, { useRef } from 'react';
import { Keyboard, View } from 'react-native';
import styles from './styles';
import { Button, Header, Input, ListModal } from '@component';
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useLoader, useNavigationHooks } from '@hooks';
import { ContactUsTypes } from '@types';
import { contactusValidation, CustomToast } from '@helpers';
import { useFormik } from 'formik';
import { contactUs } from '@actions';
import { useTranslation } from 'react-i18next';
import { AuthStateTypes, getQueryData } from '@query';

function ContactUs() {
  const { t } = useTranslation();
  const contactTypesModalRef = useRef<BottomSheetModal>(null);
  const { goBack } = useNavigationHooks();
  const { profile } = getQueryData<AuthStateTypes>('auth');

  const {
    values: { contactType, email, message },
    errors,
    handleSubmit,
    setFieldValue,
  } = useFormik<ContactUsTypes>({
    validationSchema: contactusValidation,
    initialValues: {
      contactType: '',
      email: `${profile?.email}`,
      message: '',
    },
    validateOnChange: false,
    onSubmit: values => onContact(values),
  });

  const isLoading = useLoader('contactUs');

  const onContact = (data: ContactUsTypes) => {
    contactUs(data, res => {
      if (res.ok) {
        CustomToast(t('contactUs.successAlert'), 'success');
        goBack();
      }
    });
  };

  return (
    <View style={styles.container}>
      <Header title={t('contactUs.title')} type="simple" />

      <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
        <Button
          error={errors.contactType}
          value={contactType}
          onPress={() => {
            Keyboard.dismiss();
            contactTypesModalRef.current?.present();
          }}
          type="dropdown"
          label={t('contactUs.contactType')}
          rightIcon="arrow-back"
          iconStyle={{ rotate: 'top' }}
          placeholder={t('contactUs.contactType')}
        />

        {!profile?.email && (
          <Input
            onChangeText={text => setFieldValue('email', text)}
            value={email}
            error={errors.email}
            placeholder={t('contactUs.email')}
            label={t('contactUs.email')}
          />
        )}

        <Input
          onChangeText={text => setFieldValue('message', text)}
          value={message}
          error={errors.message}
          multiline
          inputViewStyle={styles.inputViewStyle}
          placeholder={t('contactUs.message')}
          label={t('contactUs.message')}
        />

        <Button
          isLoading={isLoading}
          onPress={handleSubmit}
          text={t('contactUs.sendButton')}
          type="standard"
          style={styles.sendButton}
        />
      </KeyboardAwareScrollView>

      <ListModal
        onSelected={value => setFieldValue('contactType', value)}
        title={t('contactUs.contactType')}
        data={[
          t('contactUs.contactType1'),
          t('contactUs.contactType2'),
          t('contactUs.contactType3'),
          t('contactUs.contactType4'),
          t('contactUs.contactType5'),
          t('contactUs.contactType6'),
        ]}
        forwardRef={contactTypesModalRef}
      />
    </View>
  );
}

export default ContactUs;
