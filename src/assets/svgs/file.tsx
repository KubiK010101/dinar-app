import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const File = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 17.25 23" {...props}>
    <Path
      id="bell"
      d="M-.84-14.5-5.624-19.28a2.877,2.877,0,0,0-2.035-.845h-6.716A2.875,2.875,0,0,0-17.25-17.25V0a2.875,2.875,0,0,0,2.875,2.875h11.5A2.875,2.875,0,0,0,0,0V-12.466A2.866,2.866,0,0,0-.84-14.5Zm-6.347-4.1a1.416,1.416,0,0,1,.544.328l4.784,4.784a1.348,1.348,0,0,1,.327.544H-6.469a.721.721,0,0,1-.719-.719ZM-1.437,0A1.439,1.439,0,0,1-2.875,1.438h-11.5A1.439,1.439,0,0,1-15.812,0V-17.25a1.439,1.439,0,0,1,1.438-1.437h5.75v5.031A2.157,2.157,0,0,0-6.469-11.5h5.031ZM-13.656-15.812h2.875a.72.72,0,0,0,.719-.719.72.72,0,0,0-.719-.719h-2.875a.719.719,0,0,0-.719.719A.719.719,0,0,0-13.656-15.812Zm0,2.875h2.875a.721.721,0,0,0,.719-.719.721.721,0,0,0-.719-.719h-2.875a.72.72,0,0,0-.719.719A.72.72,0,0,0-13.656-12.937ZM-9.137-3.8l-.624-1.87a1.069,1.069,0,0,0-1.021-.74,1.073,1.073,0,0,0-1.022.741l-.82,2.453a.5.5,0,0,1-.477.341h-.556a.716.716,0,0,0-.719.719.716.716,0,0,0,.719.719h.556a1.94,1.94,0,0,0,1.842-1.325l.477-1.433.759,2.264a.712.712,0,0,0,.629.494h.049a.756.756,0,0,0,.64-.4l.348-.691A.49.49,0,0,1-7.906-2.8a.493.493,0,0,1,.455.292A1.933,1.933,0,0,0-5.714-1.437h2.12a.717.717,0,0,0,.719-.719.716.716,0,0,0-.719-.719H-5.716a.517.517,0,0,1-.455-.292A2.011,2.011,0,0,0-9.137-3.8Z"
      transform="translate(17.25 20.125)"
      fill={props.color || '#fff'}
    />
  </Svg>
);

export default File;
