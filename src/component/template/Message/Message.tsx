import React from 'react';
import { Image, View } from 'react-native';
import styles from './styles';
import { images } from '@assets';
import { Button, Text } from '@component';
import { Success } from '@assets';

type MessageProps = {
  onContinue: () => void;
  message: string;
  textButton: string;
};
function Message({ onContinue, message, textButton }: MessageProps) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={images.successHeader} />
      <Success />
      <Text fontSize="FS32" color={'LIGHT_BLUE'} fontFamily="Bold" style={styles.message}>
        {message}
      </Text>
      <Button
        haptic="impactLight"
        onPress={onContinue}
        containerStyle={styles.button}
        text={textButton}
        type="standard"
      />
    </View>
  );
}

export default Message;
