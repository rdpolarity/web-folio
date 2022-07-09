import '@styles/globals.css'
import 'antd/dist/antd.css'
import AppLayout from '@components/Layout'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (<AppLayout>
    <Component {...pageProps} />
  </AppLayout>)
}

export default MyApp
