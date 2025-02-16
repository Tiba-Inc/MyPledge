import * as React from "react";
import Svg, { Path, Defs, Pattern, Use, Image, SvgProps } from "react-native-svg";
const Citi = (props:SvgProps) => (
  <Svg
    width={56}
    height={56}
    viewBox="0 0 56 56"
    fill="none"
    {...props}
  >
    <Path
      d="M0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28Z"
      fill="url(#pattern0_59183_21875)"
    />
    <Defs>
      <Pattern
        id="pattern0_59183_21875"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#image0_59183_21875" transform="scale(0.0025)" />
      </Pattern>
      <Image
        id="image0_59183_21875"
        width={400}
        height={400}
        xlinkHref="data:image/png;base64,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3fO0TRAeBEb7RIAAAEx4VgEAMCFAAAAmBAgAwIQAAQCYECAAABMCBABgQoAAAEwIEACACQECADAhQAAAJgQIAMCEAAEAmBAgAAATAgQAYEKAAABMCBAAgAkBAgAwIUAAACYECADAhAABAJgQIAAAEwIEAGBCgAAATAgQAIAJAQIAMCFAAAAmBAgAwIQAAQCYECAAABMCBABgQoAAAEwIEACACQECADAhQAAAJgQIAMCEAAEAmBAgAAATAgQAYEKAAABMCBAAgAkBAgAwIUAAACYECADAhAABAJgQIAAAEwIEAGBCgAAATAgQAIAJAQIAMCFAAAAmBAgAwIQAAQCYECAAABMCBABgQoAAAEwIEACACQECADAhQAAAJgQIAMCEAAEAmBAgAAATAgQAYEKAAABMCBAAgAkBAgAwIUAAACYECADAhAABAJgQIAAAEwIEAGBCgAAATAgQAIAJAQIAMCFAAAAmBAgAwIQAAQCYECAAABMCBABgQoAAAEwIEACACQECADAhQAAAJgQIAMCEAAEAmBAgAAATAgQAYEKAAABMCBAAgAkBAgAwIUAAACYECADAhAABAJgQIAAAEwIEAGBCgAAATAgQAIAJAQIAMCFAAAAmBAgAwIQAAQCYECAAABMCBABgQoAAAEwIEACACQECADAhQAAAJgQIAMCEAAEAmBAgAAATAgQAYEKAAABMCBAAgAkBAgAwIUAAACYECADAhAABAJgQIAAAEwIEAGBCgAAATAgQAIAJAQIAMCFAAAAmBAgAwIQAAQCYECAAABMCBABgQoAAAEwIEACACQECADAhQAAAJgQIAMCEAAEAmBAgAAATAgQAYPJ/1rXiHuMbOFYAAAAASUVORK5CYII="
      />
    </Defs>
  </Svg>
);
export default Citi;
