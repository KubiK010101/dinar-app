/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import React, { FC } from 'react';
import { Image, Linking, ScrollView, View, ViewProps } from 'react-native';
import styles from './styles';
import { Button, Header, Text } from '@component';
import { images } from '@assets';
import { spacing } from '@config';
import { IconsName } from '@assets';
import { useTranslation } from 'react-i18next';

type AboutUsProps = {};
function AboutUs({}: AboutUsProps) {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Header title={t('aboutUs.header')} type="simple" />

      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <Image source={images.logo} style={styles.logo} resizeMode="contain" />
          <Text color="GREEN">{t('aboutUs.subtitle')}</Text>

          <AboutSection title={t('aboutUs.title')} content={t('aboutUs.content')} />

          {/* <AboutSection
                        title={"إلتزامنا"}
                        content={"معاييرنا محددة بدقة لبناء منظومة استثمارية"} >
                        {["المساهمة", "التمويل", "الوصول"].map((point, index) => (
                            <TextPoint
                                key={`TextPoint$_${index}`}
                                text={point} />
                        ))
                        }
                    </AboutSection> */}

          {/* social Media View Container */}
          <View style={styles.socialMediaViewContainer}>
            {socialMediaList.map((soical, index) => (
              <Button
                onPress={() => Linking.openURL(soical.url)}
                key={`SocialMediaList${index}`}
                iconStyle={{ color: '#CBD0D6' }}
                iconName={soical.icon}
                style={{ padding: spacing.S10 }}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const AboutSection: FC<
  {
    title: string;
    content: string;
  } & ViewProps
> = ({ title, content, children }) => (
  <>
    <Text
      color="GREEN"
      style={{
        marginTop: spacing.S28,
      }}>
      {title}
    </Text>
    <Text style={{ textAlign: 'left' }} color="LIGHT_BLUE" fontSize="FS14">
      {content}
    </Text>
    {children}
  </>
);

const socialMediaList: Array<{
  type: 'facebook' | 'twitter' | 'linkedin';
  icon: IconsName;
  url: string;
}> = [
  { type: 'twitter', icon: 'twitter', url: 'https://twitter.com/getDinar' },
  // { type: "facebook", icon: "instagram" },
  {
    type: 'linkedin',
    icon: 'linkedin',
    url: 'https://www.linkedin.com/company/dinar-investments-%D8%AF%D9%8A%D9%86%D8%A7%D8%B1-%D9%84%D9%84%D8%A7%D8%B3%D8%AA%D8%AB%D9%85%D8%A7%D8%B1/',
  },
  // { type: "facebook", icon: "whatsapp" }
];

export default AboutUs;
// Dinar7720@
