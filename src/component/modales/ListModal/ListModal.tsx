import React, { RefObject, useEffect, useState } from 'react';
import { View, FlatList, ListRenderItem } from 'react-native';
import styles from './styles';
import { BaseModal } from '@component';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { getWidth } from '@config';
import { ListItem } from './ListItem';
import { FilterOptionTypes } from '@types';

type ListModalProps = {
  forwardRef: RefObject<BottomSheetModal>;
  onSelected: (_value: any | FilterOptionTypes) => void;
  data: Array<any>;
  title: string;
  snapPoints?: Array<string | number>;
  defaultIndex?: number;
  selectedValues?: Array<string>;
};
function ListModal({
  forwardRef,
  data,
  title,
  snapPoints,
  onSelected,
  defaultIndex = -1,
  selectedValues,
}: ListModalProps) {
  const [selectedIndex, setSelectedIndex] = useState(defaultIndex);

  const onPress = (index: number) => {
    forwardRef.current?.close();
    if (onSelected) onSelected(data[index]);
    if (!selectedValues) setSelectedIndex(index);
  };

  useEffect(() => {
    setSelectedIndex(defaultIndex);
  }, [defaultIndex]);

  const _renderItem: ListRenderItem<any> = ({ item, index }) => {
    return (
      <ListItem
        item={item}
        key={`${index}`}
        isSelected={selectedValues?.includes(item.value) || index === selectedIndex}
        onPress={() => onPress(index)}
      />
    );
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
      </View>
    </BaseModal>
  );
}

export default ListModal;
