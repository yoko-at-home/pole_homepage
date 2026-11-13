import type { NextPage } from "next";
import Link from "next/link";
import { NEWS_PER_PAGE } from "src/lib/news";

type Props = {
  currentPage: number;
  showingAll?: boolean;
  totalCount: number;
};

const itemClass =
  "inline-block whitespace-nowrap rounded bg-gradient-to-r from-gray-400 to-gray-500 p-3 text-gray-100 opacity-90 sm:px-4";
const currentClass =
  "inline-block whitespace-nowrap rounded bg-gradient-to-r from-gray-600 to-gray-700 p-3 text-white sm:px-4";
const disabledClass = "inline-block cursor-not-allowed whitespace-nowrap rounded bg-gray-200 p-3 text-gray-400 sm:px-4";

const pageHref = (page: number) => {
  return page <= 1 ? "/news" : `/news/page/${page}`;
};

export const Pagination: NextPage<Props> = ({ currentPage, showingAll = false, totalCount }) => {
  const totalPages = Math.max(1, Math.ceil(totalCount / NEWS_PER_PAGE));
  const newerHref = showingAll || currentPage > 1 ? pageHref(showingAll ? 1 : currentPage - 1) : null;
  const olderHref = !showingAll && currentPage < totalPages ? pageHref(currentPage + 1) : null;

  return (
    <div className="flex justify-center pt-6 pb-8">
      <nav aria-label="ニュースのページ移動">
        <ul className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
          <li>
            {newerHref ? (
              <Link href={newerHref}>
                <span className={itemClass}>{"<< Newer"}</span>
              </Link>
            ) : (
              <span className={disabledClass} aria-disabled="true">
                {"<< Newer"}
              </span>
            )}
          </li>
          <li>
            {showingAll ? (
              <span className={currentClass} aria-current="page">
                一覧
              </span>
            ) : (
              <Link href="/news/all">
                <span className={itemClass}>一覧</span>
              </Link>
            )}
          </li>
          <li>
            {olderHref ? (
              <Link href={olderHref}>
                <span className={itemClass}>{"Older >>"}</span>
              </Link>
            ) : (
              <span className={disabledClass} aria-disabled="true">
                {"Older >>"}
              </span>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

type ArticleProps = {
  newerId: string | null;
  olderId: string | null;
};

export const ArticlePagination: NextPage<ArticleProps> = ({ newerId, olderId }) => {
  return (
    <div className="mt-28 flex justify-center pb-8">
      <nav aria-label="ニュース記事の移動">
        <ul className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
          <li>
            {newerId ? (
              <Link href={`/news/${newerId}`}>
                <span className={itemClass}>{"<< Newer"}</span>
              </Link>
            ) : (
              <span className={disabledClass} aria-disabled="true">
                {"<< Newer"}
              </span>
            )}
          </li>
          <li>
            <Link href="/news">
              <span className={itemClass}>Newsトップ</span>
            </Link>
          </li>
          <li>
            {olderId ? (
              <Link href={`/news/${olderId}`}>
                <span className={itemClass}>{"Older >>"}</span>
              </Link>
            ) : (
              <span className={disabledClass} aria-disabled="true">
                {"Older >>"}
              </span>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};
