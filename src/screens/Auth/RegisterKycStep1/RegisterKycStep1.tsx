/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react';
import { View } from 'react-native';
import styles from './styles';
import { useLoader, useNavigationHooks } from '@hooks';
import { MainAppStackTypes } from '@navigation';
import { Button, CheckBox, FullScreenLoader, Header, Input, Text, ListModal } from '@component';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view';
import { useFormik } from 'formik';
import { NationalAddressTypes } from '@types';
import { nationalAddressValidation } from '@helpers';
import { getNationalAddresses } from '@actions';
import { useTranslation } from 'react-i18next';
import { AuthStateTypes, getQueryData } from '@query';

function RegisterKycStep1() {
  const { navigate } = useNavigationHooks<MainAppStackTypes>();
  const listModalRef = useRef<BottomSheetModal>(null);
  const { nationalAddresses } = getQueryData<AuthStateTypes>('auth');
  const isLoading = useLoader('getNationalAddresses');
  const {
    values: { city, district, streetName, hasAgreedToWikala, additionalNumber },
    errors,
    handleSubmit,
    setFieldValue,
    resetForm,
  } = useFormik<NationalAddressTypes>({
    validationSchema: nationalAddressValidation,
    initialValues: {
      city: '',
      district: '',
      buildingNumber: '',
      postCode: '',
      additionalNumber: '',
      streetName: '',
      hasAgreedToWikala: false,
    },
    validateOnChange: false,
    onSubmit: values => onContinue(values),
  });
  const { t } = useTranslation();
  useEffect(() => {
    if (nationalAddresses.length)
      resetForm({
        values: {
          ...nationalAddresses[0],
          hasAgreedToWikala,
          streetName: nationalAddresses[0].streetName || '',
        },
      });
  }, [hasAgreedToWikala]);

  useEffect(() => {
    getNationalAddresses();
  }, []);

  const onSelected = (selectedItem: any) => {
    let _city = nationalAddresses.find(
      (item: NationalAddressTypes) => item.additionalNumber === selectedItem.id,
    );
    if (_city)
      resetForm({ values: { ..._city, hasAgreedToWikala, streetName: _city?.streetName || '' } });
    listModalRef.current?.close();
  };

  const onSelectedCity = () => {
    listModalRef.current?.present();
  };

  const onContinue = (data: NationalAddressTypes) => {
    navigate('RegisterKycStep2', { nationalAddress: data });
  };
  const cities = nationalAddresses.map((item: NationalAddressTypes) => {
    return { name: item.city, id: item.additionalNumber };
  });
  return (
    <View style={styles.container}>
      <Header title={t('registerKycStep1.header')} type="simple" />
      <KeyboardAwareScrollView contentContainerStyle={styles.content}>
        <Text fontFamily="Bold">{t('registerKycStep1.title')}</Text>
        <Text style={styles.title} fontFamily="Bold" fontSize="FS24">
          {t('registerKycStep1.description')}
        </Text>

        {/* <Button
                    haptic='impactLight'
                    onPress={onSelectedCity}
                    label='الحي'
                    text='استمرار'
                    placeholder='الحي'
                    type='dropdown'
                    rightIcon='arrow-back'
                    iconStyle={{ rotate: "top" }}
                /> */}
        {nationalAddresses.length ? (
          <Button
            value={city}
            isRequired
            haptic="impactLight"
            onPress={onSelectedCity}
            label={t('registerKycStep1.city')}
            text={t('registerKycStep1.continue')}
            placeholder={t('registerKycStep1.city')}
            type="dropdown"
            rightIcon="arrow-back"
            iconStyle={{ rotate: 'top' }}
          />
        ) : (
          <Input
            isRequired
            onChangeText={text => setFieldValue('city', text)}
            value={city}
            error={errors.city}
            label={t('registerKycStep1.city')}
            placeholder={t('registerKycStep1.city')}
          />
        )}

        <Input
          editable={
            !nationalAddresses.find(
              (element: NationalAddressTypes) => element.additionalNumber === additionalNumber,
            )?.district
          }
          isRequired
          onChangeText={text => setFieldValue('district', text)}
          value={district}
          error={errors.district}
          label={t('registerKycStep1.district')}
          placeholder={t('registerKycStep1.district')}
        />

        <Input
          editable={
            !nationalAddresses.find(
              (element: NationalAddressTypes) => element.additionalNumber === additionalNumber,
            )?.streetName
          }
          onChangeText={text => setFieldValue('streetName', text)}
          value={streetName}
          error={errors.streetName}
          label={t('registerKycStep1.street')}
          placeholder={t('registerKycStep1.street')}
        />

        <View style={{ alignItems: 'flex-start' }}>
          <View style={styles.termsView}>
            <CheckBox
              isChecked={hasAgreedToWikala}
              onChecked={value => setFieldValue('hasAgreedToWikala', value)}
              label={t('registerKycStep1.agree')}
            />
            <Button
              haptic="impactLight"
              onPress={() => navigate('AgencyAgreement2')}
              textStyle={{ fontFamily: 'Bold', fontSize: 'FS14' }}
              style={styles.termsAndConditionButton}
              text={t('registerKycStep1.terms')}
            />
          </View>
          {errors.hasAgreedToWikala && (
            <Text fontSize="P" color="RED">
              {errors.hasAgreedToWikala}
            </Text>
          )}
        </View>

        <Button
          haptic="impactLight"
          onPress={handleSubmit}
          style={styles.nextButton}
          text={t('registerKycStep1.continue')}
          type="standard"
        />
      </KeyboardAwareScrollView>

      <ListModal
        snapPoints={['50%']}
        defaultIndex={cities.findIndex(element => element.id === additionalNumber)}
        title={t('registerKycStep1.city')}
        data={cities}
        onSelected={onSelected}
        forwardRef={listModalRef}
      />

      <FullScreenLoader isLoading={isLoading} />
    </View>
  );
}

export default RegisterKycStep1;
