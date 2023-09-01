export default function Resume() {
  return (
    <>
      <a
        href="/images/resume-wyatt-bensman.pdf"
        download="resume-wyatt-bensman.pdf"
        className="text-xl flex justify-center my-4"
      >
        <button className="px-4 py-2 rounded text-white font-medium bg-blue-400 hover:bg-blue-500 transition-color duration-200 ease-in-out">
          Download Resume
        </button>
      </a>
      <div class="flex flex-wrap justify-center items-start mt-3">
        <div className="w-full md:w-1/2 my-5 px-4">
          <h2 className="text-xl font-medium">Technical Proficiencies</h2>
          <ul className="list-disc">
            <li className="mt-1 ml-4">
              Proficient in a range of coding languages including HTML,
              CSS/Tailwind/Bootstrap, JavaScript, and React.
            </li>
            <li className="mt-1 ml-4">
              Well-versed in Backend Development using Express, Axios MySQL, and
              MongoDB.
            </li>
            <li className="mt-1 ml-4">UI Design and prototyping using Figma</li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 my-5 px-4">
          <h2 className="text-xl font-medium">Marketing Skills</h2>
          <ul className="list-disc">
            <li className="mt-1 ml-4">
              Leveraging the power of social media platforms to build brand
              presence, engage with the target audience, and drive business
              growth.
            </li>
            <li className="mt-1 ml-4">
              Utilizing data analytics tools and techniques to collect, analyze,
              and interpret data, enabling data-driven decision-making and
              strategy refinement.
            </li>
            <li className="mt-1 ml-4">
              Assisting in the development and execution of a comprehensive
              brand strategy
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
