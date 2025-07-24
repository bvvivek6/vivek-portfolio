import React from "react";
import { motion } from "framer-motion";
import Entry from "./components/Entry";
import Threads from "./components/Threads";
import Filters from "./components/Filters";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import JumpToSection from "./components/JumpToSection";
import Grid from "./components/Grid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UbuntuTerminal from "./UbuntuTerminal";
import { Terminal } from "lucide-react";
import Island from "./components/Island";

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
    key: "projects",
    content: <Projects />,
  },
  {
    key: "resume",
    content: <Resume />,
  },
];

const getCurrentPath = () => {
  return window.location.pathname;
};

const App = () => {
  const navigate = useNavigate();
  const [showTerminal, setShowTerminal] = useState(
    getCurrentPath() === "/terminal"
  );
  const scrollRef = React.useRef();
  const [filterIdx, setFilterIdx] = useState(0);
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((v) => !v);

  // Listen for browser navigation
  React.useEffect(() => {
    const onPopState = () => {
      setShowTerminal(getCurrentPath() === "/terminal");
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

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

  const handleExitTerminal = () => {
    navigate("/");
    setShowTerminal(false);
  };

  const handleGoToTerminal = () => {
    navigate("/terminal");
    setShowTerminal(true);
  };

  if (showTerminal) {
    return <UbuntuTerminal onExit={handleExitTerminal} />;
  }

  return (
    <motion.div
      className="relative w-full font h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.div
        className="fixed bottom-6 right-6 z-100"
        whileTap={{ scale: 0.9 }}
      >
        <button
          className="flex items-center h-10 w-10 justify-center backdrop-blur shadow-md shadow-[#efefef] border-y border-gray-200  rounded-full overflow-hidden cursor-pointer"
          onClick={handleGoToTerminal}
          aria-label="Open Terminal"
        >
          <Terminal size={20} className="text-[#2dc203]" />
        </button>
      </motion.div>

      <Filters
        filterIdx={filterIdx}
        setFilterIdx={setFilterIdx}
        open={open}
        toggleMenu={toggleMenu}
      />
      <JumpToSection onJump={handleJump} />
      <Grid />
      <Island open={open} key={showTerminal ? "terminal" : "gui"} />

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
          {/* <Threads
            amplitude={0.5}
            distance={0.2}
            enableMouseInteraction={true}
          /> */}
        </div>
        <footer className="z-100">
          <div className="flex flex-row items-center justify-center w-[200px] rounded-full backdrop-blur px-4 py-2 mb-2 font-sans text-gray-700 text-xs font-light">
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
