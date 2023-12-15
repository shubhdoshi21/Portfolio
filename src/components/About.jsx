import React, { useEffect, useState } from "react";
import { FaJava } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandCpp } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { GiSatelliteCommunication } from "react-icons/gi";
import { RiTeamFill } from "react-icons/ri";
import { MdOutlineSyncProblem } from "react-icons/md";
import { MdAccessTimeFilled } from "react-icons/md";
import { TfiThought } from "react-icons/tfi";
import { MdSportsCricket } from "react-icons/md";
import profile from "../assets/images/profile.svg";
import { IoMusicalNotes } from "react-icons/io5";
import { GrTechnology } from "react-icons/gr";
import { TbPrompt } from "react-icons/tb";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

const About = ({ aboutRef }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 100, // Offset (in pixels) from the original trigger point
      easing: "ease-in-out", // Easing function for the animation
    });
  }, []);
  const [showTechSkills, setShowTechSkills] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showHobbies, setShowHobbies] = useState(false);
  const [showLang, setShowLang] = useState(false);

  const toggleTechSkills = () => {
    setShowTechSkills(!showTechSkills);
  };
  const toggleSkills = () => {
    setShowSkills(!showSkills);
  };
  const toggleHobbies = () => {
    setShowHobbies(!showHobbies);
  };
  const toggleLang = () => {
    setShowLang(!showLang);
  };

  const skills = [
    { name: "HTML, CSS & JS", icons: true, percentage: "80%" },
    { name: "Prompting", icon: <TbPrompt size="35px" />, percentage: "85%" },
    { name: "Java", icon: <FaJava size="35px" />, percentage: "70%" },
    { name: "C / C++", icon: <TbBrandCpp size="35px" />, percentage: "75%" },
    { name: "ReactJS", icon: <FaReact size="35px" />, percentage: "85%" },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss size="35px" />,
      percentage: "90%",
    },
  ];
  return (
    <div className="w-full flex flex-col pt-20 sm:pt-0" id="about" ref={aboutRef}>
      <p className="py-10 px-5 text-4xl flex w-full items-center justify-center text-yellow-500" data-aos="fade-up">
        About Me
      </p>
      <div className="w-full flex flex-wrap">
        <div className="w-1/3 flex sm:w-full sm:p-10 items-center justify-center">
          <img src={profile} alt="" className="sm:w-1/2" data-aos="fade-right"/>
        </div>
        <div className="w-2/3 flex p-16 md:p-10 sm:w-full sm:p-5 text-xl sm:text-lg text-justify" data-aos="fade-left">
          "Welcome to my budding journey in the realm of technology and
          innovation. I am Shubh Doshi, an aspiring Web-Developer. Eager to
          embark on my career path, I am fueled by curiosity and a hunger to
          learn, driven by the potential of technology to transform ideas into
          impactful solutions. With a foundation built on academic excellence
          and a passion for exploration, I am poised to delve into the dynamic
          world of Engineering & Technology. This space is a testament to my
          eagerness to absorb knowledge, hone my skills, and contribute fresh
          perspectives, showcasing my commitment to crafting innovative
          solutions and embracing the evolving landscape of technology."
        </div>
      </div>
      <p
        className="p-5 text-3xl sm:text-2xl flex self-center border-b-2 border-l-2 border-yellow-700 w-1/2 md:w-2/3 sm:w-11/12 items-center justify-center text-yellow-500 cursor-pointer relative"
        onClick={toggleTechSkills} data-aos="fade-up"
      >
        Technical Skills
        <IoIosArrowDropdownCircle
          className={`absolute right-1 transition-transform duration-1000 ${
            showTechSkills ? "rotate-180" : ""
          }`}
        />
      </p>
      {showTechSkills && (
        <div className="p-5 flex flex-col text-xl sm:text-lg items-center justify-center space-y-5" data-aos="fade-up">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex w-1/2 md:w-2/3 sm:w-11/12 relative px-2 py-5" data-aos="fade-right"
            >
              {skill.name}
              {skill.icon && (
                <span className="absolute right-2 top-2 p-1" data-aos="fade-left">{skill.icon}</span>
              )}
              {skill.icons && (
                <div className="absolute right-2 top-2 p-1 flex flex-row space-x-1" data-aos="fade-left">
                  <FaHtml5 size="35px" className="" />
                  <FaCss3Alt size="35px" className="" />
                  <IoLogoJavascript size="35px" className="" />
                </div>
              )}
              <div className="absolute bottom-0 left-0 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-yellow-600 h-2 rounded-full dark:bg-yellow-500"
                  style={{ width: skill.percentage }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      )}
      <p
        className="p-5 text-3xl sm:text-2xl flex self-center border-b-2 border-r-2 border-yellow-700 w-1/2 md:w-2/3 sm:w-11/12 items-center justify-center text-yellow-500 cursor-pointer relative"
        onClick={toggleSkills} data-aos="fade-up"
      >
        Soft Skills
        <IoIosArrowDropdownCircle
          className={`absolute right-1 transition-transform duration-1000 ${
            showSkills ? "rotate-180" : ""
          }`}
        />
      </p>
      {showSkills && (
        <div className="p-5 flex flex-col text-xl sm:text-lg items-center justify-center space-y-5">
          <ul className="w-1/2 md:w-2/3 sm:w-11/12">
            <li className="py-2 px-3 border-b border-yellow-500 relative" data-aos="fade-left">
              <span className="inline-block mr-2">
                <GiSatelliteCommunication />
              </span>
              Communication
            </li>
            <li className="py-2 px-3 border-b border-yellow-500 relative" data-aos="fade-right">
              <span className="inline-block mr-2">
                <RiTeamFill />
              </span>
              Teamwork
            </li>
            <li className="py-2 px-3 border-b border-yellow-500 relative" data-aos="fade-left">
              <span className="inline-block mr-2">
                <MdOutlineSyncProblem />
              </span>
              Problem Solving
            </li>
            <li className="py-2 px-3 border-b border-yellow-500 relative" data-aos="fade-right">
              <span className="inline-block mr-2">
                <MdAccessTimeFilled />
              </span>
              Time Management
            </li>
            <li className="py-2 px-3 relative" data-aos="fade-left">
              <span className="inline-block mr-2">
                <TfiThought />
              </span>
              Critical Thinking
            </li>
          </ul>
        </div>
      )}
      <p
        className="p-5 text-3xl sm:text-2xl flex self-center border-b-2 border-l-2 border-yellow-700 w-1/2 md:w-2/3 sm:w-11/12 items-center justify-center text-yellow-500 cursor-pointer relative"
        onClick={toggleHobbies} data-aos="fade-up"
      >
        Hobbies
        <IoIosArrowDropdownCircle
          className={`absolute right-1 transition-transform duration-1000 ${
            showHobbies ? "rotate-180" : ""
          }`}
        />
      </p>
      {showHobbies && (
        <div className="p-5 flex flex-col text-xl sm:text-lg items-center justify-center space-y-5">
          <ul className="w-1/2 md:w-2/3 sm:w-11/12">
            <li className="py-2 px-3 border-b border-yellow-500 relative" data-aos="fade-left">
              <span className="inline-block mr-2">
                <MdSportsCricket />
              </span>
              Cricket
            </li>
            <li className="py-2 px-3 border-b border-yellow-500 relative" data-aos="fade-right">
              <span className="inline-block mr-2">
                <GrTechnology />
              </span>
              Exploring Tech
            </li>
            <li className="py-2 px-3 relative" data-aos="fade-left">
              <span className="inline-block mr-2">
                <IoMusicalNotes />
              </span>
              Music
            </li>
          </ul>
        </div>
      )}
      <p
        className="p-5 text-3xl sm:text-2xl flex self-center border-b-2 border-r-2 border-yellow-700 w-1/2 md:w-2/3 sm:w-11/12 items-center justify-center text-yellow-500 cursor-pointer relative"
        onClick={toggleLang} data-aos="fade-up"
      >
        Languages Known
        <IoIosArrowDropdownCircle
          className={`absolute right-1 transition-transform duration-1000 ${
            showLang ? "rotate-180" : ""
          }`}
        />
      </p>
      {showLang && (
        <div className="p-5 flex flex-col text-xl sm:text-lg items-center justify-center space-y-5">
          <ul className="w-1/2 md:w-2/3 sm:w-11/12">
            <li className="py-2 px-3 border-b border-yellow-500 relative" data-aos="fade-left">
              <span className="inline-block mr-2 w-3">E</span>
              English
            </li>
            <li className="py-2 px-3 border-b border-yellow-500 relative" data-aos="fade-right">
              <span className="inline-block mr-2 w-3">हिं</span>
              Hindi
            </li>
            <li className="py-2 px-3 border-b border-yellow-500 relative" data-aos="fade-left">
              <span className="inline-block mr-2 w-3">ગુ</span>
              Gujarati
            </li>
            <li className="py-2 px-3 relative" data-aos="fade-right">
              <span className="inline-block mr-2 w-3">सं</span>
              Sanskrit
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default About;
