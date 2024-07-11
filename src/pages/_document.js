import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ua">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link rel="icon" href="/favicon2.ico" sizes="any" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600&display=swap"
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
