import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const Users = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 20 16" {...props}>
    <Path
      id="Path_10745"
      data-name="Path 10745"
      d="M-10-4A3.227,3.227,0,0,0-6.781-7.25,3.244,3.244,0,0,0-10-10.5a3.227,3.227,0,0,0-3.222,3.25A3.21,3.21,0,0,0-10-4Zm1.562,1h-3.119A4.31,4.31,0,0,0-16,1.166.861.861,0,0,0-15.113,2H-4.887A.861.861,0,0,0-4,1.166,4.31,4.31,0,0,0-8.441-3ZM-4-9a2.5,2.5,0,0,0,2.5-2.5A2.5,2.5,0,0,0-4-14a2.5,2.5,0,0,0-2.5,2.5A2.5,2.5,0,0,0-4-9ZM-14.253-7.25a4.163,4.163,0,0,1,.05-.5A2.263,2.263,0,0,0-15.316-8h-1.932A2.838,2.838,0,0,0-20-5.084a.569.569,0,0,0,.551.584h6.234A4.209,4.209,0,0,1-14.253-7.25ZM-16-9a2.5,2.5,0,0,0,2.5-2.5A2.5,2.5,0,0,0-16-14a2.5,2.5,0,0,0-2.5,2.5A2.5,2.5,0,0,0-16-9ZM-2.753-8H-4.686a2.606,2.606,0,0,0-1.121.258,4.281,4.281,0,0,1,.05.492A4.213,4.213,0,0,1-6.793-4.5H-.552A.569.569,0,0,0,0-5.084,2.838,2.838,0,0,0-2.753-8Z"
      transform="translate(20 14)"
      fill={props.color || '#fff'}
    />
  </Svg>
);

export default Users;