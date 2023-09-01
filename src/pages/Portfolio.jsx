import { Project } from "../components/Project";

export function Portfolio() {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24">
      <div className="flex flex-wrap justify-center items-center">
        <Project />
      </div>
    </div>
  );
}
