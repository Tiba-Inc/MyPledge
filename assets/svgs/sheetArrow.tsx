import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
const SheetArrow = (props: SvgProps) => (
  <Svg width={10} height={5} viewBox="0 0 10 5" fill="none" {...props}>
    <Path d="M5 5L0 0H10L5 5Z" fill="#514347" />
  </Svg>
);
export default SheetArrow;
