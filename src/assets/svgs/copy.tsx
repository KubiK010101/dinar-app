import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const Copy = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 22 22" {...props}>
    <Path
      id="Path_10744"
      data-name="Path 10744"
      d="M21.6-16.215l-2.632-2.632a1.371,1.371,0,0,0-.973-.4h-7.03a2.75,2.75,0,0,0-2.75,2.75v11A2.807,2.807,0,0,0,11-2.75h8.25A2.758,2.758,0,0,0,22-5.5v-9.743A1.376,1.376,0,0,0,21.6-16.215ZM19.938-5.5a.688.688,0,0,1-.687.688H10.961a.687.687,0,0,1-.687-.687V-16.494a.688.688,0,0,1,.688-.687h5.5l.039,2.057a1.375,1.375,0,0,0,1.375,1.375H19.9V-5.5ZM11.688,0A.688.688,0,0,1,11,.688H2.711A.687.687,0,0,1,2.024,0l.038-11a.688.688,0,0,1,.688-.687H6.875V-13.75H2.75A2.75,2.75,0,0,0,0-11V0A2.752,2.752,0,0,0,2.75,2.75H11A2.758,2.758,0,0,0,13.75,0V-1.375H11.726Z"
      transform="translate(0 19.25)"
      fill={props.color || '#00b398'}
    />
  </Svg>
);

export default Copy;