import React, { RefObject } from 'react';
import { View } from 'react-native';
import { BaseModal, Button, Text } from '@component';
import styles from './styles';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { Svgs } from '@assets';
import { Colors, HEXtoRGBA, scale } from '@config';
import { useTranslation } from 'react-i18next';
import { logout } from '@actions';
import { useLoader, useNavigationHooks } from '@hooks';
import { MainAppStackTypes } from '@navigation';
import { wait } from '@helpers';

type DatePickerModalProps = {
  forwardRef: RefObject<BottomSheetModal>;
};

function LogoutModal({ forwardRef }: DatePickerModalProps) {
  const { t } = useTranslation();
  const { replace } = useNavigationHooks<MainAppStackTypes>();
  const isLoading = useLoader('logout');

  const onLogout = () => {
    logout(async res => {
      if (res.ok) {
        await wait(1);
        forwardRef.current?.close();
        replace('LoginWithOutSwipe');
      }
    });
  };

  return (
    <BaseModal
      animatedDuration={400}
      mode="model"
      forwardRef={forwardRef}
      snapPoints={['60%']}
      backgroundColor={'rgba(0,0,0,0)'}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Svgs
            color={HEXtoRGBA(Colors.RED, 0.6)}
            name="logout"
            width={scale(50)}
            height={scale(50)}
          />

          <Text fontSize="FS18" fontFamily="Medium" color="DARK_BLUE" style={styles.message}>
            {t('logout_modal.message')}
          </Text>

          <Button
            isLoading={isLoading}
            style={styles.btn}
            onPress={onLogout}
            text={t('logout_modal.yes')}
            type="standard"
          />

          <Button
            onPress={() => forwardRef.current?.close()}
            text={t('logout_modal.cancel')}
            type="border"
            style={styles.btn}
          />
        </View>
      </View>
    </BaseModal>
  );
}

export default LogoutModal;
