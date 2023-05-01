import React from "react";
import Link from "next/link";

import SEOHead from "@/components/SEO/SEOHead";
import ExperienceBlock from "@/components/ExperienceBlock";
import SkillsBlock from "@/components/SkillsBlock";

import { SiAzuredevops, SiCplusplus, SiDocker, SiGit, SiNextdotjs, SiPython, SiReact, SiRust } from 'react-icons/si'
import { TbSql } from 'react-icons/tb'

export default function AboutPage() {

  return (
    <div className="flex justify-center">
      <div className="max-w-screen-lg">
        <SEOHead
          title="Graham Doerksen | About"
          description="Graham Doerksen Portfolio"
        />
        <div className="flex flex-col items-center justify-center p-4 m-4">
          <h1 className="text-6xl font-bold">About Me</h1>
          <p className="mt-3 text-2xl">
            I am a full stack developer with a passion for building production grade apps.
          </p>
        </div>

        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <CommunitySection />
      </div>
    </div>
  );

}

function ExperienceSection() {
  return (
    <>
      <div id="Experience" className="">

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
    </>
  )
}

function SkillsSection() {
  return (
    <>
      {/* Skills */}
      <div id="Skills" className="flex flex-col items-center justify-center py-2">
        <h1 className="text-6xl font-bold">Skills</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">

          {/* TODO col-span or row-span to make individual items different sizes */}
          {/* TODO add careertag prop to SkillsBlock */}
          {/* Perhaps split skills into languages vs tooling vs Frameworks? */}

          <SkillsBlock title="Python" icon={SiPython} colorCss="hover:text-yellow-600 dark:hover:text-yellow-600 hover:ring-yellow-600 dark:hover:ring-yellow-600" />
          <SkillsBlock title="C/C++" icon={SiCplusplus} colorCss="hover:text-blue-600 dark:hover:text-blue-400 hover:ring-blue-600 dark:hover:ring-blue-400" />
          <SkillsBlock title="Rust" icon={SiRust} colorCss="hover:text-orange-700 dark:hover:text-orange-600 hover:ring-orange-700 dark:hover:ring-orange-600"
          />
          <SkillsBlock title="SQL" icon={TbSql} colorCss="hover:text-blue-600 dark:hover:text-blue-400 hover:ring-blue-600 dark:hover:ring-blue-400" />
          <SkillsBlock title="Docker" icon={SiDocker} colorCss="hover:text-blue-600 dark:hover:text-blue-400 hover:ring-blue-600 dark:hover:ring-blue-400" />
          <SkillsBlock title="Git" icon={SiGit} colorCss="hover:text-orange-700 dark:hover:text-orange-600 hover:ring-orange-700 dark:hover:ring-orange-600" />
          <SkillsBlock title="DevOps" icon={SiAzuredevops} colorCss="hover:text-blue-600 dark:hover:text-blue-400 hover:ring-blue-600 dark:hover:ring-blue-400" />
          <SkillsBlock title="React" icon={SiReact} colorCss="hover:text-blue-600 dark:hover:text-blue-400 hover:ring-blue-600 dark:hover:ring-blue-400" />
          <SkillsBlock title="Next.js" icon={SiNextdotjs} colorCss="hover:text-purple-600 dark:hover:text-purple-400 hover:ring-purple-600 dark:hover:ring-purple-400" />
        </div>
      </div>
    </>
  )
}

function EducationSection() {
  return (
    <>
      {/* Education */}
      <div id="Education" className="flex flex-col items-center justify-center py-2">
        <h1 className="text-6xl font-bold">Education</h1>
      </div>
      <div>
        <ExperienceBlock
          title="Masters of Science in Mechanical Engineering"
          company="University of Calgary"
          date="2017 - 2021" description={[
            "GPA 3.9/4.0",
            "Founding member of the UCalgary rocket lab; Built, designed and flew three rocket vehicles",
            "Completed computational fluid dynamics simulations of incompressible confined jets",
            "Used python pandas, numpy, scipy, and matplotlib to automatically process 3D simulation data into useable research results."
            // Thesis link
          ]} />

        <ExperienceBlock
          title="Bachelors of Science in Mechanical Engineering"
          company="University of Calgary"
          date="2012 - 2017"
          description={[
            "GPA 3.7/4.0",
            "First Place Capstone Project",
            "Schulich Community Prestige Scholarship",
            "Completed a 16 month internship at a major oil and gas company",
          ]} />
      </div>
    </>
  )
}

function CommunitySection() {
  return (
    <>
      <div id="Community" className="flex flex-col items-center justify-center py-2">
        <h1 className="text-6xl font-bold">Community</h1>
      </div>
      <div>
        <ExperienceBlock
          title="PyData Calgary Organizer"
          date="2022 - Present"
          description={[
            "Organized monthly meetups for the PyData Calgary community",
            "Coordinated talks and workshops on topics such as machine learning, software development, data visualization and more!",
            "Collaborated with local businesses and universities to secure sponsorships and host events at various venues",
            "Join us on https://www.meetup.com/pydata-calgary/"
          ]} />

        <ExperienceBlock
          title="Puzzle Master"
          company="Key Clue, University of Calgary"
          date="2021 - 2022"
          description={[
            "Designed and facilitated a story-driven week-long puzzle game for engineering students to find a physical key hidden within Calgary",
            "Puzzles involve cryptography, mapping, software development and data science analysis",
            "Analagous to a cybersecurity CTF event with geocaching elements"
          ]} />

        <ExperienceBlock
          title="Mentor"
          company="SOAR, University of Calgary"
          date="2017 - 2018"
          description={[
            "Mentored 3rd and 4th year engineering students in the design and construction of a rocket vehicle",
            "Provided guidance on technical and project management issues",
          ]} />
      </div>
    </>
  )
}