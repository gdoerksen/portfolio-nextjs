import React from "react";
import Head from "next/head";

function AboutPage() {
  return (
    <>
      <Head>
        <title>About Me</title>
        <meta name="description" content="About the Author" />
        <meta property="og:title" content="About Me" key="title" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
      </Head>

      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-6xl font-bold">About Me</h1>
        <p className="mt-3 text-2xl">
          I am a full stack web developer with a passion for learning and
          building things.
        </p>
      </div>
    </>
  );
}

export default AboutPage;