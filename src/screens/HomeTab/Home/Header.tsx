/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';
import { Button, Text } from '@component';
import { getWidth, spacing } from '@config';
import { FilterOptionTypes } from '@types';
import { useTranslation } from 'react-i18next';
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types';

type HomeProps = {
  sortingModalRef: React.RefObject<BottomSheetModalMethods>;
  filterOption: FilterOptionTypes[];
};
function Header({ sortingModalRef, filterOption }: HomeProps) {
  const { t } = useTranslation();
  return (
    <View
      style={{
        width: getWidth(),
        alignItems: 'flex-end',
        paddingHorizontal: spacing.S22,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <Text fontFamily="SemiBold" fontSize="FS18" color="GREEN">
        {t('home.ipo')}
      </Text>
      <Button
        style={{ flexDirection: 'row-reverse' }}
        text={`  ${filterOption.map(element => element.name)[0]} ${
          filterOption.length >= 2 ? `+${filterOption.length - 1}` : ''
        }  `}
        onPress={() => sortingModalRef.current?.present()}
        iconName="filter"
      />
    </View>
  );
}

export default Header;
