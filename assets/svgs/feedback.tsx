import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
const Feedback = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 20 20" fill="none" {...props}>
    <Path
      d="M18 0H2C0.9 0 0 0.9 0 2V20L4 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM4 12V9.53L10.88 2.65C11.08 2.45 11.39 2.45 11.59 2.65L13.36 4.42C13.56 4.62 13.56 4.93 13.36 5.13L6.47 12H4ZM15 12H8.5L10.5 10H15C15.55 10 16 10.45 16 11C16 11.55 15.55 12 15 12Z"
      fill="#514347"
    />
  </Svg>
);
export default Feedback;
