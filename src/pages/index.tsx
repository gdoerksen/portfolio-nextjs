import type { GetStaticProps, NextPage } from 'next';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const Home: NextPage = () => {
  return (
    <>
      <main>
        Hello World
      </main>
    </>

  );
};

export default Home;
