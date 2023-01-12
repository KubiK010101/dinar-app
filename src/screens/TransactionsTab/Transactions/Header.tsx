import React from 'react';
import { View } from 'react-native';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { Button, Text } from '@component';
import { useTranslation } from 'react-i18next';
import styles from './styles';

interface Props {
  sortingModalRef: React.RefObject<BottomSheetModal>;
}

const Header: React.FC<Props> = ({ sortingModalRef }) => {
  const { t } = useTranslation();
  return (
    <View style={styles.listHeaderComponent}>
      <Text fontFamily="Bold" fontSize="FS24">
        {t('transactions.title')}
      </Text>
      <Button
        onPress={() => {
          sortingModalRef.current?.present();
        }}
        iconName="filter"
      />
    </View>
  );
};

export default Header;
