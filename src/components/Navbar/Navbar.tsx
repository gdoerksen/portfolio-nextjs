import Link from "next/link";
import Logo from "../Logo";

import { LinkProps } from "next/link";

import { IconContext } from "react-icons";
import { FaLinkedin, FaGithub, FaMeetup } from 'react-icons/fa'

import { NavLink } from "./NavLink";
import { ReactIconLink } from "./ReactIconLink";

export default function Navbar() {



  return (

    <header
      className="w-screen px-16 py-8 font-medium flex items-center justify-between"
    >
      <nav>
        <NavLink href="/" title="Home" className="ml-4" />
        <NavLink href="/about" title="About" className="mx-4" />
        <NavLink href="/projects" title="Projects" className="mr-4" />
      </nav>

      <Logo />

      <nav className="flex space-x-4">
        <ReactIconLink href="https://www.linkedin.com/in/grahamdoerksen/" icon={FaLinkedin} />
        <ReactIconLink href="https://github.com/gdoerksen" icon={FaGithub} />
        <ReactIconLink href="https://www.meetup.com/pydata-calgary/" icon={FaMeetup} />
      </nav>

    </header>
  );
}