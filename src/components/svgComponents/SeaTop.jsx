import React from "react";

function SeaTop(props) {
  return (
    <svg
      width="100%"
      height="100%"
      id="svg"
      viewBox="0 0 1440 400"
      xmlns="http://www.w3.org/2000/svg"
<<<<<<< HEAD
<<<<<<< HEAD
      className="transition duration-300 ease-in-out delay-150"
    >
      <defs>
        <linearGradient id="seaTop" x1="55%" y1="100%" x2="45%" y2="0%">
          <stop offset="20%" stopColor={props.color1}></stop>
          <stop offset="80%" stopColor={props.color2}></stop>
        </linearGradient>
      </defs>
      <path
        d="M 0,400 C 0,400 0,133 0,133 C 188.13333333333333,145.66666666666666 376.26666666666665,158.33333333333331 553,167 C 729.7333333333333,175.66666666666669 895.0666666666668,180.33333333333334 1041,174 C 1186.9333333333332,167.66666666666666 1313.4666666666667,150.33333333333331 1440,133 C 1440,133 1440,400 1440,400 Z"
        stroke="none"
        strokeWidth="0"
        fill="url(#gradient)"
        className="transition-all duration-300 ease-in-out delay-150 path-0"
      ></path>
      {/* <defs>
=======
      class="transition duration-300 ease-in-out delay-150"
=======
      className="transition duration-300 ease-in-out delay-150"
>>>>>>> 2df7259 (feature: added animation for poem text)
    >
      <defs>
>>>>>>> b0e4eb8 (feature: created new components for sea svg, added poem text and typography)
        <linearGradient id="seaTop" x1="79%" y1="91%" x2="21%" y2="9%">
          <stop offset="20%" stopColor={props.color1}></stop>
          <stop offset="80%" stopColor={props.color2}></stop>
        </linearGradient>
      </defs>
      <path
        id="topWave"
        d="M 0,400 C 0,400 0,133 0,133 C 96.53588516746413,160.22488038277513 193.07177033492826,187.44976076555025 273,182 C 352.92822966507174,176.55023923444975 416.2488038277512,138.42583732057417 528,134 C 639.7511961722488,129.57416267942583 799.933014354067,158.8468899521531 900,157 C 1000.066985645933,155.1531100478469 1040.0191387559807,122.1866028708134 1120,113 C 1199.9808612440193,103.8133971291866 1319.9904306220096,118.4066985645933 1440,133 C 1440,133 1440,400 1440,400 Z"
        stroke="none"
        strokeWidth="0"
        fill="url(#seaTop)"
<<<<<<< HEAD
<<<<<<< HEAD
        className="transition-all duration-300 ease-in-out delay-150 path-0"
      ></path> */}
    </svg>
  );
}
<svg
  width="100%"
  height="100%"
  id="svg"
  viewBox="0 0 1440 400"
  xmlns="http://www.w3.org/2000/svg"
  class="transition duration-300 ease-in-out delay-150"
>
  <defs>
    <linearGradient id="gradient" x1="79%" y1="91%" x2="21%" y2="9%">
      <stop offset="5%" stop-color="#014c8dff"></stop>
      <stop offset="95%" stop-color="#0c78c0ff"></stop>
    </linearGradient>
  </defs>
  <path
    d="M 0,400 C 0,400 0,266 0,266 C 165.7333333333333,242.66666666666669 331.4666666666666,219.33333333333334 481,234 C 630.5333333333334,248.66666666666666 763.8666666666666,301.3333333333333 921,313 C 1078.1333333333334,324.6666666666667 1259.0666666666666,295.33333333333337 1440,266 C 1440,266 1440,400 1440,400 Z"
    stroke="none"
    stroke-width="0"
    fill="url(#gradient)"
    class="transition-all duration-300 ease-in-out delay-150 path-1"
  ></path>
</svg>;
=======
        class="transition-all duration-300 ease-in-out delay-150 path-0"
=======
        className="transition-all duration-300 ease-in-out delay-150 path-0"
>>>>>>> 2df7259 (feature: added animation for poem text)
      ></path>
    </svg>
  );
}

>>>>>>> b0e4eb8 (feature: created new components for sea svg, added poem text and typography)
export default SeaTop;
