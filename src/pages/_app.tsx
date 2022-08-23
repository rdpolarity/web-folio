import "@styles/globals.css";
import "antd/dist/antd.css";
import AppLayout from "@components/Layout";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { globalStore, GlobalStoreProvider } from "stores/GlobalStore";
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAWbHb0tOgKZe5dZwjjN3P3w43zfibPf_Y",
  authDomain: "aydieme-2da8c.firebaseapp.com",
  projectId: "aydieme-2da8c",
  storageBucket: "aydieme-2da8c.appspot.com",
  messagingSenderId: "356919318550",
  appId: "1:356919318550:web:bdbdf05e4273b22915bd37",
  measurementId: "G-F9MQRWECTK"
};

// Initialize Firebase
if (typeof document !== 'undefined') {
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  logEvent(analytics, 'page_view')
}

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
