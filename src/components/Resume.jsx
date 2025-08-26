import React from "react";

const Resume = () => {
  return (
    <div>
      {" "}
      <div className="flex flex-col items-center font-mono tracking-tight justify-center h-full">
        <h2 className="text-xl md:text-3xl font-light font-mono mb-10 tracking-tight text-gray-900  self-center">
          :~$ ls My_Resume
        </h2>
        <a
          href="/02JST22UCS019_BV_VIVEK_VISHWAKARMA.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 underline mb-8"
        >
          View Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;
