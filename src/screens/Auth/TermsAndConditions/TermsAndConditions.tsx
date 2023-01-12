/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { useNavigationHooks } from '@hooks';
import { MainAppStackTypes } from '@navigation';
import { Button, Header, Text } from '@component';
import { ScrollView } from 'react-native-gesture-handler';
import { spacing, termsAndConditionsList } from '@config';
import { useTranslation } from 'react-i18next';

type TermsAndConditionsProps = {};
function TermsAndConditions({}: TermsAndConditionsProps) {
  const { navigate } = useNavigationHooks<MainAppStackTypes>();
  const { t } = useTranslation();
  const onPress = () => {
    navigate('Register', { agree: true });
  };
  return (
    <View style={styles.container}>
      <Header />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainerStyle}>
        <Text color="LIGHT_BLUE" fontSize="P" style={styles.body}>
          {t('termsAndConditions.title')}
        </Text>

        {termsAndConditionsList.map((item, index) => (
          <TermsAndConditionItem item={item} key={`TermsAndConditionItem_${index}`} />
        ))}

        <Button
          haptic="impactLight"
          onPress={onPress}
          textStyle={{ color: 'DARK_BLUE' }}
          type="standard"
          style={styles.button}
          text={t('termsAndConditions.agree')}
        />
      </ScrollView>
    </View>
  );
}

type TermsAndConditionType = {
  title: string;
  list: Array<TermsItemType>;
};
type TermsItemType = { title?: string; value: string };

const TermsAndConditionItem = ({ item }: { item: TermsAndConditionType }) => {
  const { t } = useTranslation();
  return (
    <View
      style={{
        paddingHorizontal: spacing.S20,
        alignItems: 'flex-start',
        marginTop: spacing.S10,
        width: '100%',
      }}>
      <Text color="GREEN" fontSize="FS18">
        {t(`${item.title}`)}
      </Text>
      {item.list.map((_item: TermsItemType, index: number) => (
        <Text
          key={`TermsItem_${index}`}
          style={{
            textAlign: 'left',
          }}
          color="DARK_GRAY"
          fontSize="FS11">
          <Text style={{ textAlign: 'left' }} fontFamily="Bold" fontSize="FS14">
            {t(`${_item.title}`)}
          </Text>
          {t(`${_item.value}`)}
        </Text>
      ))}
    </View>
  );
};

export default TermsAndConditions;
