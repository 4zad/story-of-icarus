import React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IconContext } from "react-icons";
import { GiFeather } from "react-icons/gi";

import SeaTop from "../components/svgComponents/SeaTop";
import SeaBottom from "../components/svgComponents/SeaBottom";
import Trees from "../components/svgComponents/Trees";

import icarusFlying from "../assets/svg/icarus-flying.svg";
import farm from "../assets/svg/farm.svg";
import grass1 from "../assets/svg/grass1.svg";
import grass2 from "../assets/svg/grass2.svg";
import barn from "../assets/png/barn.png";
import moon from "../assets/png/moon.png";
import wings from "../assets/svg/wings.svg";
import meltingWax from "../assets/svg/melted-wax.svg";
import meltingWax2 from "../assets/svg/melted-wax2.svg";
import meltingWax4 from "../assets/svg/wax4.svg";
import rock1 from "../assets/svg/rock1.svg";
import rock2 from "../assets/svg/rock2.svg";
import rock3 from "../assets/svg/rock3.svg";
import icarusDrowning from "../assets/png/icarus-drowning.png";

import "./Night.css";

gsap.registerPlugin(ScrollTrigger);

function Night() {
  const nightColours = ["#0F90E6", "#01417A", "#503F90", "#3F3684", "#2F2D3A"];
  const titleTextRef = useRef(null);
  const authorRef = useRef(null);
  const treeRef = useRef(null);
  const feathers = ["feather1", "feather2", "feather3", "feather4", "feather5"];

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

    // Page 3 - pinning animation
    const pin_tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".pinContainer",
        start: "top top",
        scrub: true,
        markers: true,
        pin: true,
        end: "+=200%",
      },
    });
    pin_tl
      .to("#page2", {
        yPercent: -100,
        ease: "none",
      })
      .to("#page3", {
        yPercent: -100,
        ease: "none",
      });

    // Page 5 - wing animation
    const wings_tl = gsap
      .timeline({ defaults: { overwrite: true } })
      .to(
        "#feather1",
        {
          y: 30,
          x: 20,
          skewY: 8,
          duration: 1,
          yoyo: true,
          repeat: -1,
        },
        0
      )
      .to(
        "#feather2",
        {
          y: -30,
          skewX: 10,
          x: 20,
          duration: 1,
          yoyo: true,
          repeat: -1,
        },
        0
      )
      .to(
        "#feather3",
        {
          y: 20,
          x: -20,
          skewX: -10,
          duration: 1,
          yoyo: true,
          repeat: -1,
        },
        0
      )
      .to(
        "#feather4",
        {
          y: -20,
          x: -20,
          skewX: -8,
          duration: 1,
          yoyo: true,
          repeat: -1,
        },
        0
      )
      .to(
        "#feather5",
        {
          y: 20,
          x: -20,
          skewY: 10,
          duration: 1,
          yoyo: true,
          repeat: -1,
        },
        0
      )
      .to(
        ".wings",
        {
          scaleX: 1.2,
          transformOrigin: "center center",
          translateY: 20,
          duration: 1,
          yoyo: true,
          repeat: -1,
        },
        0
      );

    // Page 6 - rock parallax
    const rock_para_tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#page6",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
    gsap.utils.toArray(".rock").forEach((rockLayer) => {
      const depth = rockLayer.dataset.depth;
      const movement = -(rockLayer.offsetHeight * depth);
      rock_para_tl.to(rockLayer, { y: movement, ease: "none" }, 0);
    });

    // Increase height of block colour
    gsap.set(".pg6BlockColour", { transformOrigin: "bottom center" });
    rock_para_tl.to(".pg6BlockColour", { scaleY: 3.5 }, 0);

    // Page 7 animation
    const drowning_tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#page7",
        start: "top 30%",
        toggleActions: "restart none none reset",
      },
    });
    drowning_tl
      .fromTo(
        ".icarusDrowning",
        {
          autoAlpha: 0,
          y: -400,
        },
        {
          autoAlpha: 1,
          y: 200,
          ease: "expo.out",
          duration: 2,
        }
      )
      .to(
        ".icarusDrowning",
        {
          y: 100,
          duration: 3,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true,
          overwrite: true,
        },
        ">-=0.25"
      );

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
      </section>

      <div className="pinContainer">
        <section className="section" id="page2">
          <div className="page2Container">
            <div className="poemText">
              <p>According to Brueghel</p>
              <p>when Icarus fell</p>
              <p>it was spring</p>
            </div>
            <div className="treesContainer">
              <Trees />
            </div>
          </div>
        </section>

        <section className="section" id="page3">
          <div className="page3Container">
            <img className="icarusFlying" src={icarusFlying} />
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
            <div className="farmContainer">
              <img className="farm" src={farm} />
            </div>
            <div className="grass"></div>
            {/* <div className="grassContainer">
              {/* <img className="grass" src={grass2} />
              
            </div> */}
          </div>
        </section>
      </div>

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
        {feathers.map((feather) => (
          <IconContext.Provider value={{ className: "feather" }}>
            <GiFeather id={feather} />
          </IconContext.Provider>
        ))}
      </section>

      <section className="section" id="page6">
        <div className="poemText">
          <p>unsignificantly</p>
          <p>off the coast</p>
          <p>there was</p>
        </div>
        <div className="waxContainer">
          <img className="wax" src={meltingWax4} />
        </div>
        <div className="pg6BlockColour"></div>

        <div className="rocksContainer">
          <div className="rock3container">
            <img className="rock rock3" data-depth="0.075" src={rock3} />
          </div>

          <div className="rock2container">
            <img className="rock rock2" data-depth="0.30" src={rock2} />
          </div>

          <div className="rock1container">
            <img className="rock rock1" data-depth="0.70" src={rock1} />
          </div>
        </div>
      </section>

      <section className="section" id="page7">
        <div className="poemText">
          <p>a splash quite unnoticed</p>
          <p>this was</p>
          <p>Icarus drowning</p>
        </div>

        <img className="icarusDrowning" src={icarusDrowning} />
      </section>
    </div>
  );
}

export default Night;
