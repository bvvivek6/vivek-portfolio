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
          backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 37px, #bfc2c750 37px, #bfc2c750 39px, transparent 39px, transparent 76px),
              repeating-linear-gradient(90deg, transparent, transparent 37px, #bfc2c750 37px, #bfc2c750 39px, transparent 39px, transparent 76px)
            `,
          backgroundSize: "40px 40px",
          backgroundColor: "#fff",
          pointerEvents: "none",
        }}
      ></motion.div>
    </div>
  );
};

export default Grid;
