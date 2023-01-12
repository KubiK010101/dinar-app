import React, { memo, FC } from 'react';
import { TextProps as RNTextProps, StyleProp, TextStyle, Text as RNText } from 'react-native';
import { FontFamilyTypes, fonts, fontSizes, ColorsTypes, FontSizeTypes, Colors } from '@config';
import styles from './styles';

export type StylesOrDefault<T> = 'style' extends keyof T ? T['style'] : Record<string, unknown>;

export type TextProps = {
  color?: keyof ColorsTypes;
  fontFamily?: keyof FontFamilyTypes;
  // style?: StyleProp<AnimateStyle<StylesOrDefault<any>>>,
  style?: StyleProp<TextStyle>;
  children?: any;
  onPress?: () => void;
  numberOfLines?: number;
  /** 
    default fontSize = 12px
    
    H1= 22 px \
    H2= 16 px \
    H3= 12 px \
    H4= 9 px \
    P= 12 px 
    **/
  fontSize?: keyof FontSizeTypes;
};

type TextStyleTypes = StyleProp<TextStyle> | undefined;

const Text: FC<TextProps & RNTextProps> = props => {
  return <RNText {...props} style={[styles.textStyle, customStyles(props), props.style]} />;
};

Text.defaultProps = {
  color: 'DARK_BLUE',
};

const customStyles = ({ fontFamily, fontSize, color = 'DARK_BLUE' }: TextProps) => {
  const _styles: TextStyleTypes = {
    color: Colors[color],
    fontFamily: fonts[fontFamily || 'Regular'],
    fontSize: fontSizes[fontSize || 'FS16'],
  };
  return _styles;
};

export default memo(Text);
