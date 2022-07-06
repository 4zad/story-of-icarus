import React from "react";
import { useEffect, useRef } from "react";
import { ReactComponent as SeaTop } from "../assets/seaTop.svg";
import { ReactComponent as SeaBottom } from "../assets/seaBottom.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./Night.css";

gsap.registerPlugin(ScrollTrigger);

gsap.registerEffect({
  name: "poemTextFade",
  effect: (targets, config) => {
    return gsap.from(targets, { autoAlpha: 0 });
  },
});

function Night() {
  const nightColours = ["#0F90E6", "#01417A", "#503F90", "#3F3684", "#2F2D3A"];
  const titleTextRef = useRef(null);

  useEffect(() => {});

  return (
    <div className="Night">
      <section className="section" id="page1">
        <div className="poemTitleContainer">
          <div ref={titleTextRef} className="titleText">
            <p>Landscape with the Fall of Icarus</p>
            <p>A Poem by William Carlos Williams</p>
          </div>
          <SeaTop>
            2 color1={nightColours[0]}1 nightColours[0] color1={}
            ta s
            <param name="color1" value={nightColours[0]} />
            <param name="color2" value={nightColours[1]} />
          </SeaTop>
          {/* <SeaBottom>
            <param name="color3" value={nightColours[0]} />
            <param name="color4" value={nightColours[1]} />
          </SeaBottom> */}
          {/* <svg src="../assets/forest.svg"></svg> */}
          {/* <svg src="../assets/sea.svg"></svg> */}
        </div>
      </section>
      <section className="section" id="page2">
        <div className="poemText">
          <p>According to Brueghel</p>
          <p>when Icarus fell</p>
          <p>it was spring</p>
        </div>
      </section>
      <section className="section" id="page3">
        <div className="poemText">
          <div className="poemText3-1">
            <p>a farmer was ploughing</p>
            <p>his field</p>
            <p>the whole pageantry</p>
          </div>
          <br />
          <br />
          <div className="poemText3-2">
            <p>of the year was</p>
            <p>awake tingling</p>
            <p>near</p>
          </div>
        </div>
      </section>
      <section className="section" id="page4">
        <div className="poemText">
          <p>the edge of the sea</p>
          <p>concerned</p>
          <p>with itself</p>
        </div>
      </section>
      <section className="section" id="page5">
        <div className="poemText">
          <p>sweating in the sun</p>
          <p>that melted</p>
          <p>the wings' wax</p>
        </div>
      </section>
      <section className="section" id="page6">
        <div className="poemText">
          <p>unsignificantly</p>
          <p>off the coast</p>
          <p>there was</p>
        </div>
      </section>
      <section className="section" id="page7">
        <div className="poemText">
          <p>a splash quite unnoticed</p>
          <p>this was</p>
          <p>Icarus drowning</p>
        </div>
      </section>
    </div>
  );
}

export default Night;
