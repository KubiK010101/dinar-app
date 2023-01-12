import React, { RefObject } from 'react';
import { View } from 'react-native';
import BottomSheet, { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet';
import Animated, { Easing, useSharedValue } from 'react-native-reanimated';
import styles from './styles';
import { Button, Text } from '@component';

export const BaseModal = ({
  children,
  forwardRef,
  snapPoints,
  mode,
  animatedIndex,
  title,
  index,
  onChange,
  animatedDuration = 300,
  backgroundColor,
}: {
  children?: React.ReactNode;
  title?: string;
  forwardRef?: RefObject<BottomSheetModal>;
  headerAbsolute?: boolean;
  subTitle?: string;
  snapPoints: Array<number | string>;
  mode?: 'model';
  animatedIndex?: Animated.SharedValue<number>;
  index?: number;
  onChange?: (_index: number) => void;
  animatedDuration?: number;
  backgroundColor?: string;
}) => {
  const animatedPosition = useSharedValue(1);

  const BottomSheetComponent = mode === 'model' ? BottomSheetModal : BottomSheet;

  const onClose = () => {
    forwardRef?.current?.close();
  };

  const handleComponent = () =>
    title ? (
      <View style={styles.handleComponent}>
        <Text color="LIGHT_BLUE" fontSize="FS16">
          {title}
        </Text>
        <Button
          style={styles.closeButton}
          onPress={onClose}
          iconName="close"
          iconStyle={styles.closeButtonIcon}
        />
      </View>
    ) : null;
  return (
    <BottomSheetComponent
      onChange={onChange}
      animatedIndex={animatedIndex}
      animatedPosition={animatedPosition}
      animationConfigs={{
        duration: animatedDuration,
        easing: Easing.elastic(),
      }}
      backdropComponent={
        mode === 'model'
          ? props => <BottomSheetBackdrop {...props} disappearsOnIndex={-1} />
          : undefined
      }
      handleComponent={handleComponent}
      ref={forwardRef}
      index={index}
      backgroundStyle={[styles.backgroundStyle, backgroundColor ? { backgroundColor } : {}]}
      snapPoints={snapPoints || ['50%']}>
      {children}
    </BottomSheetComponent>
  );
};
