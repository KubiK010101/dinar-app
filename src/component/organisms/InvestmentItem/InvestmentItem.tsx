/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import React, { FC, useRef } from 'react';
import { Share, View, ViewProps } from 'react-native';
import styles from './styles';
import { Button, CounterText, Text } from '../..';
import { Colors, fontSizes, getHeight, HEXtoRGBA, scale, spacing } from '@config';
import { OpportunityTypes } from '@types';
import { formatPrice, getOpportunityStatus } from '@helpers';
import { useNavigationHooks } from '@hooks';
import { HomeStackTypes } from '@navigation';
import Icon from '@Icon';
import { IconsName } from '@assets';
import { PaymentModal } from '@component';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { Card } from '../..';
import { useTranslation } from 'react-i18next';
import { AppStateTypes, getQueryData } from '@query';

type InvestmentItemProps = {
  item: OpportunityTypes;
  details?: boolean;
};
const InvestmentItem: FC<ViewProps & InvestmentItemProps> = ({ item, details, style }) => {
  const paymentModalRef = useRef<BottomSheetModal>(null);
  const { navigate } = useNavigationHooks<HomeStackTypes>();
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const { appConfig } = getQueryData<AppStateTypes>('config');
  const info: {
    title: string;
    value: string;
    icon: IconsName;
  }[] = [
    {
      title: language === 'ar' ? `%${item.issuance.apr}` : `${item.issuance.apr}%`,
      value: t('auction.annualReturn'),
      icon: 'dollar',
    },
    {
      title:
        language === 'ar'
          ? `%${item.issuance.investmentPeriodReturn}`
          : `${item.issuance.investmentPeriodReturn}%`,
      value: t('auction.investmentPeriodReturn'),
      icon: 'calendar3',
    },
    {
      title: `${formatPrice(item.issuance.program.programAmountInHalalah / 100)} ${t('home.rial')}`,
      value: t('auction.programAmount'),
      icon: 'invoce',
    },
  ];

  const onPress = () => {
    navigate('InvestmentDetails', { item });
  };

  const onShare = () => {
    if (item.link)
      Share.share({
        url: item.link,
        title: item.issuance.program.programName,
        message: item.issuance.program.programName,
      });
  };

  const onInvest = () => {
    if (getOpportunityStatus(item).status_key !== 'upcoming') paymentModalRef.current?.present();
  };
  return (
    <>
      <Card
        shadow="small"
        style={[styles.container, details && styles.containerWithDetailsStyle, style]}>
        <View style={styles.titleAndInvestmentStatus}>
          <Text fontFamily="Bold" fontSize="FS16">
            {item.issuance.program.programName}
          </Text>

          {/* section 1 title & status  */}
          <View style={styles.shareButtonAndInvestmentStatus}>
            <View
              style={[
                styles.investmentStatusView,
                {
                  backgroundColor: getOpportunityStatus(item)?.color,
                },
              ]}>
              <Text fontSize="FS10" color="WHITE">
                {getOpportunityStatus(item)?.status}
              </Text>
            </View>

            <Button
              onPress={onShare}
              haptic="impactLight"
              style={styles.shareButton}
              iconStyle={styles.shareButtonIcon}
              iconName="share"
            />
          </View>
        </View>

        {/* section 2  */}
        <View style={styles.investmentInfoContainer}>
          {info.map((option, index) => (
            <View
              key={`info_${index}`}
              style={[
                styles.infoItemView,
                details && {
                  alignItems: 'center',
                  height: getHeight(116),
                  justifyContent: 'center',
                },
              ]}>
              {details && (
                <View style={styles.investmentInfoIcon}>
                  <Icon
                    name={option.icon}
                    width={scale(18)}
                    height={scale(18)}
                    color={Colors.GREEN}
                  />
                </View>
              )}

              <Text style={{ lineHeight: fontSizes.FS18 }} fontSize="FS14" fontFamily="Bold">
                {option.title}
              </Text>
              <Text fontSize="FS14" style={{ lineHeight: fontSizes.FS18 }}>
                {option.value}
              </Text>
            </View>
          ))}
        </View>

        {/* section 3 progress  */}
        <View style={[styles.progressAndTotalInvestmentView, details && { borderBottomWidth: 0 }]}>
          {(getOpportunityStatus(item).status_key === 'available' ||
            getOpportunityStatus(item).status_key === 'closed') && (
            <>
              <View style={[styles.progressContainer, { width: `${item.completedPercentage}%` }]}>
                <Text color="GRAY" fontSize="FS14" style={{ paddingHorizontal: spacing.S10 }}>
                  {t('auction.coverageRatio')}
                </Text>
                <View
                  style={{
                    backgroundColor: HEXtoRGBA(Colors.GREEN, 0.3),
                    paddingHorizontal: spacing.S4,
                    borderRadius: 5,
                  }}>
                  <Text
                    fontSize="FS10"
                    fontFamily="Bold"
                    color="GREEN">{`${item.completedPercentage}%`}</Text>
                </View>
              </View>

              <View style={styles.progress}>
                <View style={[styles.progressValue, { width: `${item.completedPercentage}%` }]} />
              </View>
            </>
          )}

          {!item.isOpen && item.availableSuks > 0 && (
            <View style={styles.countDownView}>
              <CounterText date={item.issuance.investStartDate} />

              <Button
                haptic="impactLight"
                textContainerStyle={{ textDecorationLine: 'underline' }}
                style={styles.reminderButton}
                containerStyle={styles.reminderButtonContainer}
              />
            </View>
          )}
        </View>

        {/* section 4  */}
        {!details && (
          <View style={styles.actionsView}>
            <Button
              onPress={onPress}
              haptic="impactLight"
              type="standard"
              textStyle={{ color: 'DARK_BLUE' }}
              text={t('auction.details')}
              containerStyle={
                getOpportunityStatus(item).status_key === 'closed' && { width: '100%' }
              }
              style={[
                styles.detailsButton,
                getOpportunityStatus(item).status_key === 'closed' && { width: '100%' },
              ]}
            />
            {getOpportunityStatus(item).status_key === 'closed' ? (
              <View />
            ) : (
              <Button
                disabled={appConfig?.acceptedPaymentMethods.length ? false : true}
                onPress={onInvest}
                haptic="impactLight"
                type="standard"
                text={
                  getOpportunityStatus(item).status_key === 'upcoming'
                    ? t('auction.remind')
                    : t('auction.invest')
                }
                style={styles.investNowButton}
              />
            )}
          </View>
        )}
      </Card>

      <PaymentModal opportunityDetails={item} forwardRef={paymentModalRef} />
    </>
  );
};

export default InvestmentItem;
