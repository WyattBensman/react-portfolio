import { Link, useLocation } from "react-router-dom";

export function Navigation({ name }) {
  const currentPage = useLocation().pathname;

  return (
    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
      <li className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0">
        <Link
          to="/"
          className={
            currentPage === "/"
              ? "text-blue-400 md:hover:text-blue-500 transition-color duration-300 ease-in-out"
              : "text-gray-900 md:hover:text-blue-400 transition-color duration-300 ease-in-out"
          }
        >
          Home
        </Link>
      </li>
      <li className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0">
        <Link
          to="/Contact"
          className={
            currentPage === "/Contact"
              ? "text-blue-400 transition-color duration-200 ease-in-out"
              : "text-gray-900 md:hover:text-blue-400 transition-color duration-200 ease-in-out"
          }
        >
          Contact
        </Link>
      </li>
      <li className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0">
        <Link
          to="/Portfolio"
          className={
            currentPage === "/Portfolio"
              ? "text-blue-400 transition-color duration-200 ease-in-out"
              : "text-gray-900 md:hover:text-blue-400 transition-color duration-200 ease-in-out"
          }
        >
          Portfolio
        </Link>
      </li>
      <li className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0">
        <Link
          to="/Resume"
          className={
            currentPage === "/Resume"
              ? "text-blue-400 transition-color duration-200 ease-in-out"
              : "text-gray-900 md:hover:text-blue-400 transition-color duration-200 ease-in-out"
          }
        >
          Resume
        </Link>
      </li>
    </ul>
  );
}

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"
          className={currentPage === "/" ? "nav-link active" : "nav-link"}
        >
          About Me
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/About"
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === "/About" ? "nav-link active" : "nav-link"}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Blog"
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === "/Blog" ? "nav-link active" : "nav-link"}
        >
          Blog
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={
            currentPage === "/Contact" ? "nav-link active" : "nav-link"
          }
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;

{
  /*         <a
          href="#"
          className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
        >
          {name}
        </a> */
}
