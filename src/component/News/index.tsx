import Link from "next/link";
import type { FC } from "react";
import { Pagination } from "src/component/Pagenation";
import { PageTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FluidLayout } from "src/layout";
import type { NewsItem } from "src/lib/news";

type Props = {
  currentPage: number;
  items: NewsItem[];
  showingAll?: boolean;
  totalCount: number;
};

const formatYmdSlash = (value: unknown): string => {
  const d = value instanceof Date ? value : new Date(String(value));
  if (Number.isNaN(d.getTime())) return "";
  const y = d.getFullYear();
  const m = d.getMonth() + 1;
  const day = d.getDate();
  return `${y}/${m}/${day}`;
};

export const NewsPage: FC<Props> = ({ currentPage, items, showingAll = false, totalCount }) => {
  const title = showingAll ? "ニュース一覧" : "最新情報";
  const path = showingAll ? "/news/all" : currentPage <= 1 ? "/news" : `/news/page/${currentPage}`;
  const sorted = [...items].sort((a, b) => {
    return String(b.updatedAt) > String(a.updatedAt) ? 1 : -1;
  });

  return (
    <FluidLayout>
      <PageSEO
        title={`${title} - ${siteMetadata.title}`}
        description={title}
        ogType="website"
        ogImage={siteMetadata.ogImage}
        siteUrl={`${siteMetadata.siteUrl}${path}`}
      />
      <PageTitle>
        <span className="tracking-wider">{title}</span>
      </PageTitle>
      {showingAll ? (
        <ul className="border-y border-slate-200">
          {sorted.map((item) => {
            const published = formatYmdSlash(item.publishedAt);
            const revised = formatYmdSlash(item.revisedAt);
            const updated = revised && revised !== published ? revised : "";

            return (
              <li key={item.id} className="border-b border-slate-200 last:border-b-0">
                <Link
                  href={`/news/${item.id}`}
                  className="grid grid-cols-1 gap-0.5 py-3 hover:bg-slate-50 sm:grid-cols-[6.5rem_minmax(0,1fr)_auto] sm:items-baseline sm:gap-x-4 sm:px-2"
                >
                  <span className="text-sm text-slate-500">{published}</span>
                  <span className="text-base text-slate-800 sm:text-lg">{item.title}</span>
                  {updated ? <span className="whitespace-nowrap text-xs text-slate-400">更新 {updated}</span> : null}
                </Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <ul>
          {sorted.map((item) => {
            return (
              <li key={item.id}>
                <div className="mb-10 flex flex-col rounded bg-gradient-to-r from-yellow-500/50 via-slate-500/20 to-[#4D7F1A]/30 p-8 shadow-lg">
                  <div className="mb-3 text-xl font-semibold sm:font-bold">{item.title}</div>
                  <div className="mb-3 text-xs text-slate-700/90 sm:text-sm">
                    公開：{formatYmdSlash(item.publishedAt)}
                    {formatYmdSlash(item.revisedAt) &&
                    formatYmdSlash(item.revisedAt) !== formatYmdSlash(item.publishedAt)
                      ? `（更新：${formatYmdSlash(item.revisedAt)}）`
                      : null}
                  </div>
                  <div className="flex flex-row-reverse items-center justify-between">
                    <Link href={`/news/${item.id}`} passHref>
                      <span
                        aria-label="Read more"
                        className="ml-5 animate-pulse whitespace-nowrap bg-primary p-2 font-bold text-slate-100 shadow-lg shadow-slate-100 sm:py-3 sm:px-5"
                      >
                        {item.content === undefined ? null : "詳細はこちら"}
                      </span>
                    </Link>
                    <div className="text-sm sm:text-base">{item.description}</div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <Pagination currentPage={currentPage} showingAll={showingAll} totalCount={totalCount} />
    </FluidLayout>
  );
};
