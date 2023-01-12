import React from 'react';
import { View } from 'react-native';
import { Button, Text } from '../..';
import styles from './styles';

type DownloadButtonProps = {
  title: string;
  text: string;
  onPress?: () => void;
};
function DownloadButton({ title, text, onPress }: DownloadButtonProps) {
  return (
    <View style={styles.container}>
      <Text fontSize="FS14">{title}</Text>
      <Button
        onPress={onPress}
        style={styles.button}
        iconStyle={styles.buttonIcon}
        iconName="download"
        text={`${text}   `}
      />
    </View>
  );
}

export default DownloadButton;
