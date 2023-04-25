import React from 'react'
import { Montserrat } from 'next/font/google'

import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont'
})

const Layout = ({ children }: {children: React.ReactNode}) => {
  return (
    <div className={`${montserrat.variable} font-mont w-full min-h-screen
    bg-light text-dark
     dark:bg-dark dark:text-light `}>
      
      <Navbar />
      <main>{children}</main>
      <Footer />

    </div>
  )
}

export default Layout