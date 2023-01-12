import { Button, Header, Input, PaymentModal } from '@component';
import React, { useRef, useState } from 'react';
import { View } from 'react-native';
import styles from './styles';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

function TestPayment() {
  const paymentModalRef = useRef<BottomSheetModal>(null);
  const [form, updateForm] = useState({ id: '', amount: '' });

  const onChangeText = (key: string, value: string) => {
    updateForm(state => {
      return { ...state, [key]: value };
    });
  };

  return (
    <View style={styles.container}>
      <Header type="simple" title="Test Payment" />

      <Input
        onChangeText={text => onChangeText('id', text)}
        value={form.id}
        keyboardType="numeric"
        placeholder="Opportunity Id"
        label="Opportunity Id"
      />

      <Input
        onChangeText={text => onChangeText('amount', text)}
        value={form.amount}
        keyboardType="numeric"
        placeholder="Amount"
        label="Amount"
      />

      <Button
        text="Test Payment"
        style={styles.button}
        type="standard"
        onPress={() => {
          paymentModalRef.current?.present();
        }}
      />

      <PaymentModal
        opportunityDetails={{
          id: parseFloat(form.id),
          sukPriceInHalalah: parseFloat(form.amount) * 100,
          availableSuks: 100,
        }}
        forwardRef={paymentModalRef}
      />
    </View>
  );
}

export default TestPayment;
