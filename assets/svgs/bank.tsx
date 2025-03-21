import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const Bank = (props:SvgProps) => (
  <Svg
    width={26}
    height={28}
    viewBox="0 0 26 28"
    fill="none"
    {...props}
  >
    <Path
      d="M6.3335 12.6641H3.66683V21.9974H6.3335V12.6641ZM14.3335 12.6641H11.6668V21.9974H14.3335V12.6641ZM25.6668 24.6641H0.333496V27.3307H25.6668V24.6641ZM22.3335 12.6641H19.6668V21.9974H22.3335V12.6641ZM13.0002 3.6774L19.9468 7.33073H6.0535L13.0002 3.6774ZM13.0002 0.664062L0.333496 7.33073V9.9974H25.6668V7.33073L13.0002 0.664062Z"
      fill="white"
    />
  </Svg>
);
export default Bank;
