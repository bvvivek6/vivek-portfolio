import React from "react";
import { motion } from "framer-motion";
import Entry from "./components/Entry";
import Threads from "./components/Threads";
import Filters from "./components/Filters";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Resume from "./components/Resume";
import JumpToSection from "./components/JumpToSection";
import Grid from "./components/Grid";
import { useState } from "react";

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
  const scrollRef = React.useRef();
  const [filterIdx, setFilterIdx] = useState(0);
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const toggleMenu = () => setOpen((v) => !v);

  //check window size
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //skip to section handler
  const handleJump = (key) => {
    const idx = sections.findIndex((s) => s.key === key);
    if (idx !== -1 && scrollRef.current) {
      const scrollContainer = scrollRef.current;
      const sectionHeight = scrollContainer.offsetHeight;
      scrollContainer.scrollTo({
        top: idx * sectionHeight,
      });
    }
  };

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="relative w-full h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.div
        style={{
          position: "fixed",
          left: mouse.x - 10,
          top: mouse.y - 10,
          width: 20,
          height: 20,
          borderRadius: "50%",
          background: "#00000040",
          pointerEvents: "none",
          zIndex: 9999,
        }}
        animate={{ left: mouse.x - 15, top: mouse.y - 15 }}
        transition={{ type: "spring", stiffness: 300, damping: 40 }}
        className="hidden md:block"
      />
      <Filters
        filterIdx={filterIdx}
        setFilterIdx={setFilterIdx}
        open={open}
        toggleMenu={toggleMenu}
      />
      <JumpToSection onJump={handleJump} />
      <Grid />
      <motion.div
        className={`absolute top-6 left-1/2 transform -translate-x-1/2 h-10 rounded-full border-gray-200
    flex z-20 px-4 py-2 justify-center border-y backdrop-blur shadow-inner text-gray-900 font-sans text-sm tracking-tight transition-all duration-300
    ${open && isMobile ? "bg-white/60 blur-[2px] scale-80" : "bg-transparent"}
    ${!isMobile ? "w-[50vw] sm:w-[60vw] md:w-[50vw] lg:w-[40vw]" : ""}
    `}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          className="overflow-hidden "
          initial={{ opacity: 0, scale: 3, filter: "blur(20px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 0.3, filter: "blur(10px)" }}
          transition={{ type: "spring", stiffness: 40, damping: 10 }}
        >
          Layers. Lines. Space.
        </motion.div>
      </motion.div>

      <div className="relative dvh items-center  justify-center overflow-hidden font-grotesk flex flex-col z-0">
        <main className="flex-1 flex items-center justify-center relative w-full h-full min-h-0">
          <div
            ref={scrollRef}
            className="relative z-10 flex-1 flex flex-col items-center justify-start w-full h-full overflow-x-hidden overflow-y-auto scrollbar-hide snap-y snap-proximity scroll-smooth"
            style={{
              scrollSnapType: "y mandatory",
              WebkitOverflowScrolling: "touch",
              height: "100vh",
              minHeight: 0,
            }}
          >
            {sections.map((sectionObj) => (
              <div
                key={sectionObj.key}
                className="flex flex-col items-center justify-center w-full h-full snap-center transition-transform duration-300 p-4"
                style={{ flex: "0 0 100vh", minHeight: 0, maxHeight: "100vh" }}
              >
                {sectionObj.content}
              </div>
            ))}
          </div>
        </main>
        <div
          style={{
            width: "100vw",
            height: "700px",
            position: "absolute",
            top: 130,
          }}
        >
          <Threads
            amplitude={0.5}
            distance={0.2}
            enableMouseInteraction={true}
          />
        </div>
        <footer className="z-100">
          <div className="flex items-center justify-center w-[150px] rounded-full backdrop-blur px-4 py-2 mb-2 font-sans text-gray-700 text-xs font-light">
            <span className="text-center">
              Crafted by{" "}
              <a
                href="https://github.com/bvvivek6/vivek-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-gray-900 font-light"
              >
                &lt;/Vivek&gt;
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
