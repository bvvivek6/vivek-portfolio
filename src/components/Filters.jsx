import { AnimatePresence, motion } from "framer-motion";
import { HiChevronRight } from "react-icons/hi";
import { FaPalette } from "react-icons/fa";

const filters = [
  { name: "Normal", className: "", color: "bg-gray-200" },
  { name: "Yellowish", className: "bg-yellow-100/40", color: "bg-yellow-400" },
  { name: "Blueish", className: "bg-blue-100/40", color: "bg-blue-400" },
  { name: "Greenish", className: "bg-green-100/40", color: "bg-green-400" },
  { name: "Pinkish", className: "bg-pink-100/40", color: "bg-pink-400" },
];

const Filters = ({ filterIdx, setFilterIdx, open, toggleMenu }) => {
  return (
    <div>
      {" "}
      <motion.div
        className={`fixed top-6 right-6 z-100 flex items-center h-10  backdrop-blur-[2px] shadow-md shadow-[#efefef] border-y border-gray-200  rounded-full overflow-hidden cursor-pointer`}
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0, width: open ? 190 : 40 }}
        transition={{
          x: {
            type: "spring",
            stiffness: 300,
            damping: 50,
            mass: 0.7,
            delay: 0.8,
          },
          opacity: { duration: 0.4, delay: 0.2 },
          width: { type: "spring", stiffness: 260, damping: 26 },
        }}
        whileTap={{ scale: 0.9 }}
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
                  className={`w-5 h-5 rounded-full transition-all duration-200 cursor-pointer outline-none  ${
                    f.color
                  } ${filterIdx === i ? "ring-2 ring-indigo-600 " : ""}`}
                  aria-label={f.name}
                  onClick={(e) => {
                    e.stopPropagation();
                    setFilterIdx(i);
                    open(false);
                  }}
                />
              ))}
            </motion.div>
          )}
        </motion.div>
      </motion.div>
      {filterIdx !== 0 && (
        <div
          className={`pointer-events-none fixed inset-0 z-75 transition-all duration-300 ${filters[filterIdx].className}`}
        ></div>
      )}
    </div>
  );
};

export default Filters;
