import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const Info = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 22 22" {...props}>
    <Path
      id="Path_10743"
      data-name="Path 10743"
      d="M-11-19.25a11,11,0,0,0-11,11,11,11,0,0,0,11,11,11,11,0,0,0,11-11A11,11,0,0,0-11-19.25Zm-1.031,6.531A1.034,1.034,0,0,1-11-13.75a1.033,1.033,0,0,1,1.031,1.031v5.5A1.032,1.032,0,0,1-11-6.187a1.03,1.03,0,0,1-1.031-1.031ZM-11-2.062a1.351,1.351,0,0,1-1.351-1.351A1.351,1.351,0,0,1-11-4.764,1.351,1.351,0,0,1-9.649-3.413,1.352,1.352,0,0,1-11-2.062Z"
      transform="translate(22 19.25)"
      fill="rgba(249,101,16,0.64)"
    />
  </Svg>
);

export default Info;
