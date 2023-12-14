import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/images/home.webp";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { AiFillGithub } from "react-icons/ai";
import { IoDocumentTextOutline } from "react-icons/io5";

const Home = ({ homeRef }) => {
  return (
    <div className="w-full" ref={homeRef}>
      <div className="w-full flex h-screen pt-[10vh] flex-row sm:flex-col-reverse">
        <div className="flex w-[60%] sm:w-full p-5 flex-col justify-center sm:text-center">
          <p className="text-2xl sm:text-xl">Hello ,It's Me</p>
          <p className="text-5xl text-yellow-500 py-2 md:text:4xl sm:text-3xl">Shubh Doshi</p>
          <p className="text-2xl sm:text-xl">And I'm a Frontend Web-Developer</p>
          <p className="text-xl sm:text-lg pt-5">
            Are you looking for the perfect software developer who has expertise
            in creating a Full Stack Website?
          </p>
          <p className="text-xl sm:text-lg pb-5">
            Then you are in right place. Get the professional results you are
            looking for. Your work will be done on time ans as per your
            requirement. Just reach out and let us know your needs.
          </p>
          <div className="w-full justify-center p-5 gap-5 flex">
            <Link
              to="https://instagram.com/ll._shubh_21_.ll"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoInstagram
                size={30}
                className="hover:scale-110 transition duration-300 hover:-translate-y-2 text-yellow-500 hover:text-white"
              />
            </Link>
            <Link
              to="https://www.linkedin.com/in/shubh-doshi-921337256"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoLinkedin
                size={30}
                className="hover:scale-110 transition duration-300 hover:-translate-y-2 text-yellow-500 hover:text-white"
              />
            </Link>
            <Link
              to="https://github.com/shubhdoshi21
            "
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub
                size={30}
                className="hover:scale-110 transition duration-300 hover:-translate-y-2 text-yellow-500 hover:text-white"
              />
            </Link>
            <IoDocumentTextOutline
              size={30}
              className="hover:scale-110 transition duration-300 hover:-translate-y-2 text-yellow-500 hover:text-white"
            />
          </div>
        </div>
        <div className="flex w-[40%] sm:w-full items-center justify-center">
          <img src={img} alt="" className="p-5" />
        </div>
      </div>
    </div>
  );
};

export default Home;
