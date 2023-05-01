import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";

interface ExperienceBlockProps {
  title: string;
  company?: string;
  companyLogo?: string;
  date: string;
  description: Array<string> | string;
}

function ExperienceBlock({
  title,
  company,
  companyLogo,
  date,
  description,
}: ExperienceBlockProps) {

  const { ref, inView } = useInView({
    triggerOnce: false,
    rootMargin: '-100px 0px',
  });

  let companyComponent = null;
  if (company) {
    companyComponent = (
      <h3 className="mb-2 text-2xl font-semibold">{company}</h3>
    );
  }
  if (company && companyLogo) {
    companyComponent = (
      <div className="flex items-center justify-start mb-2">
        <Image src={companyLogo} alt={`${company} logo`} />
        <h3 className="mb-2 text-2xl font-semibold">{company}</h3>
      </div>
    );
  }

  let descriptionClass = "mb-2 text-lg";


  return (
    <div ref={ref} className={`duration-1000 ${inView ? 'opacity-1' : 'opacity-0 translate-x-8'} transition-all`}>
    <div className="flex flex-col items-start justify-start rounded-md ring-2 ring-dark dark:ring-light p-4 m-4">
      <h2 className="mb-4 text-4xl font-bold text-primary dark:text-dark_primary">{title}</h2>
      {companyComponent}
      <p className="mb-2 text-xl">{date}</p>

      {typeof description === "string" ? (
        <p className={descriptionClass}>{description}</p>
      ) : (
        <ul className="list-disc list-inside">
          {description.map((item) => (
            <li className={descriptionClass}>{item}</li>
          ))}
        </ul>
      )}

    </div>
    </div>
  );
}

export default ExperienceBlock;