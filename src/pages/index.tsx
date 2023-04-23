import Layout from '@/components/Layout';
import type { GetStaticProps, NextPage } from 'next';
import { Inter } from 'next/font/google'
import Image from 'next/image';
import Link from 'next/link';
import { FaComments, FaFileDownload } from 'react-icons/fa';

import profilePic from '../../public/images/profile/profile.jpg';

const inter = Inter({ subsets: ['latin'] })

const Home: NextPage = () => {

  let button_styling = `bg-dark text-light dark:bg-light dark:text-dark 
    py-3 px-6 rounded-lg text-lg font-semibold 
    transition-all hover:bg-primary dark:hover:bg-primary dark:hover:text-light
    outline-none ring-primary 
    focus-visible:ring-2 focus-visible:bg-light focus-visible:text-dark focus-visible:animate-bounce` // Refactor This

  return (
    <Layout className='pt-0'>
          <div className="block md:flex max-w-prose items-center justify-center ">
            {/* TODO: Consider use of max-w-prose on this container */}
            <div className='md:w-1/2' >
              <Image src={profilePic} alt="Picture of the author" className='object-contain h-[30rem] ' />
            </div>
            
            <div className='p-4 md:w-1/2'>
              <h1 className='sm:text-4xl text-2xl font-bold'>Hi, I&apos;m <span className='text-primary'>Graham </span></h1>
              <br />
              
              <h2 className='sm:text-2xl text-lg font-bold'>I&apos;m a <span className='text-primary'>Software Developer</span></h2>
              <br />
              
              <div className='flex items-center self-start mt-2'>
                <Link href='/sample.pdf' target={"_blank"} download="Graham-Doerksen-Resume"
                  className={button_styling}>
                  Resume <FaFileDownload className='inline-flex' />
                </Link>
                <Link href='/contact' target={"_blank"} className={"ml-4 text-lg font-semibold underline focus-visible:animate-bounce"}>
                  Contact <FaComments className='inline-flex' />
                </Link>
              </div>
            </div>

          </div>
          </Layout>
  );
};

export default Home;
