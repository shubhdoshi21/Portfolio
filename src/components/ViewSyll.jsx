import React from "react";

const ViewSyll = ({ stream, course, year }) => {
  const syllabus = [
    ["Course A", "Subject 1", "Subject 2"],
    ["Course B", "Subject 3", "Subject 4"],
    ["Course B", "Subject 3", "Subject 4"],
    ["Course B", "Subject 3", "Subject 4"],
    ["Course B", "Subject 3", "Subject 4"],
    ["Course B", "Subject 3", "Subject 4"],
    ["Course B", "Subject 3", "Subject 4"],
    //...
  ];

  return (
    <div className="border-2 w-full flex items-center justify-center p-5 flex-col sm:px-2">
      <p className="flex w-full text-2xl md:text-xl sm:text-lg p-5 sm:p-1 underline text-center">
        {stream} - {course} - {year}
      </p>
      <p className="flex w-full items-center justify-center text-center text-xl sm:text-base p-5 underline sm:p-1">
        Course Duration : {Math.floor(Math.random() + 3)} years
      </p>
      <table className="w-full border-2 flex flex-col">
        <div className="flex w-full flex-row">
          {syllabus.length > 0 &&
            syllabus[0].map((header, index) => (
              <div
                key={index}
                className={`w-full flex p-2 border-b-2 items-center justify-center`}
              >
                {header}
              </div>
            ))}
        </div>
        <div className="flex w-full flex-col">
          {syllabus.slice(1).map((courseRow, rowIndex) => (
            <div key={rowIndex} className="flex w-full flex-row">
              {courseRow.map((cellData, cellIndex) => (
                <div
                  key={cellIndex}
                  className="flex w-full p-1 items-center justify-center"
                >
                  {cellData}
                </div>
              ))}
            </div>
          ))}
        </div>
      </table>
    </div>
  );
};

export default ViewSyll;
