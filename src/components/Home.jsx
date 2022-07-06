import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useRef } from "react";
import { IconContext } from "react-icons";
import { GiBranchArrow } from "react-icons/gi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import "./Home.css";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

function Home() {
  const titleRef = useRef(null);
  const arrowRef = useRef(null);

  function onArrowClick() {
    gsap.to(window, {
      duration: 0.25,
      scrollTo: "#section2",
    });
  }

  useEffect(() => {
    const heroTl = gsap.timeline({
      defaults: {
        ease: "power1.out",
      },
    });

    // hero landing page animation
    heroTl
      .fromTo(
        titleRef.current,
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          duration: 3,
          delay: 0.5,
        },
        0
      )
      .fromTo(
        arrowRef.current,
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          duration: 2,
          ease: "linear",
        },
        ">-=1.5"
      )
      .to(
        arrowRef.current,
        {
          transformOrigin: "top center",
          scaleY: 1.8,
          duration: 0.4,
          ease: "power1.in",
        },
        "<"
      )
      .to(
        arrowRef.current,
        {
          yPercent: 80,
          duration: 0,
        },
        ">"
      )
      .to(
        arrowRef.current,
        {
          transformOrigin: "bottom center",
          scale: 1,
          duration: 0.4,
        },
        ">"
      )
      .to(
        arrowRef.current,
        {
          yPercent: 110,
          repeat: -1,
          yoyo: true,
          duration: 1,
        },
        ">"
      );

    // vertical snap animation
  }, []);

  return (
    <div className="App">
      <div className="App-container">
        <section className="panel" id="section1">
          <div className="title-container">
            <div ref={titleRef} className="title-text">
              <p>the story of</p>
              <h1>I C A R U S</h1>
            </div>
            <div ref={arrowRef} className="arrow-btn" onClick={onArrowClick}>
              <IconContext.Provider value={{ className: "arrow-icon" }}>
                <GiBranchArrow />
              </IconContext.Provider>
            </div>
          </div>
        </section>

        <section className="panel" id="section2">
          <div className="theme-container">
            <div className="night">
              <h1 className="theme-title">the sea</h1>
            </div>
            <div className="day">
              <h1 className="theme-title">the sun</h1>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
