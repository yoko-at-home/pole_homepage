import type { GetStaticProps } from "next";
import type { FC } from "react";
import { NewsPage } from "src/component/News";
import { type NewsItem, fetchNewsPage } from "src/lib/news";

type Props = {
  items: NewsItem[];
  totalCount: number;
};

const News: FC<Props> = (props) => {
  return <NewsPage currentPage={1} items={props.items} totalCount={props.totalCount} />;
};

export default News;

export const getStaticProps: GetStaticProps<Props, never, { draftKey: string; id: string }> = async ({
  preview,
  previewData,
}) => {
  const data = await fetchNewsPage(1);
  const items = data.contents ?? [];

  if (preview && previewData?.id) {
    const draftRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}news/${previewData.id}?draftKey=${previewData.draftKey ?? ""}`,
      { headers: { "X-MICROCMS-API-KEY": process.env.API_KEY || "" } },
    );
    if (draftRes.ok) {
      items.unshift(await draftRes.json());
    }
  }

  return {
    props: {
      items,
      totalCount: data.totalCount,
    },
  };
};
