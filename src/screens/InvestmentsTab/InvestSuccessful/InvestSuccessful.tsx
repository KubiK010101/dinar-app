/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import { FlatList, Image, ListRenderItem, View } from 'react-native';
import styles from './styles';
import { images } from '@assets';
import { Button, InvestmentItem, ShareInvestment, Text } from '@component';
import { Success } from '@assets';
import { getHeight, getWidth, spacing } from '@config';
import { OpportunityTypes } from '@types';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { useNavigationHooks } from '@hooks';
import { getOpportunityStatus, trackEvent } from '@helpers';
import { HomeStackTypes, MainAppStackTypes, TabButtonStackTypes } from '@navigation';
import { useTranslation } from 'react-i18next';
import { invalidateQuery, getQueryData } from '@query';
import { RouteProp, useRoute } from '@react-navigation/native';

const InvestSuccessful = () => {
  const { navigate } = useNavigationHooks<TabButtonStackTypes & HomeStackTypes>();
  const y = useSharedValue(0);
  const opportunities = getQueryData<OpportunityTypes[]>('opportunities');
  const { params } = useRoute<RouteProp<MainAppStackTypes, 'InvestSuccessful'>>();
  const { t } = useTranslation();

  const onScroll = useAnimatedScrollHandler({
    onScroll(event) {
      y.value = event.contentOffset.y;
    },
  });

  const onNavigate = () => navigate('InvestmentStack');

  useEffect(() => {
    trackEvent('investOpportunity', params.amount);
    invalidateQuery('investmentOrders');
  }, []);

  const animatedHeader = useAnimatedStyle(() => {
    const top = interpolate(y.value, [0, 120], [0, -120], Extrapolate.CLAMP);
    return { top };
  });

  const renderItem: ListRenderItem<OpportunityTypes> = ({ item, index }) => (
    <InvestmentItem
      style={{ marginRight: spacing.S8 }}
      item={item}
      key={`InvestmentItem_${index}`}
    />
  );

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.header, animatedHeader]}>
        <Image style={styles.image} source={images.homeHeader} />
        <Success style={styles.lottieIcon} />
      </Animated.View>

      <Animated.ScrollView
        onScroll={onScroll}
        scrollEventThrottle={0.000016}
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainerStyle}>
        <Text fontSize="FS24" color={'LIGHT_BLUE'} fontFamily="Bold" style={styles.message}>
          {t('investSuccessful.completed')}
        </Text>

        {/* investment Number */}
        <View style={styles.investmentNumberContent}>
          <Text style={styles.investmentNumberText}>{t('investSuccessful.track')}</Text>
          <Button
            type="border"
            style={{ width: getWidth(80), height: getHeight(30) }}
            onPress={onNavigate}
            textStyle={{
              fontFamily: 'Bold',
              fontSize: 'FS13',
            }}
            text={t('investSuccessful.mySubscription')}
          />
        </View>

        <ShareInvestment style={styles.shareInvestment} />

        {/* investment List Section */}
        <View style={styles.investmentListSection}>
          <Text color="GREEN" style={styles.investmentListSectionTitle}>
            {t('investSuccessful.opportunities')}
          </Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.investmentListContentContainerStyle}
            horizontal
            data={opportunities.filter(
              (element: OpportunityTypes) => getOpportunityStatus(element).status_key !== 'closed',
            )}
            renderItem={renderItem}
          />
        </View>
      </Animated.ScrollView>

      <View style={styles.continueButtonView}>
        <Button
          onPress={() => navigate('Home')}
          type="standard"
          text={t('investSuccessful.home')}
        />
      </View>
    </View>
  );
};

export default InvestSuccessful;
