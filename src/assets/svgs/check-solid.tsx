import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg';

const CheckSolid = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 12 12" {...props}>
    <G
      id="Ellipse_107"
      data-name="Ellipse 107"
      fill="none"
      stroke={props.color || '#38700a'}
      strokeWidth={1}>
      <Circle cx={6} cy={6} r={6} stroke="none" />
      <Circle cx={6} cy={6} r={5.5} fill="none" />
    </G>
    <Path
      id="Path_10752"
      data-name="Path 10752"
      d="M-.147-5.353a.5.5,0,0,1,0,.706l-4,4a.5.5,0,0,1-.706,0l-2-2a.5.5,0,0,1,0-.706.5.5,0,0,1,.707,0l1.632,1.645L-.853-5.353a.5.5,0,0,1,.706,0Z"
      transform="translate(9.5 9)"
      fill={props.color || '#38700a'}
    />
  </Svg>
);

export default CheckSolid;
