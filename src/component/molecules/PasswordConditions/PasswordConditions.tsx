/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';
import { Text } from '@component';
import styles from './styles';
import { Colors, getWidth, scale, spacing } from '@config';
import { Svgs } from '@assets';
import Animated, { interpolate, useAnimatedStyle, withSpring } from 'react-native-reanimated';
type PasswordConditionsProps = {
  conditions: Array<any>;
  strength: number;
};

const PasswordConditions = ({ conditions, strength }: PasswordConditionsProps) => {
  const MAX_WIDTH = getWidth() - (spacing.S64 + spacing.S4);
  const strengthProgress = useAnimatedStyle(() => {
    const width = withSpring(interpolate(strength, [0, 1], [0, MAX_WIDTH]), {
      damping: 30,
      stiffness: 300,
    });
    return { width };
  });
  return conditions.length ? (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.progress,
          strengthProgress,
          {
            backgroundColor: strength < 0.3 ? Colors.RED : strength > 0.8 ? Colors.GREEN : 'orange',
          },
        ]}
      />
      {conditions.map((validationitem: any, index: number) => (
        <View
          key={`${index}`}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Svgs
            name={validationitem.isValid ? 'check-solid' : 'info-solid'}
            width={scale(12)}
            height={scale(12)}
          />
          <Text
            style={{
              paddingHorizontal: spacing.S4,
            }}
            fontSize="FS11">
            {validationitem.message}
          </Text>
        </View>
      ))}
    </View>
  ) : null;
};
export default PasswordConditions;
