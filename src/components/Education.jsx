import React from "react";

const Education = ({eduRef}) => {
  return (
    <div className="w-full flex flex-col pt-[10vh] sm:pt-0" ref={eduRef}>
      <p className="py-10 px-5 text-4xl flex w-full items-center justify-center text-yellow-500 text-center">
        Educational Qualification
      </p>
      <div className="p-5 flex flex-col text-xl sm:text-lg items-center justify-center space-y-5">
        <ul className="w-1/2 md:w-2/3 sm:w-11/12">
          <li className="py-2 px-3 border-b-2 border-l border-yellow-500 relative">
            <p className="md:hidden">BE (Computer Science & Engineering)</p>
            <p className="hidden md:block sm:hidden">BE (Computer Science & Engg.)</p>
            <p className="hidden sm:block">BE (CSE)</p>
            <p className="absolute right-0 top-2">2026</p>
          </li>
          <li className="py-2 px-3 border-l border-yellow-500 text-slate-400 relative">
            <p className="md:hidden">The Maharaja Sayajirao University (Vadodara)</p>
            <p className="hidden md:block sm:hidden">Maharaja Sayajirao University</p>
            <p className="hidden sm:block">MSU (Vadodara)</p>
            <p className="absolute right-0 top-2">8.3 CGPA</p>
          </li>
          <li className="py-2 px-3 border-b-2 border-l border-yellow-500 relative">
            <p>HSC</p>
            <p className="absolute right-0 top-2">2022</p>
          </li>
          <li className="py-2 px-3 border-l border-yellow-500 text-slate-400 relative">
            <p className="sm:hidden">GSHSEB, Gandhinagar</p>
            <p className="hidden sm:block">GSHSEB</p>
            <p className="absolute right-0 top-2">91% (PCM)</p>
          </li>
          <li className="py-2 px-3 border-b-2 border-l border-yellow-500 relative">
            <p>SSC</p>
            <p className="absolute right-0 top-2">2020</p>
          </li>
          <li className="py-2 px-3 border-l border-yellow-500 text-slate-400 relative">
          <p className="sm:hidden">GSHSEB, Gandhinagar</p>
            <p className="hidden sm:block">GSHSEB</p>
            <p className="absolute right-0 top-2">91.5%</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Education;
