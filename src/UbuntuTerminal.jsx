import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const fs = {
  "/": {
    about: `Hi there, I'm Vivek! Bridging design and code as a UI/UX designer turned developer, I craft seamless user experiences with clean, functional <code>.`,
    skills: `React, Node.js, MongoDB, Figma, Tailwind CSS, Express.js, JWT Auth, REST APIs, Git, GitHub`,
    experience: `Experience:

1. UI/UX Designer & Frontend Developer  
   Fauxigent Innovations, Mysuru (Dec 2024 – Present)  
   - Designed UIs for 15+ projects (e-commerce, dashboards, portfolios)  
   - Boosted user satisfaction by 30–50%  
   - Notable:  
     • AnandBrothers – https://anandbrothersmysuru.in/  
     • SK Jewellers – https://srikrishnaajewellers.in  
     • Smart HR Pro – https://www.smarthrpro.in  
     • Fauxigent – https://www.fauxigent.com

2. UI/UX Designer  
   Developer Student Club, JSSSTU (Oct 2024 – Present)  
   - Designed official DSC website: https://dscjssstuniv.in/  
   - Built Open Day Tour App: https://opendaytour.netlify.app/  
   - Features: responsive UI, geofencing, Mapbox GL JS, real-time nav
`,

    projects: {
      TimeCapsule: `Time Capsule\nA full-stack digital vault enabling users to securely store and schedule the delivery of text, images, and videos. Features user authentication, media uploads, timed content access, and email reminders for engagement.\nGitHub: https://github.com/bvvivek6/Time-Capsule`,
      AlgoFlow: `AlgoFlow\nAn interactive web app to visualize and learn sorting algorithms with step-by-step animations and pseudocode. Integrates dynamic resource suggestions using YouTube Data V3 API and features a modern, responsive UI.\nDemo: https://learn-algo-v1.vercel.app/\nGitHub: https://github.com/bvvivek6/Algoflow`,
      Snapsture: `Snapsture\nA fun and interactive photo booth app with real-time webcam capture, creative filters, countdown timer, collage generation, and download functionality. Features sleek animations using framer motion.\nDemo: https://snapture-me.vercel.app/\nGitHub: https://github.com/bvvivek6/Snapsture`,
    },
    resume: `Resume available on GUI. Type 'exit' to go back.`,
  },
};

const getDir = (path) => {
  const parts = path.split("/").filter(Boolean);
  let node = fs["/"];
  for (const part of parts) {
    if (node[part]) node = node[part];
    else return null;
  }
  return node;
};

const Terminal = ({ onExit }) => {
  const [cwd, setCwd] = useState("/");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([
    "Welcome to Vivek's Portfolio Terminal. Type 'help' for commands.",
  ]);
  const scrollRef = useRef(null);
  // Auto-scroll bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [output]);

  const prompt = `vivek@portfolio:${cwd === "/" ? "~" : "~" + cwd}$`;

  const runCommand = (raw) => {
    const args = raw.trim().split(/\s+/);
    const command = args[0]?.toLowerCase();
    const dir = getDir(cwd);
    let response = [];

    switch (command) {
      case "help":
        response = [
          "Available commands:",
          "  help        Show commands",
          "  ls          List contents",
          "  cd <dir>    Change directory",
          "  cat <file>  View file content",
          "  clear       Clear screen",
          "  exit        Exit terminal",
        ];
        break;

      case "ls":
        if (dir && typeof dir === "object") {
          response = Object.keys(dir);
        } else {
          response = [`ls: cannot access '${cwd}'`];
        }
        break;

      case "cd": {
        const target = args[1];
        if (!target) {
          setCwd("/");
        } else if (target === "..") {
          const parts = cwd.split("/").filter(Boolean);
          parts.pop();
          setCwd(parts.length ? "/" + parts.join("/") : "/");
        } else {
          const newPath = target.startsWith("/")
            ? target
            : `${cwd}/${target}`.replace(/\/+/g, "/");
          const nextDir = getDir(newPath);
          if (nextDir && typeof nextDir === "object") setCwd(newPath);
          else response.push(`cd: ${target}: No such directory`);
        }
        break;
      }

      case "cat": {
        const file = args[1];
        if (!file) response.push("cat: missing file name");
        else if (dir && dir[file]) {
          typeof dir[file] === "string"
            ? response.push(dir[file])
            : response.push(`cat: ${file}: is a directory`);
        } else response.push(`cat: ${file}: No such file`);
        break;
      }

      case "clear":
        setOutput(["Terminal cleared. Type 'help' for commands."]);
        return;

      case "exit":
        onExit?.();
        return;

      case "":
        response = [""];
        break;

      default:
        response = [`Command not found: ${raw}`];
    }

    setOutput((prev) => [...prev, `${prompt} ${raw}`, ...response]);
  };

  const handleInput = (e) => {
    if (e.key === "Enter") {
      runCommand(input);
      setInput("");
    }
  };

  return (
    <motion.div
      className="bg-[#000000] text-[#e0e0e0] min-h-0 h-[100dvh] p-2 flex flex-col tracking-tight text-xs md:text-lg font-mono"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div
        className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden"
        id="terminal-scroll-area"
        style={{ minHeight: 0 }}
        ref={scrollRef}
      >
        {output.map((line, i) => (
          <div key={i} className="whitespace-pre-wrap">
            {line.startsWith("vivek@portfolio") ? (
              <span className="text-[#2dc203]">{line}</span>
            ) : (
              line
            )}
          </div>
        ))}
      </div>
      <div
        className="flex items-center pt-2 bg-[#000000]"
        style={{ position: "sticky", bottom: 0, zIndex: 20 }}
      >
        <span className="text-[#2dc203]">{prompt}</span>
        <input
          className="bg-transparent outline-none text-[#e0e0e0] ml-2 flex-1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleInput}
          autoFocus
          spellCheck={false}
        />
      </div>
    </motion.div>
  );
};

export default Terminal;
