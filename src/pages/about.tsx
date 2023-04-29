import React from "react";
import Head from "next/head";

import SEOHead from "@/components/SEO/SEOHead";
import ExperienceBlock from "@/components/ExperienceBlock";
import SkillsBlock from "@/components/SkillsBlock";

import { SiAzuredevops, SiCplusplus, SiDocker, SiGit, SiNextdotjs, SiPython, SiReact, SiRust } from 'react-icons/si'
import {TbSql} from 'react-icons/tb'

function AboutPage() {

  return (
    <>
      <SEOHead
        title="Graham Doerksen | About"
        description="Graham Doerksen Portfolio"
      />

      {/* Software Experience */}
      <div>
        <div className="flex flex-col items-center justify-center py-2">
          <h1 className="text-6xl font-bold">About Me</h1>
          <p className="mt-3 text-2xl">
            I am a full stack developer with a passion for building production grade apps.
          </p>
        </div>

        <ExperienceBlock
          title="Software Developer"
          company="Attabotics"
          date="December 2022 - Present"
          description={[
            "Implemented cloud-scaled, fully automated integration testing of robot application layer code (DevOps/Docker)",
            "Wrote multithreaded python application to simulate real world inputs into robot application layer C++/C code",
            "Increased the speed of the development and test loop",
            "Created a python library for test engineering group to automate robotic hardware testing"
          ]} />

        <ExperienceBlock
          title="Machine Learning Developer"
          company="Attabotics"
          date="August 2022 – December 2022"
          description={[
            "Applied multi-model approach to optimize batch product ordering on a 3D robotic logistics system resulting in average 30% increase in product throughput",
            "Built Azure pipelines to automate data collection and model retraining, including automated regression test framework on model outputs"
          ]} />

        <ExperienceBlock
          title="Robotics Developer"
          company="Attabotics"
          date="May 2021 – August 2022"
          description={[
            "Lead Developer Robot IP Command and Control initiative: Implemented TCP/IP networking stack on robotic firmware for Wi-Fi, LTE and 5G connections which increase product reliability, security and global market access (C/C++/SQL)",
            "Implemented automated regression test framework of production code (C/C++/googletest)",
            "Consistently provided engaging product demos to clients and investors, leading to multiple million dollar plus contracts",
            "Designed and built a technology demonstration for the Microsoft Industry Experience Center",
            "Python, SQL, C, C++, C#, DevOps, Github"
          ]} />
      </div>

      {/* Skills */}
      <div className="flex flex-col items-center justify-center py-2">
        <h1 className="text-6xl font-bold">Skills</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">

          {/* TODO col-span or row-span to make individual items different sizes */}
          {/* TODO add careertag prop to SkillsBlock */}
          {/* Perhaps split skills into languages vs tooling vs Frameworks? */}

          <SkillsBlock title="Python" icon={SiPython} />
          <SkillsBlock title="C/C++" icon={SiCplusplus} />
          <SkillsBlock title="Rust" icon={SiRust} />
          <SkillsBlock title="SQL" icon={TbSql} />
          <SkillsBlock title="Docker" icon={SiDocker} />
          <SkillsBlock title="Git" icon={SiGit} />
          <SkillsBlock title="DevOps" icon={SiAzuredevops} />
          <SkillsBlock title="React" icon={SiReact} />
          <SkillsBlock title="Next.js" icon={SiNextdotjs} />

        </div>
      </div>

      {/* Education */}
      <div>
        <div className="flex flex-col items-center justify-center py-2">
          <h1 className="text-6xl font-bold">Education</h1>
        </div>
      </div>



    </>
  );

  // <div className="grid w-full grid-cols-8 gap-16">
  // <div className="col-span-3 flex flex-col items-start justify-start">
  //   <h2 className="mb-4 text-4xl font-bold uppercase">Skills</h2>
  //   <p>
  //     I have experience with the following technologies:
  //     <ul className="list-disc list-inside">
  //       <li>React</li>
  //       <li>Next.js</li>
  //       <li>Node.js</li>
  //       <li>Express</li>
  //       <li>PostgreSQL</li>
  //       <li>GraphQL</li>
  //       <li>Prisma</li>
  //       <li>Typescript</li>
  //       </ul>
  //   </p>
  // </div>
  // </div>

}

export default AboutPage;