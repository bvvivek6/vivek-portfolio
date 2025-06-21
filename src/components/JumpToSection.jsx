import React, { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { motion } from "framer-motion";

const sectionList = [
  { key: "about", label: "Overview" },
  { key: "skills", label: "Skills" },
  { key: "experience", label: "Experience" },
  { key: "resume", label: "Resume" },
];

const JumpToSection = ({ onJump }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-6 left-6 z-50 flex items-center h-10 bg-white/10 backdrop-blur-lg border text-black border-gray-200 rounded-full overflow-visible cursor-pointer ">
      <button
        className="w-10 h-10 flex  items-center justify-center text-xs font-light "
        onClick={() => setOpen((v) => !v)}
      >
        <HiOutlineMenu size={20} />
      </button>
      {open && (
        <motion.div
          className="absolute top-12 left-0 grid grid-cols-2 min-w-[220px] gap-2 flex-col"
          initial={{ opacity: 0, y: -10, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -10, filter: "blur(10px)" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {sectionList.map((section) => (
            <button
              key={section.key}
              className="text-center px-4 py-2 font-sans tracking-tight bg-white border border-gray-200  rounded-2xl hover:bg-gray-100 w-full text-black"
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
    </div>
  );
};

export default JumpToSection;
