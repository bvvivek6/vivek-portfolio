import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Entry from "./components/Entry";
import Threads from "./components/Threads";
import Filters from "./components/Filters";
import Grid from "./components/Grid";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Resume from "./Resume";
import { HiChevronRight } from "react-icons/hi";

const sections = [
  {
    key: "about",
    content: <Entry />,
  },
  {
    key: "skills",
    content: <Skills />,
  },
  {
    key: "experience",
    content: <Experience />,
  },
  {
    key: "resume",
    content: <Resume />,
  },
];

const App = () => {
  const [showNotif, setShowNotif] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowNotif(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="relative w-full h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <Filters />
      {/* <Grid /> */}
      <div className="relative dvh items-center  justify-center overflow-hidden font-grotesk flex flex-col">
        {showNotif && (
          <div className="fixed top-6 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center w-[55vw] md:w-[15vw] gap-2 px-2 py-1 tracking-tight rounded-full backdrop-blur border border-gray-300   text-gray-700 text-sm font-medium  animate-fadein animate-retract">
            <HiChevronRight size={20} />
            Swipe left to know more
          </div>
        )}
        <main className="flex-1 flex items-center justify-center relative w-full h-full min-h-0">
          <div
            className="relative z-10 flex-1 flex flex-row items-center justify-start  h-full overflow-y-hidden overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            style={{
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
              width: "100vw",
              minWidth: 0,
            }}
          >
            {sections.map((sectionObj) => (
              <div
                key={sectionObj.key}
                className="flex flex-col items-center justify-center w-full h-full snap-center transition-transform duration-300 p-4"
                style={{ flex: "0 0 100vw", minWidth: 0, maxWidth: "100vw" }}
              >
                {sectionObj.content}
              </div>
            ))}
          </div>
        </main>
        <div
          style={{
            width: "100vw",
            height: "800px",
            position: "absolute",
            top: 100,
          }}
        >
          <Threads
            amplitude={0.5}
            distance={0.2}
            enableMouseInteraction={true}
          />
        </div>
        <footer>
          <div className="flex items-center justify-center w-full h-16  text-gray-700 text-xs font-light">
            <span className="text-center">
              Crafted by{" "}
              <a
                href="https://github.com/bvvivek6"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-gray-900 font-light"
              >
                Vivek
              </a>
            </span>
          </div>
        </footer>
      </div>

      <style>{`
        @keyframes fadein { from { opacity: 0; transform: translateY(-12px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadein { animation: fadein 1.2s cubic-bezier(.4,0,.2,1); }
        @keyframes retract { 0% { opacity: 1; transform: translateY(0); } 80% { opacity: 1; transform: translateY(0); } 100% { opacity: 0; transform: translateY(-32px); } }
        .animate-retract { animation: retract 3.5s cubic-bezier(.4,0,.2,1) forwards; }
      `}</style>
    </motion.div>
  );
};

export default App;
