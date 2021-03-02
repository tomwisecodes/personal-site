import "../assets/css/main.css";
import "../assets/css/webfonts.css";

// import App from 'next/app'
import Head from "next/head";

function WiseyBoyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Tom Wise Designs</title>
      </Head>
      <Component {...pageProps} />
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