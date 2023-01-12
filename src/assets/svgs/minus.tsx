import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const Minus = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 6.24 1.787" {...props}>
    <Path
      id="Path_10749"
      data-name="Path 10749"
      d="M1.377-5.684V-7.471h6.24v1.787Z"
      transform="translate(-1.377 7.471)"
      fill={props.color || '#626e7c'}
    />
  </Svg>
);

export default Minus;
