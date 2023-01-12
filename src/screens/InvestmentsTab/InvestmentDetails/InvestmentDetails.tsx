/* eslint-disable react-native/no-inline-styles */
import React, { FC, useEffect, useRef } from 'react';
import { ScrollView, TextStyle, View, ViewProps } from 'react-native';
import styles from './styles';
import { HomeStackTypes, MainAppStackTypes } from '@navigation';
import { Button, Header, InvestmentItem, Text, TextWithValueRow, PaymentModal } from '@component';
import { scale, spacing } from '@config';
import { RouteProp, useRoute } from '@react-navigation/native';
import Icon from '@Icon';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { fixNumber, formatPrice, getOpportunityStatus, trackEvent } from '@helpers';
import moment from 'moment';
import { useNavigationHooks } from '@hooks';
import { useTranslation } from 'react-i18next';
import { AppStateTypes, getQueryData } from '@query';
import { getFiles } from '../utils';

function InvestmentDetails() {
  const {
    params: { item },
  } = useRoute<RouteProp<HomeStackTypes, 'InvestmentDetails'>>();
  const paymentModalRef = useRef<BottomSheetModal>(null);
  const { appConfig } = getQueryData<AppStateTypes>('config');
  const { navigate } = useNavigationHooks<MainAppStackTypes>();
  const { t } = useTranslation();
  const info = [
    { title: t('investmentDetails.info.title1'), value: item.issuance.sector },
    { title: t('investmentDetails.info.title2'), value: item.issuance.issuanceSerialNo },
    { title: t('investmentDetails.info.title3'), value: item.issuance.fundPurpose },
    {
      title: t('investmentDetails.info.title4'),
      value: formatPrice(item.issuance.issuanceAmountInHalalah / 100),
    },
    { title: t('investmentDetails.info.title5'), value: item.issuance.sukukQty },
    {
      title: t('investmentDetails.info.title6'),
      value: fixNumber(moment(item.issuance.maturityDate).format('YYYY-MM-DD')),
    },
    {
      title: t('investmentDetails.info.title7'),
      value: `${item.issuance.maturity} ${t('myInvestmentCard.info.month')}`,
    },
    // { title: "نوع الصكوك", value: item.issuance.program.sukType }
  ];

  const getScheduleInfo = (scheduleInfo: any) => {
    return [
      {
        title: t('investmentDetails.scheduleInfo.title1'),
        value: fixNumber(moment(scheduleInfo.date).format('YYYY-MM-DD')),
      },
      {
        title: t('investmentDetails.scheduleInfo.title2'),
        value: `${scheduleInfo.principalAmountInHalalah / 100} ${t('home.rial')}`,
      },
      {
        title: t('investmentDetails.scheduleInfo.title3'),
        value: `${scheduleInfo.couponAmountInHalalah / 100} ${t('home.rial')}`,
      },
      // {
      //     title: "الرسوم والضرائب",
      //     value: "0"
      // },
      // {
      //     title: "صافي الأرباح",
      //     value: "0"
      // }
    ];
  };

  const onPdfViewr = (file: { url: string; title: string }) => {
    navigate('PdfViewr', { endpoint: file.url, method: 'GET', title: file.title });
  };

  useEffect(() => {
    trackEvent('BrowseOpportunity');
  }, []);
  return (
    <View style={styles.container}>
      <Header title={item.issuance.program.programName} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        style={styles.scrollView}>
        <View style={styles.content}>
          {/* Investment Item */}
          <InvestmentItem details item={item} />

          {/* investment Info Section */}
          <View style={styles.investmentInfoSection}>
            {info.map((infoItem, index) => (
              <TextWithValueRow
                key={`info_${index}`}
                title={infoItem.title}
                value={`${infoItem.value}`}
              />
            ))}
          </View>

          {/* attachment section  */}
          {getOpportunityStatus(item).status_key !== 'closed' && (
            <DetailsSection
              style={{
                paddingHorizontal: spacing.S16,
              }}
              title={t('investmentDetails.detailsTitle1')}>
              {getFiles(item, t).map((attachment, index) => (
                <Button
                  onPress={() => onPdfViewr(attachment)}
                  key={`info_${index}`}
                  iconName="pdf-extinction"
                  containerStyle={styles.attachmentButtonContainer}
                  textContainerStyle={styles.attachmentButtonText}
                  style={styles.attachmentButton}
                  text={attachment.title}
                />
              ))}
            </DetailsSection>
          )}

          {/* payments section  */}
          <DetailsSection
            titleStyle={{ paddingHorizontal: spacing.S16 }}
            title={t('investmentDetails.detailsTitle2')}>
            {item.issuance.schedule.map((_item, index) => (
              <View key={`info_${index}`} style={{ width: '100%' }}>
                <View style={styles.paymentsTitleView}>
                  <Text>{`${t('investmentDetails.batch')} ${index + 1}`}</Text>
                </View>
                {getScheduleInfo(_item).map((scheduleItem, _index) => (
                  <TextWithValueRow
                    key={`ScheduleInfo_${_index}`}
                    title={`${scheduleItem.title}`}
                    value={scheduleItem.value}
                    style={{ paddingHorizontal: spacing.S16 }}
                  />
                ))}
              </View>
            ))}
          </DetailsSection>

          {/* certificate Badge  */}
          <Icon
            name="certificate"
            width={scale(82)}
            height={scale(82)}
            style={styles.certificateBadge}
          />
        </View>
      </ScrollView>

      {getOpportunityStatus(item).status_key === 'available' && (
        <View style={styles.continueButtonView}>
          <Button
            disabled={appConfig?.acceptedPaymentMethods.length ? false : true}
            onPress={() => paymentModalRef.current?.present()}
            type="standard"
            text={
              getOpportunityStatus(item).status_key === 'available'
                ? t('auction.invest')
                : t('auction.remind')
            }
          />
        </View>
      )}

      <PaymentModal opportunityDetails={item} forwardRef={paymentModalRef} />
    </View>
  );
}

export const DetailsSection: FC<
  ViewProps & {
    title: string;
    titleStyle?: TextStyle;
  }
> = ({ children, style, titleStyle, title }) => (
  <View style={[styles.detailsSection, style]}>
    <Text style={[styles.detailsSectionTitle, titleStyle]} color="GREEN">
      {title}
    </Text>
    {children}
  </View>
);

export default InvestmentDetails;
