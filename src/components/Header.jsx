import { useState } from "react";
import { Navigation } from "./Navigation";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav className="bg-white border-gray-200">
      <div className="px-4 py-4 sm:px-8 md:px-16 lg:px-20 xl:px-24 flex mx-auto justify-between items-center">
        {/* Title */}
        <a href="" className="flex items-center">
          <img src="/images/code-logo.png" className="h-8 mr-3" />
          <div className="font-semibold text-2xl">Wyatt Bensman</div>
        </a>
        {/* NavBar Toggle Button */}
        <button
          data-collapse-toggle="navbar-default"
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        {/* End of NavBar Toggle Button */}

        {/* NavBar List Items */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          {/* List Items Go Here */}
          <Navigation />
        </div>
      </div>
    </nav>
  );
}
