import React from 'react';
import { Button, Text } from '@component';
import styles from './styles';
import Icon from '@Icon';
import { Image, View } from 'react-native';

type ListItemProps = {
  item: any;
  isSelected: boolean;
  onPress: () => void;
};
function ListItem({ item, isSelected, onPress }: ListItemProps) {
  return (
    <Button
      haptic="impactLight"
      onPress={onPress}
      buttonScale={0.988}
      style={styles.itemStyle}
      containerStyle={styles.itemContainerStyle}>
      <View style={styles.textAndIcon}>
        {item.icon && (
          <Image
            resizeMode="contain"
            source={
              typeof item.icon === 'number' ? item.icon : { uri: item.icon, cache: 'force-cache' }
            }
            style={styles.icon}
          />
        )}

        <Text fontFamily="Medium" fontSize="FS14">
          {typeof item === 'string' ? item : item.name}
        </Text>
      </View>
      {isSelected && <Icon name="check" />}
    </Button>
  );
}

export { ListItem };
