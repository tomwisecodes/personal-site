import { useState, useEffect } from "react";
import "../assets/css/main.css";
import "../assets/css/webfonts.css";
import { BlobContextProvider } from "../components/Context/BlobContext";
import Logo from "../components/LogoLoad";
import Head from "next/head";

function WiseyBoyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timer = null;
    if (loading) {
      timer = setTimeout(function () {
        setLoading(false);
      }, 3300);
    }
    return () => clearTimeout(timer);
  }, [loading, setLoading]);
  return (
    <>
      <Head>
        <title>Tom Wise Designs</title>
      </Head>

      {loading ? (
        <Logo />
      ) : (
        <BlobContextProvider>
          <Component {...pageProps} />
        </BlobContextProvider>
      )}
    </>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default WiseyBoyApp;
