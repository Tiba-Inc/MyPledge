import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
const Tick = (props: SvgProps) => (
  <Svg width={18} height={14} viewBox="0 0 18 14" fill="none" {...props}>
    <Path
      d="M5.79508 10.8769L1.62508 6.70687L0.205078 8.11687L5.79508 13.7069L17.7951 1.70687L16.3851 0.296875L5.79508 10.8769Z"
      fill="#FF9500"
    />
  </Svg>
);
export default Tick;
