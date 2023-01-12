import * as React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';

const User = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 18 24" {...props}>
    <G id="user" transform="translate(0 0)">
      <Path
        id="Path_10739"
        data-name="Path 10739"
        d="M12,12A6,6,0,1,0,6,6a6,6,0,0,0,6,6ZM12,2A4,4,0,1,1,8,6a4,4,0,0,1,4-4Z"
        transform="translate(-3)"
        fill={props.color || '#fff'}
      />
      <Path
        id="Path_10740"
        data-name="Path 10740"
        d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,1,0,2,0,7,7,0,1,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z"
        transform="translate(-3)"
        fill={props.color || '#fff'}
      />
    </G>
  </Svg>
);

export default User;
