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
  const paths = Array.from({ length: totalPages }, (_, index) => {
    return `/news/page/${index + 1}`;
  });

  return { fallback: false, paths };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const currentPage = Number(context.params?.id);

  if (!Number.isInteger(currentPage) || currentPage < 1) {
    return { notFound: true };
  }

  if (currentPage === 1) {
    return {
      redirect: {
        destination: "/news",
        permanent: false,
      },
    };
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
