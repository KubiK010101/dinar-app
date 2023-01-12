/* eslint-disable react-native/no-inline-styles */
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useFormik } from 'formik';
import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { BankTypes } from '@types';
import { Button, Header, Input, MaskInput, Text, ListModal } from '@component';
import { appData } from '@config';
import { bankValidation, fixNumber, ibanFormater } from '@helpers';
import { useLoader, useNavigationHooks } from '@hooks';
import { MainAppStackTypes } from '@navigation';
import { addBankAccount } from '@actions';
import styles from './styles';

type BankAccountProps = {};
function AddBankAccount({}: BankAccountProps) {
  const { t } = useTranslation();
  const bankAccountsModalRef = useRef<BottomSheetModal>(null);
  const { navigate, goBack } = useNavigationHooks<MainAppStackTypes>();
  const isLoading = useLoader('addBankAccount');
  const {
    values: { bankAccountName, bankName, iban },
    errors,
    handleSubmit,
    setFieldValue,
  } = useFormik<BankTypes>({
    validationSchema: bankValidation,
    initialValues: {
      bankAccountName: '',
      bankName: '',
      iban: '',
      key: '',
    },
    validateOnChange: false,
    onSubmit: values => onCreateBankAccount(values),
  });

  const onCreateBankAccount = (data: any) => {
    addBankAccount({ ...data, iban: `SA${data.iban}` }, res => {
      if (res.ok) {
        goBack();
        navigate('VerificationCode', {
          flow: {
            type: 'verifyBankAccount',
            params: {
              processId: res.data?.data.processId,
            },
          },
        });
      }
    });
  };

  const onChangeText = (key: 'bankName' | 'iban' | 'bankAccountName', value: string) => {
    setFieldValue(key, value);
  };

  return (
    <View style={styles.container}>
      <Header type="simple" title={t('addBankAccount.title')} />

      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        style={styles.flatlist}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}>
        <Button
          rightIcon="arrow-back"
          iconStyle={{ rotate: 'top' }}
          onPress={() => bankAccountsModalRef.current?.present()}
          value={appData.bankList.find(row => row.value === bankName)?.name}
          error={errors.bankName}
          type="dropdown"
          label={t('addBankAccount.bankName')}
          placeholder={t('addBankAccount.bankName')}
        />

        <MaskInput
          textStyle={{ paddingRight: 0 }}
          maxLength={22}
          value={iban}
          maskValue={ibanFormater(iban)}
          onChangeText={text => {
            if (!/[^a-zA-Z0-9٠-٩]+$/.test(text)) onChangeText('iban', fixNumber(text));
          }}
          error={errors.iban}
          label={t('addBankAccount.iban')}
          placeholder=" - -   - - - -   - - - -   - - - -   - - - -   - - - -">
          <Text fontFamily="MarkaziRegular" fontSize="FS22" style={styles.saText}>
            {'SA'}
          </Text>
        </MaskInput>

        <Input
          onChangeText={text => onChangeText('bankAccountName', text)}
          value={bankAccountName}
          error={errors.bankAccountName}
          label={t('addBankAccount.accountName')}
          placeholder={t('addBankAccount.accountName')}
        />

        {/* <DownloadButton
                    text='الرجاء رفع شهادة الحساب البنكي لتوثيق حسابك'
                    title="شهادة الحساب البنكي" /> */}

        <Button
          isLoading={isLoading}
          onPress={handleSubmit}
          text={t('addBankAccount.addButton')}
          type="standard"
          style={styles.addButton}
        />
      </KeyboardAwareScrollView>

      <ListModal
        snapPoints={['80%']}
        onSelected={(item: any) => {
          onChangeText('bankName', item.value);
        }}
        title={t('addBankAccount.chooseBank')}
        data={appData.bankList}
        forwardRef={bankAccountsModalRef}
      />
    </View>
  );
}

export default AddBankAccount;
