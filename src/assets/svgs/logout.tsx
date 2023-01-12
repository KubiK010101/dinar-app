import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const Logout = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 15.999 14" {...props}>
    <Path
      id="Path_10750"
      data-name="Path 10750"
      d="M-11-1h-2a1,1,0,0,1-1-1v-8a1,1,0,0,1,1-1h2a1,1,0,0,0,1-1,1,1,0,0,0-1-1h-2a3,3,0,0,0-3,3v8a3,3,0,0,0,3,3h2a1,1,0,0,0,1-1A1,1,0,0,0-11-1ZM-.294-6.706l-4-4a1,1,0,0,0-1.414,0,1,1,0,0,0,0,1.414L-3.413-7H-10a1,1,0,0,0-1,1,1,1,0,0,0,1,1h6.587L-5.706-2.707a1,1,0,0,0,0,1.414,1,1,0,0,0,1.414,0l4-4A1,1,0,0,0-.294-6.706Z"
      transform="translate(16 13)"
      fill={props.color || '#cbd0d6'}
    />
  </Svg>
);

export default Logout;
