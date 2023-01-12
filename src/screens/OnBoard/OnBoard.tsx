/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import React, { useRef, useState } from 'react';
import { Button, OnBoardItem, Swiper } from '@component';
import styles from './styles';
import { View } from 'react-native';
import { onboardList } from '@config';
import { MainAppStackTypes } from '@navigation';
import { useNavigationHooks } from '@hooks';
import { useTranslation } from 'react-i18next';
import { setOnboardingCompleted } from '@query';

const OnBoard = () => {
  const swiperRef = useRef<Swiper>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const { replace } = useNavigationHooks<MainAppStackTypes>();
  const { t } = useTranslation();

  const onNext = () => {
    swiperRef.current?.onSnapTo(currentIndex + 1);
    if (currentIndex === 2) {
      replace('Register');
      setOnboardingCompleted();
    }
  };

  const onSkip = () => {
    replace('Register');
    setOnboardingCompleted();
  };

  return (
    <View style={styles.container}>
      <Swiper
        containerStyle={styles.swiperContainerStyle}
        onChangeIndex={setCurrentIndex}
        ref={swiperRef}>
        {onboardList.map((item, index) => (
          <OnBoardItem item={item} key={`OnBoardItem${index}`} />
        ))}
      </Swiper>

      {/* skip button  */}
      <Button
        onPress={onSkip}
        haptic="impactLight"
        text={t('skip')}
        textStyle={{
          color: 'LIGHT_BLUE',
          fontFamily: 'Medium',
          fontSize: 'FS14',
        }}
        containerStyle={styles.skipButton}
      />

      <Button
        haptic="impactLight"
        style={styles.nextButton}
        onPress={onNext}
        text={currentIndex === 2 ? t('register') : t('next')}
        type="standard"
      />
    </View>
  );
};

export default OnBoard;
