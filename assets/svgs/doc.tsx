import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
const Doc = (props: SvgProps) => (
  <Svg
    width={18}
    height={18}
    viewBox="0 0 18 18"
    fill="none"
    {...props}>
    <Path
      d="M16 2V16H2V2H16ZM16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0Z"
      fill="#514347"
    />
    <Path d="M11 14H4V12H11V14ZM14 10H4V8H14V10ZM14 6H4V4H14V6Z" fill="#514347" />
  </Svg>
);
export default Doc;
