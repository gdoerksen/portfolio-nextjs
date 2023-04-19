import Link from "next/link"

import { IconContext } from "react-icons";
import { FaLinkedin, FaGithub, FaMeetup } from 'react-icons/fa'
import { IconType } from "react-icons/lib";

type ReactIconLinkProps = {
  href: string;
  icon: IconType;
};

export function ReactIconLink(obj: ReactIconLinkProps): JSX.Element {
  let iconStyle = {
    size: "2em",
    className: "w-full h-auto text-dark opacity-25 hover:opacity-100 hover:text-primary transition-all cursor-pointer"
  };

  return (
    <Link href={obj.href} target={"_blank"}>
      <IconContext.Provider value={iconStyle}>
        <obj.icon />
      </IconContext.Provider>
    </Link>
  );
}



// "https://www.linkedin.com/in/grahamdoerksen/"