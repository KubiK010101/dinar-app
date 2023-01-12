import React from 'react';
import { View } from 'react-native';
import { scale } from '../../../config';
import { Text } from '../index';

interface Props {
  error: string;
}

const FetchError: React.FC<Props> = ({ error }) => {
  return (
    <View style={{ top: scale(50) }}>
      <Text color="RED" fontSize="FS11">
        {error}
      </Text>
    </View>
  );
};

export default FetchError;
