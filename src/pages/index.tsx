import Layout from '@/components/Layout';
import type { GetStaticProps, NextPage } from 'next';
import { Inter } from 'next/font/google'
import Image from 'next/image';
import Link from 'next/link';
import { FaComments, FaFileDownload } from 'react-icons/fa';

import profilePic from '../../public/images/profile/profile.jpg';

const inter = Inter({ subsets: ['latin'] })

const Home: NextPage = () => {

  let button_styling = "bg-dark text-light py-3 px-6 rounded-lg text-lg font-semibold hover:bg-primary transition-all" // Refactor This

  return (
    <>
      <main className='flex items-center text-dark w-full'>
        <Layout className='pt-0'>
          <div className="block sm:flex items-center justify-between w-full">
            <div className='w-1/2'>
              <Image src={profilePic} alt="Picture of the author" className='object-contain h-96 shadow-dark' />
            </div>
            
            <div className='w-1/2 p-4'>  
              <h1 className='sm:text-4xl text-2xl font-bold'>Hi, I'm <span className='text-primary'>Graham </span></h1>
              <br />
              
              <h2 className='sm:text-2xl text-lg font-bold'>I'm a <span className='text-primary'>Software Developer</span></h2>
              <br />
              
              <div className='flex items-center self-start mt-2'>
                <Link href='/sample.pdf' target={"_blank"} download="Graham-Doerksen-Resume"
                  className={button_styling}>
                  Resume <FaFileDownload className='inline-flex' />
                </Link>
                <Link href='/contact' target={"_blank"} className={"ml-4 text-lg font-semibold underline"}>
                  Contact <FaComments className='inline-flex' />
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>

  );
};

export default Home;
