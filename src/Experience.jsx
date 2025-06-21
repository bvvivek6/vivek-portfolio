import React from "react";

const Experience = () => {
  return (
    <section className="flex flex-col items-center tracking-tight justify-center h-full w-full  py-8 font-sans">
      <div className="  max-w-2xl rounded-4xl w-full p-6 flex flex-col items-center">
        <h2 className="text-2xl font-light mb-6 tracking-tight text-gray-900">
          Experience
        </h2>

        <div className="flex flex-col items-center text-center">
          <span className="text-lg font-medium leading-tight text-gray-800 ">
            UI/UX Designer & Frontend Developer
          </span>
          <span className="text-lg text-gray-500">
            Fauxigent Innovations, Mysuru
          </span>
          <span className="text-sm text-gray-400 mb-4 font-light tracking-tighter">
            Dec 2024 – Present (Part-time)
          </span>
          <ul className="flex flex-wrap justify-center gap-1 max-w-[1500px] mt-4">
            <li className=" backdrop-blur text-gray-800 text-sm px-4 py-2 rounded-xl text-left ">
              Designed and developed UIs for <b>15+</b> projects including
              e-commerce platforms, dashboards, and portfolios.
            </li>
            <li className=" backdrop-blur text-gray-800 text-sm px-4 py-2 rounded-xl text-left ">
              Improved user satisfaction by up to <b>30%-50%</b> through client
              collaboration and user-centered design.
            </li>
            <li className=" backdrop-blur text-gray-800 text-sm px-4 py-2 rounded-xl text-left ">
              Key work includes interfaces for Anand Brothers, SK Jewellers,
              Smarthr Pro, and Fauxigent portfolio.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
