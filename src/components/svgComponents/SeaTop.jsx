import React from "react";

function SeaTop(props) {
  return (
    <svg
      width="100%"
      height="100%"
      id="svg"
      viewBox="0 0 1440 400"
      xmlns="http://www.w3.org/2000/svg"
      className="transition duration-300 ease-in-out delay-150"
    >
      <defs>
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
        className="transition-all duration-300 ease-in-out delay-150 path-0"
      ></path>
    </svg>
  );
}

export default SeaTop;
