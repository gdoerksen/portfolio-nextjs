import React from "react";

import { IconType } from "react-icons";
import { useInView } from "react-intersection-observer";

interface SkillsBlockProps {
  title: string;
  icon: IconType;
  colorCss?: string;
  careertag?: Array<string>;
}

function SkillsBlock({ title, icon, colorCss }: SkillsBlockProps) {

  const { ref, inView } = useInView({
    triggerOnce: false,
    rootMargin: '-100px 0px',
  });

  let defaultHovorColors = "hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark"
  let hoverColor = colorCss ? colorCss : defaultHovorColors

  return (
    <div ref={ref} className={`duration-1000 ${inView ? 'opacity-1' : 'opacity-0 translate-x-8'} transition-all`}> 
    <div className={`flex items-center justify-left rounded-md ring-2 ring-dark dark:ring-light p-4 m-4 transition-all ${hoverColor}`}>
      {icon({ size: "5em" })}
      <div className="flex-1 justify-center text-center">
        <h2 className="text-4xl font-bold ml-2">{title}</h2>
      </div>
      </div>
    </div>
  );
}

export default SkillsBlock;