import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ArrowBack = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 7.907 15.812" {...props}>
    <Path
      id="bell"
      d="M-1.622-8.144-8.091-.957A.719.719,0,0,1-9.106-.9.72.72,0,0,1-9.159-1.92l6.037-6.705-6.037-6.707a.721.721,0,0,1,.053-1.015.72.72,0,0,1,1.015.053l6.469,7.147a.769.769,0,0,1,0,1Z"
      transform="translate(9.344 16.531)"
      fill={props.color || '#fff'}
    />
  </Svg>
);

export default ArrowBack;
