import type { GetStaticProps } from "next";
import type { FC } from "react";
import { NewsPage } from "src/component/News";
import { type NewsItem, fetchAllNews } from "src/lib/news";

type Props = {
  items: NewsItem[];
  totalCount: number;
};

const AllNews: FC<Props> = (props) => {
  return <NewsPage currentPage={1} items={props.items} showingAll totalCount={props.totalCount} />;
};

export default AllNews;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await fetchAllNews();

  return {
    props: {
      items: data.contents ?? [],
      totalCount: data.totalCount,
    },
  };
};
