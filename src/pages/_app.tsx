import '@styles/globals.css'
import 'antd/dist/antd.css'
import AppLayout from '@components/Layout'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return <QueryClientProvider client={queryClient}>
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  </QueryClientProvider>
}

export default MyApp
