import React, { useState } from "react";
import img from "../assets/images/MSUlogo.jpg";
import ViewSyll from "../components/ViewSyll";
import { PDFDownloadLink } from "@react-pdf/renderer";
import SyllabusPDF from "./SyllabusPDF";

const Syllabus = () => {
  const availableStreams = [
    "Animation and Design",
    "Arts, Humanities, and Social Sciences",
    "Commerce",
    "Computer Applications and IT",
    "Education",
    "Engineering and Architecture",
    "Hospitality and Tourism",
    "Law",
    "Management and Business Administration",
    "Media, Mass Communication, and Journalism",
    "Medicine and Allied Sciences",
    "Pharmacy",
    "Sciences",
    "Others",
  ];

  const yearOptions = [];
  for (let year = 1949; year <= 2023; year++) {
    yearOptions.push(
      <option key={year} value={year}>
        {year}
      </option>
    );
  }

  const [selectedStream, setSelectedStream] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [courseOptions, setCourseOptions] = useState([]);
  const [view, setView] = useState(false);
  const handleStreamChange = (e) => {
    setSelectedStream(e.target.value);
    const courses = [
      `Course X of ${e.target.value}`,
      `Course Y of ${e.target.value}`,
      `Course Z of ${e.target.value}`,
    ];
    setCourseOptions(courses);
    // switch (e.target.value) {
    //   case "Law":
    //     const lawCourses = ["Course A", "Course B"];
    //     setCourseOptions(lawCourses);
    //     break;
    //   case "Engineering and Architecture":
    //     const engCourses = ["Course X", "Course Y"];
    //     setCourseOptions(engCourses);
    //     break;
    //   default:
    //     setCourseOptions([]);
    //     break;
    // }
  };

  const handleCourseChange = (e) => {
    setSelectedCourse(e.target.value);
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };
  return (
    <div className="py-[10vh] flex text-white justify-center items-center flex-col bg-black/80">
      <img
        src={img}
        alt=""
        className="w-[25%] flex p-10 md:p-5 sm:p-0"
      />
      <p className="w-full flex text-center items-center justify-center p-5 text-5xl md:text-3xl sm:text-2xl xs:text-lg xs:p-2">
        The Maharaja Sayajirao University
      </p>
      <div className="px-2 py-5 items-center justify-center flex w-full">
        <label className="text-lg w-32 sm:text-base sm:w-28">
          Select Stream :
        </label>
        <select
          name="selectedStream"
          className="mx-2 p-1 border-2 border-black rounded-md w-[50%] bg-transparent/50"
          onChange={handleStreamChange}
          value={selectedStream}
        >
          <option value="">Select a Stream</option>
          {availableStreams.map((stream) => (
            <option key={stream} value={stream}>
              {stream}
            </option>
          ))}
        </select>
      </div>
      <div className="px-2 items-center justify-center flex w-full">
        <label className="text-lg w-32 sm:text-base sm:w-28">
          Select Course :
        </label>
        <select
          name="selectedCourse"
          className="mx-2 p-1 border-2 border-black rounded-md w-[50%] bg-transparent/50"
          onChange={handleCourseChange}
          value={selectedCourse}
          disabled={selectedStream === ""}
        >
          <option value="">Select a Course</option>
          {courseOptions.map((course) => (
            <option key={course} value={course}>
              {course}
            </option>
          ))}
        </select>
      </div>
      <div className="px-2 py-5 items-center justify-center flex w-full">
        <label className="text-lg w-32 sm:text-base sm:w-28">
          Select Year :
        </label>
        <select
          name="selectedYear"
          className="mx-2 p-1 border-2 border-black rounded-md w-[50%] bg-transparent/50"
          onChange={handleYearChange}
          value={selectedYear}
          disabled={selectedCourse === ""}
        >
          <option value="">Select a Year</option>
          {yearOptions}
        </select>
      </div>

      <button
        className="border rounded-md p-2 m-2 hover:scale-105 transition duration-300 hover:text-slate-300"
        onClick={() => {
          setView(true);
        }}
        disabled={selectedYear === ""}
      >
        View
      </button>

      {view && (
        <div className="w-full p-5 sm:px-2 items-center justify-center flex flex-col">
          <ViewSyll
            stream={selectedStream}
            course={selectedCourse}
            year={selectedYear}
          />
          <PDFDownloadLink
            document={
              <SyllabusPDF
                stream={selectedStream}
                course={selectedCourse}
                year={selectedYear}
              />
            }
            fileName={`${selectedStream}_${selectedCourse}_${selectedYear}_syllabus.pdf`}
          >
            {({ loading }) =>
              loading ? (
                "Generating PDF..."
              ) : (
                <button className="border rounded-md p-2 mx-2 my-5 hover:scale-105 transition duration-300 hover:text-slate-300">
                  Generate PDF
                </button>
              )
            }
          </PDFDownloadLink>
        </div>
      )}
    </div>
  );
};

export default Syllabus;
