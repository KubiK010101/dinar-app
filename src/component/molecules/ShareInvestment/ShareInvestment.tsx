import React, { FC } from 'react';
import { View, ViewProps } from 'react-native';
import styles from './styles';
import { Button, Text } from '@component';
import { IconsName } from '@assets';
import { useTranslation } from 'react-i18next';

const ShareInvestment: FC<ViewProps> = ({ style }) => {
  const { t } = useTranslation();
  return (
    <View style={[styles.shareViewContainer, style]}>
      <Text fontSize="FS14" color="GRAY">
        {t('shareInvestment')}
      </Text>

      <View style={styles.shareViewContent}>
        {social.map((item, index) => (
          <Button
            key={`Social_${index}`}
            color={item.color}
            iconStyle={{ ...styles.shareButtonIcon, color: item.color }}
            iconName={item.icon}
            type="border"
            style={styles.shareButton}
          />
        ))}
      </View>
    </View>
  );
};

const social: Array<{ icon: IconsName; color: string }> = [
  { icon: 'twitter', color: '#489BE9' },
  { icon: 'whatsapp', color: '#58BD55' },
];

export default ShareInvestment;
