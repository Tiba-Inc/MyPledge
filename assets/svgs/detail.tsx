import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
const Detail = (props: SvgProps) => (
  <Svg width={32} height={32} viewBox="0 0 28 24" fill="none" {...props}>
    <Path
      d="M23.3334 12.668H27.3334L14.0001 0.667969L0.666748 12.668H4.66675V23.3346H7.33342V20.668H20.6667V23.3346H23.3334V12.668ZM7.61341 10.0013H20.3867L20.6667 10.2546V12.668H7.33342V10.2546L7.61341 10.0013ZM17.4267 7.33464H10.5734L14.0001 4.25464L17.4267 7.33464ZM7.33342 18.0013V15.3346H20.6667V18.0013H7.33342Z"
      fill="white"
    />
  </Svg>
);
export default Detail;
