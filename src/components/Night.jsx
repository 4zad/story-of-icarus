import React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { IconContext } from "react-icons";
import { GiFeather } from "react-icons/gi";
import { GiMoon } from "react-icons/gi";

import SeaTop from "../components/svgComponents/SeaTop";
import SeaBottom from "../components/svgComponents/SeaBottom";
import Trees from "../components/svgComponents/Trees";

import icarusFlying from "../assets/svg/icarus-flying.svg";
import farm from "../assets/svg/farm.svg";
import grass1 from "../assets/svg/grass1.svg";
import grass2 from "../assets/svg/grass2.svg";
import wings from "../assets/svg/wings.svg";
import wax from "../assets/svg/wax.svg";
import rock1 from "../assets/svg/rock1.svg";
import rock2 from "../assets/svg/rock2.svg";
import rock3 from "../assets/svg/rock3.svg";
import icarusDrowning from "../assets/png/icarus-drowning.png";

import "./Night.css";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

function Night() {
  const nightColours = ["#0F90E6", "#01417A", "#503F90", "#3F3684", "#2F2D3A"];
  const titleTextRef = useRef(null);
  const authorRef = useRef(null);
  const treeRef = useRef(null);
  const feathers = ["feather1", "feather2", "feather3", "feather4", "feather5"];

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1) + min); // maximum and minimum inclusive
  };

  function createStars() {
    const colours = ["#FFFFFF", nightColours[0], nightColours[1]];
    const colourMin = 0;
    const colourMax = 2;

    let scene = document.querySelector(".starsScene");
    const stars = 750;
    const starSize = {
      min: 1,
      max: 3,
    };
    let i = 0;
    while (i < stars) {
      let star = document.createElement("div");

      // randomize position + size
      let x = Math.random() * 100 + "vw";
      let y = Math.random() * 100 + "vh";
      let width = Math.random() * (starSize.max - starSize.min);
      let height = width;

      // randomize colour
      let colour = colours[getRandomIntInclusive(colourMin, colourMax)];
      if (colour === colours[colourMin]) {
        star.classList.add("star");
      }

      star.style.left = x;
      star.style.top = y;
      star.style.width = width + "px";
      star.style.height = height + "px";
      star.style.zIndex = "1";
      star.style.backgroundColor = colour;
      star.style.opacity = 1;
      star.style.borderRadius = "50%";
      star.style.position = "absolute";
      let boxShadow = `0 0 ${width * 3}px white`;
      star.style.boxShadow = boxShadow;

      scene.appendChild(star);
      console.log(boxShadow);
      console.log("star created");
      i++;
    }
  }

  useEffect(() => {
    createStars();

    const loading_tl = gsap.timeline();
    let sections = document.querySelectorAll(".section");

    // ===================== Title page animations =====================
    gsap.to(".star", {
      opacity: 0,
      duration: 0.5,
      yoyo: true,
      repeat: -1,
      ease: "linear",
      stagger: 0.01,
      overwrite: true,
    });

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

    // ===================== Page 2 animations =====================
    // Walking away zoom out animation
    const scaleMultiplier = 1.0;
    const forestZoom_tl = gsap.timeline({
      defaults: {},
      scrollTrigger: {
        trigger: ".section#page2",
        start: "0% 80%",
        end: "100% 20%",
        scrub: true,
        markers: true,
      },
    });

    forestZoom_tl.to(".treesContainer", {
      keyframes: {
        "0%": { scale: 1.0 },
        "6%": { y: 0, scale: scaleMultiplier * 1.0, ease: "power1.in" },
        "10%": { y: 20, scale: scaleMultiplier * 1.03, ease: "power1.out" },
        "16%": { y: 0, scale: scaleMultiplier * 1.05, ease: "power1.in" },
        "20%": { y: 20, scale: scaleMultiplier * 1.08, ease: "power1.out" },
        "26%": { y: 0, scale: scaleMultiplier * 1.1, ease: "power1.in" },
        "30%": { y: 20, scale: scaleMultiplier * 1.13, ease: "power1.out" },
        "36%": { y: 0, scale: scaleMultiplier * 1.15, ease: "power1.in" },
        "40%": { y: 20, scale: scaleMultiplier * 1.18, ease: "power1.out" },
        "46%": { y: 0, scale: scaleMultiplier * 1.21, ease: "power1.in" },
        "50%": { y: 20, scale: scaleMultiplier * 1.25, ease: "power1.out" },
        "56%": { y: 0, scale: scaleMultiplier * 1.28, ease: "power1.in" },
        "60%": { y: 20, scale: scaleMultiplier * 1.32, ease: "power1.out" },
        "66%": { y: 0, scale: scaleMultiplier * 1.35, ease: "power1.in" },
        "70%": { y: 20, scale: scaleMultiplier * 1.38, ease: "power1.out" },
        "76%": { y: 0, scale: scaleMultiplier * 1.4, ease: "power1.in" },
        "80%": { y: 20, scale: scaleMultiplier * 1.43, ease: "power1.out" },
        "86%": { y: 0, scale: scaleMultiplier * 1.45, ease: "power1.in" },
        "90%": { y: 20, scale: scaleMultiplier * 1.48, ease: "power1.out" },
        "96%": { y: 0, scale: scaleMultiplier * 1.5, ease: "power1.in" },
        "100%": { y: 0, scale: scaleMultiplier * 1.5, ease: "linear" },
        ease: "linear", // applied to entire path
      },
      transformOrigin: "0% 0%",
      reversed: false,
    });

    // ===================== Page 3 animations =====================
    // pinning animation
    const pin_tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".pinContainer",
        start: "top top",
        scrub: true,
        pin: true,
        end: "+=300%",
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

    // motion path animation
    const flight_path_tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#page2",
        start: "bottom top",
        end: "+=100%",
        scrub: 2,
      },
    });
    flight_path_tl
      .fromTo(".icarusFlying", { autoAlpha: 0 }, { autoAlpha: 1 }, 0)
      .to(
        ".icarusFlying",
        {
          motionPath: {
            path: "#path",
            align: "#path",
            alignOrigin: [0.5, 0.5],
            autoRotate: true,
          },
          ease: "power1.inOut",
        },
        0
      );

    //  ===================== Page 5 animations =====================
    // wings animation + feathers
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
    rock_para_tl.to(".pg6BlockColour", { scaleY: 3 }, 0);

    // Page 7 animation
    const drowning_tl = gsap.timeline({
      defaults: {
        ease: "circ.out",
      },
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
          duration: 1.5,
          ease: "expo.out",
        }
      )
      .to(
        ".icarusDrowning",
        {
          y: 150,
          duration: 3.0,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true,
          overwrite: true,
        },
        ">-=0.25"
      )
      .to(
        ".bubble:nth-child(7)",
        {
          x: 35,
          y: -300,
          opacity: 1,
          duration: 0.5,
        },
        "<-=0.5"
      )
      .to(
        ".bubble:nth-child(7)",
        {
          rotate: getRandomIntInclusive(-45, 45),
          x: `+=${getRandomIntInclusive(10, 15)}`,
          y: `+=${getRandomIntInclusive(10, 15)}`,
          duration: 3.0,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true,
        },
        ">+=0.05"
      )
      .to(
        ".bubble:nth-child(6)",
        {
          x: -50,
          y: -270,
          opacity: 1,
          duration: 0.53,
        },
        "<-=0.5"
      )
      .to(
        ".bubble:nth-child(6)",
        {
          rotate: getRandomIntInclusive(-45, 45),
          x: `+=${getRandomIntInclusive(10, 15)}`,
          y: `+=${getRandomIntInclusive(10, 15)}`,
          duration: 3.0,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true,
        },
        ">+=0.05"
      )
      .to(
        ".bubble:nth-child(5)",
        {
          x: 0,
          y: -225,
          opacity: 1,
          duration: 0.56,
        },
        "<-=0.5"
      )
      .to(
        ".bubble:nth-child(5)",
        {
          rotate: getRandomIntInclusive(-45, 45),
          x: `+=${getRandomIntInclusive(10, 15)}`,
          y: `+=${getRandomIntInclusive(10, 15)}`,
          duration: 3.0,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true,
        },
        ">+=0.05"
      )
      .to(
        ".bubble:nth-child(4)",
        {
          x: 45,
          y: -200,
          opacity: 1,
          duration: 0.6,
        },
        "<-=0.5"
      )
      .to(
        ".bubble:nth-child(4)",
        {
          rotate: getRandomIntInclusive(-45, 45),
          x: `+=${getRandomIntInclusive(10, 15)}`,
          y: `+=${getRandomIntInclusive(10, 15)}`,
          duration: 3.0,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true,
        },
        ">+=0.05"
      )
      .to(
        ".bubble:nth-child(3)",
        {
          x: -30,
          y: -175,
          opacity: 1,
          duration: 0.675,
        },
        "<-=0.5"
      )
      .to(
        ".bubble:nth-child(3)",
        {
          rotate: getRandomIntInclusive(-45, 45),
          x: `+=${getRandomIntInclusive(10, 15)}`,
          y: `+=${getRandomIntInclusive(10, 15)}`,
          duration: 3.0,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true,
        },
        ">+=0.05"
      )
      .to(
        ".bubble:nth-child(2)",
        {
          x: 15,
          y: -150,
          opacity: 1,
          duration: 0.75,
        },
        "<-=0.5"
      )
      .to(
        ".bubble:nth-child(2)",
        {
          rotate: getRandomIntInclusive(-45, 45),
          x: `+=${getRandomIntInclusive(10, 15)}`,
          y: `+=${getRandomIntInclusive(10, 15)}`,
          duration: 3.0,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true,
        },
        ">+=0.05"
      )
      .to(
        ".bubble:nth-child(1)",
        {
          x: -5,
          y: -120,
          opacity: 1,
          duration: 0.9,
        },
        "<-=0.5"
      )
      .to(
        ".bubble:nth-child(1)",
        {
          rotate: getRandomIntInclusive(-45, 45),
          x: `+=${getRandomIntInclusive(10, 15)}`,
          y: `+=${getRandomIntInclusive(10, 15)}`,
          duration: 3.0,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true,
        },
        ">+=0.05"
      );
    console.log(getRandomIntInclusive(-10, 10));

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
        <div className="starsScene"></div>
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
            <div className="moonContainer">
              <IconContext.Provider value={{ className: "moon" }}>
                <GiMoon />
              </IconContext.Provider>
            </div>

            <div className="flightPathContainer">
              <svg
                viewBox="24.118 106.085 809.412 257.444"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="path"
                  d="M 24.118 118.823 C 151.424 236.286 301.697 142.622 329.412 131.764 C 573.409 36.172 629.445 234.184 671.765 290 C 724.24 359.209 785.125 360.014 833.53 363.529"
                  stroke="transparent"
                  fill="transparent"
                />
              </svg>
            </div>

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
          </div>
        </section>
      </div>

      <div className="radialGradient">
        <section className="section" id="page4">
          <div className="poemText">
            <p>the edge of the sea</p>
            <p>concerned</p>
            <p>with itself</p>
          </div>
          <div className="waxContainer">
            <img className="wax" src={wax} />
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
      </div>

      <section className="section" id="page7">
        <div className="poemText">
          <p>a splash quite unnoticed</p>
          <p>this was</p>
          <p>Icarus drowning</p>
        </div>

        <div className="drowningBubbles">
          <span class="bubble"></span>
          <span class="bubble"></span>
          <span class="bubble"></span>
          <span class="bubble"></span>
          <span class="bubble"></span>
          <span class="bubble"></span>
          <span class="bubble"></span>
        </div>

        <img className="icarusDrowning" src={icarusDrowning} />
      </section>
    </div>
  );
}

export default Night;
