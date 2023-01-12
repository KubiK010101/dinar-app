import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from '@Icon';
import { Text } from '@component';
import { Colors, getHeight, getWidth } from '@config';
import styles from './styles';

function TabBottomComponent({ state, descriptors, navigation }: BottomTabBarProps) {
  return (
    <View style={styles.tabsContainer}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : 'route.name';
        const isFocused = state.index === index;
        const onPress = () => {
          if (route.state) {
            if (route.state.routes.length) navigation.navigate(route.state.routes[0].name);
          } else navigation.navigate(route.name);
        };
        return (
          <Item
            length={state.routes.length}
            key={index.toString() + 'sds'}
            route={route}
            isFocused={isFocused}
            label={label}
            onPress={onPress}
          />
        );
      })}
    </View>
  );
}

function Item({ route, isFocused, onPress, length }: any) {
  let _onPress = () => {
    onPress();
  };
  return (
    <TouchableOpacity
      activeOpacity={1}
      key={route.key}
      onPress={_onPress}
      style={[styles.buttonItem, { width: getWidth() / length }]}>
      <Icon
        name={route.params.icon}
        color={isFocused ? Colors.BLUE : '#B7B9C5'}
        width={getWidth(25.29)}
        height={getHeight(22.72)}
      />
      <Text fontSize="FS14" color={isFocused ? 'BLUE' : 'LIGHT_GRAY2'}>
        {route.params.text}
      </Text>
    </TouchableOpacity>
  );
}

export { TabBottomComponent };
