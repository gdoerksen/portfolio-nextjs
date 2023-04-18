import Link from "next/link";
import Logo from "./Logo";

import { LinkProps } from "next/link";

import { IconContext } from "react-icons";
import { FaLinkedin, FaGithub, FaMeetup } from 'react-icons/fa'

import { useRouter } from "next/router";

type QuickLinkProps = {
  href: string,
  title: string,
  className?: string
};

function QuickLink (obj: QuickLinkProps) {
  const router = useRouter();

  return (
    <Link href={obj.href} className={`${obj.className} relative group`}>
      {obj.title}

      {/* Add underline */}
      <span className={`h-[1px] inline-block bg-dark
       absolute left-0 bottom-0.5
       group-hover:w-full transition-[width] ease duration-300
       ${router.asPath === obj.href ? 'w-full' : 'w-0'}
       `}>
        &nbsp;
      </span>
    </Link>
  );
}

export default function Navbar() {

  let iconStyle = {
    size: "2em",
    className: "bg-light opacity-25 hover:opacity-100 ease duration-300 "
  };

  return (


    <header
      className="w-full px-16 py-8 font-medium flex items-center justify-between"
    >
      <nav>
        <QuickLink href="/" title="Home" className="ml-4" />
        <QuickLink href="/about" title="About" className="mx-4" />
        <QuickLink href="/projects" title="Projects" className="mr-4" />
      </nav>

      <Logo />

      <nav className="flex space-x-4">
        <Link href="https://www.linkedin.com/in/grahamdoerksen/" target={"_blank"}>
          <IconContext.Provider value={iconStyle}>
            <FaLinkedin/>
          </IconContext.Provider>
        </Link>
        <Link href="https://github.com/gdoerksen" target={"_blank"}>
          <IconContext.Provider value={iconStyle}>
            <FaGithub />
          </IconContext.Provider>
        </Link>
        <Link href="https://www.meetup.com/pydata-calgary/" target={"_blank"}>
          <IconContext.Provider value={iconStyle}>
            <FaMeetup />
          </IconContext.Provider>
        </Link>
      </nav>

    </header>
  );
}