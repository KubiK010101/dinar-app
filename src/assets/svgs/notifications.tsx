import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const Notifications = (props: SvgProps) => (
  <Svg id="bell" width={24} height={24} viewBox="0 0 20.166 23" {...props}>
    <Path
      id="bell-2"
      data-name="bell"
      d="M-.656-5.085c-1.258-1.19-2.218-2.443-2.218-6.689A7.011,7.011,0,0,0-9.343-18.62v-.786a.717.717,0,0,0-.72-.719.716.716,0,0,0-.719.719v.786a7.048,7.048,0,0,0-6.509,6.846c0,4.245-.96,5.5-2.218,6.689a2.092,2.092,0,0,0-.505,2.3,2.233,2.233,0,0,0,2.045,1.345H-2.157a2.163,2.163,0,0,0,2-1.307A2.133,2.133,0,0,0-.656-5.085Zm-1.5,2.21H-17.969A.659.659,0,0,1-18.48-4c1.567-1.494,2.667-3.162,2.667-7.731a5.6,5.6,0,0,1,5.75-5.516,5.613,5.613,0,0,1,5.75,5.476c0,4.555,1.089,6.235,2.667,7.731A.683.683,0,0,1-2.156-2.875ZM-7.9,0a.8.8,0,0,0-.759.489,1.506,1.506,0,0,1-1.442.949,1.457,1.457,0,0,1-1.4-.949A.707.707,0,0,0-12.228,0a.687.687,0,0,0-.677.886,2.972,2.972,0,0,0,2.8,1.989A2.984,2.984,0,0,0-7.263.886.638.638,0,0,0-7.9,0Z"
      transform="translate(20.165 20.125)"
      fill={props.color || '#fff'}
    />
  </Svg>
);

export default Notifications;
