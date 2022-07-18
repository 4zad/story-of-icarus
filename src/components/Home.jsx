import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { IconContext } from "react-icons";
import { GiBranchArrow } from "react-icons/gi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { CSSPlugin } from "gsap/CSSPlugin";

import { nightColors, dayColors } from "../data/data";

import "./Home.css";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(CSSPlugin);

function Home() {
  // --- REFERENCES ---
  const titleRef = useRef(null);
  const arrowRef = useRef(null);
  const dayNightPanelRef = useRef(null);

  // --- EVENT TRIGGERS ---
  const onArrowClick = (event) => {
    gsap.to(window, {
      duration: 0.25,
      scrollTo: "#section2",
    });
  };

  const onDayNightPanelLeave = (event) => {
    // ternary operator -> if the mouse left the menu panel from the left half then `linear-gradient(90deg, #3F3684 30%, #FD764D 100%)` else `linear-gradient(270deg, #FD764D 0%, #3F3684 70%)`
    const defaultGradient =
      event.pageX < document.body.offsetWidth / 2
        ? `linear-gradient(90deg, #3F3684 30%, #FD764D 100%)`
        : `linear-gradient(270deg, #FD764D 0%, #3F3684 70%)`;
    // console.log(event.pageX < (document.body.offsetWidth / 2)); // test to see whether event object calculation is returning correct values
    // console.log(event.pageX < (event.view.innerWidth / 2)); // less safe alternative to the above because it uses viewport width and not the webpage width

    gsap.to(dayNightPanelRef.current, {
      backgroundImage: defaultGradient,
      duration: 0.5,
      ease: "circ.inout",
      overwrite: true,
    });
  };

  const onDayNightOptionsLeave = (event) => {
    gsap.to(event.target.childNodes[0], {
      textShadow: "none",
      duration: 0.5,
      ease: "circ.inout",
      overwrite: true,
    });
  };

  const onDayNightPanelHover = (event) => {
    const isDay =
      event.target.className == "day" ||
      (event.relatedTarget.className == "day" &&
        event.target.className == "theme-title" &&
        event.target.id == "day-theme-title")
        ? true
        : false;
    // console.log(isDay); // test to see if correct boolean value for isDay is being output based on  its respective event trigger element

    const gradientChange = isDay ? 30 : 50; // [30 - 30 = 0] -> when day selected night color starts at 0 from the left
    // [30 - 50 = -20] -> when night selected day color starts at -20 from the right
    const gradientNew = `linear-gradient(${isDay ? 90 : 270}deg, ${
      isDay ? nightColors[3] : dayColors[4]
    }77 ${isDay ? 30 - gradientChange : 30 - gradientChange}%, ${
      isDay ? dayColors[4] : nightColors[3]
    } ${isDay ? 100 : 80}%)`;
    // console.log(gradientNew); // test to see if correct gradient string is being output in its respective situation

    const textShadowNew = `0px 0px 4px ${
      isDay ? dayColors[4] : nightColors[2]
    }, 0px 0px 8px ${isDay ? dayColors[4] : nightColors[2]}, 0px 0px 16px ${
      isDay ? dayColors[4] : nightColors[2]
    }, 0px 0px 32px ${isDay ? dayColors[4] : nightColors[2]}${
      isDay
        ? ``
        : `, 0px 0px 2px ${nightColors[2]}, 0px 0px 6px ${nightColors[2]}, 0px 0px 12px ${nightColors[2]}`
    }`;
    // console.log(textShadowNew); // test to see if correct text shadow string is being output in its respective situation

    const hoverTl = gsap.timeline({
      defaults: {
        duration: 0.9,
        ease: "circ.inout",
      },
    });

    hoverTl
      .to(dayNightPanelRef.current, {
        backgroundImage: gradientNew,
      })
      .to(
        event.target.childNodes[0],
        {
          textShadow: textShadowNew,
        },
        "<"
      );
  };

  // --- ON PAGE LOAD ---
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
            <div
              ref={arrowRef}
              className="arrow-btn"
              onClick={(event) => onArrowClick(event)}
            >
              <IconContext.Provider value={{ className: "arrow-icon" }}>
                <GiBranchArrow />
              </IconContext.Provider>
            </div>
          </div>
        </section>

        <section className="panel" id="section2">
          <div
            className="theme-container"
            ref={dayNightPanelRef}
            onMouseLeave={(event) => onDayNightPanelLeave(event)}
          >
            <Link
              to={"./night"}
              className="night"
              onMouseOver={(event) => onDayNightPanelHover(event)}
              onMouseLeave={(event) => onDayNightOptionsLeave(event)}
            >
              <h1 className="theme-title" id="night-theme-title">
                the sea
              </h1>
            </Link>

            <Link
              to={"./day"}
              className="day"
              onMouseOver={(event) => onDayNightPanelHover(event)}
              onMouseLeave={(event) => onDayNightOptionsLeave(event)}
            >
              <h1 className="theme-title" id="day-theme-title">
                the sun
              </h1>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
