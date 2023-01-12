import React from 'react';
import Animated from 'react-native-reanimated';
import { IconsName } from '@assets';
import { DefaultHeader } from './DefaultHeader';
import { HeaderAnimatedTitle } from './HeaderAnimatedTitle';
import HomeHeader from './HomeHeader';
import { MainHeader } from './main-header';
import { SimpleHeader } from './SimpleHeader';

export type HeaderProps = {
  type?: 'default' | 'simple' | 'home' | 'main' | 'animated-title';
  title?: string;
  wallet?: string;
  y?: Animated.SharedValue<number>;
  withoutBack?: boolean;
  onBack?: () => void;
  withoutStatusBar?: boolean;
  onLeftPress?: () => void;
  leftButtonIcon?: IconsName;
  leftButtonLoader?: boolean;
};

function Header({ type = 'default', ...props }: HeaderProps) {
  const Component = {
    default: <DefaultHeader {...props} />,
    simple: <SimpleHeader {...props} />,
    home: <HomeHeader {...props} />,
    main: <MainHeader {...props} />,
    'animated-title': <HeaderAnimatedTitle {...props} />,
  };
  return Component[type];
}

export default Header;
