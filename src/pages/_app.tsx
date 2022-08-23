import "@styles/globals.css";
import "antd/dist/antd.css";
import AppLayout from "@components/Layout";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { globalStore, GlobalStoreProvider } from "stores/GlobalStore";
import { useEffect } from "react";
import ReactGA from 'react-ga';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  
  useEffect(() => {
    ReactGA.initialize('G-WTM930C6WK');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])
  
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
