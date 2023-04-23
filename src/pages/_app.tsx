import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';

import { ThemeProvider } from 'next-themes';

import Navbar from '@/components/Navbar/Navbar'


import {Montserrat} from 'next/font/google'


const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont'
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <ThemeProvider disableTransitionOnChange attribute='class'>
     <main className={`${montserrat.variable} font-mont w-full min-h-screen
     bg-light text-dark
      dark:bg-dark dark:text-light `}>
      <Navbar />
      <Component {...pageProps} />
      </main>
      </ThemeProvider>
    </>
  )
}
