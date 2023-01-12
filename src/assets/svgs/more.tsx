import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const More = (props: SvgProps) => (
  <Svg id="apps" width={24} height={24} viewBox="0 0 24 24" {...props}>
    <Path
      id="Path_10732"
      data-name="Path 10732"
      d="M7,0H4A4,4,0,0,0,0,4V7a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V4A4,4,0,0,0,7,0ZM9,7A2,2,0,0,1,7,9H4A2,2,0,0,1,2,7V4A2,2,0,0,1,4,2H7A2,2,0,0,1,9,4Z"
      fill={props.color || '#b7b9c5'}
    />
    <Path
      id="Path_10733"
      data-name="Path 10733"
      d="M20,0H17a4,4,0,0,0-4,4V7a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V4A4,4,0,0,0,20,0Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z"
      fill={props.color || '#b7b9c5'}
    />
    <Path
      id="Path_10734"
      data-name="Path 10734"
      d="M7,13H4a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V17A4,4,0,0,0,7,13Zm2,7a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2H7a2,2,0,0,1,2,2Z"
      fill={props.color || '#b7b9c5'}
    />
    <Path
      id="Path_10735"
      data-name="Path 10735"
      d="M20,13H17a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V17A4,4,0,0,0,20,13Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z"
      fill={props.color || '#b7b9c5'}
    />
  </Svg>
);

export default More;
