import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const CreditCard = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 18 14" {...props}>
    <Path
      id="Path_10744"
      data-name="Path 10744"
      d="M7-13H-7a2,2,0,0,0-2,2V-1A2,2,0,0,0-7,1H7A2,2,0,0,0,9-1V-11A2,2,0,0,0,7-13ZM-7.5-11a.5.5,0,0,1,.5-.5H7a.5.5,0,0,1,.5.5v1H-7.5ZM7.5-1A.5.5,0,0,1,7-.5H-7A.5.5,0,0,1-7.5-1l0-6h15ZM-5.25-2h1.5a.727.727,0,0,0,.722-.75A.726.726,0,0,0-3.75-3.5h-1.5A.752.752,0,0,0-6-2.75.752.752,0,0,0-5.25-2Zm4,0h3.5A.75.75,0,0,0,3-2.75a.75.75,0,0,0-.75-.75h-3.5A.748.748,0,0,0-2-2.75.748.748,0,0,0-1.25-2Z"
      transform="translate(9 13)"
      fill={props.color || '#00b398'}
    />
  </Svg>
);

export default CreditCard;
