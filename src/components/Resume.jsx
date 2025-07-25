import React from "react";

const Resume = () => {
  return (
    <div>
      {" "}
      <div className="flex flex-col items-center font-mono tracking-tight justify-center h-full">
        <h2 className="text-xl font-light font-mono mb-10 tracking-tight text-gray-900 self-center">
          :~$ ls My_Resume
        </h2>
        <a
          href="/bvvivek_resume_019.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          View Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;
