import Link from "next/link"

import { IconContext } from "react-icons";
import { IconType } from "react-icons/lib";

type ReactIconLinkProps = {
  href: string;
  icon: IconType;
};

export function ReactIconLink(obj: ReactIconLinkProps): JSX.Element {
  let iconStyle = {
    size: "3em",
    className: "w-full h-auto opacity-25 hover:opacity-100 hover:text-primary dark:text-dark_primary transition-all"
  };

  return (
    <Link href={obj.href} target={"_blank"} className="focus-visible:animate-bounce">
      <IconContext.Provider value={iconStyle}>
        <obj.icon />
      </IconContext.Provider>
    </Link>
  );
}
