import React from 'react';
import Link from 'next/link';

import { FaRocket } from 'react-icons/fa'
import { IconContext } from "react-icons";

type LogoProps = {
    href: string;
    size : string;
    className : string;
}

const Logo = (obj: LogoProps) => {

    let iconStyle = {
        size: obj.size,
        className: obj.className
        };

    return (
        <Link href={obj.href} className="focus-visible:animate-bounce">
          <IconContext.Provider value={iconStyle}>
            <FaRocket/>
          </IconContext.Provider>
        </Link>
      );
}

export default Logo;