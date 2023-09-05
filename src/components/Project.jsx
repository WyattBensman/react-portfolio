import { useState } from "react";

export function Project({ project }) {
  const [hovered, setHovered] = useState(false);

  function mouseEnter() {
    setHovered(true);
  }

  function mouseExit() {
    setHovered(false);
  }

  return (
    <div
      className="w-full lg:w-2/5 md:w-1/2 px-3 my-3 flex justify-center items-center"
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseExit}
    >
      <img
        src={project.image}
        alt="Image"
        className={`w-full h-64 transition duration-300 ${
          hovered ? "filter brightness-50" : ""
        }`}
      />
      {hovered && (
        <div className="absolute text-white text-xl font-medium flex flex-col items-center">
          <a
            className="hover:text-gray-200 transition-color duration-300 ease-in-out"
            href={project.websiteLink}
          >
            {project.title}
          </a>
          <a
            href={project.gitHubLink}
            className="mx-2 mt-2 text-blue-400 hover:text-blue-300 transition-color duration-300 ease-in-out"
          >
            <i className="fab fa-github text-4xl"></i>
          </a>
        </div>
      )}
    </div>
  );
}
