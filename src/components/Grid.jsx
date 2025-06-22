import React from "react";
import { motion } from "framer-motion";

const Grid = () => {
  return (
    <div>
      {" "}
      <motion.div
        className="h-full w-full absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.45 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{
          maskImage: "none",
          WebkitMaskImage: "none",
          backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 37px, #bfc2c730 37px, #bfc2c730 39px, transparent 39px, transparent 76px),
              repeating-linear-gradient(90deg, transparent, transparent 37px, #bfc2c730 37px, #bfc2c730 39px, transparent 39px, transparent 76px)
            `,
          backgroundSize: "42px 44px",
          pointerEvents: "none",
        }}
      ></motion.div>
    </div>
  );
};

export default Grid;
