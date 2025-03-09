import * as React from "react";
import Svg, { Line, SvgProps } from "react-native-svg";
const Menu = (props:SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-menu"
    {...props}
  >
    <Line x1={4} x2={20} y1={12} y2={12} />
    <Line x1={4} x2={20} y1={6} y2={6} />
    <Line x1={4} x2={20} y1={18} y2={18} />
  </Svg>
);
export default Menu;
