import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useRef } from "react";
import { IconContext } from "react-icons";
import Home from "./components/Home";
import Day from "./components/Day";
import Night from "./components/Night";
import { GiBranchArrow } from "react-icons/gi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import "./App.css";

// gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(ScrollToPlugin);

function App() {
  //   const titleRef = useRef(null);
  //   const arrowRef = useRef(null);
  //   let sections = gsap.utils.toArray(".panel");

  //   useEffect(() => {
  //     const heroTl = gsap.timeline({
  //       defaults: {
  //         ease: "power1.out",
  //       },
  //     });

  //     // hero landing page animation
  //     heroTl
  //       .fromTo(
  //         titleRef.current,
  //         {
  //           autoAlpha: 0,
  //         },
  //         {
  //           autoAlpha: 1,
  //           duration: 3,
  //           delay: 0.5,
  //         },
  //         0
  //       )
  //       .fromTo(
  //         arrowRef.current,
  //         {
  //           autoAlpha: 0,
  //         },
  //         {
  //           autoAlpha: 1,
  //           duration: 2,
  //           ease: "linear",
  //         },
  //         ">-=1.5"
  //       )
  //       .to(
  //         arrowRef.current,
  //         {
  //           transformOrigin: "top center",
  //           scaleY: 1.8,
  //           duration: 0.4,
  //           ease: "power1.in",
  //         },
  //         "<"
  //       )
  //       .to(
  //         arrowRef.current,
  //         {
  //           yPercent: 80,
  //           duration: 0,
  //         },
  //         ">"
  //       )
  //       .to(
  //         arrowRef.current,
  //         {
  //           transformOrigin: "bottom center",
  //           scale: 1,
  //           duration: 0.4,
  //         },
  //         ">"
  //       )
  //       .to(
  //         arrowRef.current,
  //         {
  //           yPercent: 110,
  //           repeat: -1,
  //           yoyo: true,
  //           duration: 2,
  //         },
  //         ">"
  //       );

  //     // vertical snap animation
  //     gsap.to(window, { duration: 2, scrollTo: "#section2", ease: "power3" });

  //     // gsap.to(sections, {
  //     //   yPercent: 1000 * (sections.length - 1),
  //     //   ease: "none",
  //     //   scrollTrigger: {
  //     //     trigger: ".App-container",
  //     //     scrub: 1,
  //     //     start: "-=500",
  //     //     snap: 1 / (sections.length - 1),
  //     //     end: "+=3000",
  //     //     markers: true,
  //     //   },
  //     // });
  //   }, []);

  return (
    //     <div className="App">
    //       <div className="App-container">
    //         {/* <section className="panel" id="section1">
    //           <div className="title-container">
    //             <div ref={titleRef} className="title-text">
    //               <p>the story of</p>
    //               <h1>I C A R U S</h1>
    //             </div>
    //             <div ref={arrowRef} className="arrow-btn">
    //               <IconContext.Provider value={{ className: "arrow-icon" }}>
    //                 <GiBranchArrow />
    //               </IconContext.Provider>
    //             </div>
    //           </div>
    //         </section>

    //         <section className="panel" id="section2">
    //           <div className="theme-container">
    //             <div className="night">
    //               <h1 className="theme-title">the sea</h1>
    //             </div>
    //             <div className="day">
    //               <h1 className="theme-title">the sun</h1>
    //             </div>
    //           </div>
    //         </section>
    //       </div> */}

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/day" element={<Day />} />
        <Route path="/night" element={<Night />} />
      </Routes>
    </Router>
    // </div>
    // </div>
  );
}

export default App;
