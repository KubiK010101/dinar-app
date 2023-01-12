import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const Dollar = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 18 12" {...props}>
    <Path
      id="Path_10743"
      data-name="Path 10743"
      d="M7-12H-7a2,2,0,0,0-2,2v8A2,2,0,0,0-7,0H7A2,2,0,0,0,9-2v-8A2,2,0,0,0,7-12Zm.5,8.5a2,2,0,0,0-2,2h-11a2,2,0,0,0-2-2v-5a2,2,0,0,0,2-2h11a2,2,0,0,0,2,2ZM2.5-6A2.767,2.767,0,0,0,0-9,2.784,2.784,0,0,0-2.5-6,2.785,2.785,0,0,0,0-3,2.784,2.784,0,0,0,2.5-6Z"
      transform="translate(9 12)"
      fill={props.color || '#00b398'}
    />
  </Svg>
);

export default Dollar;
