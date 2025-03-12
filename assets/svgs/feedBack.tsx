import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
const FeedBack = (props: SvgProps) => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
    <Path
      d="M18 0H2C0.9 0 0 0.9 0 2V20L4 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 14H3.17L2 15.17V2H18V14Z"
      fill="#514347"
    />
    <Path
      d="M10 13L11.57 9.57L15 8L11.57 6.43L10 3L8.43 6.43L5 8L8.43 9.57L10 13Z"
      fill="#514347"
    />
  </Svg>
);
export default FeedBack;
