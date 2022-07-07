import React from "react";

import { nightColors } from "../data/data"

import "./Night.css";

function Night() {

  return (
    <div>
      <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 400"
        xmlns="http://www.w3.org/2000/svg"
        class="transition duration-300 ease-in-out delay-150"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="5%" stop-color="#0c78c0ff"></stop>
            <stop offset="95%" stop-color="#014c8dff"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0,400 C 0,400 0,200 0,200 C 152.53333333333336,202.53333333333333 305.0666666666667,205.06666666666666 471,219 C 636.9333333333333,232.93333333333334 816.2666666666667,258.26666666666665 980,257 C 1143.7333333333333,255.73333333333332 1291.8666666666668,227.86666666666667 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          stroke-width="0"
          fill="url(#gradient)"
          class="transition-all duration-300 ease-in-out delay-150 path-0"
        ></path>
      </svg>
    </div>
  );
}

export default Night;
