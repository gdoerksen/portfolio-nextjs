import React from "react";

// get year 

const Footer = () => {

const year = new Date().getFullYear();

  return (
    <footer className="w-full h-10 md:h-20 px-8 bg-dark dark:bg-light text-light dark:text-dark flex items-center justify-between
    ">
      <div>
        <span className=""> &copy; {year} Graham Doerksen</span>
      </div>
      <div>
        <span> Built with Next.JS and Typescript </span>
      </div>
    </footer>
  );
};

export default Footer;

