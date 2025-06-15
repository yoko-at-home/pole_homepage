import type { WindowLike } from "dompurify";
import createDOMPurify from "dompurify";
import { JSDOM } from "jsdom";
import type { FC } from "react";
import ReactHtmlParser from "react-html-parser";
import { Activity } from "src/component/Activity";
import { History } from "src/component/History";
import { ProductMainTitle } from "src/component/PageTitle";
import { Place } from "src/component/Place";
import { PageSEO } from "src/component/SEO";
import { Archive, CurrentSongs } from "src/component/Songs";
import { siteMetadata } from "src/data/siteMetaData";
import { FluidLayout } from "src/layout";
import { client } from "src/lib/client";

import NaviWithinPage from "../layout/NaviWithinPage";

const isServer = typeof window === "undefined";

const DOMPurify = isServer
  ? createDOMPurify(new JSDOM("").window as unknown as WindowLike)
  : createDOMPurify(window as unknown as WindowLike);
const items = [
  { href: "#greeting", label: "ご挨拶" },
  { href: "#activity", label: "取り組み" },
  { href: "#songs", label: "現在練習中" },
  { href: "#archive", label: "過去の作品" },
  { href: "#place", label: "活動時間・拠点" },
  { href: "#history", label: "あゆみ" },
];

type Props = {
  data: {
    body?: string;
    createdAt: Date;
    description: string;
    id: string;
    publishedAt: Date;
    revisedAt: Date;
    title: string;
    updatedAt: Date;
  };
};

const Home: FC<Props> = (props) => {
  const sanitizedContent = DOMPurify.sanitize(props.data.body || "");
  const parsedContent = ReactHtmlParser(sanitizedContent);

  return (
    <div id="greeting">
      <div className="z-40 text-zinc-700">
        <FluidLayout>
          <PageSEO
            title={`ご挨拶 - ${siteMetadata.title}`}
            ogType="website"
            ogImage={siteMetadata.siteUrl + siteMetadata.siteLogo}
            siteUrl={siteMetadata.siteUrl}
          />
          <ProductMainTitle>{props.data.title}</ProductMainTitle>
          <div className="animation mb-12 leading-loose sm:mb-20">{parsedContent}</div>
          <Activity />
          <CurrentSongs />
          <Archive />
          <Place />
          <History />
          <NaviWithinPage items={items} />
        </FluidLayout>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "about",
  });

  return {
    props: {
      data,
    },
  };
};

// eslint-disable-next-line import/no-default-export
export default Home;
