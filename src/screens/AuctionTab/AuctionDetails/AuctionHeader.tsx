/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';
import Animated from 'react-native-reanimated';
import { IconsProps, Svgs } from '@assets';
import { IconsName } from '@assets';
import { Button, Text, HeaderProps } from '@component';
import { Colors, getHeight, scale, spacing } from '@config';
import { useNavigationHooks } from '@hooks';
import styles from './styles';
import { useAuctionAnimated } from './useAuctionAnimated';
import { isRTL } from '@local';

function AuctionHeader({ title, withoutStatusBar, onLeftPress, y = { value: 0 } }: HeaderProps) {
  const { goBack } = useNavigationHooks();
  const { animatedBackgroundHeader, backgroundAnimated, chartAnimated } = useAuctionAnimated({ y });

  const barData = [
    { value: 100, label: 'سبت' },
    { value: 77, label: 'احد', frontColor: Colors.GREEN2 },
    { value: 170, label: 'اثنين', frontColor: Colors.GREEN2 },
    { value: 90, label: 'ثلاثاء' },
    { value: 150, label: 'اربعاء', frontColor: Colors.GREEN2 },
    { value: 50, label: 'خميس' },
    { value: 30, label: 'جمعة' },
  ];

  return (
    <>
      {/* header  */}
      <Animated.View style={[styles.auctionHeaderContainer, animatedBackgroundHeader]}>
        {!withoutStatusBar && <View style={styles.auctionHeaderStatusView} />}
        <View style={styles.auctionHeaderContent}>
          <AnimatedButton
            iconStyle={{ rotate: isRTL ? 'left' : 'right' }}
            onPress={goBack}
            y={y}
            icon="arrow-back"
          />
          <AnimatedText y={y} title={`${title}`} />
          <AnimatedButton onPress={onLeftPress} y={y} icon="file" />
        </View>
      </Animated.View>

      {/* background  */}
      <Animated.View style={[styles.auctionHeaderBackground, backgroundAnimated]} />

      {/* chart  */}
      <Animated.View style={[styles.chartView, chartAnimated]}>
        <Text color="WHITE" fontFamily="Bold" fontSize="FS32">
          {'170%'}
        </Text>
        <BarChart
          height={getHeight(100)}
          barWidth={22}
          noOfSections={3}
          barBorderRadius={4}
          disableScroll
          frontColor="lightgray"
          yAxisTextStyle={styles.chartYAxisTextStyle}
          xAxisLabelTextStyle={styles.chartXAxisLabelTextStyle}
          data={barData}
          yAxisLabelPrefix="﹪"
          activeOpacity={0.9}
          yAxisThickness={0}
          xAxisThickness={0}
        />
      </Animated.View>
    </>
  );
}

const AnimatedText = ({ title, y }: { title: string; y: Animated.SharedValue<number> }) => {
  const { animatedColor2, animatedColor1 } = useAuctionAnimated({ y });
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Animated.View style={animatedColor1}>
        <Text color="DARK_GRAY">{title}</Text>
      </Animated.View>
      <Animated.View style={[{ position: 'absolute' }, animatedColor2]}>
        <Text color="WHITE">{title}</Text>
      </Animated.View>
    </View>
  );
};

const AnimatedButton = ({
  icon,
  y,
  onPress,
  iconStyle,
}: {
  onPress?: () => void;
  icon: IconsName;
  y: Animated.SharedValue<number>;
  iconStyle?: IconsProps;
}) => {
  const { animatedColor2, animatedColor1 } = useAuctionAnimated({ y });
  return (
    <Button onPress={onPress} style={{ paddingHorizontal: spacing.S16 }}>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Animated.View style={animatedColor1}>
          <Svgs
            {...iconStyle}
            color={Colors.DARK_GRAY}
            width={scale(22)}
            height={scale(20)}
            name={icon}
          />
        </Animated.View>

        <Animated.View style={[{ position: 'absolute' }, animatedColor2]}>
          <Svgs {...iconStyle} color="white" width={scale(22)} height={scale(20)} name={icon} />
        </Animated.View>
      </View>
    </Button>
  );
};

export { AuctionHeader };
