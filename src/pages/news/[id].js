/* eslint-disable @typescript-eslint/naming-convention*/
import parse from "html-react-parser";
import Link from "next/link";
import { useRouter } from "next/router";
import { PageSubTitle, PageTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FixedLayout } from "src/layout";
import { convertToEmbedUrl } from "src/utils/video";

import Custom404 from "../404";

const VideoEmbed = ({ title, url }) => {
  if (!url) return null;

  return (
    <div className="relative w-full pt-[56.25%]">
      <iframe
        className="absolute top-0 left-0 h-full w-full"
        src={convertToEmbedUrl(url)}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

const NewsId = (props) => {
  const router = useRouter();
  if (router.isFallback && !props.data?.id) {
    return <Custom404 />;
  }

  return (
    <FixedLayout>
      <PageSEO
        title={`${props.data.title} - News - ${siteMetadata.title}`}
        description={props.data.title}
        ogType="website"
        ogImage={siteMetadata.siteUrl + siteMetadata.siteLogo}
        siteUrl={siteMetadata.siteUrl}
      />
      <main className="break-all">
        {props.preview && <Link href="/api/clear-preview">プレビューモードを解除</Link>}
        <PageTitle fontWeight="ordinary">{props.data.title}</PageTitle>
        {!props.data.content ? (
          <div>入力がありません</div>
        ) : (
          <div className="max-w-lg">
            {parse(props.data.content)}
            {props.data.video && (
              <div className="mx-1 mt-10 sm:mx-auto">
                <PageSubTitle fontWeight="ordinary">{props.data.videotitle}</PageSubTitle>
                <VideoEmbed url={props.data.video} title={props.data.videotitle} />
              </div>
            )}
            {props.data.video2 && (
              <div className="mx-1 mt-10 sm:mx-auto">
                <PageSubTitle fontWeight="ordinary">{props.data.videotitle2 || ""}</PageSubTitle>
                <VideoEmbed url={props.data.video2} title={props.data.videotitle2 || ""} />
              </div>
            )}
          </div>
        )}
      </main>
    </FixedLayout>
  );
};

export default NewsId;

export const getStaticPaths = async () => {
  const key = {
    headers: { "X-MICROCMS-API-KEY": process.env.API_KEY },
  };

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}news`, key);
  const repos = await res.json();

  const paths = repos.contents.map((repo) => {
    return `/news/${repo.id}`;
  });
  return { paths, fallback: true };
};

export const getStaticProps = async ({ params, preview = false, previewData }) => {
  const id = params?.id;
  const draftKey = previewData?.draftKey;
  const key = {
    headers: { "X-MICROCMS-API-KEY": process.env.API_KEY },
  };

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}news/${id}?${draftKey !== undefined ? `draftKey=${draftKey}` : ""}`,
    key
  );

  if (!res.ok) {
    console.error(`Failed to fetch data: ${res.status} ${res.statusText}`);
    return {
      notFound: true,
    };
  }

  const data = await res.json().catch((error) => {
    console.error("Error parsing JSON:", error);
    return null;
  });

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: data,
      preview,
    },
    revalidate: 1,
  };
};
