import Link from "next/link";
import Logo from "./Logo";

import { LinkProps } from "next/link";

import { IconContext } from "react-icons";
import { RxLinkedinLogo, RxGithubLogo } from 'react-icons/rx'

import { title } from "process";
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
    className: "rounded-full bg-light hover:bg-sky-300 ease duration-300 "
  };

  return (


    <header
      className="w-full px-32 py-8 font-medium flex items-center justify-between"
    >
      <nav>
        <QuickLink href="/" title="Home" className="mx-4" />
        <QuickLink href="/about" title="About" className="mx-4" />
        <QuickLink href="/projects" title="Projects" className="mx-4" />
      </nav>

      <Logo />

      <nav>
        <Link href="https://www.linkedin.com/in/grahamdoerksen/" target={"_blank"}>
          <IconContext.Provider value={iconStyle}>
            <RxLinkedinLogo/>
          </IconContext.Provider>
        </Link>
        <Link href="https://github.com/gdoerksen" target={"_blank"}>
          <IconContext.Provider value={iconStyle}>
            <RxGithubLogo />
          </IconContext.Provider>
        </Link>
      </nav>

      {/* <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div> */}

    </header>
  );
}