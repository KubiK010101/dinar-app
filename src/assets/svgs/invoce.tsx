import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const Invoce = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 12 16" {...props}>
    <Path
      id="Path_10744"
      data-name="Path 10744"
      d="M-3.5-6v2a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V-6a1,1,0,0,0-1-1h-5A1,1,0,0,0-3.5-6Zm8.916-5.082L3.083-13.414A2.009,2.009,0,0,0,1.669-14H-4a2,2,0,0,0-2,2V0A2,2,0,0,0-4,2H4A2.006,2.006,0,0,0,6,0V-9.669A2,2,0,0,0,5.416-11.082ZM4.5,0A.5.5,0,0,1,4,.5H-4A.5.5,0,0,1-4.5,0V-12a.5.5,0,0,1,.5-.5H1V-10A1,1,0,0,0,2-9H4.472V0ZM-3-10H-.5a.5.5,0,0,0,.5-.5A.5.5,0,0,0-.5-11H-3a.5.5,0,0,0-.5.5A.5.5,0,0,0-3-10Zm0,2H-.5A.5.5,0,0,0,0-8.5.5.5,0,0,0-.5-9H-3a.5.5,0,0,0-.5.5A.5.5,0,0,0-3-8ZM3-2H.5a.5.5,0,0,0-.5.5A.5.5,0,0,0,.5-1H3a.5.5,0,0,0,.5-.5A.5.5,0,0,0,3-2Z"
      transform="translate(6 14)"
      fill={props.color || '#00b398'}
    />
  </Svg>
);

export default Invoce;
