import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { IconContext } from "react-icons";
import { GiBranchArrow } from "react-icons/gi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import { nightColors, dayColors } from "../data/data"

import "./Home.css";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

function Home() {
  const titleRef = useRef(null);
  const arrowRef = useRef(null);
  const dayNightPanelRef = useRef(null);
  const nightTitleRef = useRef(null);
  const dayTitleRef = useRef(null);

  const onArrowClick = (event) => {
    gsap.to(window, {
      duration: 0.25,
      scrollTo: "#section2",
    });
  }

  const onDayNightPanelLeave = (event) => {
    // ternary operator -> if the mouse left the menu panel from the left half then `linear-gradient(90deg, #3F3684 30%, #FD764D 100%)` else
    const defaultGradient = event.innerwidth < (event.view.innerwidth / 2) ? `linear-gradient(90deg, #3F3684 30%, #FD764D 100%)` : `linear-gradient(270deg, #FD764D 0%, #3F3684 60%)`;

    console.log(event)
    const leaveTl = gsap.timeline({
      defaults: {
        duration: 0.5,
        ease: "circ.inout"
      }
    });

    leaveTl
      .to(
        dayNightPanelRef.current,
        {
          backgroundImage: defaultGradient,
        }
      );
  }

  const onDayNightPanelHover = (event, isDay) => {
    // [30 - 30 = 0] -> when day selected night color starts at 0 from the left
    // [30 - 50 = -20] -> when night selected day color starts at -20 from the right
    const gradientChange = isDay ? 30 : 50;
    // const gradientNew = `linear-gradient(${isDay ? 90 : 270}deg, #${isDay ? nightColors[3] : dayColors[4]}77 ${isDay ? 30 - gradientChange : 30 - gradientChange}%, #${isDay ? dayColors[4] : nightColors[3]} ${isDay ? 100 : 80}%)`;
    // const gradientNew = `linear-gradient(${isDay ? 90 : 270}deg, #${isDay ? `${nightColors[3]}77` : `${dayColors[4]}77`} ${isDay ? 30 - gradientChange : 30 - gradientChange}%, #${isDay ? dayColors[4] : nightColors[3]} ${isDay ? 100 : 80}%)`;
    const gradientNew = `linear-gradient(${isDay ? 90 : 270}deg, #${isDay ? `3F368477` : `FD764D77`} ${isDay ? 30 - gradientChange : 30 - gradientChange}%, #${isDay ? 'FD764D' : '3F3684'} ${isDay ? 100 : 80}%)`;

    // const textShadowNew = `0px 0px 4px ${isDay ? dayColours[4] : nightColours[2]}, 0px 0px 8px ${isDay ? dayColours[4] : nightColours[2]}, 0px 0px 16px ${isDay ? dayColours[4] : nightColours[2]}, 0px 0px 32px ${isDay ? dayColours[4] : nightColours[2]} ${isDay ? `` : `, 0px 0px 2px ${nightColours[2]}, 0px 0px 6px ${nightColours[2]} 0px 0px 12px ${nightColours[2]}`}`;

    const hoverTl = gsap.timeline({
      defaults: {
        duration: 0.9,
        ease: "circ.inout"
      }
    });

    hoverTl
      .to(
        dayNightPanelRef.current,
        {
          backgroundImage: gradientNew,
        }
      );
    // .to(
    //   isDay ? dayTitleRef.current : nightTitleRef.current,
    //   {
    //     textShadow: textShadowNew
    //   },
    //   '<'
    // );

    // console.log(gradientNew)
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

            <div ref={arrowRef} className="arrow-btn" onClick={event => onArrowClick(event)}>
              <IconContext.Provider value={{ className: "arrow-icon" }}>
                <GiBranchArrow />
              </IconContext.Provider>
            </div>
          </div>
        </section>

        <section className="panel" id="section2">
          <div className="theme-container" ref={dayNightPanelRef} onMouseLeave={event => onDayNightPanelLeave(event)}>
            <Link
              to={"./night"}
              className="night"
              onMouseOver={event => onDayNightPanelHover(event, false)}
            >
              <h1 className="theme-title" id="night-theme-title" ref={nightTitleRef}>the sea</h1>
            </Link>

            <Link
              to={"./day"}
              className="day"
              onMouseOver={event => onDayNightPanelHover(event, true)}
            >
              <h1 className="theme-title" id="day-theme-title" ref={dayTitleRef}>the sun</h1>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
