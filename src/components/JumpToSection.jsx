import { AnimatePresence, motion } from "framer-motion";
import {
  FaUser,
  FaCode,
  FaBriefcase,
  FaProjectDiagram,
  FaFileAlt,
} from "react-icons/fa";
const sectionList = [
  { key: "about", label: "Overview", icon: <FaUser size={16} /> },
  { key: "skills", label: "Skills", icon: <FaCode size={16} /> },
  { key: "experience", label: "Experience", icon: <FaBriefcase size={16} /> },
  { key: "projects", label: "Projects", icon: <FaProjectDiagram size={16} /> },
  { key: "resume", label: "Resume", icon: <FaFileAlt size={16} /> },
];

const JumpToSection = ({ onJump }) => {
  return (
    <motion.div
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-end justify-center px-1 py-1  backdrop-blur-[2px] border border-gray-200 rounded-full shadow-inner gap-2 max-w-[80vw] w-auto overflow-x-auto scrollbar-hide"
      style={{ WebkitOverflowScrolling: "touch" }}
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{
        y: {
          type: "spring",
          stiffness: 300,
          damping: 50,
          mass: 0.7,
          delay: 0.8,
        },
        opacity: { duration: 0.4, delay: 0.2 },
      }}
      whileTap={{ scale: 0.85 }}
    >
      {sectionList.map((section) => (
        <motion.button
          key={section.key}
          className="flex flex-col items-center justify-center  cursor-pointerp-2 rounded-full hover:bg-gray-100 transition"
          onClick={() => onJump && onJump(section.key)}
          aria-label={section.label}
        >
          <span className="text-gray-800 group-hover:text-black transition mb-0.5 md:mb-1">
            {section.icon}
          </span>
        </motion.button>
      ))}
    </motion.div>
  );
};

export default JumpToSection;
