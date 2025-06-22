import React, { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";

const sectionList = [
  { key: "about", label: "Overview" },
  { key: "skills", label: "Skills" },
  { key: "experience", label: "Experience" },
  { key: "resume", label: "Resume" },
];

const JumpToSection = ({ onJump }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-6 left-6 z-50 flex items-center h-10  shadow-inner backdrop-blur-lg border text-black border-gray-200 rounded-full overflow-visible cursor-pointer ">
      <button
        className="w-10 h-10 flex  items-center justify-center text-xs font-light "
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <HiOutlineX size={20} /> : <HiOutlineMenu size={20} />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute top-8 left-6 grid grid-cols-2 min-w-[220px] gap-1"
            initial={{
              opacity: 0.3,
              x: -120,
              y: -50,
              scale: 0.1,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              x: -20,
              y: 20,
              scale: 1,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              x: -120,
              y: -50,
              scale: 0.1,
              filter: "blur(10px)",
            }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 18,
            }}
          >
            {sectionList.map((section) => (
              <button
                key={section.key}
                className="text-center px-4 py-3 font-sans shadow-neutral-100 shadow-inner
           tracking-tight bg-[#ffffff] border border-gray-200 text-sm rounded-2xl hover:bg-gray-200 w-full text-gray-900"
                onClick={() => {
                  setOpen(false);
                  if (onJump) onJump(section.key);
                }}
              >
                {section.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default JumpToSection;
