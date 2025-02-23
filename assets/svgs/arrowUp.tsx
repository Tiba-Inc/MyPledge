import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
const ArrowUp = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-arrow-up"
    {...props}>
    <Path d="m5 12 7-7 7 7" />
    <Path d="M12 19V5" />
  </Svg>
);
export default ArrowUp;
