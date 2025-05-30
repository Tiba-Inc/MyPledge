import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
const Notification = (props: SvgProps) => (
  <Svg width={16} height={20} viewBox="0 0 16 20" fill="none" {...props}>
    <Path
      d="M8 19.75C9.1 19.75 10 18.85 10 17.75H6C6 18.85 6.9 19.75 8 19.75ZM14 13.75V8.75C14 5.68 12.37 3.11 9.5 2.43V1.75C9.5 0.92 8.83 0.25 8 0.25C7.17 0.25 6.5 0.92 6.5 1.75V2.43C3.64 3.11 2 5.67 2 8.75V13.75L0 15.75V16.75H16V15.75L14 13.75ZM12 14.75H4V8.75C4 6.27 5.51 4.25 8 4.25C10.49 4.25 12 6.27 12 8.75V14.75Z"
      fill="#514347"
    />
  </Svg>
);
export default Notification;
