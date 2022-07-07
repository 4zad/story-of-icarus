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
        <ref id="color1" param="color1" default="#fff" />
        <ref id="color2" param="color2" default="#000" />

        <linearGradient id="gradient2" x1="79%" y1="91%" x2="21%" y2="9%">
          <stop offset="15%" stopColor={props.color1}></stop>
          <stop offset="85%" stopColor={props.color2}></stop>
        </linearGradient>
      </defs>
      <path
        id="bottomWave"
        d="M 0,400 C 0,400 0,266 0,266 C 61.03349282296651,271.2153110047847 122.06698564593302,276.43062200956945 234,285 C 345.933014354067,293.56937799043055 508.7655502392346,305.4928229665071 628,291 C 747.2344497607654,276.5071770334929 822.8708133971292,235.5980861244019 910,241 C 997.1291866028708,246.4019138755981 1095.751196172249,298.11483253588517 1186,310 C 1276.248803827751,321.88516746411483 1358.1244019138755,293.9425837320574 1440,266 C 1440,266 1440,400 1440,400 Z"
        stroke="none"
        strokeWidth="0"
        fill="url(#gradient2)"
        className="transition-all duration-300 ease-in-out delay-150 path-1"
      ></path>
    </svg>
  );
}

export default SeaBottom;
