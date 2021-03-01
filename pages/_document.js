import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { extractCritical } from "emotion-server";
import { TypographyStyle, GoogleFont } from "react-typography";
import typography from "../typography";
class WiseyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const initialProps = await Document.getInitialProps(ctx);
    const emotionStyles = extractCritical(initialProps.html);
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            <style
              data-emotion-css={emotionStyles.ids.join(" ")}
              dangerouslySetInnerHTML={{ __html: emotionStyles.css }}
            />
            {sheet.getStyleElement()}
            <meta name="critical-css" content="not-generated" />
            <TypographyStyle typography={typography} />
            <GoogleFont typography={typography} />
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default WiseyDocument;
