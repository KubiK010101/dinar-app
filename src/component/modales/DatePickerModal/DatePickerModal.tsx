/* eslint-disable react-native/no-color-literals */
/* eslint-disable radix */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { RefObject, useEffect, useState } from 'react';
import { View } from 'react-native';
import { Button, BaseModal } from '@component';
import styles from './styles';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { PickerIOS } from '@react-native-picker/picker';
import { fixNumber } from '@helpers';
import { useTranslation } from 'react-i18next';
const momentHijri = require('moment-hijri');

type DatePickerModalProps = {
  forwardRef: RefObject<BottomSheetModal>;
  onConfirm: (_date?: string) => void;
  dateType: 'hijri' | 'gregorian';
};
function DatePickerModal({ forwardRef, onConfirm, dateType }: DatePickerModalProps) {
  const { t } = useTranslation();
  const isGregorian = dateType === 'gregorian';

  const [date, setDate] = useState<{
    year: string;
    day: string;
    month: string;
  }>({
    year: `${getYears(isGregorian)[0]}`,
    day: '1',
    month: !isGregorian ? hMonths[0] : gMonths[0],
  });

  const onCancel = () => {
    forwardRef.current?.close();
  };

  useEffect(() => {
    onConfirm('');
  }, [dateType]);

  const data = [
    { key: 'year', value: date.year, list: getYears(isGregorian) },
    { key: 'month', value: date.month, list: !isGregorian ? hMonths : gMonths },
    {
      key: 'day',
      value: date.day,
      list: getMonthDays(date.year, `${getMonthNumber(date.month, isGregorian)}`, isGregorian),
    },
  ];

  return (
    <BaseModal
      title={t('datePickerModal.title')}
      mode="model"
      forwardRef={forwardRef}
      snapPoints={['42%']}>
      <View style={styles.content}>
        <View style={styles.pickerContainer}>
          {data.map(({ list, value, key }) => (
            <PickerIOS
              key={`${key}`}
              numberOfLines={1}
              itemStyle={styles.pickerItem}
              selectedValue={value}
              style={{ flex: 1 }}
              onValueChange={itemValue =>
                setDate(state => {
                  return { ...state, [key]: itemValue };
                })
              }>
              {list.map((_value, index) => (
                <PickerIOS.Item
                  key={`PickerIOS_${index}${key}`}
                  label={`${_value}`}
                  value={`${_value}`}
                />
              ))}
            </PickerIOS>
          ))}
        </View>

        <View style={styles.buttonsContainer}>
          <Button
            haptic="impactLight"
            onPress={() =>
              onConfirm(
                `${parseInt(date.day) < 10 ? '0' : ''}${date.day}-${
                  getMonthNumber(date.month, isGregorian) < 10 ? '0' : ''
                }${getMonthNumber(date.month, isGregorian)}-${date.year}`,
              )
            }
            style={styles.saveButton}
            type="standard"
            text={t('datePickerModal.save')}
          />
          <Button
            haptic="impactLight"
            onPress={onCancel}
            style={styles.cancelButton}
            textStyle={{ color: 'DARK_BLUE' }}
            type="standard"
            text={t('datePickerModal.cancel')}
          />
        </View>
      </View>
    </BaseModal>
  );
}

export default DatePickerModal;

const gMonths: Array<string> = [
  '1 - يناير',
  '2 - فبراير',
  '3 - مارس',
  '4 - ابريل',
  '5 - مايو',
  '6 - يونيو',
  '7 - يوليو',
  '8 - اغسطس',
  '9 - سبتمبر',
  '10 - اكتوبر',
  '11 - نوفمبر',
  '12 - ديسمبر',
];

const hMonths: Array<string> = [
  '1 - محرَّم',
  '2 - صفر',
  '3 - ربيع الأول',
  '4 - ربيع الثاني',
  '5 - جمادي الأول',
  '6 - جمادي الثاني',
  '7 - رجب',
  '8 - شعبان',
  '9 - رمضان',
  '10 - شوال',
  '11 - ذو القعدة',
  '12 - ذو الحجة',
];
const getMonthNumber = (value: string, isGregorian: boolean) => {
  if (isGregorian) return gMonths.findIndex(_value => _value === value) + 1;
  else return hMonths.findIndex(_value => _value === value) + 1;
};

const getYears = (isGregorian: boolean): Array<number> => {
  let year = parseInt(fixNumber(momentHijri().iYear()));
  if (isGregorian) year = new Date().getFullYear();
  const length = 100;
  let years: Array<number> = [];
  Array(length)
    .fill(null)
    .map((a, index) => {
      years.push(index + 1 + (year - length));
    });
  return years.reverse();
};
const getMonthDays = (year: string, month: string, isGregorian: boolean): Array<number> => {
  const is30Days = momentHijri(`${year + '/' + month}/30`, 'iYYYY/iMM/iDD').isValid(); // true (This month is 30 days).
  let length = is30Days ? 30 : 29;
  if (isGregorian) length = new Date(parseInt(year), parseInt(month), 0).getDate();
  let years: Array<number> = [];
  Array(length)
    .fill({})
    .map((a, index) => {
      years.push(index + 1);
    });
  return years;
};
