import React from "react";
import projects from "../constants/projects";

const Projects = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-10 h-full w-full  font-sans">
      <div className="w-[95vw] md:w-[40vw] px-7 flex flex-col items-start space-y-2">
        <h2 className="text-xl md:text-3xl font-light tracking-tighter font-mono self-center">
          :~$ ls My_Projects
        </h2>
        <div className="max-h-[52vh] md:max-h-[60vh]  overflow-y-auto w-full rounded-2xl">
          {projects.map((project, idx) => (
            <div
              key={project.title + idx}
              className="flex flex-col w-full mb-4 backdrop-blur rounded-2xl border border-gray-300"
            >
              {project.image && (
                <div className="w-full h-42 md:h-70 rounded-2xl overflow-hidden bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="flex flex-col space-y-2 w-full px-6 py-4">
                <div className="flex flex-row  items-center justify-between w-full">
                  <span className="text-lg leading-tight tracking-tight font-medium text-gray-800">
                    {project.title}
                  </span>
                  <div className="">
                    <div className="flex flex-row gap-1">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 border rounded-full px-2 py-1 justify-center flex items-center hover:underline text-xs"
                        >
                          GitHub
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline border rounded-full px-2 py-1 flex items-center justify-center text-xs"
                        >
                          Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="text-xs md:text-sm  leading-tight tracking-tight text-gray-600 mt-1">
                  {project.description}
                </div>

                <div className="mt-2">
                  <strong className="mb-1 tracking-tight text-xs text-gray-500">
                    Tech Stack:
                  </strong>
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className=" px-4 py-1.5 inline-block text-center border border-[#a7a7a7]  backdrop-blur-2xl  text-gray-700 rounded-full text-[11px] md:text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
