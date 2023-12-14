import React from "react";

const Nav = ({handleAboutClick,handleHomeClick,handleContactClick,handleEduClick,handleProjectClick}) => {
 
  return (
    <div className="w-full bg-black/60 flex px-5 fixed h-[10vh] items-center z-50 justify-end gap-x-5 backdrop-blur-md">
      <div className="cursor-pointer flex flex-grow items-center text-yellow-500 text-4xl px-10" onClick={handleHomeClick}>
        Shubh's Portfolio
      </div>
      <div className="cursor-pointer text-lg w-auto hover:text-yellow-500 self-center text-center h-full items-center justify-center flex hover:border-b-2 border-b-yellow-700" onClick={handleHomeClick}>
        Home
      </div>
      <div className="cursor-pointer text-lg w-auto hover:text-yellow-500 self-center text-center h-full items-center justify-center flex hover:border-b-2 border-b-yellow-700" onClick={handleAboutClick}>
        About
      </div>
      <div className="cursor-pointer text-lg w-auto hover:text-yellow-500 self-center text-center h-full items-center justify-center flex hover:border-b-2 border-b-yellow-700" onClick={handleEduClick}>
        Education
      </div>
      <div className="cursor-pointer text-lg w-auto hover:text-yellow-500 self-center text-center h-full items-center justify-center flex hover:border-b-2 border-b-yellow-700" onClick={handleProjectClick}>
        Projects
      </div>
      <div className="cursor-pointer text-lg w-auto hover:text-yellow-500 self-center text-center h-full items-center justify-center flex hover:border-b-2 border-b-yellow-700" onClick={handleContactClick}>
        Let's Connect
      </div>
    </div>
  );
};

export default Nav;
