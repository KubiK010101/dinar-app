import React, { useState } from 'react';
import { View } from 'react-native';
import styles from './styles';
import { Header } from '@component';
import Pdf from 'react-native-pdf';
import { donwloadFile } from '@helpers';
import { API } from '@redux';
import Share from 'react-native-share';
import { RouteProp, useRoute } from '@react-navigation/core';
import { MainAppStackTypes } from '@navigation';
import { getQueryData, AuthStateTypes } from '@query';

function PdfViewr() {
  const { token } = getQueryData<AuthStateTypes>('auth');

  const {
    params: { endpoint, method, title },
  } = useRoute<RouteProp<MainAppStackTypes, 'PdfViewr'>>();

  const pdfLink = `${API.getBaseURL()}${endpoint}`;
  const [isLoading, setLoading] = useState(false);
  const onShare = () => {
    setLoading(true);
    donwloadFile(
      `${pdfLink}`,
      `/${title}.pdf`,
      method,
      { Authorization: `Bearer ${token}` },
      base64 => {
        setLoading(false);
        Share.open({ url: `data:application/pdf;base64,${base64}`, filename: title });
      },
    );
  };

  return (
    <View style={styles.container}>
      <Header
        leftButtonLoader={isLoading}
        leftButtonIcon="share"
        title={title}
        type="simple"
        onLeftPress={onShare}
      />

      <Pdf
        source={{
          uri: `${pdfLink}`,
          method: method,
          cache: false,
          headers: { Authorization: `Bearer ${token}` },
        }}
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

export default PdfViewr;
