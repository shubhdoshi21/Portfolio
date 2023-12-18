import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../assets/images/paramarsh.png";
import img2 from "../assets/images/portfolio.png";
import img3 from "../assets/images/linefollower1.jpg";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoMdLink } from "react-icons/io";
import { AiFillGithub } from "react-icons/ai";
import { SiArduino } from "react-icons/si";
import { MdOutlineSensors } from "react-icons/md";
import { IoLogoYoutube } from "react-icons/io";
import Modal from "./Modal";
const Projects = ({ projectRef }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
  const projectsData = [
    {
      title: "College Fest Website",
      image: img1,
      content:
        "Paramarsh is an engaging and vibrant college fest website that embodies the spirit of innovation and creativity. Crafted using the powerful React.js framework and enriched with the flexible and modern Tailwind CSS, this digital platform serves as a hub for an array of exciting events, workshops, and showcases. With an intuitive user interface and seamless navigation, Paramarsh encapsulates the essence of our college fest, offering an immersive experience to participants and visitors alike. From event registrations to schedules and highlights, this website captures the energy and dynamism of our fest, fostering connections and celebrating talents within our academic community. Paramarsh is not just a website; it's a gateway to an unforgettable fest journey, inviting everyone to explore, engage, and revel in the spirit of celebration.",
    },
    {
      title: "Portfolio Website",
      image: img2,
      content:
        "Welcome to my portfolio — a vibrant showcase that merges creativity, innovation, and technical prowess. Crafted with precision using modern web technologies like React.js and enhanced with the sleek design of Tailwind CSS, this portfolio serves as a digital canvas, illustrating my journey, skills, and passion for web development. Seamlessly designed and intuitively navigable, it encapsulates a spectrum of projects, experiences, and capabilities, inviting you to explore a diverse range of works—from engaging websites to innovative applications. This portfolio isn't just a collection of projects; it's a testament to dedication, learning, and a commitment to excellence. Join me on this digital expedition as we delve into the realms of design, development, and creativity.",
    },
    {
      title: "Line Follower Bot",
      image: img3,
      content:
        "Inspired by innovation and guided by the prestigious Technex'23 IIT (BHU), Varanasi, I undertook the fascinating challenge of creating a Line Follower Bot using Arduino Uno. This project involved the convergence of hardware and software, where I leveraged the power of Arduino's microcontroller and sensor integration to craft a smart robot capable of autonomously following predefined paths. The workshop's mentorship fueled my understanding of robotics principles and programming intricacies, allowing me to implement sensor-guided maneuvers that interpret and respond to varying track conditions. With a blend of technical expertise and creative problem-solving, this Line Follower Bot not only showcases my practical skills but also reflects the invaluable learning and mentorship acquired from the esteemed Technex'23 IIT (BHU), Varanasi.",
    },
  ];
  useEffect(() => {
    AOS.init({
      duration: 750, 
      offset: 100, 
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div
      className="w-full flex flex-col pt-20 sm:pt-0"
      ref={projectRef}
      id="projects"
    >
      <p
        className="py-10 px-5 text-4xl flex w-full items-center justify-center text-yellow-500"
        data-aos="fade-up"
      >
        Projects
      </p>
      <div className="space-y-5 ">
        {projectsData.map((project, index) => (
          <div key={index}>
            <div className="text-center" data-aos="fade-left">
              <p className="text-2xl borderzz pt-5 text-yellow-500">
                {project.title}
              </p>
            </div>
            <div className="flex flex-row sm:flex-col p-5">
              <img
                className="w-[40%] h-auto sm:w-full rounded-lg"
                src={project.image}
                alt=""
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="750"
                onClick={() => handleImageClick(project.image)}
              />
              <div className="items-center w-full justify-center flex flex-col px-5 sm:px-0 py-5">
                <p className="text-justify p-2 flex" data-aos="zoom-out-left">
                  {project.content}
                </p>
                <div
                  className="flex flex-row gap-3 w-full p-2 text-2xl sm:text-xl xs:text-base items-center justify-start"
                  data-aos="zoom-out-left"
                >
                  <p className="text-yellow-500">Technologies : </p>
                  {project.title === "Line Follower Bot" && (
                    <SiArduino className="" />
                  )}
                  {project.title === "Line Follower Bot" && (
                    <MdOutlineSensors className="" />
                  )}
                  {project.title !== "Line Follower Bot" && (
                    <FaHtml5 className="" />
                  )}
                  {project.title !== "Line Follower Bot" && (
                    <FaCss3Alt className="" />
                  )}
                  {project.title !== "Line Follower Bot" && (
                    <IoLogoJavascript className="" />
                  )}
                  {project.title !== "Line Follower Bot" && (
                    <FaReact className="" />
                  )}
                  {project.title !== "Line Follower Bot" && (
                    <SiTailwindcss className="" />
                  )}
                </div>
                <div
                  className="flex flex-row gap-3 w-full p-2 text-2xl sm:text-xl xs:text-base items-center justify-start"
                  data-aos="zoom-out-left"
                >
                  <IoMdLink className="" color="#eab208" />
                  <p className="text-yellow-500">:</p>
                  {project.title !== "Line Follower Bot" && (
                    <a
                      href="https://github.com/shubhdoshi21"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiFillGithub className="" />
                    </a>
                  )}
                  {project.title === "Line Follower Bot" && (
                    <a
                      href="https://youtube.com/shorts/0zFKPuZppsQ?si=ljyk0Hx57Y78oE58"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IoLogoYoutube className="" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedImage && (
        <Modal closeModal={() => setSelectedImage(null)}>
          <img
            src={selectedImage}
            alt="Full-screen"
            className="w-full h-auto"
          />
        </Modal>
      )}
      <p
        className="py-10 px-5 text-4xl flex w-full items-center justify-center text-yellow-500"
        data-aos="fade-up"
      >
        Experience
      </p>
      <p
        className="w-full flex px-16 md:px-10 sm:px-5 text-xl sm:text-lg text-justify"
        data-aos="fade-up"
      >
        "As an under graduate, I bring a fresh perspective, an insatiable hunger
        to learn, and a robust foundation acquired through academic pursuits.
        While I might not possess direct industry experience, my enthusiasm,
        coupled with a proactive approach and a willingness to embrace
        challenges, fuels my determination to contribute meaningfully. Eager to
        apply my theoretical knowledge in a practical setting, I am actively
        seeking opportunities for internships or entry-level positions. I am
        committed to leveraging every chance to grow, adapt, and contribute
        effectively to the success of your team or organization."
      </p>
    </div>
  );
};

export default Projects;
