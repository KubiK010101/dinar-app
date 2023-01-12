import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const Percentage = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 12.001 12" {...props}>
    <Path
      id="Path_10745"
      data-name="Path 10745"
      d="M-.294-11.707a1,1,0,0,0-1.414,0l-10,10a1,1,0,0,0,0,1.414A1,1,0,0,0-11,0a1,1,0,0,0,.707-.293l10-10a1,1,0,0,0,0-1.414ZM-10-8a2,2,0,0,0,2-2,2,2,0,0,0-2-2,2,2,0,0,0-2,2A2,2,0,0,0-10-8Zm8,4A2,2,0,0,0-4-2,2,2,0,0,0-2,0,2,2,0,0,0,0-2,2,2,0,0,0-2-4Z"
      transform="translate(12.001 12)"
      fill={props.color || '#fff'}
    />
  </Svg>
);

export default Percentage;
