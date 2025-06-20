import React from "react";
import { FaReact, FaFigma, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

const skills = [
  { icon: <FaReact className="text-sky-400 text-lg" />, label: "React" },
  { icon: <FaFigma className="text-pink-500 text-lg" />, label: "Figma" },
  { icon: <SiMongodb className="text-green-600 text-lg" />, label: "MongoDB" },
  { icon: <SiExpress className="text-gray-700 text-lg" />, label: "Express" },
  { icon: <FaNodeJs className="text-green-500 text-lg" />, label: "Node.js" },
  { icon: <FaGitAlt className="text-orange-500 text-lg" />, label: "Git" },
  { icon: <FaGithub className="text-black text-lg" />, label: "GitHub" },
];

const Skills = () => {
  return (
    <div className="w-full flex flex-col items-center mt-4 mb-4 overflow-x-hidden">
      <div className="relative w-full max-w-2xl h-14">
        <div
          className="absolute flex gap-3 items-center animate-marquee whitespace-nowrap left-0 top-0 h-14"
          style={{ minWidth: "100%" }}
        >
          {skills.concat(skills).map((skill, idx) => (
            <span
              key={idx}
              className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/80 border border-gray-200  text-gray-800 text-sm font-medium"
            >
              {skill.icon} {skill.label}
            </span>
          ))}
        </div>
      </div>
      {/* Marquee animation styles */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 18s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Skills;
