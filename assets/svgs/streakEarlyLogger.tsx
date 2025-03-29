import * as React from "react";
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  RadialGradient,
  SvgProps,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const StreakEarlyLogger = (props:SvgProps) => (
  <Svg
    width={69}
    height={77}
    viewBox="0 0 69 77"
    fill="none"
    {...props}
  >
    <G filter="url(#filter0_d_59465_5760)">
      <Path
        d="M29.4055 6.21099C30.9006 4.93694 33.0994 4.93694 34.5945 6.21099L39.5866 10.4652C40.2272 11.0112 41.0238 11.3411 41.8629 11.4081L48.401 11.9298C50.3591 12.0861 51.9139 13.6409 52.0701 15.599L52.5919 22.1371C52.6589 22.9762 52.9888 23.7728 53.5348 24.4134L57.789 29.4055C59.0631 30.9006 59.0631 33.0994 57.789 34.5945L53.5348 39.5866C52.9888 40.2272 52.6589 41.0238 52.5919 41.8629L52.0701 48.401C51.9139 50.3591 50.3591 51.9139 48.401 52.0701L41.8629 52.5919C41.0238 52.6589 40.2272 52.9888 39.5866 53.5348L34.5945 57.789C33.0994 59.0631 30.9006 59.0631 29.4055 57.789L24.4134 53.5348C23.7728 52.9888 22.9762 52.6589 22.1371 52.5919L15.599 52.0701C13.6409 51.9139 12.0861 50.3591 11.9298 48.401L11.4081 41.8629C11.3411 41.0238 11.0112 40.2272 10.4652 39.5866L6.21099 34.5945C4.93694 33.0994 4.93694 30.9006 6.21099 29.4055L10.4652 24.4134C11.0112 23.7728 11.3411 22.9762 11.4081 22.1371L11.9298 15.599C12.0861 13.6409 13.6409 12.0861 15.599 11.9298L22.1371 11.4081C22.9762 11.3411 23.7728 11.0112 24.4134 10.4652L29.4055 6.21099Z"
        fill="url(#paint0_linear_59465_5760)"
      />
      <G filter="url(#filter1_d_59465_5760)">
        <Path
          d="M32 53.875C44.0813 53.875 53.8751 44.0812 53.8751 32C53.8751 19.9188 44.0813 10.125 32 10.125C19.9188 10.125 10.125 19.9188 10.125 32C10.125 44.0812 19.9188 53.875 32 53.875Z"
          fill="url(#paint1_linear_59465_5760)"
        />
        <Path
          opacity={0.18}
          d="M32 51.25C42.6315 51.25 51.2501 42.6315 51.2501 32C51.2501 21.3685 42.6315 12.75 32 12.75C21.3685 12.75 12.75 21.3685 12.75 32C12.75 42.6315 21.3685 51.25 32 51.25Z"
          fill="url(#paint2_radial_59465_5760)"
          fillOpacity={0.5}
        />
      </G>
      <Path
        d="M50.375 31.9354C50.375 32.6884 50.3319 33.4415 50.2458 34.1731C50.1596 34.9907 49.9873 35.8083 49.7934 36.5829C49.7072 36.9272 49.621 37.2499 49.5133 37.5942C49.3195 38.1966 49.104 38.7991 48.8456 39.38C48.2855 40.6495 47.5961 41.8329 46.7776 42.9302C46.0882 43.8554 45.3127 44.716 44.4511 45.5121C41.1983 48.5244 36.8469 50.3533 32.0647 50.3748C27.2825 50.3963 22.9096 48.589 19.6353 45.5982C18.7951 44.8236 18.0196 43.9845 17.3303 43.0808C16.0378 41.381 15.0469 39.4446 14.4222 37.379C14.1206 36.4108 13.9052 35.3995 13.776 34.3667C13.6898 33.6136 13.6252 32.8606 13.6252 32.1075C13.5821 21.9088 21.7679 13.6681 31.9355 13.625C42.0815 13.6035 50.3319 21.7797 50.375 31.9354Z"
        fill="#FCFCFC"
      />
      <Path
        d="M25.064 23.4149L24.609 22.9599C24.154 22.5049 23.419 22.5166 22.9757 22.9599L22.964 22.9716C22.509 23.4266 22.509 24.1616 22.964 24.6049L23.419 25.0599C23.874 25.5149 24.5974 25.5149 25.0524 25.0599L25.064 25.0482C25.519 24.6049 25.519 23.8582 25.064 23.4149ZM21.5174 30.8349H20.3274C19.6857 30.8349 19.1724 31.3482 19.1724 31.9899V32.0016C19.1724 32.6432 19.6857 33.1566 20.3274 33.1566H21.5057C22.159 33.1682 22.6724 32.6549 22.6724 32.0132V32.0016C22.6724 31.3482 22.159 30.8349 21.5174 30.8349ZM32.0174 19.2266H32.0057C31.3524 19.2266 30.839 19.7399 30.839 20.3816V21.5016C30.839 22.1432 31.3524 22.6566 31.994 22.6566H32.0057C32.659 22.6682 33.1724 22.1549 33.1724 21.5132V20.3816C33.1724 19.7399 32.659 19.2266 32.0174 19.2266ZM41.0474 22.9716C40.5924 22.5166 39.8574 22.5166 39.4024 22.9599L38.9474 23.4149C38.4924 23.8699 38.4924 24.6049 38.9474 25.0482L38.959 25.0599C39.414 25.5149 40.149 25.5149 40.5924 25.0599L41.0474 24.6049C41.5024 24.1499 41.5024 23.4266 41.0474 22.9716ZM38.9357 40.5882L39.3907 41.0432C39.8457 41.4982 40.5807 41.4982 41.0357 41.0432C41.4907 40.5882 41.4907 39.8532 41.0357 39.3982L40.5807 38.9432C40.1257 38.4882 39.3907 38.4999 38.9474 38.9432C38.4807 39.4099 38.4807 40.1332 38.9357 40.5882ZM41.339 31.9899V32.0016C41.339 32.6432 41.8524 33.1566 42.494 33.1566H43.6724C44.314 33.1566 44.8274 32.6432 44.8274 32.0016V31.9899C44.8274 31.3482 44.314 30.8349 43.6724 30.8349H42.494C41.8524 30.8349 41.339 31.3482 41.339 31.9899ZM32.0057 25.0016C28.144 25.0016 25.0057 28.1399 25.0057 32.0016C25.0057 35.8632 28.144 39.0016 32.0057 39.0016C35.8674 39.0016 39.0057 35.8632 39.0057 32.0016C39.0057 28.1399 35.8674 25.0016 32.0057 25.0016ZM31.994 44.7766H32.0057C32.6474 44.7766 33.1607 44.2632 33.1607 43.6216V42.5016C33.1607 41.8599 32.6474 41.3466 32.0057 41.3466H31.994C31.3524 41.3466 30.839 41.8599 30.839 42.5016V43.6216C30.839 44.2632 31.3524 44.7766 31.994 44.7766ZM22.964 41.0316C23.419 41.4866 24.154 41.4866 24.609 41.0316L25.064 40.5766C25.519 40.1216 25.5074 39.3866 25.064 38.9432L25.0524 38.9316C24.5974 38.4766 23.8624 38.4766 23.4074 38.9316L22.9524 39.3866C22.509 39.8532 22.509 40.5766 22.964 41.0316Z"
        fill="#FFEB3B"
      />
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_59465_5760"
        x1={3.96963}
        y1={31.9908}
        x2={60.0121}
        y2={31.9908}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#41B8FD" />
        <Stop offset={0.3123} stopColor="#0013BD" />
        <Stop offset={0.7592} stopColor="#5866E0" />
        <Stop offset={1} stopColor="#6CC7FD" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_59465_5760"
        x1={10.1013}
        y1={31.9928}
        x2={53.8845}
        y2={31.9928}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#41B8FD" />
        <Stop offset={0.3123} stopColor="#0013BD" />
        <Stop offset={0.7592} stopColor="#5866E0" />
        <Stop offset={1} stopColor="#6CC7FD" />
      </LinearGradient>
      <RadialGradient
        id="paint2_radial_59465_5760"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(31.9904 31.9903) scale(19.2406 19.2406)"
      >
        <Stop stopColor="white" stopOpacity={0} />
        <Stop offset={1} stopColor="#571600" />
      </RadialGradient>
    </Defs>
  </Svg>
);
export default StreakEarlyLogger;
