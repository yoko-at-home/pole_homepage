import { Head, Html, Main, NextScript } from "next/document";
import { siteMetadata } from "src/data/siteMetaData";

const MyDocument = () => {
  return (
    <Html lang="ja-JP" dir="ltr">
      <Head>
        <link rel="canonical" href="https://polepole.netlify.app/" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/icon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/icon-16x16.png" />
        <link rel="manifest" href="/static/favicons/manifest.json" crossOrigin="use-credentials" />
        {/* <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#8aba28 /> */}
        {/* windows */}
        <meta name="msapplication-square70x70logo" content="/static/favicons/site-tile-70x70.png" />
        <meta name="msapplication-square150x150logo" content="/static/favicons/site-tile-150x150.png" />
        <meta name="msapplication-wide310x150logo" content="/static/favicons/site-tile-310x150.png" />
        <meta name="msapplication-square310x310logo" content="/static/favicons/site-tile-310x310.png" />
        <meta name="msapplication-TileColor" content="#f5f5f5" />
        {/* safari */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#f5f5f5" />
        <meta name="apple-mobile-web-app-title" content={siteMetadata.title} />
        <link rel="apple-touch-icon" sizes="180x180" href="/static/favicons/apple-touch-icon-180x180.png" />
        {/* 一般 */}
        <meta name="application-name" content={siteMetadata.title} />
        <meta name="theme-color" content="#60c1eb" />
        <link rel="icon" sizes="192x192" href="/static/favicons/icon-192x192.png" />
        <link rel="icon" href="/static/favicons/icon-36x36.png" />
        <meta name="twitter:title" content={siteMetadata.description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yokoiwasaki6" />
        <meta name="twitter:image" content={siteMetadata.ogImage} />
        <meta name="google-site-verification" content="AKf1X8ROgo7EJjsrdRCqxRwbavb4Sa_v_O_wqIT2T5I" />
        <meta property="og:title" content={siteMetadata.title} />
        <meta property="og:description" content={siteMetadata.description} />
        <meta property="og:image" content={siteMetadata.ogImage} />
        <meta property="og:url" content="https://polepole.netlify.app/" />
        <meta property="og:type" content="website" />

        {/* <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials" /> */}
        {/* <link href="https://fonts.googleapis.com/css2?family=Zen+Old+Mincho:wght@900&display=swap" rel="stylesheet" /> */}
        <link href="https://fonts.googleapis.com/css2?family=Yuji+Syuku&display=swap" rel="stylesheet" />
      </Head>
      <body className="bg-white antialiased">
        <Main />
        <div id="root" />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
