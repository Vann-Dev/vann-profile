import NotFound from '@/components/404'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  const statusCode = pageProps.statusCode

  return (
    <>
      {
        statusCode === 404
          ?
          <NotFound />
          :
          <Component {...pageProps} />
      }
    </>
  )
}
