import Link from "next/link";
import { Pagination } from "src/component/Pagenation";
import { PageSubTitle } from "src/component/PageTitle";
import { FixedLayout } from "src/layout";

const PER_PAGE = 10;

export default function newsPageId({ news, totalCount }) {
  return (
    <FixedLayout>
      <PageSubTitle fontWeight="bold">ニュース一覧</PageSubTitle>
      <div className="mx-auto flex min-h-full flex-col justify-between">
        <div className="mx-1 mt-10 sm:mx-auto">
          <ul>
            {news.map((news) => {
              return (
                <li key={news.id}>
                  {!news.body ? (
                    <div className="flex flex-col items-start">
                      <Link href={`/news/${news.id}`} passHref>
                        <span className="text-clip p-1 text-blue-400 hover:bg-gray-300 hover:text-blue-900">
                          {news.title}
                        </span>
                      </Link>
                    </div>
                  ) : (
                    <div>
                      <div className="p-1">{news.title}</div>
                      <div className="flex items-end justify-between">
                        <Link href={`/news/${news.id}`} passHref>
                          <span className="whitespace-nowrap p-1 text-blue-400 hover:bg-gray-300 hover:text-blue-900">
                            詳細
                          </span>
                        </Link>
                      </div>
                    </div>
                  )}
                  <hr />
                </li>
              );
            })}
          </ul>
        </div>
        <Pagination totalCount={totalCount} />
      </div>
    </FixedLayout>
  );
}

// 動的なページを作成
export const getStaticPaths = async () => {
  const key = {
    headers: { "X-MICROCMS-API-KEY": process.env.API_KEY },
  };

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}news`, key);

  const repos = await res.json();

  const range = (start, end) => {
    return [...Array(end - start + 1)].map((_, i) => {
      return start + i;
    });
  };

  const paths = range(1, Math.ceil(repos.totalCount / PER_PAGE)).map((repo) => {
    return `/news/page/${repo}`;
  });

  return { paths, fallback: false };
};

// データを取得
export const getStaticProps = async (context) => {
  const id = context.params.id;

  const key = {
    headers: { "X-MICROCMS-API-KEY": process.env.API_KEY },
  };

  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}news?offset=${(id - 1) * 10}&limit=10`, key)
    .then((res) => {
      return res.json();
    })
    .catch(() => {
      return null;
    });

  return {
    props: {
      news: data.contents,
      totalCount: data.totalCount,
    },
  };
};
