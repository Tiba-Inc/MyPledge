import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const Fire1 = (props:SvgProps) => (
  <Svg
    width={49}
    height={47}
    viewBox="0 0 49 47"
    fill="none"
    {...props}
  >
    <Path
      opacity={0.3}
      d="M41.3 11.6C38.74 13.28 35.7 14.2 32.58 14.2C24.34 14.2 17.5 8 16.62 0C9.02 6.4 0.5 16.36 0.5 29C0.5 36.16 3.66 42.6 8.66 47C8.5 45.64 7.74 39.48 13.18 34.12L24.5 23L35.82 34.12C41.22 39.44 40.5 45.56 40.34 46.96V47C45.34 42.6 48.5 36.16 48.5 29C48.5 22.4 45.86 16.12 41.3 11.6Z"
      fill="#FF9500"
    />
  </Svg>
);
export default Fire1;
