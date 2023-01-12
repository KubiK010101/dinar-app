/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, I18nManager } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import { Card, Header, RadioButton } from '@component';
import { useTranslation } from 'react-i18next';
import RNRestart from 'react-native-restart';
type LanguageProps = {};
function Language({}: LanguageProps) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const language: { lang: 'ar' | 'en'; text: string }[] = [
    { lang: 'ar', text: t('langs.arabic') },
    { lang: 'en', text: t('langs.english') },
  ];

  const onChangeLanguage = async (_lang: 'ar' | 'en') => {
    if (lang === _lang) return;
    try {
      await AsyncStorage.setItem('@lang', _lang);
    } catch (e) {
      console.log(e);
    }

    const rtl = I18nManager.isRTL;
    I18nManager.forceRTL(!rtl);
    RNRestart.Restart();
  };
  return (
    <View style={styles.container}>
      <Header type="simple" title={t('langs.title')} />
      <Card style={styles.content}>
        {language.map((_lang, index) => (
          <View
            key={`Language_${index}`}
            style={[styles.langCard, { borderBottomWidth: index !== 1 ? 1 : 0 }]}>
            <RadioButton
              containerStyle={styles.cardRadioButtonContainerStyle}
              style={styles.cardRadioButton}
              onPress={() => onChangeLanguage(_lang.lang)}
              checked={lang === _lang.lang}
              label={_lang.text}
            />
          </View>
        ))}
      </Card>
    </View>
  );
}

export default Language;
