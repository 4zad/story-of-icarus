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
    </svg>
  );
}

export default SeaTop;
