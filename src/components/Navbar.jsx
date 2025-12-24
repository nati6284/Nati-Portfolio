import { useScroll } from "framer-motion";
import { div } from "framer-motion/client";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <a href="#" className="text-3xl font-bold text-white">
            Natnael
            <span className="text-blue">Abera</span>
          </a>
        </div>
        <div className="hidden md:flex space-x-10">
          <a
            href="#home"
            className="relative text-white/80 transition duration-300 hover:text-blue group "
          >
            <span>Home</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#about"
            className="relative text-white/80 transition duration-300 hover:text-blue group "
          >
            <span>About</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#skills"
            className="relative text-white/80 transition duration-300 hover:text-blue group "
          >
            <span>Skills</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#projects"
            className="relative text-white/80 transition duration-300 hover:text-blue group "
          >
            <span>Projects</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#experience"
            className="relative text-white/80 transition duration-300 hover:text-blue group "
          >
            <span>Experience</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#contact"
            className="relative text-white/80 transition duration-300 hover:text-blue group "
          >
            <span>Contact</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        {/*Mobile button */}
        <div className="md:hidden ">
          {showMenu ? (
            <FaXmark
              onClick={() => setShowMenu(!showMenu)}
              className="text-2xl cursor-pointer"
            />
          ) : (
            <FaBars
              onClick={() => setShowMenu(!showMenu)}
              className="text-2xl cursor-pointer"
            />
          )}
        </div>
      </div>

      {/*Mobile menus */}

      {showMenu && (
        <div className="md:hidden mt-4 bg-dark-300 h-screen rounded-lg p-4 flex flex-col space-y-4 text-center justify-center">
          <a
            href="#home"
            className="relative text-white/80 transition duration-300 hover:text-blue group "
          >
            <span>Home</span>
          </a>

          <a
            href="#about"
            className="relative text-white/80 transition duration-300 hover:text-blue group "
          >
            <span>About</span>
          </a>

          <a
            href="#skills"
            className="relative text-white/80 transition duration-300 hover:text-blue group "
          >
            <span>Skills</span>
          </a>

          <a
            href="#project"
            className="relative text-white/80 transition duration-300 hover:text-blue group "
          >
            <span>Projects</span>
          </a>

          <a
            href="#experience"
            className="relative text-white/80 transition duration-300 hover:text-blue group "
          >
            <span>Experience</span>
          </a>

          <a
            href="#contact"
            className="relative text-white/80 transition duration-300 hover:text-blue group "
          >
            <span>Contact</span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
