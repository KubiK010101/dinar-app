import React, { FC } from 'react';
import { View, ViewProps } from 'react-native';
import Icon from '@Icon';
import { IconsName } from '@assets';
import { Header, Text } from '../..';
import styles from './styles';
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view';

type RegistrationTemplateProps = {
  title: string;
  icon: IconsName;
};

const RegistrationTemplate: FC<ViewProps & RegistrationTemplateProps> = ({
  title,
  icon,
  children,
}) => {
  return (
    <View style={styles.container}>
      <Header />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        style={styles.content}>
        <Icon name={icon} />
        <Text style={styles.welcomeMessage} color="DARK_BLUE" fontFamily="Bold" fontSize="FS24">
          {title}
        </Text>
        {children}
      </KeyboardAwareScrollView>
    </View>
  );
};

export default RegistrationTemplate;
