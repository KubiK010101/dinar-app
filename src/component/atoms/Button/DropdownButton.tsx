/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';
import { Button, Text } from '..';
import Icon from '@Icon';
import { Colors, scale } from '@config';
import { ButtonProps } from './Button';
import styles from './styles';

const DropdownButton = (props: ButtonProps) => {
  return (
    <View style={styles.container}>
      {/* isRequired */}
      {props.label && (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
          }}>
          <Text style={{ textAlign: 'left' }} fontSize="FS14">
            {props.label}
          </Text>
          {props.isRequired && (
            <Text fontSize="FS14" color="RED">
              {' '}
              *{' '}
            </Text>
          )}
        </View>
      )}

      <Button
        disabled={props.disabled}
        haptic="impactLight"
        onPress={props.onPress}
        buttonScale={0.985}
        style={styles.content}>
        <Text
          fontFamily="Regular"
          fontSize="FS14"
          color={props.value ? 'DARK_BLUE' : 'LIGHT_GRAY'}
          style={styles.input}>
          {props.value ? props.value : props.placeholder}
        </Text>
        <Icon
          width={scale(18)}
          height={scale(18)}
          name={props.rightIcon}
          style={styles.showPasswordButton}
          {...props.iconStyle}
          color={Colors.LIGHT_GRAY2}
        />
      </Button>
      {props.error && (
        <Text color="RED" fontSize="FS11" style={styles.error}>
          {props.error}
        </Text>
      )}
    </View>
  );
};

export { DropdownButton };
