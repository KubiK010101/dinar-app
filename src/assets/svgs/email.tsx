import * as React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';

const Email = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 20.807 16" {...props}>
    <G id="mail" transform="translate(1.403 1)">
      <Path
        id="Path_10721"
        data-name="Path 10721"
        d="M3.8,4H18.2A1.781,1.781,0,0,1,20,5.75v10.5A1.781,1.781,0,0,1,18.2,18H3.8A1.781,1.781,0,0,1,2,16.25V5.75A1.781,1.781,0,0,1,3.8,4Z"
        transform="translate(-2 -4)"
        fill="none"
        stroke="#00b398"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
      <Path
        id="Path_10722"
        data-name="Path 10722"
        d="M20,6l-9,7L2,6"
        transform="translate(-2 -4)"
        fill="none"
        stroke="#00b398"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </G>
  </Svg>
);

export default Email;
