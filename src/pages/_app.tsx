import "@styles/globals.css";
import "antd/dist/antd.css";
import AppLayout from "@components/Layout";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { globalStore, GlobalStoreProvider } from "stores/GlobalStore";
import { GoogleAnalytics } from "nextjs-google-analytics";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <GoogleAnalytics trackPageViews gaMeasurementId="G-F9MQRWECTK"/>
      <GlobalStoreProvider value={globalStore}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </GlobalStoreProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
