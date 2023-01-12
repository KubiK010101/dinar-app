import React, { memo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './main-stack';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { createNavigationContainerRef } from '@react-navigation/native';

export const navigation = createNavigationContainerRef();

const NavigationApp = () => {
  return (
    <NavigationContainer ref={navigation}>
      <BottomSheetModalProvider>
        <MainStack />
      </BottomSheetModalProvider>
    </NavigationContainer>
  );
};

export default memo(NavigationApp);

export * from './navigation-types';
