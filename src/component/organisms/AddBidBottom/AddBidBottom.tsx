/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-raw-text */
/* eslint-disable radix */
import React, { useEffect, useState } from 'react';
import { Keyboard, ScrollView, View } from 'react-native';
import styles from './styles';
import { Svgs } from '@assets';
import Animated from 'react-native-reanimated';
import { useBidAnimated } from './useBidAnimated';
import { Button, CounterText, Input, StepperInput, Text } from '@component';
import { fixNumber, validatePrice } from '@helpers';
import { t } from 'i18next';
import { useNavigationHooks } from '@hooks';

const AddBidBottom = ({ status }: { status: 'CLOSED' | 'ACTIVE' }) => {
  const [value, setValue] = useState<string>('0.1');
  const { goBack } = useNavigationHooks();
  const { animatedAddForm, animatedAlert, animatedButton, animatedHeight, setAnimatedValue } =
    useBidAnimated();

  const onAddBid = () => {
    setAnimatedValue(2);
    Keyboard.dismiss();
  };
  useEffect(() => {
    Keyboard.addListener('keyboardWillShow', () => {
      setAnimatedValue(3);
    });
    Keyboard.addListener('keyboardWillHide', () => {
      setAnimatedValue(2);
    });
  }, []);

  const onChangeValue = (text: string) => {
    if (validatePrice(fixNumber(text.replace('٫', '.'))) && parseInt(text) <= 99.9)
      setValue(fixNumber(text.replace('٫', '.')));
    else if (!text) setValue('');
  };

  const onPress = (sign: '+' | '-') => {
    if (parseFloat(value) <= 99.98 && sign === '+') setValue((parseFloat(value) + 0.01).toFixed(2));
    if (parseFloat(value) >= 0.11 && sign === '-') setValue((parseFloat(value) - 0.01).toFixed(2));
  };

  const isClosed = status === 'CLOSED';
  return (
    <Animated.View style={[styles.container, animatedHeight]}>
      <ScrollView
        scrollEnabled={false}
        keyboardShouldPersistTaps="handled"
        style={styles.scrollview}
        contentContainerStyle={styles.content}>
        {/* start bid header  */}
        {!isClosed && (
          <View style={styles.header}>
            <View style={styles.headerTitle}>
              <Text style={styles.startBidText} fontFamily="Bold">
                {t('auction.listOfBids.startBiddingNow')}
              </Text>
              <Svgs name="fire" />
            </View>

            <CounterText
              withIcon
              fontSize="FS16"
              fontFamily="Regular"
              style={styles.countdownStyle}
              color="LIGHT_BLUE"
              date={`${new Date('2022-12-22T00:00:00')}`}
            />
          </View>
        )}

        {isClosed && (
          <View style={styles.auctionStatusView}>
            <Text fontFamily="Bold">
              {'حالة المزايدة'}
              <Text color="RED" fontFamily="Bold">
                {'منتهــية'}
              </Text>
            </Text>
          </View>
        )}

        {/* congratulations, message  */}
        <View style={styles.messageContainer}>
          <Animated.View style={[styles.messageContent, animatedAlert]}>
            <Text style={styles.message} fontSize="FS14">
              {t('auction.listOfBids.congratulations')}
            </Text>
          </Animated.View>
        </View>

        {/* Add Bid Form */}
        <Animated.View style={[styles.sendBidFormContainer, animatedAddForm]}>
          <View style={styles.sendBidForm}>
            <View style={styles.profitMargin}>
              <Text style={styles.profitMarginText} fontSize="FS14">
                {t('auction.profitMargin')}
              </Text>
              <StepperInput
                value={value}
                onPress={onPress}
                onChangeText={onChangeValue}
                maxLength={5}
              />
            </View>

            <Input
              maxLength={10}
              keyboardType="number-pad"
              style={styles.requiredQuantity}
              label={t('auction.requiredQuantity')}
              placeholder={t('auction.requiredQuantity')}
            />
          </View>

          {/* send bid button  */}
          <Button
            onPress={() => {
              setAnimatedValue(1);
              Keyboard.dismiss();
            }}
            style={styles.sendBidButton}
            containerStyle={styles.sendBidButtonContainer}
            text={t('auction.listOfBids.submitBid')}
            type="standard"
          />
        </Animated.View>

        <Button
          onPress={isClosed ? goBack : onAddBid}
          style={styles.newBidButton}
          containerStyle={[styles.newBidButtonContainer, animatedButton]}
          text={isClosed ? 'المزادات المتاحة' : t('auction.listOfBids.newBid')}
          type="border"
        />
      </ScrollView>
    </Animated.View>
  );
};

export default AddBidBottom;
