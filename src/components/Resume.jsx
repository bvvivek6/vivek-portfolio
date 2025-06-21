import React from "react";

const Resume = () => {
  return (
    <div>
      {" "}
      <div className="flex flex-col items-center dm-sans tracking-tight justify-center h-full">
        <h2 className="text-2xl font-light font-sans mb-10 tracking-tight text-gray-900 self-center">
          My Resume
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
