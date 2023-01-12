import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const Wallet = (props: SvgProps) => (
  <Svg id="wallet" width={24} height={24} viewBox="0 0 24 20" {...props}>
    <Path
      id="wallet-2"
      data-name="wallet"
      d="M21,6H5A3.012,3.012,0,0,1,2.765,5,3,3,0,0,1,5,4H23a1,1,0,0,0,0-2H5A5,5,0,0,0,0,7V17a5,5,0,0,0,5,5H21a3,3,0,0,0,3-3V9A3,3,0,0,0,21,6Zm1,13a1,1,0,0,1-1,1H5a3,3,0,0,1-3-3V7A5.012,5.012,0,0,0,5,8H21a1,1,0,0,1,1,1Zm-2-5a1,1,0,1,1-1-1A1,1,0,0,1,20,14Z"
      transform="translate(0 -2)"
      fill={props.color || '#b7b9c5'}
    />
  </Svg>
);

export default Wallet;
