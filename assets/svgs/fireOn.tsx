import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
const FireOn = (props: SvgProps) => (
  <Svg width={26} height={31} viewBox="0 0 26 31" fill="none" {...props}>
    <Path
      d="M19.3334 6.4974L18.6367 7.36823C17.9717 8.19156 17.085 8.55573 16.1984 8.55573C14.5834 8.55573 13 7.32073 13 5.38906V0.164062C13 0.164062 0.333374 6.4974 0.333374 17.5807C0.333374 24.5791 6.00171 30.2474 13 30.2474C19.9984 30.2474 25.6667 24.5791 25.6667 17.5807C25.6667 12.8941 23.1175 8.6824 19.3334 6.4974ZM13 27.0807C11.2584 27.0807 9.83337 25.7032 9.83337 24.0091C9.83337 23.2016 10.15 22.4416 10.7517 21.8557L13 19.6391L15.2642 21.8557C15.85 22.4416 16.1667 23.2016 16.1667 24.0091C16.1667 25.7032 14.7417 27.0807 13 27.0807ZM19.27 24.7057C19.3334 24.1357 19.6184 21.7132 17.4809 19.6074L13 15.2057L8.51921 19.6074C6.36587 21.7291 6.66671 24.1674 6.73004 24.7057C4.75087 22.9641 3.50004 20.4149 3.50004 17.5807C3.50004 12.5774 6.87254 8.6349 9.88087 6.10156C10.245 9.2524 12.9367 11.7224 16.1984 11.7224C17.4334 11.7224 18.6367 11.3582 19.65 10.6774C21.455 12.4824 22.5 14.9682 22.5 17.5807C22.5 20.4149 21.2492 22.9641 19.27 24.7057Z"
      fill="#FF9500"
    />
  </Svg>
);
export default FireOn;
