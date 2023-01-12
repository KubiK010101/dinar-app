import React, { useState } from 'react';
import { View } from 'react-native';
import Icon from '@Icon';
import { IconsName } from '@assets';
import { Button, Header, Input, MaskInput } from '@component';
import { getHeight, getWidth } from '@config';
import { useNavigationHooks } from '@hooks';
import styles from './styles';
import { useTranslation } from 'react-i18next';

type AddNewPaymentCardProps = {};
function AddNewPaymentCard({}: AddNewPaymentCardProps) {
  const { goBack } = useNavigationHooks();

  const { t } = useTranslation();

  const paymentBrands: {
    icon: IconsName;
    isActive?: boolean;
    width?: number;
  }[] = [
    {
      icon: 'visa',
      isActive: false,
    },
    {
      icon: 'mada2',
      isActive: false,
      width: getWidth(60),
    },
  ];

  const [cardNumber, setCardNumber] = useState('');
  const onAddPaymentMethod = () => {
    goBack();
  };
  return (
    <View style={styles.container}>
      <Header title={t('addNewPaymentCard.title')} withoutStatusBar type="simple" />

      {/* payment Brands  */}
      <View style={styles.paymentBrandsView}>
        {paymentBrands.map(brand => (
          <Icon
            name={brand.icon}
            width={brand.width || getWidth(50)}
            style={[styles.brandActiveIcon, !brand.isActive && styles.brandDeactiveIcon]}
            height={getHeight(31)}
          />
        ))}
      </View>
      {/* End payment Brands  */}

      <MaskInput
        value={cardNumber.replace(/(\d{4}(?!\s))/g, '$1  ')}
        placeholder="- - - -   - - - -   - - - -   - - - -   - - - - -"
        label={t('paymentCard.cardNumber')}
        maxLength={16}
        onChangeText={setCardNumber}>
        <Button
          iconStyle={styles.scanCardButtonIcon}
          iconName="camera"
          style={styles.scanCardButton}
        />
      </MaskInput>

      <View style={styles.cvvAndExpiryDateView}>
        <Input
          maxLength={5}
          placeholder="MM/YY"
          style={styles.input}
          label={t('paymentCard.expireDate')}
        />
        <Input maxLength={3} placeholder="CVV" style={styles.input} label={t('paymentCard.cvc')} />
      </View>

      <Button
        onPress={onAddPaymentMethod}
        style={styles.addButton}
        type="standard"
        text={t('addNewPaymentCard.add')}
      />
    </View>
  );
}

export default AddNewPaymentCard;
