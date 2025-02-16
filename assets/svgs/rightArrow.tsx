import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
const RightArrow = (props: SvgProps) => (
  <Svg width={5} height={10} viewBox="0 0 5 10" fill="none" {...props}>
    <Path d="M0 10V0L5 5L0 10Z" fill="#514347" />
  </Svg>
);
export default RightArrow;
