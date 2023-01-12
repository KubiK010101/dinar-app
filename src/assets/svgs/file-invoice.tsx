import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const FileInvoice = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 12 16" {...props}>
    <Path
      id="Path_10745"
      data-name="Path 10745"
      d="M-4-14v4H0Zm1,8H-9v2h6Zm-2-4v-4h-5.5A1.5,1.5,0,0,0-12-12.5V.5A1.5,1.5,0,0,0-10.5,2h9A1.5,1.5,0,0,0,0,.5V-9H-3.972A1,1,0,0,1-5-10Zm-5-1.75A.252.252,0,0,1-9.75-12h2.5a.251.251,0,0,1,.25.25v.5a.251.251,0,0,1-.25.25h-2.5a.252.252,0,0,1-.25-.25Zm0,2A.251.251,0,0,1-9.75-10h2.5A.251.251,0,0,1-7-9.75v.5A.251.251,0,0,1-7.25-9h-2.5A.251.251,0,0,1-10-9.25Zm8,9.5A.252.252,0,0,1-2.25,0h-2.5A.251.251,0,0,1-5-.25v-.5A.252.252,0,0,1-4.75-1h2.5A.252.252,0,0,1-2-.75ZM-2-6.5v3a.5.5,0,0,1-.5.5h-7a.5.5,0,0,1-.5-.5v-3A.5.5,0,0,1-9.5-7h7A.5.5,0,0,1-2-6.5Z"
      transform="translate(12 14)"
      fill={props.color || '#fff'}
    />
  </Svg>
);

export default FileInvoice;
