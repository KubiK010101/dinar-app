/* eslint-disable react-native/no-inline-styles */
import React, { RefObject } from 'react';
import styles from './styles';
import { BaseModal, Button, Text } from '@component';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { Colors, getHeight, getWidth, scale } from '@config';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Svgs } from '@assets';
import { useNavigationHooks } from '@hooks';
import { AuctionsStateTypes, getQueryData } from '@query';
import { useTranslation } from 'react-i18next';

type AuctionCompletedModalProps = {
  forwardRef: RefObject<BottomSheetModal>;
};

function AuctionCompletedModal({ forwardRef }: AuctionCompletedModalProps) {
  const { navigate } = useNavigationHooks<any>();
  const { auctions } = getQueryData<AuctionsStateTypes>('auctions');
  const { t } = useTranslation();
  const onDetails = () => {
    forwardRef.current?.close();
    navigate('AuctionResult', { item: auctions.find((value: any, index: number) => index === 1) });
  };
  return (
    <BaseModal
      mode="model"
      animatedDuration={500}
      forwardRef={forwardRef}
      backgroundColor={Colors.RGBA_BLACK(0)}
      snapPoints={['100%']}>
      <View style={styles.container}>
        <View
          style={{
            width: getWidth(320),
            minHeight: getHeight(449),
            backgroundColor: Colors.WHITE,
            borderRadius: scale(10),
            alignItems: 'center',
            overflow: 'hidden',
          }}>
          <LinearGradient
            start={{ x: 1, y: 2 }}
            end={{ x: 0.3, y: 0.1 }}
            colors={[Colors.GREEN2, Colors.BLUE]}
            style={styles.lgBackground}>
            <Button
              onPress={() => forwardRef.current?.close()}
              iconStyle={styles.icon}
              containerStyle={styles.btnCloseContainer}
              iconName="close"
              style={styles.btnClose}
            />

            <Svgs color={Colors.WHITE} width={getWidth(62)} height={getHeight(62)} name="auction" />
          </LinearGradient>

          <View style={styles.content}>
            <Text
              fontSize="FS20"
              fontFamily="Bold"
              color="GREEN"
              style={{ marginTop: getHeight(20) }}>
              {t('auctionCompletedModal.title')}
            </Text>

            <Text fontSize="FS14" color="LIGHT_BLUE" style={styles.details}>
              {t('auctionCompletedModal.content')}
            </Text>
          </View>

          <Button
            onPress={onDetails}
            text={t('auctionCompletedModal.button')}
            type="standard"
            style={styles.btn}
          />
        </View>
      </View>
    </BaseModal>
  );
}

export default AuctionCompletedModal;
