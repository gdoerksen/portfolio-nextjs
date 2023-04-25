import React from "react";

// get year 

const Footer = () => {

const year = new Date().getFullYear();

  return (
    <footer className="w-full h-10 md:h-20 bg-dark dark:bg-light text-light dark:text-dark flex items-center justify-center
    ">
      <p className="">© {year} Graham Doerksen</p>
    </footer>
  );
};

export default Footer;

