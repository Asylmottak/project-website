import Document, { Html, Head, Main, NextScript } from "next/document";

/**
 * Overrides NextJS document component
 * This is used to add extre content such as fonts, styles, etc
 */
class MyDocument extends Document {
  /**
   * Renders document
   * @return {JSX.Element} - The JSX code for document component
   */
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href={`https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap`}
            rel="stylesheet"
          />
          <link
            href={`https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap`}
            rel="stylesheet"
          />
          <link
            href={`https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500&family=Source+Code+Pro:wght@200&display=swap`}
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
