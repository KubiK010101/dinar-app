/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { useNavigationHooks } from '@hooks';
import { MoreStackTypes } from '@navigation';
import { Card, Header, Text, TextWithValueRow } from '@component';
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view';
import { appData, HEXtoRGBA, spacing } from '@config';
import i18n from '@local';
import { getQueryData, AuthStateTypes } from '@query';

function ViewKYC() {
  const { navigate } = useNavigationHooks<MoreStackTypes>();
  const accountInfo = getQueryData<AuthStateTypes>('auth').myAccountInfo;

  const addressInfo = [
    {
      title: i18n.t('viewKYC.addressInfo.title1'),
      value: accountInfo?.address.city || '',
    },
    {
      title: i18n.t('viewKYC.addressInfo.title2'),
      value: accountInfo?.address.district || '',
    },
    {
      title: i18n.t('viewKYC.addressInfo.title3'),
      value: accountInfo?.address.streetName || '',
    },
  ];

  const incomeDetails = [
    {
      title: i18n.t('viewKYC.incomeDetails.title1'),
      value: appData.academicDegreeData.find(
        value => value.key === accountInfo?.investorIndividualKyc.academicDegree,
      )?.name,
    },
    {
      title: i18n.t('viewKYC.incomeDetails.title2'),
      value: appData.annualIncomeData.find(
        value => value.key === accountInfo?.investorIndividualKyc.annualIncome,
      )?.name,
    },
    {
      title: i18n.t('viewKYC.incomeDetails.title3'),
      value: appData.assetAmountData.find(
        value => value.key === accountInfo?.investorIndividualKyc.assetAmount,
      )?.name,
    },
  ];

  // let beneficiary = []

  // if (accountInfo?.investorIndividualKyc.realBeneficiaryName)
  //     beneficiary.push({
  //         title: "اسم المستفيد الحقيقي",
  //         value: accountInfo?.investorIndividualKyc.realBeneficiaryName || ""
  //     })

  // if (accountInfo?.investorIndividualKyc.realBeneficiaryNin)
  //     beneficiary.push({
  //         title: "رقم هوية المستفيد الحقيقي",
  //         value: accountInfo?.investorIndividualKyc.realBeneficiaryNin || ""
  //     })

  const questions = [
    {
      question: i18n.t('viewKYC.questions.question1'),
      answer: accountInfo?.investorIndividualKyc.hasWorkedInFinanceSectorLastFiveYears
        ? i18n.t('viewKYC.yes')
        : i18n.t('viewKYC.no'),
    },
    {
      question: i18n.t('viewKYC.questions.question2'),
      answer: accountInfo?.investorIndividualKyc.hasAnyExperianceOnFinanceSector
        ? i18n.t('viewKYC.yes')
        : i18n.t('viewKYC.no'),
    },
    {
      question: i18n.t('viewKYC.questions.question3'),
      answer: accountInfo?.investorIndividualKyc.isIndividualLeaderInEnrolledCompany
        ? i18n.t('viewKYC.yes')
        : i18n.t('viewKYC.no'),
    },
    {
      question: i18n.t('viewKYC.questions.question4'),
      answer: accountInfo?.investorIndividualKyc.isIndividualRelatedToLeaderInEnrolledCompany
        ? i18n.t('viewKYC.yes')
        : i18n.t('viewKYC.no'),
    },
    {
      question: i18n.t('viewKYC.questions.question5'),
      answer: accountInfo?.investorIndividualKyc.isIndividualHighProfileEmployee
        ? i18n.t('viewKYC.yes')
        : i18n.t('viewKYC.no'),
    },
    {
      question: i18n.t('viewKYC.questions.question6'),
      answer: accountInfo?.investorIndividualKyc.isIndividualHighProfileEmployee
        ? i18n.t('viewKYC.yes')
        : i18n.t('viewKYC.no'),
    },
    // {
    //     question: "هل العميل هو المستفيد الحقيقي من الحساب أو علاقة العمل؟",
    //     answer: accountInfo?.investorIndividualKyc.isIndividualTheRealBeneficiary ? "نعم" : "لا"
    // }
  ];

  return (
    <View style={styles.container}>
      <Header
        onLeftPress={() => navigate('UpdateKYC')}
        title={i18n.t('viewKYC.header')}
        type="simple"
      />
      <KeyboardAwareScrollView
        style={{ width: '100%' }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        <Text style={{ marginTop: spacing.S24 }} fontSize="FS14" color="GREEN">
          {i18n.t('viewKYC.addressTitle')}
        </Text>

        <Card
          shadow="small"
          style={{
            width: '100%',
            backgroundColor: HEXtoRGBA('#F1F3F4', 0.7),
            borderWidth: 0,
            marginTop: spacing.S8,
            paddingTop: spacing.S12,
          }}>
          {addressInfo.map((info, index) => (
            <TextWithValueRow
              key={`AddressInfo_${index}`}
              title={info.title}
              value={`${info.value}`}
            />
          ))}
        </Card>

        {/* income details  */}
        <Text
          style={{
            marginTop: spacing.S24,
          }}
          fontSize="FS14"
          color="GREEN">
          {i18n.t('viewKYC.incomeDetailsTitle')}
        </Text>
        <Card
          shadow="small"
          style={{
            width: '100%',
            backgroundColor: HEXtoRGBA('#F1F3F4', 0.7),
            borderWidth: 0,
            marginTop: spacing.S8,
            paddingTop: spacing.S12,
            paddingBottom: spacing.S16,
          }}>
          {incomeDetails.map((info, index) => (
            <TextWithValueRow
              key={`IncomeDetails_${index}`}
              title={info.title}
              value={`${info.value}`}
            />
          ))}

          {questions.map((question, index) => (
            <View
              key={`Questions_${index}`}
              style={{
                marginTop: spacing.S16,
                width: '100%',
                alignItems: 'flex-start',
              }}>
              <Text style={{ textAlign: 'left' }} fontSize="FS14" color="GRAY">
                {question.question}
              </Text>
              <Text fontSize="FS14">{question.answer}</Text>
            </View>
          ))}

          {/* {beneficiary.map((info, index) => (
                        <TextWithValueRow
                            key={`Beneficiary_${index}`}
                            title={info.title}
                            value={info.value} />
                    ))} */}
        </Card>
      </KeyboardAwareScrollView>
    </View>
  );
}

export default ViewKYC;
