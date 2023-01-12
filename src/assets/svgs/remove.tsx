import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const Remove = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 12 12" {...props}>
    <Path
      id="Path_10749"
      data-name="Path 10749"
      d="M-7.9-6.4a.542.542,0,0,1,.776,0l1.1,1.1L-4.9-6.4a.542.542,0,0,1,.776,0,.509.509,0,0,1,0,.776l-1.083,1.1L-4.123-3.4a.509.509,0,0,1,0,.776.509.509,0,0,1-.776,0L-6.021-3.705l-1.1,1.083a.509.509,0,0,1-.776,0,.542.542,0,0,1,0-.776l1.1-1.123-1.1-1.1A.542.542,0,0,1-7.9-6.4ZM0-4.5a6,6,0,0,1-6,6,6,6,0,0,1-6-6,6,6,0,0,1,6-6A6,6,0,0,1,0-4.5ZM-6-9.375A4.874,4.874,0,0,0-10.875-4.5,4.874,4.874,0,0,0-6,.375,4.874,4.874,0,0,0-1.125-4.5,4.874,4.874,0,0,0-6-9.375Z"
      transform="translate(12 10.5)"
      fill={props.color || '#c7181f'}
    />
  </Svg>
);

export default Remove;
