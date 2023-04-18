import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <main className='bg-black'>
        Hello World
      </main>
    </>

  );
};

export default Home;
