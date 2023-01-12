/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import styles from './styles';
import { RadioButton, Text } from '@component';
import i18n from '@local';

const KYCQuestion = ({
  text,
  onReply,
  value,
}: {
  text: string;
  onReply: (_reply: boolean) => void;
  value: boolean | null;
  isRequired?: boolean;
}) => {
  const [reply, setReply] = useState<boolean | null>(null);

  const _onReply = (_value: boolean) => {
    onReply(_value);
    setReply(_value);
  };
  useEffect(() => {
    setReply(value);
  }, [value]);
  return (
    <View style={styles.container}>
      {text && (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            width: '100%',
          }}>
          <Text style={{ textAlign: 'left' }} fontSize="FS14">
            {text}
            <Text fontSize="FS14" color="RED">
              {' '}
              *{' '}
            </Text>
          </Text>
        </View>
      )}
      {/* <Text
                fontSize='FS14'
                color='TEXT_COLOR'
                style={styles.title}>{text}</Text> */}
      <View style={styles.options}>
        <RadioButton
          onPress={() => _onReply(true)}
          checked={reply === true}
          label={i18n.t('registerKycStep2.KYCquestion.yes')}
        />
        <RadioButton
          onPress={() => _onReply(false)}
          checked={reply === false}
          label={i18n.t('registerKycStep2.KYCquestion.no')}
        />
      </View>
    </View>
  );
};
export default KYCQuestion;
