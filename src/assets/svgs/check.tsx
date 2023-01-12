import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const Check = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" width={24} height={24} {...props}>
    <Path
      d="M18.71 7.21a1 1 0 0 0-1.42 0l-7.45 7.46-3.13-3.14A1 1 0 1 0 5.29 13l3.84 3.84a1 1 0 0 0 1.42 0l8.16-8.16a1 1 0 0 0 0-1.47Z"
      fill={props.color || '#6563ff'}
    />
  </Svg>
);

export default Check;
