/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View } from 'react-native';
import styles from './styles';
import { Button, Text, TextWithValueRow } from '@component';
import { scale, spacing } from '@config';
import { t } from 'i18next';
import { fixNumber, formatPrice } from '@helpers';
import Icon from '@Icon';
import { Svgs } from '@assets';
import moment from 'moment';
import APIs from '@APIs';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { DetailsSection } from '../../InvestmentsTab/InvestmentDetails/InvestmentDetails';
import { getQueryData } from '@query';
import { isRTL } from '@local';
import { OpportunityTypes } from '@types';

const SukDetails = () => {
  const item = getQueryData<OpportunityTypes[]>('opportunities')[0];
  const info2 = [
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

  const files = [
    {
      url: `${APIs.getIssuancePublishPdf}?opportunityId=${item.id}&documentId=${item.documents.fileOpportunityPublishedSummary}`,
      title: t('investmentDetails.files.title1'),
    },
    {
      url: `${APIs.getIssuancePublishPdf}?opportunityId=${item.id}&documentId=${item.documents.fileOpportunityPublish}`,
      title: t('investmentDetails.files.title2'),
    },
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
    ];
  };

  const onPdfViewr = (_file: { url: string; title: string }) => {
    // navigate("PdfViewr", { endpoint: file.url, method: "GET", title: file.title })
  };

  const value = useSharedValue(0);
  const [height, setHeight] = useState(0);
  const [isOpend, setOpen] = useState(false);
  const animatedView = useAnimatedStyle(() => {
    return { height: value.value };
  });

  const rotateArrow = useAnimatedStyle(() => {
    const rotate = withSpring(isOpend ? `${isRTL ? '-' : ''}90deg` : '0deg');
    return { transform: [{ rotate }] };
  });

  return (
    <>
      <Button
        onPress={() => {
          if (!isOpend) value.value = withTiming(height, { duration: 600 });
          else value.value = withTiming(1, { duration: 600 });
          setOpen(!isOpend);
        }}
        buttonScale={1}
        containerStyle={{ width: '100%' }}
        style={styles.detailsSectionButton}>
        <Text color="LIGHT_BLUE">{t('auction.details')}</Text>

        <Animated.View style={[{}, rotateArrow]}>
          <Svgs
            rotate={isRTL ? 'left' : 'right'}
            name="arrow"
            width={scale(12)}
            height={scale(12)}
          />
        </Animated.View>
      </Button>

      <Animated.View
        style={[{ width: '100%', alignItems: 'center', overflow: 'hidden' }, animatedView]}>
        {/* details  */}
        <View style={[styles.detailsContent, { position: 'absolute' }]}>
          <View
            onLayout={event => {
              if (height === 0) setHeight(event.nativeEvent.layout.height);
              console.log('onLayoutonLayout', event.nativeEvent.layout.height);
            }}>
            {/* investment Info Section */}
            <View style={styles.investmentInfoSection}>
              {info2.map((infoItem, index) => (
                <TextWithValueRow
                  key={`info_${index}`}
                  title={infoItem.title}
                  value={`${infoItem.value}`}
                />
              ))}
            </View>

            {/* attachment section  */}
            <DetailsSection title={t('investmentDetails.detailsTitle1')}>
              {files.map((attachment, index) => (
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

            {/* payments section  */}
            <DetailsSection title={t('investmentDetails.detailsTitle2')}>
              {item.issuance.schedule.map((_item: any, index: number) => (
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
        </View>
      </Animated.View>
    </>
  );
};

export { SukDetails };
