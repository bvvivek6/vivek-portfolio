import React from "react";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { useState } from "react";

const Island = ({ open }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  //check window size
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div>
      <motion.div
        className={`fixed top-6 left-1/2 transform -translate-x-1/2 h-10 rounded-full border-gray-200
    flex z-20 px-6 py-2 justify-center border-y backdrop-blur-[2px] shadow-md items-center shadow-[#efefef] text-[#252525] font-sans md:text-sm text-[12px] tracking-tight transition-all duration-300
    ${open && isMobile ? "bg-white/60 blur-[2px] scale-80" : "bg-transparent"}
    ${!isMobile ? "w-[55vw] sm:w-[60vw] md:w-[50vw] lg:w-[40vw]" : ""}
    `}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          className="overflow-hidden flex items-center justify-center gap-1"
          initial={{ opacity: 0, scale: 3, filter: "blur(20px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 0.3, filter: "blur(10px)" }}
          transition={{ type: "spring", stiffness: 40, damping: 10 }}
        >
          <Terminal size={12} />
          ssh -Y vivek@portfolio
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Island;
