import React, { RefObject, useState } from 'react';
import { View, FlatList, ListRenderItem } from 'react-native';
import styles from './styles';
import { BaseModal, Button } from '@component';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { getWidth, spacing } from '@config';
import { ListItem } from './ListItem';

type FilterModalProps = {
  forwardRef: RefObject<BottomSheetModal>;
  onAppyFilter: (_filters: Array<number>) => void;
  data: Array<any>;
  title: string;
  snapPoints?: Array<string | number>;
  filters?: Array<number>;
};

function FilterModal({
  forwardRef,
  data,
  title,
  snapPoints,
  onAppyFilter,
  filters = [],
}: FilterModalProps) {
  const [selectedOptions, setSelectedOptions] = useState<Array<number>>(filters);

  const onPress = (_index: number) => {
    const isSelected = selectedOptions.find(value => _index === value);
    let newFilters: Array<number> = [...selectedOptions];

    if (typeof isSelected === 'number')
      newFilters = _index === 0 ? [] : selectedOptions.filter(value => _index !== value);
    else
      _index === 0
        ? data.forEach((value, index) => newFilters.push(index))
        : newFilters.push(_index);
    setSelectedOptions(newFilters);
  };

  const _renderItem: ListRenderItem<any> = ({ item, index }) => {
    return (
      <ListItem
        item={item}
        key={`${index}`}
        withoutBorderButton={index === data.length - 1}
        isSelected={selectedOptions?.includes(index)}
        onPress={() => onPress(index)}
      />
    );
  };

  const onFilter = () => {
    forwardRef.current?.close();
    if (onAppyFilter) onAppyFilter(selectedOptions);
  };

  return (
    <BaseModal
      title={title}
      mode="model"
      forwardRef={forwardRef}
      snapPoints={snapPoints || ['80%']}>
      <View style={styles.content}>
        <FlatList
          keyExtractor={(i, index) => `${index}`}
          style={{ width: getWidth() }}
          contentContainerStyle={styles.contentContainerStyle}
          data={data}
          renderItem={_renderItem}
        />

        <Button onPress={onFilter} style={{ marginTop: spacing.S8 }} type="standard" text="تطبيق" />
      </View>
    </BaseModal>
  );
}

export default FilterModal;
