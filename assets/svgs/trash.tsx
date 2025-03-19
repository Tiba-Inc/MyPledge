import * as React from 'react';
import Svg, { Path, Line, SvgProps } from 'react-native-svg';
const Trash = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="#514347"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-trash-2"
    {...props}>
    <Path d="M3 6h18" />
    <Path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
    <Path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    <Line x1={10} x2={10} y1={11} y2={17} />
    <Line x1={14} x2={14} y1={11} y2={17} />
  </Svg>
);
export default Trash;
