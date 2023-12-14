import React, { useState ,useRef } from "react";
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

function App() {

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const eduRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const handleHomeClick = () => {
    homeRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleAboutClick = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleEduClick = () => {
    eduRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleProjectClick = () => {
    projectRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleContactClick = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
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
    <div className="bg-[#1e1e1e] text-white">
      {width > breakpoint ? (
        <Nav key="navbar" handleAboutClick={handleAboutClick} handleHomeClick={handleHomeClick} handleContactClick={handleContactClick} handleEduClick={handleEduClick} handleProjectClick={handleProjectClick}/>
      ) : (
        [
          !showSidebar ? (
            <div key="menubar" className="fixed top-10 right-10 cursor-pointer z-50">
              <RiMenu3Fill size="30px" onClick={showHandler} />
            </div>
          ) : (
            <Sidebar key="sidebar" handleClick={showHandler} handleAboutClick={handleAboutClick} handleHomeClick={handleHomeClick} handleContactClick={handleContactClick} handleEduClick={handleEduClick} handleProjectClick={handleProjectClick}/>
          ),
        ]
      )}
      {showScrollToTop && (
        <div className="fixed bottom-3 right-3 p-3 hover:-translate-y-[1vh] transition duration-300 z-20 bg-black/70 rounded-full ring-2 ring-[#eab208]" onClick={handleScrollToTop}>
          <RxPinTop
            color="#eab208"
            size="20px"
            className=""
          />
        </div>
      )}
      <Home homeRef={homeRef}/>
      <About aboutRef={aboutRef}/>
      <Education eduRef={eduRef}/>
      <Projects projectRef={projectRef}/>
      <Contact contactRef={contactRef}/>
      <Footer/>
    </div>
  );
}

export default App;

/*
pending features :
navbar underline tracker
resume navigation
project section
data aos
*/