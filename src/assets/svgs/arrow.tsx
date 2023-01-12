import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const Arrow = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 8 14.001" {...props}>
    <Path
      id="chevron-down"
      d="M-7-1a1,1,0,0,1-.707-.293l-6-6a1,1,0,0,1,0-1.414,1,1,0,0,1,1.414,0L-7-3.413l5.294-5.294a1,1,0,0,1,1.414,0,1,1,0,0,1,0,1.414l-6,6A1,1,0,0,1-7-1Z"
      transform="translate(-1 14) rotate(90)"
      fill={props.color || '#626e7c'}
    />
  </Svg>
);

export default Arrow;
