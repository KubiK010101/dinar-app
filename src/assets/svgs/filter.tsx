import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const Filter = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 16.001 14" {...props}>
    <Path
      id="Path_10743"
      data-name="Path 10743"
      d="M7.866-12.165A1.443,1.443,0,0,0,6.541-13H-6.542a1.443,1.443,0,0,0-1.324.835,1.4,1.4,0,0,0,.2,1.5L-2.5-4.316V-2.2a1.2,1.2,0,0,0,.516.983L.59.769a1.149,1.149,0,0,0,.7.231A1.2,1.2,0,0,0,2.5-.2V-4.316l5.172-6.353A1.391,1.391,0,0,0,7.866-12.165ZM1.225-5.153A1,1,0,0,0,1-4.521V-.809L-1-2.353V-4.494a1,1,0,0,0-.225-.632L-6.413-11.5H6.412Z"
      transform="translate(8 13)"
      fill={props.color || '#0B3870'}
    />
  </Svg>
);

export default Filter;
