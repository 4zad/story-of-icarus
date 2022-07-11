import React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SeaTop from "../components/svgComponents/SeaTop";
import SeaBottom from "../components/svgComponents/SeaBottom";
import Trees from "../components/svgComponents/Trees";
import Rocks1 from "../components/svgComponents/Rocks1";

import wings from "../assets/svg/wings.svg";
import rock1 from "../assets/svg/rock1.svg";
import rock2 from "../assets/svg/rock2.svg";
import rock3 from "../assets/svg/rock3.svg";

import "./Night.css";

gsap.registerPlugin(ScrollTrigger);

function Night() {
  const nightColours = ["#0F90E6", "#01417A", "#503F90", "#3F3684", "#2F2D3A"];
  const titleTextRef = useRef(null);
  const authorRef = useRef(null);
  const treeRef = useRef(null);

  useEffect(() => {
    const loading_tl = gsap.timeline();
    let sections = document.querySelectorAll(".section");

    // initial load in title-page animation
    loading_tl
      .fromTo(
        titleTextRef.current,
        {
          autoAlpha: 0,
          y: -50,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.25,
          ease: "back",
        },
        0
      )
      .fromTo(
        authorRef.current,
        {
          autoAlpha: 0,
          y: -50,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "back",
        },
        "<0.25"
      );

    // Title page parallax scrolling
    const title_para_tl = gsap.timeline({
      defaults: { overwrite: true },
      scrollTrigger: {
        trigger: ".headerSection",
        start: "top top",
        end: "bottom top",
        scrub: true,
        markers: true,
      },
    });

    gsap.utils.toArray(".titleParallax").forEach((titleLayer) => {
      const depth = titleLayer.dataset.depth;
      const movement = -(titleLayer.offsetHeight * depth);
      title_para_tl.to(titleLayer, { y: movement, ease: "none" }, 0);
    });
    // title_para_tl.to(treeRef.current, {y: -75}, 0)
    // .to(".seaTopContainer", {y: -100}, 0)
    // .to(".seaBottomContainer", {y: -175}, 0)

    // Page 5 - wing animation
    const wings_tl = gsap
      .timeline({ defaults: { overwrite: true } })
      .to(".wings", {
        scaleX: 1.2,
        // transformOrigin: "center center",
        translateY: 20,
        duration: 1,
        yoyo: true,
        repeat: -1,
      });

    // Page 6 - rock parallax
    const rock_para_tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#page6",
        start: "top top",
        end: "bottom top",
        scrub: true,
        markers: true,
      },
    });
    gsap.utils.toArray(".rock").forEach((rockLayer) => {
      const depth = rockLayer.dataset.depth;
      const movement = -(rockLayer.offsetHeight * depth);
      rock_para_tl.to(rockLayer, { y: movement, ease: "none" }, 0);
    });

    // Increase height of block colour
    // gsap.set(".pg6BlockColour", {transformOrigin: "bottom center"});
    // rock_para_tl.to(".pg6BlockColour", {scaleY: 3.5}, 0);

    // poem text fade-in animation
    sections.forEach((section) => {
      let lines = section.querySelectorAll("p");
      let section_tl = gsap.timeline();

      section_tl.fromTo(
        lines,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          stagger: 0.5,
          duration: 0.75,
          ease: "power2",
        }
      );
      ScrollTrigger.create({
        trigger: section,
        start: "top 50%",
        toggleActions: "play none none reverse",
        animation: section_tl,
      });
    });
  }, []);

  return (
    <div className="Night">
      <section className="headerSection" id="page1">
        <div className="poemTitleContainer">
          <div className="titleText">
            <p ref={titleTextRef}>Landscape with the Fall of Icarus</p>
            <p ref={authorRef}>A Poem by William Carlos Williams</p>
          </div>
        </div>
        <div
          ref={treeRef}
          className="treesBg titleParallax"
          data-depth="0.1"
        ></div>
        <div className="seaContainer">
          <div className="seaTopContainer titleParallax" data-depth="0.3">
            <SeaTop color1={nightColours[1]} color2={nightColours[0]} />
          </div>
          <div className="seaBottomContainer titleParallax" data-depth="0.40">
            <SeaBottom color1={nightColours[1]} color2={nightColours[0]} />
          </div>
        </div>
        <div className="titlePageBlockColour"></div>
      </section>

      <section className="section" id="page2">
        <div className="poemText">
          <p>According to Brueghel</p>
          <p>when Icarus fell</p>
          <p>it was spring</p>
        </div>
        <div className="treesContainer">
          <Trees />
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
        <div className="wingsContainer">
          <img className="wings" src={wings} />
        </div>
      </section>

      <section className="section" id="page6">
        <div className="poemText">
          <p>unsignificantly</p>
          <p>off the coast</p>
          <p>there was</p>
        </div>
        <div className="pg6BlockColour"></div>
        <div className="rocksContainer">
          <div className="rock3container">
            <img className="rock rock3" data-depth="0.05" src={rock3} />
          </div>
          <div className="rock2container">
            <img className="rock rock2" data-depth="0.2" src={rock2} />
          </div>
          <div className="rock1container">
            <img className="rock rock1" data-depth="0.4" src={rock1} />
          </div>
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
