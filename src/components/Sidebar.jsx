import React from "react";
import { RxCross1 } from "react-icons/rx";

const Sidebar = ({ handleClick,handleAboutClick,handleHomeClick,handleContactClick,handleEduClick,handleProjectClick }) => {
  return (
    <div
      className={`fixed h-auto bg-black/75 w-auto overflow-scroll z-50 ease-in-out duration-300 backdrop-blur-md rounded-xl top-0 right-0`} onClick={handleClick}
    >
      <div className="absolute top-10 right-10 cursor-pointer">
        <RxCross1 color="white" size="30px" onClick={handleClick} />
      </div>
      <div className="px-20 pt-20 pb-10 space-y-3">
        <p className="cursor-pointer text-lg hover:scale-110 transition duration-200 hover:text-yellow-500 " onClick={handleHomeClick}>Home</p>
        <p className="cursor-pointer text-lg hover:scale-110 transition duration-200 hover:text-yellow-500 " onClick={handleAboutClick}>About</p>
        <p className="cursor-pointer text-lg hover:scale-110 transition duration-200 hover:text-yellow-500 " onClick={handleEduClick}>Education</p>
        <p className="cursor-pointer text-lg hover:scale-110 transition duration-200 hover:text-yellow-500 " onClick={handleProjectClick}>Projects</p>
        <p className="cursor-pointer text-lg hover:scale-110 transition duration-200 hover:text-yellow-500 " onClick={handleContactClick}>Let's Connect</p>
      </div>
    </div>
  );
};

export default Sidebar;
