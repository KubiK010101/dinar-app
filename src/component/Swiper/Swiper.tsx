import React, { forwardRef, LegacyRef, useRef } from 'react';
import { ViewProps, ViewToken, ViewStyle, StyleProp } from 'react-native';
import { FlatList, I18nManager, View } from 'react-native';
import { getWidth } from '@config';
import { DotItem } from './Dot';
import styles from './styles';

type SwiperProps = {
  containerStyle: StyleProp<ViewStyle>;
  currentIndex?: number;
  onChangeIndex: (_index: number) => void;
};
type SwiperState = {
  currentIndex: number;
};

class Swiper extends React.Component<ViewProps & SwiperProps, SwiperState> {
  constructor(props: any) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }

  private flatlistRef = React.createRef<FlatList>();
  private length = Array.isArray(this.props.children) ? this.props.children.length : 0;

  onSnapTo(index: number) {
    if (index <= this.length - 1 && index >= 0)
      this.flatlistRef.current?.scrollToOffset({ offset: getWidth() * index, animated: true });
  }

  private onChangeIndex = (index: number) => {
    if (this.props.onChangeIndex) this.props.onChangeIndex(index);
    this.setState({ currentIndex: index });
  };

  render(): React.ReactNode {
    const { children } = this.props;
    const { currentIndex } = this.state;

    return (
      <View style={[styles.swiperContainer, this.props.containerStyle]}>
        {/* Swiper Component */}
        {children && (
          <SwiperComponent ref={this.flatlistRef} onChangeIndex={this.onChangeIndex}>
            {children}
          </SwiperComponent>
        )}

        {/* dots  */}
        <View style={styles.dotsContainer}>
          {[...(Array.isArray(children) ? children : [children])].map((dot, index) => (
            <DotItem key={`${index}`} active={index === currentIndex} />
          ))}
        </View>
      </View>
    );
  }
}

const SwiperComponent = forwardRef(
  (
    {
      children,
      onChangeIndex,
    }: ViewProps & {
      onChangeIndex: (_index: number) => void;
    },
    ref: LegacyRef<FlatList>,
  ) => {
    const onViewableItemsChanged = (info: {
      viewableItems: Array<ViewToken>;
      changed: Array<ViewToken>;
    }) => {
      if (info.viewableItems.length) {
        const index = info.viewableItems[0].index || 0;
        onChangeIndex(
          I18nManager.isRTL ? (Array.isArray(children) ? children.length - index - 1 : 0) : index,
        );
      }
    };
    const viewabilityConfigCallbackPairs = useRef([
      {
        viewabilityConfig: {
          itemVisiblePercentThreshold: 30,
        },
        onViewableItemsChanged: onViewableItemsChanged,
      },
    ]);
    return (
      <FlatList
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={0.000016}
        ref={ref}
        data={Array.isArray(children) ? children : [children]}
        renderItem={({ item }) => item}
      />
    );
  },
);

export default Swiper;
