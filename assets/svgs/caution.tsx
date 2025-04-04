import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
const Caution = (props: SvgProps) => (
  <Svg width={22} height={20} viewBox="0 0 22 20" fill="none" {...props}>
    <Path
      d="M11 4.49L18.53 17.5H3.47L11 4.49ZM11 0.5L0 19.5H22L11 0.5ZM12 14.5H10V16.5H12V14.5ZM12 8.5H10V12.5H12V8.5Z"
      fill="#514347"
    />
  </Svg>
);
export default Caution;
