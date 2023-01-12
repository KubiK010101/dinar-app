import React, { FC } from 'react';
import { View } from 'react-native';
import { Button, Header, Text } from '@component';
import { Colors, scale, spacing } from '@config';
import { useLoader, useNavigationHooks } from '@hooks';
import { MainAppStackTypes } from '@navigation';
import { updateEmail, updatePhoneNumber } from '@actions';
import styles from './styles';
import { useTranslation } from 'react-i18next';
import { AuthStateTypes, getQueryData } from '@query';

type InfoType = {
  verifiedMessage?: string;
  isVerified?: boolean;
  value?: string;
  title: string;
  type: 'email' | 'phone' | 'name';
  isLoading?: boolean;
};

function MyProfile() {
  const { navigate } = useNavigationHooks<MainAppStackTypes>();
  const { profile, myAccountInfo } = getQueryData<AuthStateTypes>('auth');
  const isLoadingUpdateEmail = useLoader('updateEmail');
  const isLoadingUpdatePhoneNumber = useLoader('updatePhoneNumber');
  const { t } = useTranslation();
  const userInfo: InfoType[] = [
    {
      title: t('myProfile.name'),
      value: profile?.displayName,
      isVerified: true,
      type: 'name',
    },
    {
      title: t('myProfile.phone'),
      value: profile?.mobileNumber,
      isVerified: myAccountInfo?.createdBy.isMobileNoVerified || false,
      verifiedMessage: t('myProfile.verifyPhone'),
      type: 'phone',
      isLoading: isLoadingUpdatePhoneNumber,
    },
    {
      title: t('myProfile.email'),
      value: profile?.email,
      isVerified: myAccountInfo?.createdBy.isEmailVerified || false,
      verifiedMessage: t('myProfile.verifyEmail'),
      type: 'email',
      isLoading: isLoadingUpdateEmail,
    },
  ];

  const onVerify = (type: 'email' | 'phone' | 'name') => {
    if (type === 'phone') {
      updatePhoneNumber({ mobileNo: `${profile?.mobileNumber}` }, res => {
        if (res.ok)
          navigate('VerificationCode', {
            flow: {
              type: 'verifyPhoneNumber',
              params: { processId: res.data?.data.processId },
            },
          });
      });
    } else if (type === 'email') {
      updateEmail({ email: `${profile?.email}` }, res => {
        if (res.ok)
          navigate('VerificationCode', {
            flow: {
              type: 'verifyEmail',
              params: { processId: res.data?.data.processId },
            },
          });
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header type="simple" title={t('myProfile.title')} />

      <View style={styles.content}>
        {userInfo.map((info: InfoType, index) => (
          <InfoRow
            onUpdate={() => navigate(info.type === 'email' ? 'EditEmail' : 'EditPhoneNumber')}
            key={`InfoRow${index}`}
            onPress={() => {
              onVerify(info.type);
            }}
            {...info}
          />
        ))}
      </View>
    </View>
  );
}

const InfoRow: FC<InfoType & { onPress: () => void; onUpdate?: () => void }> = ({
  verifiedMessage,
  isVerified,
  value,
  title,
  onPress,
  isLoading,
  type,
  onUpdate,
}) => {
  return (
    <View style={styles.infoRowContainer}>
      <View style={styles.infoRowTitleAndValue}>
        <Text color="GRAY" fontSize="FS14" style={styles.infoRowTitle}>
          {title}
        </Text>
        <View style={styles.infoRowValueWithVerifyIcon}>
          <Text fontSize="FS14">{value}</Text>
          {verifiedMessage && (
            <Button
              style={{ padding: spacing.S6 }}
              iconName={isVerified ? 'check-solid' : 'info-solid'}
              iconStyle={styles.verifyIcon}
            />
          )}

          {type !== 'name' && (
            <Button
              onPress={onUpdate}
              style={{
                padding: spacing.S12,
              }}
              iconName="edit"
              iconStyle={{
                width: scale(20),
                height: scale(20),
              }}
            />
          )}
        </View>
      </View>

      {!isVerified && (
        <Button
          indicatorColor={Colors.DARK_BLUE}
          isLoading={isLoading}
          onPress={onPress}
          type="border"
          style={styles.verifyButton}
          text={verifiedMessage}
        />
      )}
    </View>
  );
};
export default MyProfile;
