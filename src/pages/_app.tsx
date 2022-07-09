// import '@styles/globals.css'
// import 'antd/dist/antd.css'
// import AppLayout from '@components/Layout'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (<div>
    <h1>what</h1>
    <Component {...pageProps} />
  </div>)
}

export default MyApp
