import React, { useState, useRef, useEffect } from "react";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import { RxPinTop } from "react-icons/rx";
import { RiMenu3Fill } from "react-icons/ri";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import Education from "./components/Education";
import Projects from "./components/Projects";
import AOS from "aos";
import "aos/dist/aos.css";
import Typewriter from "./components/Typewriter";
import { PiHandsPraying } from "react-icons/pi";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = setTimeout(() => {
      setLoading(false);
    }, 4500);

    return () => clearTimeout(fetchData);
  }, []);
  const preloader = ["नमस्ते", "सुस्वागतम्"];

  useEffect(() => {
    AOS.init({
      duration: 750,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const eduRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const handleHomeClick = () => {
    if (homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleAboutClick = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleEduClick = () => {
    if (eduRef.current) {
      eduRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleProjectClick = () => {
    if (projectRef.current) {
      projectRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleContactClick = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [showSidebar, setshowSidebar] = useState(false);
  const [showScrollToTop, setshowScrollToTop] = useState(false);
  const [width, setWidth] = React.useState(window.innerWidth);
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const breakpoint = 900;
  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  const showHandler = () => {
    setshowSidebar(!showSidebar);
  };
  React.useEffect(() => {
    const handleScroll = () => {
      const topPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      if (topPosition > 0) {
        setshowScrollToTop(true);
      } else {
        setshowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="text-5xl w-full h-screen items-center justify-center flex bg-[#1e1e1e] text-yellow-500 overflow-hidden flex-col gap-5">
        <Typewriter lines={preloader} /><PiHandsPraying />
      </div>
      ) : (
        <div className="bg-[#1e1e1e] text-white overflow-hidden ab">
          {width > breakpoint ? (
            <Nav
              key="navbar"
              handleAboutClick={handleAboutClick}
              handleHomeClick={handleHomeClick}
              handleContactClick={handleContactClick}
              handleEduClick={handleEduClick}
              handleProjectClick={handleProjectClick}
              homeRef={homeRef}
              aboutRef={aboutRef}
              eduRef={eduRef}
              projectRef={projectRef}
              contactRef={contactRef}
            />
          ) : (
            [
              !showSidebar ? (
                <div
                  key="menubar"
                  className="fixed top-10 right-10 cursor-pointer z-50"
                >
                  <RiMenu3Fill size="30px" onClick={showHandler} />
                </div>
              ) : (
                <Sidebar
                  key="sidebar"
                  handleClick={showHandler}
                  handleAboutClick={handleAboutClick}
                  handleHomeClick={handleHomeClick}
                  handleContactClick={handleContactClick}
                  handleEduClick={handleEduClick}
                  handleProjectClick={handleProjectClick}
                />
              ),
            ]
          )}
          {showScrollToTop && (
            <div
              className="fixed bottom-3 right-3 p-3 hover:-translate-y-[1vh] transition duration-300 z-20 bg-black/70 rounded-full ring-2 ring-[#eab208]"
              onClick={handleScrollToTop}
              data-aos="flip-up"
            >
              <RxPinTop color="#eab208" size="20px" className="" />
            </div>
          )}
          <Home homeRef={homeRef} />
          <About aboutRef={aboutRef} />
          <Education eduRef={eduRef} />
          <Projects projectRef={projectRef} />
          <Contact contactRef={contactRef} />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;

/*
pending features :
resume navigation
project section
*/
