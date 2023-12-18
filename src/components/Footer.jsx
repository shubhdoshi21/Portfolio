import React from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full flex bg-black/60 flex-row sm:flex-col px-2 py-5">
      <div className="w-1/3 flex flex-col items-center justify-center sm:w-full" >
        <p className="text-lg font-bold text-yellow-500">My Resume</p>
        <IoDocumentTextOutline
          size={30}
          className="m-1 hover:scale-110 transition duration-300 hover:-translate-y-1 text-white hover:text-yellow-500"
          color=""
        />
      </div>
      <div className="w-1/3 flex flex-col items-center justify-center sm:w-full p-2" >
        <p className="text-lg font-bold py-2 text-yellow-500">
          Contact Details
        </p>

        <a href="tel:+917226047581">
          <span className="flex flex-row items-center justify-center">
            <IoIosCall color="" size={30} className="p-1 mr-1" />
            (+91) 7226047581
          </span>
        </a>

        <a href="mailto:shubhdoshi21@gmail.com">
          <span className="flex flex-row items-center justify-center">
            <HiOutlineMail color="" size={30} className="p-1 mr-1" />
            shubhdoshi21@gmail.com
          </span>
        </a>
      </div>
      <div className="w-1/3 flex flex-col items-center justify-center sm:w-full" >
        <p className="text-lg font-bold py-2 text-yellow-500">Socials</p>
        <div className="w-full justify-center px-5 gap-5 flex">
          <a
            href="https://instagram.com/ll._shubh_21_.ll"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoInstagram
              size={30}
              className="hover:scale-110 transition duration-300 hover:-translate-y-1 text-white hover:text-yellow-500"
            />
          </a>
          <a
            href="https://www.Linkedin.com/in/shubh-doshi-921337256"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoLinkedin
              size={30}
              className="hover:scale-110 transition duration-300 hover:-translate-y-1 text-white hover:text-yellow-500"
            />
          </a>
          <a
            href="https://github.com/shubhdoshi21
            "
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub
              size={30}
              className="hover:scale-110 transition duration-300 hover:-translate-y-1 text-white hover:text-yellow-500"
            />
          </a>
          <a
            href="https://twitter.com/shubhdoshi2112"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter
              size={30}
              className="hover:scale-110 transition duration-300 hover:-translate-y-1 text-white hover:text-yellow-500"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
