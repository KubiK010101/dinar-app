import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const Card = (props: SvgProps) => (
  <Svg id="money-check" width={24} height={24} viewBox="0 0 14.759 12.299" {...props}>
    <Path
      id="money-check-2"
      data-name="money-check"
      d="M11.684,14.3H3.075A3.078,3.078,0,0,1,0,11.224V5.075A3.078,3.078,0,0,1,3.075,2h8.609a3.078,3.078,0,0,1,3.075,3.075v6.149A3.078,3.078,0,0,1,11.684,14.3ZM3.075,3.23A1.847,1.847,0,0,0,1.23,5.075v6.149a1.847,1.847,0,0,0,1.845,1.845h8.609a1.847,1.847,0,0,0,1.845-1.845V5.075A1.847,1.847,0,0,0,11.684,3.23Zm7.994,5.534H8.609a1.231,1.231,0,0,1-1.23-1.23V6.3a1.231,1.231,0,0,1,1.23-1.23h2.46A1.231,1.231,0,0,1,12.3,6.3v1.23A1.231,1.231,0,0,1,11.069,8.764ZM8.609,6.3v1.23h2.46V6.3ZM6.149,8.149a.615.615,0,0,0-.615-.615H3.075a.615.615,0,1,0,0,1.23h2.46A.615.615,0,0,0,6.149,8.149Zm6.149,2.46a.615.615,0,0,0-.615-.615H3.075a.615.615,0,0,0,0,1.23h8.609A.615.615,0,0,0,12.3,10.609Z"
      transform="translate(0 -2)"
      fill={props.color || '#cbd0d6'}
    />
  </Svg>
);

export default Card;
