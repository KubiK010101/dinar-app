import * as React from 'react';
import Svg, { SvgProps, G, Rect } from 'react-native-svg';

const Point = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 14.142 16.142" {...props}>
    <G
      id="Rectangle_2214"
      data-name="Rectangle 2214"
      transform="translate(7.071) rotate(45)"
      fill="#fff"
      stroke="#00b398"
      strokeWidth={1}>
      <Rect width={10} height={10} rx={3} stroke="none" />
      <Rect x={0.5} y={0.5} width={9} height={9} rx={2.5} fill="none" />
    </G>
    <G
      id="Rectangle_218"
      data-name="Rectangle 218"
      transform="translate(7.071 2) rotate(45)"
      fill="#fff"
      stroke="#0b3870"
      strokeWidth={1}>
      <Rect width={10} height={10} rx={3} stroke="none" />
      <Rect x={0.5} y={0.5} width={9} height={9} rx={2.5} fill="none" />
    </G>
  </Svg>
);

export default Point;
