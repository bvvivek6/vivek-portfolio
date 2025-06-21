import React from "react";

const Experience = () => {
  return (
    <section className="flex flex-col items-center justify-center h-full w-full py-12 font-sans">
      <div className="w-[90vw] md:w-[50vw] p-6 flex flex-col items-start space-y-6">
        <h2 className="text-2xl font-light tracking-tight text-gray-900 self-center">
          Experience
        </h2>

        <div className="flex flex-row w-full gap-2 p-6 rounded-2xl backdrop-blur">
          <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-gray-500 text-sm ">
            <img
              src="https://github.com/fauxigent.png"
              alt="Fauxigent Logo"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col space-y-2 w-full">
            <div>
              <span className="text-lg leading-tight font-semibold text-gray-800">
                UI/UX Designer & Frontend Developer
              </span>
              <div className="text-md text-gray-600">
                Fauxigent Innovations, Mysuru
              </div>
              <div className="text-sm text-gray-500 font-light">
                Dec 2024 – Present (Part-time)
              </div>
            </div>

            <ul className="list-disc  mt-2 space-y-2 text-gray-800 text-xs leading-snug">
              <li>
                Designed and developed UIs for <b>15+</b> projects including
                e-commerce platforms, dashboards, and portfolios.
              </li>
              <li>
                Improved user satisfaction by up to <b>30%-50%</b> through
                client collaboration and user-centered design.
              </li>
              <li>
                Key work includes interfaces for Anand Brothers, SK Jewellers,
                Smarthr Pro, and Fauxigent portfolio.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
