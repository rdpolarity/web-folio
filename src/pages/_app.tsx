import "@styles/globals.css";
import "antd/dist/antd.css";
import AppLayout from "@components/Layout";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { globalStore, GlobalStoreProvider } from "stores/GlobalStore";
import Analytics from 'analytics';
import googleAnalytics from '@analytics/google-analytics';

export const analytics = Analytics({
  app: 'aydie.me',
  plugins: [
    googleAnalytics({
      measurementIds: ['G-WTM930C6WK']
    })
  ]
})

analytics.page();

const queryClient = new QueryClient();

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
