import * as React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';

const Logo = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 11.152 22.6" {...props}>
    <G id="Group_14610" data-name="Group 14610" transform="translate(-116.901 -18.426)">
      <Path
        id="Path_150"
        data-name="Path 150"
        d="M150.107,48.08q.137-.034.274-.071A7.668,7.668,0,0,0,156,40.6V29.846a.821.821,0,0,0-1.641,0V40.617a6.065,6.065,0,0,1-3.057,5.245,2.442,2.442,0,0,0-1.192,2.13Z"
        transform="translate(-27.944 -7.054)"
        fill={props.color || '#cbd0d6'}
        fillRule="evenodd"
      />
      <Path
        id="Path_151"
        data-name="Path 151"
        d="M145.605,22.022q-.137.034-.274.071a7.668,7.668,0,0,0-5.616,7.406V40.256a.821.821,0,0,0,1.641,0V29.485a6.063,6.063,0,0,1,2.981-5.2A2.624,2.624,0,0,0,145.605,22.022Z"
        transform="translate(-22.814 -3.596)"
        fill={props.color || '#cbd0d6'}
        fillRule="evenodd"
      />
    </G>
  </Svg>
);

export default Logo;
