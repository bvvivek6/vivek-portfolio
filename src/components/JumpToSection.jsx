import React, { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";

const sectionList = [
  { key: "about", label: "Overview" },
  { key: "skills", label: "Skills" },
  { key: "experience", label: "Experience" },
  { key: "projects", label: "Projects" },
  { key: "resume", label: "Resume" },
];

const JumpToSection = ({ onJump }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.divdiv
      className="fixed top-6 left-6 z-50 flex items-center h-10  shadow-inner backdrop-blur-lg border-y text-black border-gray-200 rounded-full overflow-visible "
      whileTap={{ scale: 0.9 }}
      initial={{ x: -200 }}
      animate={{ x: 0 }}
      transition={{
        x: {
          type: "spring",
          stiffness: 300,
          damping: 50,
          mass: 0.7,
          delay: 0.8,
        },
      }}
    >
      <motion.button
        className="w-10 h-10 flex cursor-pointer items-center justify-center text-xs font-medium "
        onClick={() => setOpen((v) => !v)}
      >
        <motion.span
          initial={false}
          animate={{
            opacity: open ? 0 : 1,
            rotate: open ? 180 : 0,
            filter: open ? "blur(5px)" : "blur(0px)",
          }}
          transition={{ duration: 0.4 }}
          style={{ position: "absolute" }}
        >
          <HiOutlineMenu size={20} />
        </motion.span>
        <motion.span
          initial={false}
          animate={{
            opacity: open ? 1 : 0,
            rotate: open ? 0 : 180,
            filter: open ? "blur(0px)" : "blur(5px)",
          }}
          transition={{ duration: 0.4 }}
          style={{ position: "absolute" }}
        >
          <HiOutlineX size={20} />
        </motion.span>
      </motion.button>
      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute top-7 left-6 grid grid-cols-2 min-w-[220px] gap-1 "
            initial={{
              opacity: 0.3,
              x: -120,
              y: -50,
              scale: 0.1,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              x: -17.5,
              y: 23,
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
              stiffness: 260,
              damping: 26,
            }}
          >
            {sectionList.map((section) => (
              <button
                key={section.key}
                className="text-center px-4 py-2 font-sans shadow-inner
           tracking-tight bg-[#ffffff] text-sm rounded-2xl border border-gray-200 hover:bg-gray-200 w-full text-gray-900"
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
    </motion.divdiv>
  );
};

export default JumpToSection;
