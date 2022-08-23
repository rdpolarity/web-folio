import "@styles/globals.css";
import "antd/dist/antd.css";
import AppLayout from "@components/Layout";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { globalStore, GlobalStoreProvider } from "stores/GlobalStore";
import ReactGA from 'react-ga4';

const queryClient = new QueryClient();
ReactGA.initialize('G-WTM930C6WK');
if (typeof document !== 'undefined') ReactGA.send({ hitType: 'pageView', page: window.location.pathname})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStoreProvider value={globalStore}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </GlobalStoreProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
