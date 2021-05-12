import { useState, useEffect } from "react";
import "../assets/css/main.css";
import "../assets/css/webfonts.css";
import { BlobContextProvider } from "../components/Context/BlobContext";
import Logo from "../components/LogoLoad";
import Head from "next/head";
import ReactGA from "react-ga";

function WiseyBoyApp({ Component, pageProps }) {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   let timer = null;
  //   if (loading) {
  //     timer = setTimeout(function () {
  //       setLoading(false);
  //     }, 3300);
  //   }
  //   return () => clearTimeout(timer);
  // }, [loading, setLoading]);

  useEffect(() => {
    ReactGA.initialize("G-VQS4WRDWQT");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <>
      <Head>
        <title>Tom Wise Designs</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/images/favicon/site.webmanifest" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-VQS4WRDWQT"
        />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-VQS4WRDWQT"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-VQS4WRDWQT');
  `,
          }}
        />
        <link rel="stylesheet" href="https://use.typekit.net/fia8vvi.css" />
      </Head>
      <BlobContextProvider>
        <Component {...pageProps} />
      </BlobContextProvider>
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
