import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const Download = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 16 16" {...props}>
    <Path
      id="file-pdf"
      d="M-1-3H-5.172L-6.586-1.586A1.989,1.989,0,0,1-8-1a1.986,1.986,0,0,1-1.414-.586L-10.828-3H-15a1,1,0,0,0-1,1V1a1,1,0,0,0,1,1H-1A1,1,0,0,0,0,1V-2A1,1,0,0,0-1-3ZM-2.5.25A.752.752,0,0,1-3.25-.5a.752.752,0,0,1,.75-.75.752.752,0,0,1,.75.75A.752.752,0,0,1-2.5.25ZM-8.706-2.294A.986.986,0,0,0-8-2a1,1,0,0,0,.707-.293l4-4a1,1,0,0,0,0-1.414,1,1,0,0,0-1.414,0L-7-5.413V-13a1,1,0,0,0-1-1,1,1,0,0,0-1,1v7.587l-2.294-2.294a1,1,0,0,0-1.414,0,1,1,0,0,0,0,1.414Z"
      transform="translate(16 14)"
      fill={props.color || '#00b398'}
    />
  </Svg>
);

export default Download;
