import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import type { GetStaticProps, NextPage } from 'next';
import { Inter } from 'next/font/google'
import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { FaComments, FaFileDownload } from 'react-icons/fa';

import profilePic from '../../public/images/profile/profile.jpg';

const inter = Inter({ subsets: ['latin'] })

const Home: NextPage = () => {

  return (
      <div className='flex justify-center'>
        <div className="block md:flex min-h-screen max-w-screen-lg items-center py-4">
          {/* TODO: Consider use of max-w-prose on this container */}
          {/* Use of min-h-screen helps keep the viewer focused, we should add a drop arrow*/}
          <IntroImage />
          <IntroText />
        </div>

        
      </div>
  );
};

export default Home;

let IntroImage = () => {
  return (
    <div className='md:w-1/2' >
      <Image src={profilePic} alt="Picture of the author" className='object-contain h-[30rem]' />
    </div>
  )
}

let IntroText = () => {

  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });

  let button_styling = `bg-dark text-light dark:bg-light dark:text-dark 
  py-3 px-6 rounded-lg text-lg font-semibold 
  transition-all hover:bg-primary dark:hover:bg-primary dark:hover:text-light
  outline-none ring-primary 
  focus-visible:ring-2 focus-visible:bg-light focus-visible:text-dark focus-visible:animate-bounce` // Refactor This

  return (
    <div className={`p-4 md:w-1/2 overflow-hidden`}>
      <div ref={ref} className={`duration-1000 ${inView ? 'opacity-1' : 'opacity-0 translate-x-8'} transition-all`}>
      <h1 className='sm:text-4xl text-2xl font-bold'>Hi, I&apos;m <span className='text-primary dark:text-dark_primary'>Graham </span></h1>
      {/* <AnimatedText text="This is a test" className='h-10 bg-primary text-dark'/> */}
      <br />

      <h2 className='sm:text-2xl text-lg font-bold'>I&apos;m a <span className='text-primary dark:text-dark_primary'>Software Developer</span></h2>
      <br />

      <div className='flex items-center self-start mt-2'>
        <Link href='/docs/resumes/Resume_Base.pdf' locale={false} target={"_blank"} download="Graham-Doerksen-Resume"
          className={button_styling}>
          Resume <FaFileDownload className='inline-flex' />
        </Link>
        <Link href='/contact' target={"_blank"} 
          className={"ml-4 text-lg font-semibold underline py-3 px-6 transition-all rounded-lg ring-dark dark:ring-light hover:ring-primary hover:dark:ring-dark_primary ring-2 hover:ring-4 focus-visible:animate-bounce"}>
          Contact <FaComments className='inline-flex' />
        </Link>
      </div>
      </div>
    </div>
  )

}