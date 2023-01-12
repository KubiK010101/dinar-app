import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const Calendar3 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 14 16" {...props}>
    <Path
      id="Path_10743"
      data-name="Path 10743"
      d="M-2.25-12h4.5v-1.25A.749.749,0,0,1,3-14a.749.749,0,0,1,.75.75V-12H5a2,2,0,0,1,2,2V0A2,2,0,0,1,5,2H-5A2,2,0,0,1-7,0V-10a2,2,0,0,1,2-2h1.25v-1.25A.749.749,0,0,1-3-14a.749.749,0,0,1,.75.75ZM-5.5,0A.5.5,0,0,0-5,.5H5A.5.5,0,0,0,5.5,0V-8h-11Z"
      transform="translate(7 14)"
      fill={props.color || '#00b398'}
    />
  </Svg>
);

export default Calendar3;
