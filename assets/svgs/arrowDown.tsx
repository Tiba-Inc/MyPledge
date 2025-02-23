import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
const ArrowDown = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-arrow-down"
    {...props}>
    <Path d="M12 5v14" />
    <Path d="m19 12-7 7-7-7" />
  </Svg>
);
export default ArrowDown;
