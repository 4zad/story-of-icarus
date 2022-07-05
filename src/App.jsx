import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useRef } from "react";
import { IconContext } from "react-icons";
import Day from './components/Day';
import Night from './components/Night';
import { GiBranchArrow } from 'react-icons/gi';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";

import './App.css';

function App() {
  const titleRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    const heroTl = gsap.timeline({
      defaults: {
        ease: 'linear'
      }
    });

    heroTl
      .fromTo(
        titleRef.current,
        {
          autoAlpha: 0
        },
        {
          autoAlpha: 1,
          duration: 3,
          delay: 0.5
        }
      )
      .fromTo(
        arrowRef.current,
        {
          autoAlpha: 0
        },
        {
          autoAlpha: 1,
          duration: 1,
        },
        '>-=1'
      )
      .to(
        arrowRef.current,
        {
          transformOrigin: 'top center',
          scaleY: 1.8,
          duration: 0.35
        },
        '<'
      )
      .to(
        arrowRef.current,
        {
          yPercent: 80,
          duration: 0
        },
        '>'
      )
      .to(
        arrowRef.current,
        {
          transformOrigin: 'bottom center',
          scaleY: 1,
          duration: 0.35
        },
        '>'
      )
      .to(
        arrowRef.current,
        {
          yPercent: 100, 
          repeat: -1, 
          yoyo: true,
          duration: 1, 
        },
        '>'
      );
  //   gsap.from('.theme-title', {
  //   autoAlpha: 0,
  //   y: 40
  // });
}, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <div className="title-container">
        <div ref={titleRef} className="title-text">
            <p>the story of</p>
            <h1>I C A R U S</h1>
          </div>
          <div ref={arrowRef} className="title-btn">
            <IconContext.Provider value={{className: 'arrow-blah' }}>
              <GiBranchArrow />
            </IconContext.Provider>
          </div>
        </div>
        <div className="theme-container">
          <div className="night">
            <h1 className="theme-title">the sea</h1>
          </div>
          <div className="day">
            <h1 className="theme-title">the sun</h1>
          </div>
        </div>

      </header>

      <Router>


        <Routes>
          <Route path="/day" element={<Day />} />
          <Route path="/night" element={<Night />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
