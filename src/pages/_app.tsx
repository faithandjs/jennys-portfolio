import '~/styles/index.scss'

import '@mantine/core/styles.css'
import '@mantine/carousel/styles.css'
import '@mantine/dates/styles.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import { MantineProvider } from '@mantine/core'
import Layout from '~/components/layout'
import { usePathname } from 'next/navigation'

export interface SharedPageProps {
  draftMode: boolean
  token: string
}

export default function App({
  Component,
  pageProps,
}: AppProps<SharedPageProps>) {
  const pathname = usePathname()
  const paths = ['/', '/listings']

  return (
    <>
      <Head>
        <title>Zico Apartments</title>
        <meta name="description" content=" " />
      </Head>
      <MantineProvider>
        {paths.includes(pathname) ? (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        ) : (
          <Component {...pageProps} />
        )}
      </MantineProvider>
    </>
  )
}
