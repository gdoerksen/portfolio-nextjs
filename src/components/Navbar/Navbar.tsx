import Link from "next/link";
import Logo from "../Logo";

import { useState } from "react";

import { FaLinkedin, FaGithub, FaMeetup, FaBars, FaSun, FaMoon } from 'react-icons/fa'

import { NavLink } from "./NavLink";
import { ReactIconLink } from "./ReactIconLink";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="">
      <div className="px-8 mx-auto">
        {/* instead of px-8, we can use max-w-7xl and then set a width */}
        <div className="flex justify-between py-4">

          {/* Logo and Primary */}
          <div className="flex space-x-4 items-center">

            {/* Logo */}
            <div>
              <Logo href="/" size="2em" className="w-full h-auto hover:text-primary transition-all" />
            </div>
            
            {/* Primary Nav */}
            <div className="hidden sm:flex items-center space-x-8 font-medium text-2xl">
              <NavLink href="/" title="Home" />
              <NavLink href="/about" title="About" />
              <NavLink href="/projects" title="Projects" />
            </div>
          </div>

          {/* Darkmode, Secondary Nav, Mobile Button */}
          <div className="flex space-x-8 md:space-x-12 items-center">
            
            {/* Darkmode */}
            <div>
              <ThemeIcon />
            </div>

            {/* Secondary Nav */}
            <div className="hidden md:flex items-center space-x-12">
              <ReactIconLink href="https://www.linkedin.com/in/grahamdoerksen/" icon={FaLinkedin} />
              <ReactIconLink href="https://github.com/gdoerksen" icon={FaGithub} />
              <ReactIconLink href="https://www.meetup.com/pydata-calgary/" icon={FaMeetup} />
            </div>

          {/* Mobile Button */}
          <div className="sm:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}
            className="outline-none">
              <FaBars size="30"/>
            </button>
          </div>
        </div>

        </div>
      </div>

      {/* Mobile Menu */}
      <div  
       className={isOpen ? 'sm:hidden' : 'hidden sm:hidden' } >
        <Link href="/" className="block py-2 px-4 text-md justify-end">Home</Link>
        <Link href="/about" className="block py-2 px-4 text-md ">About</Link>
        <Link href="/projects" className="block py-2 px-4 text-md ">Projects</Link>
      </div>

    </nav>

  );
}

import useDarkMode from "@/hooks/useDarkMode";

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <span onClick={handleMode}>
      {darkTheme ? (
        <FaSun size='30' className='' />
      ) : (
        <FaMoon size='30' className='' />
      )}
    </span>
  );
};