import { useState } from "react";
import { motion } from "framer-motion";
import { HiChevronRight } from "react-icons/hi";
import { FaPalette } from "react-icons/fa";

const filters = [
  { name: "Normal", className: "", color: "bg-gray-200" },
  { name: "Yellowish", className: "bg-yellow-100/40", color: "bg-yellow-400" },
  { name: "Blueish", className: "bg-blue-100/40", color: "bg-blue-400" },
  { name: "Greenish", className: "bg-green-100/40", color: "bg-green-400" },
  { name: "Pinkish", className: "bg-pink-100/40", color: "bg-pink-400" },
];

const Filters = () => {
  const [filterIdx, setFilterIdx] = useState(0);
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen((v) => !v);
  return (
    <div>
      {" "}
      <motion.div
        className={`fixed top-4 right-4 z-50 flex items-center h-10 bg-white/10 backdrop-blur-lg border border-gray-200  rounded-full overflow-hidden cursor-pointer`}
        initial={false}
        animate={{
          width: open ? 190 : 40,
          transition: {
            type: "spring",
            stiffness: 260,
            damping: 24,
          },
        }}
        onClick={toggleMenu}
      >
        <motion.div
          className="flex items-center justify-center w-10 h-10"
          initial={false}
        >
          {open ? <HiChevronRight size={18} /> : <FaPalette size={16} />}
        </motion.div>
        <motion.div
          className="flex gap-2 items-center "
          initial={false}
          animate={{
            opacity: open ? 1 : 0,
            x: open ? 0 : 20,
            transition: { duration: 0.2, ease: "easeInOut" },
          }}
        >
          {open && (
            <motion.div
              className="flex flex-row gap-2 items-center "
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(10px)" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {filters.map((f, i) => (
                <button
                  key={f.name}
                  className={`w-5 h-5 rounded-full transition-all duration-200 outline-none  ${
                    f.color
                  } ${filterIdx === i ? "ring-2 ring-indigo-600 " : ""}`}
                  aria-label={f.name}
                  onClick={(e) => {
                    e.stopPropagation();
                    setFilterIdx(i);
                    setOpen(false);
                  }}
                />
              ))}
            </motion.div>
          )}
        </motion.div>
      </motion.div>
      {/* Overlay Filter */}
      {filterIdx !== 0 && (
        <div
          className={`pointer-events-none fixed inset-0 z-40 transition-all duration-300 ${filters[filterIdx].className}`}
        ></div>
      )}
    </div>
  );
};

export default Filters;
