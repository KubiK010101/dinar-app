import React, { useState } from 'react';
import { View } from 'react-native';
import styles from './styles';
import { Header } from '@component';
import Pdf from 'react-native-pdf';
import Share from 'react-native-share';
import { investmentTCAgreement } from '@assets';
import { useTranslation } from 'react-i18next';

type AgencyAgreementProps = {};
function AgencyAgreement2({}: AgencyAgreementProps) {
  const [isLoading] = useState(false);

  const onShare = () => {
    Share.open({ url: investmentTCAgreement });
  };
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Header
        leftButtonLoader={isLoading}
        leftButtonIcon="share"
        title={t('registerKycStep1.terms')}
        type="simple"
        onLeftPress={onShare}
      />
      <Pdf
        source={{ uri: investmentTCAgreement }}
        onLoadComplete={numberOfPages => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={page => {
          console.log(`Current page: ${page}`);
        }}
        onError={error => {
          console.log('on Error', error);
        }}
        onPressLink={uri => {
          console.log(`Link pressed: ${uri}`);
        }}
        style={styles.pdfStyle}
      />
    </View>
  );
}

export default AgencyAgreement2;
