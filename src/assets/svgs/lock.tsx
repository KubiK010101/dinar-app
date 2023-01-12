import * as React from 'react';
import Svg, { SvgProps, G, Rect, Path } from 'react-native-svg';

const Lock = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 17 18.167" {...props}>
    <G id="lock" transform="translate(1 1)">
      <Rect
        id="Rectangle_2147"
        data-name="Rectangle 2147"
        width={15}
        height={9.167}
        rx={2}
        transform="translate(0 7)"
        fill="none"
        stroke={props.color || '#00b398'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
      <Path
        id="Path_10720"
        data-name="Path 10720"
        d="M7,8V5.333a3.333,3.333,0,1,1,6.667,0V8"
        transform="translate(-2.833 -2)"
        fill="none"
        stroke={props.color || '#00b398'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </G>
  </Svg>
);

export default Lock;
