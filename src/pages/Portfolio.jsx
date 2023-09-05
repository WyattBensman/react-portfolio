import { Project } from "../components/Project";
import projectData from "../projects.json";

export default function Portfolio() {
  return (
    <div className="flex flex-wrap justify-center items-center my-5">
      {projectData.map((project) => (
        <Project key={project.index} project={project} />
      ))}
    </div>
  );
}
