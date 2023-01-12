/* eslint-disable react-native/no-inline-styles */
import React, { useRef } from 'react';
import { View } from 'react-native';
import styles from './styles';
import { useLoader, useNavigationHooks } from '@hooks';
import { MainAppStackTypes } from '@navigation';
import { Button, Header, KYCQuestion, Text, ListModal } from '@component';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view';
import { useFormik } from 'formik';
import { UpdateIndividualIncomesInfoKycTypes } from '@types';
import { individualIncomesInfoKycTypesValidation, trackEvent } from '@helpers';
import { RouteProp, useRoute } from '@react-navigation/native';
import { getMyAccountInfo, getNationalAddresses, updateIndividualKyc } from '@actions';
import { appData } from '@config';
import { useTranslation } from 'react-i18next';

function RegisterKycStep2() {
  const {
    params: { nationalAddress },
  } = useRoute<RouteProp<MainAppStackTypes, 'RegisterKycStep2'>>();
  const { values, errors, handleSubmit, setFieldValue } =
    useFormik<UpdateIndividualIncomesInfoKycTypes>({
      validationSchema: individualIncomesInfoKycTypesValidation,
      initialValues: {
        academicDegree: '',
        annualIncome: '',
        assetAmount: '',
        employerName: ' ',
        hasAnyExperianceOnFinanceSector: null,
        hasWorkedInFinanceSectorLastFiveYears: null,
        isCurrentlyEmployee: true,
        isIndividualHighProfileEmployee: null,
        isIndividualLeaderInEnrolledCompany: null,
        isIndividualRelatedToHighProfileEmployee: null,
        isIndividualRelatedToLeaderInEnrolledCompany: null,
        // isIndividualTheRealBeneficiary: true,
        jobTitle: '',
        jobYears: '',
        // realBeneficiaryName: "",
        // realBeneficiaryNin: ""
      },
      validateOnChange: false,
      onSubmit: _values => onContinue(),
    });
  const isLoading = useLoader('updateIndividualKyc');
  const onContinue = () => {
    updateIndividualKyc({ ...values, ...nationalAddress }, res => {
      if (res.ok)
        getMyAccountInfo(_info => {
          getNationalAddresses();
          trackEvent('completekyc');
          replace('KYCSuccessful');
        });
    });
  };
  const { replace } = useNavigationHooks<MainAppStackTypes>();
  const { t, i18n } = useTranslation();
  const academicDegreeModalRef = useRef<BottomSheetModal>(null);
  const annualIncomeModalRef = useRef<BottomSheetModal>(null);
  const assetAmountModalRef = useRef<BottomSheetModal>(null);

  // const [showBeneficiaryInfo, setShowBeneficiaryInfo] = useState(false)

  const onSelectedValue = (key: 'academicDegree' | 'annualIncome' | 'assetAmount', data: any) => {
    setFieldValue(key, data.key);
    academicDegreeModalRef.current?.close();
  };

  const onOpenListModal = (modalType: 'academicDegree' | 'annualIncome' | 'assetAmount') => {
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
      question: i18n.t('registerKycStep2.questionsData.question1'),
      value: values.hasWorkedInFinanceSectorLastFiveYears,
    },
    {
      id: 2,
      key: 'hasAnyExperianceOnFinanceSector',
      question: i18n.t('registerKycStep2.questionsData.question2'),
      value: values.hasAnyExperianceOnFinanceSector,
    },
    {
      id: 3,
      key: 'isIndividualLeaderInEnrolledCompany',
      question: i18n.t('registerKycStep2.questionsData.question3'),
      value: values.isIndividualLeaderInEnrolledCompany,
    },
    {
      id: 4,
      key: 'isIndividualRelatedToLeaderInEnrolledCompany',
      question: i18n.t('registerKycStep2.questionsData.question4'),
      value: values.isIndividualRelatedToLeaderInEnrolledCompany,
    },
    {
      id: 5,
      key: 'isIndividualHighProfileEmployee',
      question: i18n.t('registerKycStep2.questionsData.question5'),
      value: values.isIndividualHighProfileEmployee,
    },
    {
      id: 6,
      key: 'isIndividualRelatedToHighProfileEmployee',
      question: i18n.t('registerKycStep2.questionsData.question6'),
      value: values.isIndividualRelatedToHighProfileEmployee,
    },
  ];

  return (
    <View style={styles.container}>
      <Header title={t('registerKycStep2.header')} type="simple" />

      <KeyboardAwareScrollView
        style={{ width: '100%' }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        <Text fontFamily="Bold" style={styles.stepTitle}>
          {t('registerKycStep2.title')}
        </Text>
        <Text style={styles.title} fontFamily="Bold" fontSize="FS24">
          {t('registerKycStep2.incomeData')}
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
            key={`KYCQuestion${index}`}
            value={quition.value}
            onReply={reply => {
              setFieldValue(quition.key, reply);
            }}
            text={quition.question}
          />
        ))}

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
        snapPoints={['40%']}
        title={t('registerKycStep2.academicDegree')}
        data={appData.academicDegreeData}
        onSelected={value => onSelectedValue('academicDegree', value)}
        forwardRef={academicDegreeModalRef}
      />
      <ListModal
        snapPoints={['40%']}
        title={t('registerKycStep2.annualIncome')}
        data={appData.annualIncomeData}
        onSelected={value => onSelectedValue('annualIncome', value)}
        forwardRef={annualIncomeModalRef}
      />
      <ListModal
        snapPoints={['40%']}
        title={t('registerKycStep2.assetAmount')}
        data={appData.assetAmountData}
        onSelected={value => onSelectedValue('assetAmount', value)}
        forwardRef={assetAmountModalRef}
      />
    </View>
  );
}

export default RegisterKycStep2;
