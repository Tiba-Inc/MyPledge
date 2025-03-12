import * as React from 'react';
import Svg, { Rect, Path, SvgProps } from 'react-native-svg';
const Mismatch = (props: SvgProps) => (
  <Svg width={104} height={104} viewBox="0 0 104 104" fill="none" {...props}>
    <Rect width={104} height={104} rx={52} fill="#FF3B30" fillOpacity={0.5} />
    <Rect x={16} y={16} width={72} height={72} rx={36} fill="#FF3B30" />
    <Path
      d="M51.9997 28.668L33.333 35.668V49.878C33.333 61.6613 41.2897 72.6513 51.9997 75.3346C62.7097 72.6513 70.6663 61.6613 70.6663 49.878V35.668L51.9997 28.668ZM65.9997 49.878C65.9997 59.2113 60.0497 67.8446 51.9997 70.4813C43.9497 67.8446 37.9997 59.2346 37.9997 49.878V38.9113L51.9997 33.6613L65.9997 38.9113V49.878Z"
      fill="white"
    />
    <Path d="M54.333 56.668H49.6663V61.3346H54.333V56.668Z" fill="white" />
    <Path d="M54.333 40.3346H49.6663V52.0013H54.333V40.3346Z" fill="white" />
  </Svg>
);
export default Mismatch;
