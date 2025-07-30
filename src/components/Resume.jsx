import React from "react";

const Resume = () => {
  return (
    <div>
      {" "}
      <div className="flex flex-col items-center font-mono tracking-tight justify-center h-full">
        <h2 className="text-xl font-light font-mono mb-10 tracking-tight text-gray-900  self-center">
          :~$ ls My_Resume
        </h2>
        <a
          href="/bvvivek_resume_019.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 underline mb-8"
        >
          View Resume
        </a>
        <div className="mt-2 p-5 rounded-2xl  flex flex-col items-center w-full  animate-fadein">
          <span className="font-mono text-xs mb-2 text-green-400">
            <span className="text-black">Thank you for visiting! ;)</span>
          </span>
        </div>
        <style>{`
          @keyframes fadein { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
          .animate-fadein { animation: fadein 1.2s cubic-bezier(.4,0,.2,1); }
        `}</style>
      </div>
    </div>
  );
};

export default Resume;
