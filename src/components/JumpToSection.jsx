import { AnimatePresence, motion } from "framer-motion";
import {
  UserRound,
  Code2,
  Briefcase,
  LayoutDashboard,
  FileUser,
  BarChart3,
} from "lucide-react";

const sectionList = [
  {
    key: "about",
    label: "Overview",
    icon: <UserRound size={18} strokeWidth={2.2} />,
  },
  {
    key: "skills",
    label: "Skills",
    icon: <Code2 size={18} strokeWidth={2.2} />,
  },
  {
    key: "experience",
    label: "Experience",
    icon: <Briefcase size={16} strokeWidth={2.2} />,
  },
  {
    key: "projects",
    label: "Projects",
    icon: <LayoutDashboard size={16} strokeWidth={2.2} />,
  },
  {
    key: "resume",
    label: "Resume",
    icon: <FileUser size={16} strokeWidth={2.2} />,
  },
  {
    key: "stats",
    label: "Stats",
    icon: <BarChart3 size={16} strokeWidth={2.2} />,
  },
];

const JumpToSection = ({ onJump }) => {
  return (
    <div className="">
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-50 flex bg-black items-center justify-center w-full h-12 overflow-hidden"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <div className="bg-white h-12 rounded-b-2xl rounded-br-3xl flex-1"></div>
        <div className="bg-white">
          <div className="flex flex-row px-3 rounded-t-3xl h-12 items-center justify-center bg-black gap-1">
            {sectionList.map((section, index) => (
              <motion.button
                key={section.key}
                className="flex flex-row items-center justify-center cursor-pointer px-2  transition-colors duration-200"
                onClick={() => onJump && onJump(section.key)}
                aria-label={section.label}
                initial={{ y: 70, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  y: {
                    type: "spring",
                    stiffness: 300,
                    damping: 50,
                    mass: 0.7,
                    delay: 0.15 * index,
                  },
                }}
              >
                <span className="text-white hover:text-blue-500 transition-colors duration-200 mb-0.5 md:mb-1">
                  {section.icon}
                </span>
              </motion.button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-b-2xl rounded-bl-3xl h-12 flex-1"></div>
      </motion.div>
    </div>
  );
};

export default JumpToSection;
