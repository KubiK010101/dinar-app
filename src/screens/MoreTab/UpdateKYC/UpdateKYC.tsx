/* eslint-disable react-native/no-inline-styles */
import React, { useRef } from 'react';
import { Keyboard, View } from 'react-native';
import styles from './styles';
import { useLoader, useNavigationHooks } from '@hooks';
import { MainAppStackTypes } from '@navigation';
import { Button, Header, Input, KYCQuestion, Text, ListModal } from '@component';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view';
import { NationalAddressTypes, UpdateIndividualIncomesInfoKycTypes } from '@types';
import { useFormik } from 'formik';
import { individualIncomesInfoKycTypesValidation, nationalAddressValidation } from '@helpers';
import { getMyAccountInfo, updateIndividualKyc } from '@actions';
import { appData } from '@config';
import { useTranslation } from 'react-i18next';
import { AuthStateTypes, getQueryData } from '@query';

type UpdateKYCProps = {};
function UpdateKYC({}: UpdateKYCProps) {
  const { goBack } = useNavigationHooks<MainAppStackTypes>();
  const { myAccountInfo, nationalAddresses } = getQueryData<AuthStateTypes>('auth');
  const { t } = useTranslation();
  const Kyc = myAccountInfo?.investorIndividualKyc;
  const academicDegreeModalRef = useRef<BottomSheetModal>(null);
  const annualIncomeModalRef = useRef<BottomSheetModal>(null);
  const assetAmountModalRef = useRef<BottomSheetModal>(null);
  const listModalRef = useRef<BottomSheetModal>(null);
  const { values, errors, handleSubmit, setFieldValue } = useFormik<
    UpdateIndividualIncomesInfoKycTypes & NationalAddressTypes
  >({
    validationSchema: individualIncomesInfoKycTypesValidation.concat(nationalAddressValidation),
    initialValues: {
      academicDegree: `${Kyc?.academicDegree || ''}`,
      annualIncome: `${Kyc?.annualIncome || ''}`,
      assetAmount: `${Kyc?.assetAmount || ''}`,
      employerName: `${'  '}`,
      hasAnyExperianceOnFinanceSector: Kyc?.hasAnyExperianceOnFinanceSector || false,
      hasWorkedInFinanceSectorLastFiveYears: Kyc?.hasWorkedInFinanceSectorLastFiveYears || false,
      isCurrentlyEmployee: Kyc?.isCurrentlyEmployee || false,
      isIndividualHighProfileEmployee: Kyc?.isIndividualHighProfileEmployee || false,
      isIndividualLeaderInEnrolledCompany: Kyc?.isIndividualLeaderInEnrolledCompany || false,
      isIndividualRelatedToHighProfileEmployee:
        Kyc?.isIndividualRelatedToHighProfileEmployee || false,
      isIndividualRelatedToLeaderInEnrolledCompany:
        Kyc?.isIndividualRelatedToLeaderInEnrolledCompany || false,
      // isIndividualTheRealBeneficiary: Kyc?.isIndividualTheRealBeneficiary || false,
      jobTitle: `${Kyc?.jobTitle || ''}`,
      jobYears: `${Kyc?.jobTitle || ''}`,
      city: `${myAccountInfo?.address?.city || ''}`,
      streetName: `${myAccountInfo?.address?.streetName || ''}`,
      district: `${myAccountInfo?.address?.district || ''}`,
      hasAgreedToWikala: true,
      buildingNumber: `${''}`,
      postCode: `${myAccountInfo?.address?.postCode || ''}`,
      additionalNumber: `${myAccountInfo?.address?.additionalNumber || ''}`,
      // realBeneficiaryName: `${Kyc?.realBeneficiaryName || ""}`,
      // realBeneficiaryNin: `${Kyc?.realBeneficiaryNin || ""}`,
    },
    validateOnChange: false,
    onSubmit: _values => onUpdate(_values),
  });

  const isLoading = useLoader('updateIndividualKyc');

  const onUpdate = (data: any) => {
    updateIndividualKyc(data, res => {
      if (res.ok)
        getMyAccountInfo(_info => {
          goBack();
        });
    });
  };

  const onSelectedValue = (key: 'academicDegree' | 'annualIncome' | 'assetAmount', data: any) => {
    setFieldValue(key, data.key);
    academicDegreeModalRef.current?.close();
  };

  const onOpenListModal = (modalType: 'academicDegree' | 'annualIncome' | 'assetAmount') => {
    Keyboard.dismiss();
    switch (modalType) {
      case 'academicDegree':
        return academicDegreeModalRef.current?.present();
      case 'annualIncome':
        return annualIncomeModalRef.current?.present();
      case 'assetAmount':
        return assetAmountModalRef.current?.present();
      default:
        return;
    }
  };

  const questionsData = [
    {
      id: 1,
      key: 'hasWorkedInFinanceSectorLastFiveYears',
      question: t('viewKYC.questions.question1'),
      value: values.hasWorkedInFinanceSectorLastFiveYears,
    },
    {
      id: 2,
      key: 'hasAnyExperianceOnFinanceSector',
      question: t('viewKYC.questions.question2'),
      value: values.hasAnyExperianceOnFinanceSector,
    },
    {
      id: 3,
      key: 'isIndividualLeaderInEnrolledCompany',
      question: t('viewKYC.questions.question3'),
      value: values.isIndividualLeaderInEnrolledCompany,
    },
    {
      id: 4,
      key: 'isIndividualRelatedToLeaderInEnrolledCompany',
      question: t('viewKYC.questions.question4'),
      value: values.isIndividualRelatedToLeaderInEnrolledCompany,
    },
    {
      id: 5,
      key: 'isIndividualHighProfileEmployee',
      question: t('viewKYC.questions.question5'),
      value: values.isIndividualHighProfileEmployee,
    },
    {
      id: 6,
      key: 'isIndividualRelatedToHighProfileEmployee',
      question: t('viewKYC.questions.question6'),
      value: values.isIndividualRelatedToHighProfileEmployee,
    },
    // {
    //   id: 7,
    //   key: "isIndividualTheRealBeneficiary",
    //   question: `هل العميل هو المستفيد الحقيقي من الحساب أو علاقة العمل؟`,
    //   value: values.isIndividualTheRealBeneficiary,
    // },
  ];

  const onSelectedCity = () => {
    listModalRef.current?.present();
  };
  const cities = nationalAddresses.map(item => {
    return { name: item.city, id: item.additionalNumber };
  });

  const onSelected = (selectedItem: any) => {
    let city = nationalAddresses.find(
      (item: NationalAddressTypes) => item.additionalNumber === selectedItem.id,
    );
    // if (city) resetForm({ values: { ...city,streetName: city?.streetName || "" } })
    setFieldValue('city', city?.city || '');
    setFieldValue('streetName', city?.streetName || '');
    setFieldValue('district', city?.district || '');
    setFieldValue('additionalNumber', city?.additionalNumber || '');
    listModalRef.current?.close();
  };

  return (
    <View style={styles.container}>
      <Header title={t('viewKYC.header')} type="simple" />

      <KeyboardAwareScrollView
        style={{ width: '100%' }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        <Text style={styles.title} color="GREEN" fontSize="FS16">
          {t('viewKYC.addressTitle')}
        </Text>

        {nationalAddresses.length ? (
          <Button
            value={values.city}
            error={errors.city}
            isRequired
            haptic="impactLight"
            onPress={onSelectedCity}
            label={t('viewKYC.addressInfo.title1')}
            text={t('registerKycStep1.continue')}
            placeholder={t('viewKYC.addressInfo.title1')}
            type="dropdown"
            rightIcon="arrow-back"
            iconStyle={{ rotate: 'top' }}
          />
        ) : (
          <Input
            isRequired
            onChangeText={text => setFieldValue('city', text)}
            value={values.city}
            error={errors.city}
            label={t('viewKYC.addressInfo.title1')}
            placeholder={t('viewKYC.addressInfo.title1')}
          />
        )}

        <Input
          editable={
            !nationalAddresses.find(element => element.additionalNumber === values.additionalNumber)
              ?.district
          }
          isRequired
          onChangeText={text => setFieldValue('district', text)}
          value={values.district}
          error={errors.district}
          label={t('viewKYC.addressInfo.title2')}
          placeholder={t('viewKYC.addressInfo.title2')}
        />

        <Input
          editable={
            !nationalAddresses.find(element => element.additionalNumber === values.additionalNumber)
              ?.streetName
          }
          onChangeText={text => setFieldValue('streetName', text)}
          value={values.streetName}
          error={errors.streetName}
          label={t('viewKYC.addressInfo.title3')}
          placeholder={t('viewKYC.addressInfo.title3')}
        />

        <Text style={styles.title} color="GREEN" fontSize="FS16">
          {t('viewKYC.incomeDetailsTitle')}
        </Text>

        <Button
          isRequired
          value={
            appData.academicDegreeData.find(value => value.key === values.academicDegree)?.name
          }
          haptic="impactLight"
          error={errors.academicDegree}
          onPress={() => onOpenListModal('academicDegree')}
          label={t('registerKycStep2.academicDegree')}
          placeholder={t('registerKycStep2.academicDegree')}
          type="dropdown"
          rightIcon="arrow-back"
          iconStyle={{ rotate: 'top' }}
        />

        <Button
          isRequired
          value={appData.annualIncomeData.find(value => value.key === values.annualIncome)?.name}
          haptic="impactLight"
          error={errors.annualIncome}
          onPress={() => onOpenListModal('annualIncome')}
          label={t('registerKycStep2.annualIncome')}
          placeholder={t('registerKycStep2.annualIncome')}
          type="dropdown"
          rightIcon="arrow-back"
          iconStyle={{ rotate: 'top' }}
        />

        <Button
          isRequired
          value={appData.assetAmountData.find(value => value.key === values.assetAmount)?.name}
          haptic="impactLight"
          error={errors.assetAmount}
          onPress={() => onOpenListModal('assetAmount')}
          label={t('registerKycStep2.assetAmount')}
          placeholder={t('registerKycStep2.assetAmount')}
          type="dropdown"
          rightIcon="arrow-back"
          iconStyle={{ rotate: 'top' }}
        />
        {/* Real name of the beneficiary */}
        {/* questions Data  */}
        {questionsData.map((quition, index) => (
          <KYCQuestion
            key={`QuestionsData_${index}`}
            value={quition.value}
            onReply={reply => {
              setFieldValue(quition.key, reply);
            }}
            text={quition.question}
          />
        ))}

        {/* {values.isIndividualTheRealBeneficiary === false && (
          <>
            <Input
              onChangeText={(text) => setFieldValue("realBeneficiaryName", text)}
              value={values.realBeneficiaryName}
              error={errors.realBeneficiaryName}

              label="اسم المستفيد الحقيقي"
              placeholder="اسم المستفيد الحقيقي"
            />
            <Input
              onChangeText={(text) => setFieldValue("realBeneficiaryNin", text)}
              value={values.realBeneficiaryNin}
              error={errors.realBeneficiaryNin}

              label="رقم هوية المستفيد الحقيقي"
              placeholder="رقم هوية المستفيد الحقيقي"
            />
          </>
        )} */}

        <Button
          isLoading={isLoading}
          haptic="impactLight"
          onPress={handleSubmit}
          style={styles.nextButton}
          text={t('registerKycStep2.save')}
          type="standard"
        />
      </KeyboardAwareScrollView>
      <ListModal
        defaultIndex={cities.findIndex(element => element.id === values.additionalNumber)}
        snapPoints={['50%']}
        title={t('registerKycStep1.city')}
        data={cities}
        onSelected={onSelected}
        forwardRef={listModalRef}
      />
      <ListModal
        defaultIndex={appData.academicDegreeData.findIndex(
          value => value.key === values.academicDegree,
        )}
        snapPoints={['40%']}
        title={t('registerKycStep2.academicDegree')}
        data={appData.academicDegreeData}
        onSelected={value => onSelectedValue('academicDegree', value)}
        forwardRef={academicDegreeModalRef}
      />
      <ListModal
        defaultIndex={appData.annualIncomeData.findIndex(
          value => value.key === values.annualIncome,
        )}
        snapPoints={['40%']}
        title={t('registerKycStep2.annualIncome')}
        data={appData.annualIncomeData}
        onSelected={value => onSelectedValue('annualIncome', value)}
        forwardRef={annualIncomeModalRef}
      />

      <ListModal
        defaultIndex={appData.assetAmountData.findIndex(value => value.key === values.assetAmount)}
        snapPoints={['40%']}
        title={t('registerKycStep2.assetAmount')}
        data={appData.assetAmountData}
        onSelected={value => onSelectedValue('assetAmount', value)}
        forwardRef={assetAmountModalRef}
      />
    </View>
  );
}

export default UpdateKYC;
