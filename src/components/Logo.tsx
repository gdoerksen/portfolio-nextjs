import React from 'react';
import Link from 'next/link';

import {motion} from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
    return (<div className="flex items-center justify-center mt-2">
        <MotionLink href="/"
            className='w-16 h-16 bg-dark text-light flex items-center justify-center
            rounded-full text-2xl font-bold'
            whileHover={{
                backgroundColor:["#0A4D68", "#088395", "#05BFDB", "#00FFCA", "#05BFDB", "#088395", "#0A4D68"],
                transition:{duration:1, repeat: Infinity},
            }}
            >
            GD
        </MotionLink>
    </div>);
}

export default Logo;