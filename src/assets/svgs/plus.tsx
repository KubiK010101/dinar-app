import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const Plus = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 13 13" {...props}>
    <Path
      fill={props.color || '#000000'}
      id="Path_10743"
      data-name="Path 10743"
      d="M6.5-6a.748.748,0,0,1-.75.75h-5v5A.75.75,0,0,1,0,.5.749.749,0,0,1-.75-.25v-5h-5A.75.75,0,0,1-6.5-6a.751.751,0,0,1,.75-.75h5v-5A.75.75,0,0,1,0-12.5a.75.75,0,0,1,.75.75v5h5A.75.75,0,0,1,6.5-6Z"
      transform="translate(6.5 12.5)"
    />
  </Svg>
);

export default Plus;
