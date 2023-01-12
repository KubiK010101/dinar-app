import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const Camera = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 16 14" {...props}>
    <Path
      id="Path_10743"
      data-name="Path 10743"
      d="M-2-11H-4.25l-.264-.7A2,2,0,0,0-6.387-13H-9.613a2,2,0,0,0-1.872,1.3l-.266.7H-14a2,2,0,0,0-2,2v8a2,2,0,0,0,2,2H-2A2,2,0,0,0,0-1V-9A2,2,0,0,0-2-11Zm.5,10A.5.5,0,0,1-2-.5H-14a.5.5,0,0,1-.5-.5V-9a.5.5,0,0,1,.5-.5h3.288l.631-1.676a.5.5,0,0,1,.469-.324h3.228a.5.5,0,0,1,.468.324L-5.291-9.5H-2a.5.5,0,0,1,.5.5ZM-8-8.5A3.5,3.5,0,0,0-11.5-5,3.5,3.5,0,0,0-8-1.5,3.5,3.5,0,0,0-4.5-5,3.5,3.5,0,0,0-8-8.5ZM-8-3a2,2,0,0,1-2-2A2,2,0,0,1-8-7,2,2,0,0,1-6-5,2,2,0,0,1-8-3Z"
      transform="translate(16 13)"
      fill="#8e9aa0"
    />
  </Svg>
);

export default Camera;
