/* eslint-disable react-native/no-inline-styles */
import React, { useRef } from 'react';
import { ScrollView, View } from 'react-native';
import { IconsName } from '@assets';
import { Header, LogoutModal, Text } from '@component';
import { MainNavigationAllScreensTypes } from '@navigation';
import APIs from '@APIs';
import { MoreSection } from './MoreSection';
import styles from './styles';
import i18n from '@local';
import deviceInfoModule from 'react-native-device-info';
import { appFetchers } from '@config';
import { AuthStateTypes, getQueryData } from '@query';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

type MoreRowType = {
  screenName: keyof MainNavigationAllScreensTypes;
  title: string;
  icon: IconsName;
  action?: () => void;
  params?: any;
};

function More() {
  const bank = getQueryData<AuthStateTypes>('auth').myAccountInfo?.bank;
  const logoutModalRef = useRef<BottomSheetModal>(null);
  const userInfo: MoreRowType[] = [
    {
      screenName: 'ViewKYC',
      title: i18n.t('moreScreen.more.KYC'),
      icon: 'card',
    },
    {
      screenName: bank ? 'BankAccount' : 'AddBankAccount',
      title: i18n.t('moreScreen.more.bankAccount'),
      icon: 'credit-card-solid',
    },
    {
      screenName: 'UpgradeToInvestorStep1',
      title: i18n.t('moreScreen.more.upgradeToInvestor'),
      icon: 'credit-card-solid',
    },
    {
      screenName: 'PdfViewr',
      params: {
        endpoint: APIs.getAgencyAgreementPdf,
        title: i18n.t('moreScreen.more.agencyAgreement'),
        method: 'POST',
      },
      title: i18n.t('moreScreen.more.agencyAgreement'),
      icon: 'pdf-extinction',
    },
  ];
  const setting: MoreRowType[] = [
    {
      screenName: 'Settings',
      title: i18n.t('moreScreen.settings'),
      icon: 'settings',
    },
  ];

  if (appFetchers.test_payment)
    setting.push({
      screenName: 'TestPayment',
      title: 'Test Payment',
      icon: 'settings',
    });

  const onLogout = () => {
    logoutModalRef.current?.present();
  };

  const help: MoreRowType[] = [
    {
      screenName: 'FAQ',
      title: i18n.t('moreScreen.faq'),
      icon: 'chat',
    },
    {
      screenName: 'ContactUs',
      title: i18n.t('moreScreen.supportCenter'),
      icon: 'help',
    },
    {
      screenName: 'ShariaCommittee',
      title: i18n.t('moreScreen.shariaCommittee'),
      icon: 'book',
    },
    {
      screenName: 'AboutUs',
      title: i18n.t('moreScreen.aboutUs'),
      icon: 'logo',
    },
    // {
    //     screenName: "Settings",
    //     title: "المدونة",
    //     icon: "blog"
    // },
    {
      screenName: 'Settings',
      title: i18n.t('moreScreen.logout'),
      icon: 'logout',
      action: onLogout,
    },
  ];

  const ListHeaderComponent = () => (
    <View style={styles.listHeaderComponent}>
      <Text fontFamily="Bold" fontSize="FS24">
        {i18n.t('moreScreen.title')}
      </Text>
      <View />
    </View>
  );

  return (
    <View style={styles.container}>
      <Header withoutBack title={i18n.t('moreScreen.title')} type="main" />
      <ScrollView
        style={{ width: '100%' }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}>
        <ListHeaderComponent />
        <View style={styles.content}>
          <MoreSection list={userInfo} title={i18n.t('moreScreen.userInfo')} />
          <MoreSection withAlert list={setting} title={i18n.t('moreScreen.accountSettings')} />
          <MoreSection list={help} title={i18n.t('moreScreen.helpCenter')} />
        </View>
        <Text fontSize="FS14" color="LIGHT_BLUE" style={styles.versionAndBuildNumber}>
          {`${deviceInfoModule.getReadableVersion()}`}
        </Text>
      </ScrollView>
      <LogoutModal forwardRef={logoutModalRef} />
    </View>
  );
}

export default More;
