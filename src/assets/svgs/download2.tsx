import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

const Download2 = (props: SvgProps) => (
  <Svg viewBox="0 0 96 96" width={24} height={24} {...props}>
    <Path
      fill={props.color || 'gray'}
      d="M61.758 67.758 54 75.516V54a6 6 0 0 0-12 0v21.516l-7.758-7.758a6 6 0 0 0-8.484 8.484l18 18a5.998 5.998 0 0 0 8.484 0l18-18a6 6 0 0 0-8.484-8.484Z"
    />
    <Path
      fill={props.color || 'gray'}
      d="M78 24h-.604a29.992 29.992 0 0 0-56.876-6A21.036 21.036 0 0 0 0 39a20.704 20.704 0 0 0 16.764 20.262 6 6 0 0 0 2.472-11.742A8.798 8.798 0 0 1 12 39a9.014 9.014 0 0 1 9-9 18.975 18.975 0 0 1 2.133.54 5.98 5.98 0 0 0 4.623-.692 6.044 6.044 0 0 0 2.719-3.809A17.982 17.982 0 0 1 66 30a5.997 5.997 0 0 0 6 6h6a6 6 0 0 1 0 12 6 6 0 0 0 0 12 18 18 0 0 0 0-36Z"
    />
  </Svg>
);

export default Download2;
