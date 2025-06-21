import React from "react";
import experienceData from "../constants/experience";

const Experience = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-20 h-full w-full py-12 font-sans">
      <div className="w-[95vw] md:w-[50vw] p-6 flex flex-col items-start space-y-2">
        <h2 className="text-2xl font-light tracking-tight  text-gray-900 self-center">
          Experience
        </h2>
        <div className="max-h-[50vh] overflow-y-auto w-full backdrop-blur my-4  rounded-2xl">
          {experienceData.map((exp, idx) => (
            <div
              key={idx}
              className="flex flex-row w-full gap-4 p-4 rounded-2xl "
            >
              <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-gray-500 text-sm ">
                <img
                  src={exp.logo}
                  alt={exp.company + " Logo"}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="flex flex-col space-y-2 w-full">
                <div>
                  <span className="text-lg leading-tight tracking-tight font-medium text-gray-800">
                    {exp.role}
                  </span>
                  <div className="text-md tracking-tight text-gray-600">
                    {exp.company}
                  </div>
                  <div className="text-sm tracking-tighter text-gray-500 font-light">
                    {exp.period}
                  </div>
                </div>
                <ul className="list-disc mt-2 space-y-2 text-gray-800 text-xs leading-snug">
                  {exp.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
