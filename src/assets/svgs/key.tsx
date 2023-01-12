import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const KeySkeleton = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 23.999 24" {...props}>
    <Path
      id="Path_10743"
      data-name="Path 10743"
      d="M-4.5-21H-9a4.5,4.5,0,0,0-4.5,4.5v6.881L-23.559.441a1.5,1.5,0,0,0,0,2.121A1.489,1.489,0,0,0-22.5,3a1.494,1.494,0,0,0,1.06-.439L-19.765.886-18.4,2.25a1.5,1.5,0,0,0,2.121,0l1.061-1.061h0L-14.25.22a1.5,1.5,0,0,0,0-2.122l-1.364-1.364L-11.377-7.5H-4.5A4.5,4.5,0,0,0,0-12v-4.5A4.5,4.5,0,0,0-4.5-21Zm0,8.1a.9.9,0,0,1-.9.9H-8.1a.9.9,0,0,1-.9-.9v-2.7a.9.9,0,0,1,.9-.9h2.7a.9.9,0,0,1,.9.9Z"
      transform="translate(23.999 21)"
      fill="#00b398"
    />
  </Svg>
);

export default KeySkeleton;
