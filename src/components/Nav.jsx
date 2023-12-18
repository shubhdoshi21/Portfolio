import React, { useEffect, useState } from "react";

const Nav = ({handleAboutClick,handleHomeClick,handleContactClick,handleEduClick,handleProjectClick,contactRef,projectRef,eduRef,aboutRef,homeRef}) => {
  const [activeSection, setActiveSection] = useState("home");
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.25,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    observer.observe(homeRef.current);
    observer.observe(aboutRef.current);
    observer.observe(eduRef.current);
    observer.observe(projectRef.current);
    observer.observe(contactRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div className="w-full bg-black/60 flex px-5 fixed h-20 items-center z-50 justify-end backdrop-blur-md">
       <div className="cursor-pointer flex flex-grow items-center text-yellow-500 text-4xl px-10" onClick={handleHomeClick}>
        Shubh's Portfolio
      </div>
      <div
        className={`cursor-pointer text-lg w-auto px-2 hover:text-yellow-500 text-center h-full items-center justify-center flex ${
          activeSection === "home" ? "active borderz text-yellow-600" : "borderz"
        }`}
        onClick={handleHomeClick}
        ref={homeRef}
      >
        Home
      </div>
      <div
        className={`cursor-pointer text-lg w-auto px-2 hover:text-yellow-500 text-center h-full items-center justify-center flex ${
          activeSection === "about" ? "active borderz text-yellow-600" : "borderz"
        }`}
        onClick={handleAboutClick}
        ref={aboutRef}
      >
        About
      </div>
      <div
        className={`cursor-pointer text-lg w-auto px-2 hover:text-yellow-500 text-center h-full items-center justify-center flex ${
          activeSection === "education" ? "active borderz text-yellow-600" : "borderz"
        }`}
        onClick={handleEduClick}
        ref={eduRef}
      >
        Education
      </div>
      <div
        className={`cursor-pointer text-lg w-auto px-2 hover:text-yellow-500 text-center h-full items-center justify-center flex ${
          activeSection === "projects" ? "active borderz text-yellow-600" : "borderz"
        }`}
        onClick={handleProjectClick}
        ref={projectRef}
      >
        Projects
      </div>
      <div
        className={`cursor-pointer text-lg w-auto px-2 hover:text-yellow-500 text-center h-full items-center justify-center flex ${
          activeSection === "contact" ? "active borderz text-yellow-600" : "borderz"
        }`}
        onClick={handleContactClick}
        ref={contactRef}
      >
        Let's Connect
      </div>

    </div>
  );
};

export default Nav;
