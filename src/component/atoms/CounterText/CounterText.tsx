/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, { useMemo, useState } from 'react';
import { Text } from '../..';
import { formatTime } from '@helpers';
import { useTranslation } from 'react-i18next';
import { TextProps } from '../Text/Text';
import { Svgs } from '@assets';
import { View } from 'react-native';
import { scale } from '@config';
import moment from 'moment';

interface CounterTextProps extends TextProps {
  date: string;
  withIcon?: boolean;
}

const CounterText = ({ date, withIcon, ...props }: CounterTextProps) => {
  const dateToSecond = moment(date).diff(new Date()) / 1000;
  let [clock, updateClock] = useState(dateToSecond >= 1 ? dateToSecond % 86400 : 0);
  const days = Math.floor(dateToSecond / 86400);
  const { t } = useTranslation();
  useMemo(() => {
    setInterval(() => {
      if (clock) updateClock(clock--);
    }, 1000);
  }, []);

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text color="GREEN" fontFamily="Bold" fontSize="FS20" style={{ letterSpacing: 6 }} {...props}>
        {`${formatTime(clock)} ${days >= 1 ? `${days} ${t('auction.days')}` : ''}`}
      </Text>
      {withIcon && <Svgs width={scale(18)} height={scale(18)} name="clock" />}
    </View>
  );
};

export default CounterText;
