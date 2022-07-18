import React from "react";

function SeaBottom(props) {
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
        <linearGradient id="gradient" x1="55%" y1="100%" x2="45%" y2="0%">
          <stop offset="20%" stopColor={props.color1}></stop>
          <stop offset="80%" stopColor={props.color2}></stop>
        </linearGradient>
      </defs>
      <path
        d="M 0,400 C 0,400 0,266 0,266 C 165.7333333333333,242.66666666666669 331.4666666666666,219.33333333333334 481,234 C 630.5333333333334,248.66666666666666 763.8666666666666,301.3333333333333 921,313 C 1078.1333333333334,324.6666666666667 1259.0666666666666,295.33333333333337 1440,266 C 1440,266 1440,400 1440,400 Z"
        stroke="none"
        strokeWidth="0"
        fill="url(#gradient)"
        className="transition-all duration-300 ease-in-out delay-150 path-1"
      ></path>

    </svg>
  );
}

export default SeaBottom;
