import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const Withdraw = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 12 14" {...props}>
    <Path
      id="Path_10743"
      data-name="Path 10743"
      d="M5.794-4.731.544.769A.759.759,0,0,1,0,1,.749.749,0,0,1-.543.768l-5.25-5.5a.751.751,0,0,1,.026-1.061.749.749,0,0,1,1.061.025L-.75-1.622V-12.249A.745.745,0,0,1-.028-13a.794.794,0,0,1,.778.75V-1.621L4.706-5.768a.749.749,0,0,1,1.061-.025A.751.751,0,0,1,5.794-4.731Z"
      transform="translate(6 13)"
      fill={props.color || '#1a873d'}
    />
  </Svg>
);

export default Withdraw;
