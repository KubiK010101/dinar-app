import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const Unlock = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 21 24" {...props}>
    <Path
      id="Path_10744"
      data-name="Path 10744"
      d="M0-7.5V0A3,3,0,0,1-3,3H-18A2.991,2.991,0,0,1-21,.042v-7.5a3,3,0,0,1,3-3l.75-.042v-3.75A6.757,6.757,0,0,1-10.5-21a6.757,6.757,0,0,1,6.75,6.75v.75h-3v-.75A3.754,3.754,0,0,0-10.5-18a3.754,3.754,0,0,0-3.75,3.75v3.75H-3A3,3,0,0,1,0-7.5Z"
      transform="translate(21 21)"
      fill={props.color || '#00b398'}
    />
  </Svg>
);

export default Unlock;
