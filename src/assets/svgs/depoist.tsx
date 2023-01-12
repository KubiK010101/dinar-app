import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const Depoist = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 12 13.971" {...props}>
    <Path
      id="Path_10743"
      data-name="Path 10743"
      d="M-5.793-7.266l5.25-5.5A.746.746,0,0,1,0-13a.749.749,0,0,1,.543.232l5.25,5.5a.751.751,0,0,1-.025,1.061.749.749,0,0,1-1.061-.025L.75-10.378V.25A.72.72,0,0,1,.028.972.768.768,0,0,1-.75.25V-10.378L-4.706-6.231a.752.752,0,0,1-1.061.025A.75.75,0,0,1-5.793-7.266Z"
      transform="translate(6 12.999)"
      fill={props.color || '#1a873d'}
    />
  </Svg>
);

export default Depoist;
