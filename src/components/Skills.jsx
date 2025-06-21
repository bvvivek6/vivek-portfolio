import React from "react";
import { FaReact, FaFigma, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiC,
  SiCplusplus,
  SiLinux,
} from "react-icons/si";
import { MdOutlineSecurity } from "react-icons/md";
import { BiCodeCurly } from "react-icons/bi";
import { HiChevronRight } from "react-icons/hi";

const skills = [
  { icon: <SiCplusplus className="text-blue-600 text-lg" />, label: "C++" },
  { icon: <SiC className="text-blue-500 text-lg" />, label: "C" },
  {
    icon: <SiJavascript className="text-yellow-400 text-lg" />,
    label: "JavaScript",
  },
  { icon: <SiLinux className="text-black text-lg" />, label: "Linux" },

  { icon: <FaReact className="text-sky-400 text-lg" />, label: "React.js" },

  { icon: <FaNodeJs className="text-green-500 text-lg" />, label: "Node.js" },
  {
    icon: <SiExpress className="text-gray-700 text-lg" />,
    label: "Express.js",
  },
  { icon: <SiMongodb className="text-green-600 text-lg" />, label: "MongoDB" },
  { icon: <FaFigma className="text-pink-500 text-lg" />, label: "Figma" },
  { icon: <FaGitAlt className="text-orange-500 text-lg" />, label: "Git" },
  { icon: <FaGithub className="text-black text-lg" />, label: "GitHub" },
  {
    icon: <BiCodeCurly className="text-emerald-600 text-lg" />,
    label: "REST APIs",
  },
  {
    icon: <MdOutlineSecurity className="text-blue-500 text-lg" />,
    label: "JWT Auth",
  },
];

const Skills = () => {
  return (
    <div className="w-full flex flex-col items-center mt-4 mb-4">
      <h2 className="text-2xl font-light mb-6 tracking-tight text-gray-900">
        Skills
      </h2>
      <div className="relative w-full max-w-2xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 items-center justify-center w-full">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="flex items-center gap-1  px-3 py-2 rounded-full bg-white/10 backdrop-blur border border-gray-200 text-gray-800 text-sm font-medium justify-center "
            >
              {skill.icon} {skill.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
