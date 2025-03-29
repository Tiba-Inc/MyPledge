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
    <G filter="url(#filter0_d_59014_18190)">
      <Path
        d="M80.4055 3.21099C81.9006 1.93694 84.0994 1.93694 85.5945 3.21099L104.669 19.4665C105.31 20.0124 106.107 20.3424 106.946 20.4093L131.928 22.4029C133.886 22.5592 135.441 24.114 135.597 26.0721L137.591 51.0544C137.658 51.8935 137.988 52.69 138.534 53.3307L154.789 72.4055C156.063 73.9006 156.063 76.0994 154.789 77.5945L138.534 96.6693C137.988 97.31 137.658 98.1065 137.591 98.9456L135.597 123.928C135.441 125.886 133.886 127.441 131.928 127.597L106.946 129.591C106.107 129.658 105.31 129.988 104.669 130.534L85.5945 146.789C84.0994 148.063 81.9006 148.063 80.4055 146.789L61.3307 130.534C60.69 129.988 59.8935 129.658 59.0544 129.591L34.0721 127.597C32.114 127.441 30.5592 125.886 30.4029 123.928L28.4093 98.9456C28.3424 98.1065 28.0124 97.31 27.4665 96.6693L11.211 77.5945C9.93694 76.0994 9.93694 73.9006 11.211 72.4055L27.4665 53.3307C28.0124 52.69 28.3424 51.8935 28.4093 51.0544L30.4029 26.0721C30.5592 24.114 32.114 22.5592 34.0721 22.4029L59.0544 20.4093C59.8935 20.3424 60.69 20.0124 61.3307 19.4665L80.4055 3.21099Z"
        fill="url(#paint0_linear_59014_18190)"
      />
      <G filter="url(#filter1_d_59014_18190)">
        <Path
          d="M83.0001 132.812C114.929 132.812 140.813 106.929 140.813 75C140.813 43.071 114.929 17.1875 83.0001 17.1875C51.0711 17.1875 25.1875 43.071 25.1875 75C25.1875 106.929 51.0711 132.812 83.0001 132.812Z"
          fill="url(#paint1_linear_59014_18190)"
        />
        <Path
          opacity={0.18}
          d="M83.0001 125.875C111.098 125.875 133.875 103.097 133.875 75C133.875 46.9025 111.098 24.125 83.0001 24.125C54.9026 24.125 32.125 46.9025 32.125 75C32.125 103.097 54.9026 125.875 83.0001 125.875Z"
          fill="url(#paint2_radial_59014_18190)"
          fillOpacity={0.5}
        />
      </G>
      <Path
        d="M131.562 74.8292C131.562 76.8195 131.449 78.8097 131.221 80.7431C130.993 82.904 130.538 85.0648 130.025 87.1119C129.798 88.0218 129.57 88.8747 129.285 89.7846C128.773 91.3768 128.204 92.969 127.52 94.5043C126.04 97.8593 124.218 100.987 122.055 103.887C120.233 106.332 118.184 108.607 115.906 110.711C107.31 118.672 95.8097 123.505 83.171 123.562C70.5323 123.619 58.9753 118.842 50.3217 110.938C48.1014 108.891 46.0519 106.673 44.2301 104.285C40.8142 99.7927 38.1954 94.6749 36.5444 89.2159C35.7474 86.657 35.1781 83.9844 34.8365 81.2549C34.6087 79.2646 34.4379 77.2744 34.4379 75.2841C34.3241 48.3304 55.9579 26.5513 82.8294 26.4376C109.644 26.3807 131.449 47.9892 131.562 74.8292Z"
        fill="#FCFCFC"
      />
      <Path
        d="M64.6695 52.3035L63.467 51.101C62.2645 49.8985 60.322 49.9294 59.1503 51.101L59.1195 51.1319C57.917 52.3344 57.917 54.2769 59.1195 55.4485L60.322 56.651C61.5245 57.8535 63.4361 57.8535 64.6386 56.651L64.6695 56.6202C65.872 55.4485 65.872 53.4752 64.6695 52.3035ZM55.2961 71.9135H52.1511C50.4553 71.9135 49.0986 73.2702 49.0986 74.966V74.9969C49.0986 76.6927 50.4553 78.0494 52.1511 78.0494H55.2653C56.992 78.0802 58.3486 76.7235 58.3486 75.0277V74.9969C58.3486 73.2702 56.992 71.9135 55.2961 71.9135ZM83.0461 41.2344H83.0153C81.2886 41.2344 79.932 42.591 79.932 44.2869V47.2469C79.932 48.9427 81.2886 50.2994 82.9845 50.2994H83.0153C84.742 50.3302 86.0986 48.9735 86.0986 47.2777V44.2869C86.0986 42.591 84.742 41.2344 83.0461 41.2344ZM106.911 51.1319C105.709 49.9294 103.766 49.9294 102.564 51.101L101.361 52.3035C100.159 53.506 100.159 55.4485 101.361 56.6202L101.392 56.651C102.594 57.8535 104.537 57.8535 105.709 56.651L106.911 55.4485C108.114 54.246 108.114 52.3344 106.911 51.1319ZM101.33 97.6902L102.533 98.8927C103.735 100.095 105.678 100.095 106.88 98.8927C108.083 97.6902 108.083 95.7477 106.88 94.5452L105.678 93.3427C104.475 92.1402 102.533 92.171 101.361 93.3427C100.128 94.576 100.128 96.4877 101.33 97.6902ZM107.682 74.966V74.9969C107.682 76.6927 109.039 78.0494 110.734 78.0494H113.849C115.544 78.0494 116.901 76.6927 116.901 74.9969V74.966C116.901 73.2702 115.544 71.9135 113.849 71.9135H110.734C109.039 71.9135 107.682 73.2702 107.682 74.966ZM83.0153 56.4969C72.8095 56.4969 64.5153 64.791 64.5153 74.9969C64.5153 85.2027 72.8095 93.4969 83.0153 93.4969C93.2211 93.4969 101.515 85.2027 101.515 74.9969C101.515 64.791 93.2211 56.4969 83.0153 56.4969ZM82.9845 108.759H83.0153C84.7111 108.759 86.0678 107.403 86.0678 105.707V102.747C86.0678 101.051 84.7111 99.6944 83.0153 99.6944H82.9845C81.2886 99.6944 79.932 101.051 79.932 102.747V105.707C79.932 107.403 81.2886 108.759 82.9845 108.759ZM59.1195 98.8619C60.322 100.064 62.2645 100.064 63.467 98.8619L64.6695 97.6594C65.872 96.4569 65.8411 94.5144 64.6695 93.3427L64.6386 93.3119C63.4361 92.1094 61.4936 92.1094 60.2911 93.3119L59.0886 94.5144C57.917 95.7477 57.917 97.6594 59.1195 98.8619Z"
        fill="#FFEB3B"
      />
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_59014_18190"
        x1={8.91974}
        y1={74.9757}
        x2={157.032}
        y2={74.9757}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#41B8FD" />
        <Stop offset={0.3123} stopColor="#0013BD" />
        <Stop offset={0.7592} stopColor="#5866E0" />
        <Stop offset={1} stopColor="#6CC7FD" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_59014_18190"
        x1={25.1248}
        y1={74.981}
        x2={140.838}
        y2={74.981}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#41B8FD" />
        <Stop offset={0.3123} stopColor="#0013BD" />
        <Stop offset={0.7592} stopColor="#5866E0" />
        <Stop offset={1} stopColor="#6CC7FD" />
      </LinearGradient>
      <RadialGradient
        id="paint2_radial_59014_18190"
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
