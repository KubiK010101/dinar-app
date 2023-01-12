import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const Fire = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 21 24" {...props}>
    <Path
      id="Path_10746"
      data-name="Path 10746"
      d="M-5.836-18.6a28.11,28.11,0,0,0-2.63,2.805A36.822,36.822,0,0,0-13.125-21C-17.73-16.729-21-11.156-21-7.8A10.649,10.649,0,0,0-10.5,3,10.649,10.649,0,0,0,0-7.8C0-10.294-2.437-15.445-5.836-18.6ZM-6.745-2.63A6.314,6.314,0,0,1-10.364-1.5c-3.381,0-6.136-2.237-6.136-5.869,0-1.811,1.136-3.4,3.41-6.131.328.375,4.635,5.878,4.635,5.878l2.748-3.135c.193.316.369.634.527.933A5.589,5.589,0,0,1-6.745-2.63Z"
      transform="translate(21 21)"
      fill={props.color || '#00b398'}
    />
  </Svg>
);

export default Fire;