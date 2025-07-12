import React from "react";
import projects from "../constants/projects";

const Projects = () => {
  return (
    <section className="flex flex-col items-center mt-38 md:mt-30 h-full w-full  font-sans">
      <div className="w-[95vw] md:w-[40vw] px-6 flex flex-col items-start space-y-2">
        <h2 className="text-2xl font-light tracking-tighter  self-center">
          My Projects
        </h2>
        <div className="max-h-[58vh] md:max-h-[60vh] overflow-y-auto w-full backdrop-blur rounded-2xl">
          {projects.map((project, idx) => (
            <div
              key={project.title + idx}
              className="flex flex-col w-full my-3 rounded-2xl border border-gray-200 "
            >
              {project.image && (
                <div className="w-full h-52 md:h-72 rounded-2xl overflow-hidden bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="flex flex-col space-y-1 w-full px-6 py-4">
                <span className="text-lg leading-tight tracking-tight font-medium text-gray-800">
                  {project.title}
                </span>
                <div className="text-xs md:text-sm  leading-tight tracking-tight text-gray-600 mt-1">
                  {project.description}
                </div>
                <div className="mt-4">
                  <strong className="block mb-1 text-xs text-gray-500">
                    Links:
                  </strong>
                  <div className="flex flex-row gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-xs"
                      >
                        GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-xs"
                      >
                        Demo
                      </a>
                    )}
                  </div>
                </div>
                <div className="mt-4">
                  <strong className="block mb-1 text-xs text-gray-500">
                    Tech Stack:
                  </strong>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="inline-block px-3 py-1 border border-gray-200  text-gray-700 rounded-full text-xs font-medium "
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
