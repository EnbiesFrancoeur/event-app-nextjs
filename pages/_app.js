import Head from 'next/head'
import MainLayout from '../src/components/layouts/MainLayout'
import '../styles/globals.css'
import '../styles/general.sass'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Enbies Event App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  )
}
