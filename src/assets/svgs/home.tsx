import * as React from 'react';
import Svg, { SvgProps, Path, G } from 'react-native-svg';

const Home = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24.002 23.987" {...props}>
    <Path
      id="Path_10736"
      data-name="Path 10736"
      d="M195,319.841a3,3,0,0,0-3,3v6h6v-6A3,3,0,0,0,195,319.841Z"
      transform="translate(-183 -304.855)"
      fill={props.color || '#0b3870'}
    />
    <G id="Group_3226" data-name="Group 3226">
      <Path
        id="Path_10737"
        data-name="Path 10737"
        d="M17,18.146v6h4a3,3,0,0,0,3-3V12.025a2,2,0,0,0-.563-1.392l-8.5-9.188a4,4,0,0,0-5.653-.223q-.116.107-.223.223L.581,10.63A2,2,0,0,0,0,12.04v9.107a3,3,0,0,0,3,3H7v-6a5,5,0,1,1,10,0Z"
        transform="translate(0 -0.16)"
        fill={props.color || '#0b3870'}
      />
      <Path
        id="Path_10738"
        data-name="Path 10738"
        d="M195,319.841a3,3,0,0,0-3,3v6h6v-6A3,3,0,0,0,195,319.841Z"
        transform="translate(-182.999 -304.855)"
        fill={props.color || '#0b3870'}
      />
    </G>
  </Svg>
);

export default Home;
