import React from "react";

const Projects = ({ projectRef }) => {
  return (
    <div className="w-full flex flex-col pt-[10vh] sm:pt-0" ref={projectRef}>
      <p className="py-10 px-5 text-4xl flex w-full items-center justify-center text-yellow-500">
        Projects
      </p>
      <p className="w-full flex px-16 md:px-10 sm:px-5 text-xl sm:text-lg items-center justify-center text-slate-500">This section is under progress.. please visit again or drop me a message !</p>
      <p className="py-10 px-5 text-4xl flex w-full items-center justify-center text-yellow-500">
        Experience
      </p>
      <p className="w-full flex px-16 md:px-10 sm:px-5 text-xl sm:text-lg text-justify">
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
