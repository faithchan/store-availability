import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Static from "../components/Static";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Apple</title>
      </Head>
      <Static>
        <Component {...pageProps} />
      </Static>
    </div>
  );
}

export default MyApp;
