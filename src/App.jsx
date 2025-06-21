import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaBehance,
  FaPalette,
  FaArrowRight,
} from "react-icons/fa";
import { HiChevronRight } from "react-icons/hi";
import BlurText from "./components/BlurText";
import Threads from "./components/Threads";
import Filters from "./components/Filters";
import Grid from "./Grid";

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

const App = () => {
  return (
    <motion.div
      className="relative w-full h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <Filters />
      <Grid />
      <div className="relative dvh items-center justify-center overflow-hidden font-grotesk flex flex-col">
        <main className="flex items-center justify-center  relative w-full">
          <motion.div
            className="relative z-10 w-full flex flex-col items-center px-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="w-full flex flex-col items-center text-center font-extralight font-sans tracking-tight leading-tight text-gray-900">
              <motion.span
                className="block text-4xl font-light mb-3 w-full"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                custom={1}
              >
                <BlurText
                  text="Hi there, I'm Vivek"
                  delay={200}
                  animateBy="words"
                  direction="top"
                  className="text-3xl text-center mb-2 w-full justify-center"
                />
              </motion.span>
              <motion.span
                className="block md:text-2xl text-xl text-center leading-tight"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                custom={2}
              >
                Bridging design and code as a UI/UX designer turned developer,
                <br></br> I craft seamless user experiences with clean,
                functional code.
              </motion.span>
            </h1>
            <div className="flex justify-start">
              <motion.div
                className="flex flex-row  gap-4 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
              >
                <a
                  href="https://github.com/bvvivek6"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="hover:opacity-80"
                >
                  <FaGithub
                    size={26}
                    className="text-gray-500 hover:text-black transition"
                  />
                </a>
                <a
                  href="https://www.behance.net/vivekbv2"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Behance"
                  className="hover:opacity-80"
                >
                  <FaBehance
                    size={26}
                    className="text-gray-500 hover:text-blue-500 transition"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/vivekbv2406"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hover:opacity-80"
                >
                  <FaLinkedin
                    size={26}
                    className="text-gray-500 hover:text-blue-700 transition"
                  />
                </a>
                <a
                  href="https://instagram.com/vivekbv__"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:opacity-80"
                >
                  <FaInstagram
                    size={26}
                    className="text-gray-500 hover:text-pink-600 transition"
                  />
                </a>
              </motion.div>
            </div>
          </motion.div>
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
      </div>
    </motion.div>
  );
};

export default App;
