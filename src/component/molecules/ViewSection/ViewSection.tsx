/* eslint-disable react-native/no-inline-styles */
import React, { FC } from 'react';
import { View, ViewProps } from 'react-native';
import { Text } from '@component';
import styles from './styles';

const ViewSection: FC<
  ViewProps & {
    withBottomWidth?: boolean;
    title: string;
  }
> = ({ children, title, withBottomWidth }) => {
  return (
    <View style={[styles.container, withBottomWidth && { borderBottomWidth: 1 }]}>
      <Text color="GREEN" fontSize="P" style={styles.title}>
        {title}
      </Text>
      {children}
    </View>
  );
};

export default ViewSection;
