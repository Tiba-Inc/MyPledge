import * as React from 'react';
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  RadialGradient,
  SvgProps,
} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SVGComponent = (props: SvgProps) => (
  <Svg
    width={166}
    height={166}
    viewBox="0 0 166 166"
    fill="none"
    {...props}>
    <G filter="url(#filter0_d_59026_19463)">
      <Path
        d="M80.4055 3.21099C81.9006 1.93694 84.0994 1.93694 85.5945 3.21099L104.669 19.4665C105.31 20.0124 106.107 20.3424 106.946 20.4093L131.928 22.4029C133.886 22.5592 135.441 24.114 135.597 26.0721L137.591 51.0544C137.658 51.8935 137.988 52.69 138.534 53.3307L154.789 72.4055C156.063 73.9006 156.063 76.0994 154.789 77.5945L138.534 96.6693C137.988 97.31 137.658 98.1065 137.591 98.9456L135.597 123.928C135.441 125.886 133.886 127.441 131.928 127.597L106.946 129.591C106.107 129.658 105.31 129.988 104.669 130.534L85.5945 146.789C84.0994 148.063 81.9006 148.063 80.4055 146.789L61.3307 130.534C60.69 129.988 59.8935 129.658 59.0544 129.591L34.0721 127.597C32.114 127.441 30.5592 125.886 30.4029 123.928L28.4093 98.9456C28.3424 98.1065 28.0124 97.31 27.4665 96.6693L11.211 77.5945C9.93694 76.0994 9.93694 73.9006 11.211 72.4055L27.4665 53.3307C28.0124 52.69 28.3424 51.8935 28.4093 51.0544L30.4029 26.0721C30.5592 24.114 32.114 22.5592 34.0721 22.4029L59.0544 20.4093C59.8935 20.3424 60.69 20.0124 61.3307 19.4665L80.4055 3.21099Z"
        fill="url(#paint0_linear_59026_19463)"
      />
      <G filter="url(#filter1_d_59026_19463)">
        <Path
          d="M83.0001 132.812C114.929 132.812 140.813 106.929 140.813 75C140.813 43.071 114.929 17.1875 83.0001 17.1875C51.0711 17.1875 25.1875 43.071 25.1875 75C25.1875 106.929 51.0711 132.812 83.0001 132.812Z"
          fill="url(#paint1_linear_59026_19463)"
        />
        <Path
          opacity={0.18}
          d="M83.0001 125.875C111.098 125.875 133.875 103.097 133.875 75C133.875 46.9025 111.098 24.125 83.0001 24.125C54.9026 24.125 32.125 46.9025 32.125 75C32.125 103.097 54.9026 125.875 83.0001 125.875Z"
          fill="url(#paint2_radial_59026_19463)"
          fillOpacity={0.5}
        />
      </G>
      <Path
        d="M131.562 74.8292C131.562 76.8195 131.449 78.8097 131.221 80.7431C130.993 82.904 130.538 85.0648 130.025 87.1119C129.798 88.0218 129.57 88.8747 129.285 89.7846C128.773 91.3768 128.204 92.969 127.52 94.5043C126.04 97.8593 124.218 100.987 122.055 103.887C120.233 106.332 118.184 108.607 115.906 110.711C107.31 118.672 95.8097 123.505 83.171 123.562C70.5323 123.619 58.9753 118.842 50.3217 110.938C48.1014 108.891 46.0519 106.673 44.2301 104.285C40.8142 99.7927 38.1954 94.6749 36.5444 89.2159C35.7474 86.657 35.1781 83.9844 34.8365 81.2549C34.6087 79.2646 34.4379 77.2744 34.4379 75.2841C34.3241 48.3304 55.9579 26.5513 82.8294 26.4376C109.644 26.3807 131.449 47.9892 131.562 74.8292Z"
        fill="#FCFCFC"
      />
      <Path
        d="M83.0003 47.25C72.2087 47.25 61.417 66.7675 61.417 81.1667C61.417 93.0992 71.0678 102.75 83.0003 102.75C94.9328 102.75 104.584 93.0992 104.584 81.1667C104.584 66.7675 93.792 47.25 83.0003 47.25ZM86.0837 93.5C76.8337 93.5 70.667 87.3642 70.667 78.0833C70.667 76.3875 72.0545 75 73.7503 75C75.4462 75 76.8337 76.3875 76.8337 78.0833C76.8337 87.0867 84.2953 87.3333 86.0837 87.3333C87.7795 87.3333 89.167 88.7208 89.167 90.4167C89.167 92.1125 87.7795 93.5 86.0837 93.5Z"
        fill="#8A4A65"
      />
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_59026_19463"
        x1={8.91974}
        y1={74.9757}
        x2={157.032}
        y2={74.9757}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FFF8C1" />
        <Stop offset={0.0001} stopColor="#C2E8FD" />
        <Stop offset={0.3123} stopColor="#919191" />
        <Stop offset={0.7592} stopColor="#DDDDDD" />
        <Stop offset={1} stopColor="#E3E3E3" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_59026_19463"
        x1={25.1248}
        y1={74.981}
        x2={140.838}
        y2={74.981}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FFF8C1" />
        <Stop offset={0.0001} stopColor="#C2E8FD" />
        <Stop offset={0.3123} stopColor="#919191" />
        <Stop offset={0.7592} stopColor="#DDDDDD" />
        <Stop offset={1} stopColor="white" />
      </LinearGradient>
      <RadialGradient
        id="paint2_radial_59026_19463"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(82.9746 74.9744) scale(50.8503 50.8502)">
        <Stop stopColor="white" stopOpacity={0} />
        <Stop offset={1} stopColor="#571600" />
      </RadialGradient>
    </Defs>
  </Svg>
);
export default SVGComponent;
