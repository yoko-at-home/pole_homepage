import type { GetStaticPaths, GetStaticProps } from "next";
import { NewsPage } from "src/component/News";
import { type NewsItem, fetchNewsPage, NEWS_PER_PAGE } from "src/lib/news";

type Props = {
  currentPage: number;
  items: NewsItem[];
  totalCount: number;
};

const NewsByPage = (props: Props) => {
  return <NewsPage currentPage={props.currentPage} items={props.items} totalCount={props.totalCount} />;
};

export default NewsByPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const first = await fetchNewsPage(1);
  const totalPages = Math.ceil(first.totalCount / NEWS_PER_PAGE);
  const paths = Array.from({ length: Math.max(0, totalPages - 1) }, (_, index) => {
    return `/news/page/${index + 2}`;
  });

  return { fallback: false, paths };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const currentPage = Number(context.params?.id);

  if (!Number.isInteger(currentPage) || currentPage < 2) {
    return { notFound: true };
  }

  const data = await fetchNewsPage(currentPage);
  const totalPages = Math.ceil(data.totalCount / NEWS_PER_PAGE);

  if (currentPage > totalPages) {
    return { notFound: true };
  }

  return {
    props: {
      currentPage,
      items: data.contents ?? [],
      totalCount: data.totalCount,
    },
  };
};
