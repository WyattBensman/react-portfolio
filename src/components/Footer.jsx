export function Footer() {
  return (
    <>
      <footer className="flex justify-center fixed bottom-0 left-0 right-0 py-3">
        <a
          href="https://github.com/WyattBensman"
          className="mx-2 text-blue-400 hover:text-blue-300 transition-color duration-300 ease-in-out"
        >
          <i className="fab fa-github text-4xl"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/wyatt-bensman-22840619b/"
          className="mx-2 text-blue-400 hover:text-blue-300 transition-color duration-300 ease-in-out"
        >
          <i className="fa-brands fa-linkedin text-4xl"></i>
        </a>
      </footer>
    </>
  );
}
