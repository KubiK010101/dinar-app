import React, { RefObject } from 'react';
import styles from './styles';
import { BaseModal } from '..';
import { BottomSheetModal, BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { Text } from '@component';
import { bidPrivacy, spacing } from '@config';
import { t } from 'i18next';

type BidPolicyModalProps = {
  forwardRef: RefObject<BottomSheetModal>;
};
function BidPolicyModal({ forwardRef }: BidPolicyModalProps) {
  return (
    <BaseModal
      title={t('auction.auctionDetails.biddingPolicy')}
      mode="model"
      forwardRef={forwardRef}
      snapPoints={['92%']}
      animatedDuration={500}>
      <BottomSheetScrollView
        style={{ marginTop: spacing.S12 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}>
        <Text color="LIGHT_BLUE" fontSize="FS14" style={styles.content_text}>
          {bidPrivacy}
        </Text>
      </BottomSheetScrollView>
    </BaseModal>
  );
}

export default BidPolicyModal;
