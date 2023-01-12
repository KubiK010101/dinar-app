import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const CreditCardSolid = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 18 14" {...props}>
    <Path
      id="Path_10744"
      data-name="Path 10744"
      d="M-10.5-2h4A.5.5,0,0,0-6-2.5.5.5,0,0,0-6.5-3h-4a.5.5,0,0,0-.5.5A.5.5,0,0,0-10.5-2Zm-4,0h2a.5.5,0,0,0,.5-.5.5.5,0,0,0-.5-.5h-2a.5.5,0,0,0-.5.5A.5.5,0,0,0-14.5-2ZM-2-13H-16a2,2,0,0,0-2,2V-1a2,2,0,0,0,2,2H-2A2,2,0,0,0,0-1V-11A2,2,0,0,0-2-13ZM-1-1A1,1,0,0,1-2,0H-16a1,1,0,0,1-1-1V-6H-1Zm0-6H-17V-9H-1Zm0-3H-17v-1a1,1,0,0,1,1-1H-2a1,1,0,0,1,1,1Z"
      transform="translate(18 13)"
      fill={props.color || '#cbd0d6'}
    />
  </Svg>
);

export default CreditCardSolid;
