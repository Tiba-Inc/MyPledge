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
const LevelBudgetter = (props: SvgProps) => (
  <Svg width={69} height={63} viewBox="0 0 69 63" fill="none" {...props}>
    <G filter="url(#filter0_d_59465_8100)">
      <Path
        d="M29.4055 3.21099C30.9006 1.93694 33.0994 1.93694 34.5945 3.21099L39.5866 7.46524C40.2272 8.0112 41.0238 8.34114 41.8629 8.4081L48.401 8.92985C50.3591 9.0861 51.9139 10.6409 52.0701 12.599L52.5919 19.1371C52.6589 19.9762 52.9888 20.7728 53.5348 21.4134L57.789 26.4055C59.0631 27.9006 59.0631 30.0994 57.789 31.5945L53.5348 36.5866C52.9888 37.2272 52.6589 38.0238 52.5919 38.8629L52.0701 45.401C51.9139 47.3591 50.3591 48.9139 48.401 49.0701L41.8629 49.5919C41.0238 49.6589 40.2272 49.9888 39.5866 50.5348L34.5945 54.789C33.0994 56.0631 30.9006 56.0631 29.4055 54.789L24.4134 50.5348C23.7728 49.9888 22.9762 49.6589 22.1371 49.5919L15.599 49.0701C13.6409 48.9139 12.0861 47.3591 11.9298 45.401L11.4081 38.8629C11.3411 38.0238 11.0112 37.2272 10.4652 36.5866L6.21099 31.5945C4.93694 30.0994 4.93694 27.9006 6.21099 26.4055L10.4652 21.4134C11.0112 20.7728 11.3411 19.9762 11.4081 19.1371L11.9298 12.599C12.0861 10.6409 13.6409 9.0861 15.599 8.92985L22.1371 8.4081C22.9762 8.34114 23.7728 8.0112 24.4134 7.46523L29.4055 3.21099Z"
        fill="url(#paint0_linear_59465_8100)"
      />
      <G filter="url(#filter1_d_59465_8100)">
        <Path
          d="M32 50.875C44.0813 50.875 53.8751 41.0812 53.8751 29C53.8751 16.9188 44.0813 7.125 32 7.125C19.9188 7.125 10.125 16.9188 10.125 29C10.125 41.0812 19.9188 50.875 32 50.875Z"
          fill="url(#paint1_linear_59465_8100)"
        />
        <Path
          opacity={0.18}
          d="M32 48.25C42.6315 48.25 51.2501 39.6315 51.2501 29C51.2501 18.3685 42.6315 9.75 32 9.75C21.3685 9.75 12.75 18.3685 12.75 29C12.75 39.6315 21.3685 48.25 32 48.25Z"
          fill="url(#paint2_radial_59465_8100)"
          fillOpacity={0.5}
        />
      </G>
      <Path
        d="M50.375 28.9354C50.375 29.6884 50.3319 30.4415 50.2458 31.1731C50.1596 31.9907 49.9873 32.8083 49.7934 33.5829C49.7072 33.9272 49.621 34.2499 49.5133 34.5942C49.3195 35.1966 49.104 35.7991 48.8456 36.38C48.2855 37.6495 47.5961 38.8329 46.7776 39.9302C46.0882 40.8554 45.3127 41.716 44.4511 42.5121C41.1983 45.5244 36.8469 47.3533 32.0647 47.3748C27.2825 47.3963 22.9096 45.589 19.6353 42.5982C18.7951 41.8236 18.0196 40.9845 17.3303 40.0808C16.0378 38.381 15.0469 36.4446 14.4222 34.379C14.1206 33.4108 13.9052 32.3995 13.776 31.3667C13.6898 30.6136 13.6252 29.8606 13.6252 29.1075C13.5821 18.9088 21.7679 10.6681 31.9355 10.625C42.0815 10.6035 50.3319 18.7797 50.375 28.9354Z"
        fill="#FCFCFC"
      />
      <Path
        d="M25 19.6693V23.3676C25 23.9859 25.245 24.5809 25.6883 25.0243L29.6667 29.0026L25.6767 32.9926C25.245 33.4359 25 34.0309 25 34.6493V38.3359C25 39.6193 26.05 40.6693 27.3333 40.6693H36.6667C37.95 40.6693 39 39.6193 39 38.3359V34.6493C39 34.0309 38.755 33.4359 38.3233 33.0043L34.3333 29.0026L38.3117 25.0359C38.755 24.5926 39 23.9976 39 23.3793V19.6693C39 18.3859 37.95 17.3359 36.6667 17.3359H27.3333C26.05 17.3359 25 18.3859 25 19.6693Z"
        fill="#0D47A1"
      />
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_59465_8100"
        x1={3.96963}
        y1={28.9908}
        x2={60.0121}
        y2={28.9908}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FFF8C1" />
        <Stop offset={0.0001} stopColor="#C2E8FD" />
        <Stop offset={0.3123} stopColor="#919191" />
        <Stop offset={0.7592} stopColor="#DDDDDD" />
        <Stop offset={1} stopColor="#E3E3E3" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_59465_8100"
        x1={10.1013}
        y1={28.9928}
        x2={53.8845}
        y2={28.9928}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FFF8C1" />
        <Stop offset={0.0001} stopColor="#C2E8FD" />
        <Stop offset={0.3123} stopColor="#919191" />
        <Stop offset={0.7592} stopColor="#DDDDDD" />
        <Stop offset={1} stopColor="white" />
      </LinearGradient>
      <RadialGradient
        id="paint2_radial_59465_8100"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(31.9904 28.9903) scale(19.2406 19.2406)">
        <Stop stopColor="white" stopOpacity={0} />
        <Stop offset={1} stopColor="#571600" />
      </RadialGradient>
    </Defs>
  </Svg>
);
export default LevelBudgetter;
