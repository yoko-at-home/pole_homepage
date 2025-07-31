import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import type { FC } from "react";
import { siteMetadata } from "src/data/siteMetaData";

type Props = {
  title: string;
  description?: string;
  ogType: string;
  ogImage: string;
  siteUrl: string;
};

const CommonSEO: FC<Props> = ({ description, ogImage, ogType, title }) => {
  const router = useRouter();

  // 構造化データ（JSON-LD）を生成
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: title,
    description: description,
    url: `${siteMetadata.siteUrl}${router.asPath}`,
    publisher: {
      "@type": "Organization",
      name: siteMetadata.title,
      logo: {
        "@type": "ImageObject",
        url: siteMetadata.siteUrl + siteMetadata.siteLogo,
      },
    },
    image: ogImage,
    mainEntity: {
      "@type": "Organization",
      name: siteMetadata.title,
      url: siteMetadata.siteUrl,
      logo: siteMetadata.siteUrl + siteMetadata.siteLogo,
    },
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/static/favicons/favicon.ico" />
        <meta name="robots" content="follow, index" />
        <meta name="description" content={description} />
        <meta property="og:url" content={`${siteMetadata.siteUrl}${router.asPath}`} />
        <meta property="og:type" content={ogType} />
        <meta property="og:site_name" content={siteMetadata.title} />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={ogImage} key={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
      </Head>
      <Script id="structured-data" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(structuredData)}
      </Script>
    </>
  );
};

export const PageSEO: FC<Props> = ({ description, title }) => {
  const ogSiteLogo = siteMetadata.siteUrl + siteMetadata.siteLogo;

  return (
    <>
      <CommonSEO
        title={title}
        description={description}
        ogType="website"
        siteUrl={siteMetadata.siteUrl}
        ogImage={ogSiteLogo}
      />
      <link rel="icon" href="/static/favicons/favicon.ico" />
    </>
  );
};
