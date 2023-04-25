import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';

import { ThemeProvider } from 'next-themes';

import Layout from '@/components/Layout';



export default function App({ Component, pageProps }: AppProps) {

  //TODO: add a container to the main tag with max-w-screen-2xl

  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>


      <ThemeProvider disableTransitionOnChange attribute='class'>
        <Layout>
            <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}
