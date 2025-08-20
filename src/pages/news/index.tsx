import axios from "axios";
import type { GetStaticProps } from "next";
import Link from "next/link";
import type { FC } from "react";
import { Pagination } from "src/component/Pagenation";
import { PageTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FluidLayout } from "src/layout";

type Props = {
  data: {
    body: HTMLAnchorElement;
    createdAt: Date;
    description: string;
    id: string;
    publishedAt: Date;
    revisedAt: Date;
    title: string;
    updatedAt: Date;
    content: HTMLAnchorElement;
  }[];
  totalCount: number;
};

const News: FC<Props> = (props) => {
  return (
    <FluidLayout>
      <PageSEO
        title={`最新情報 - ${siteMetadata.title}`}
        description="最新情報"
        ogType="website"
        ogImage={`${siteMetadata.siteUrl}${siteMetadata.siteLogo}`}
        siteUrl={`${siteMetadata.siteUrl}/news`}
      />

      <div />
      <PageTitle>
        <span className="tracking-wider ">最新情報</span>
      </PageTitle>
      {/* <h1 className="mb-3 font-semibold sm:font-bold">ポレポーレ 2021 ファーストコンサートのご報告</h1> */}
      <ul>
        {props.data
          .sort((a, b) => {
            return b.updatedAt > a.updatedAt ? 1 : -1;
          })
          .map((item) => {
            return (
              <li key={item.id}>
                <div className="mb-10 flex flex-col rounded  bg-gradient-to-r from-blue-500/50 via-slate-500/20 to-red-500/30 p-8 shadow-lg">
                  <div className="mb-3 text-xl font-semibold sm:font-bold">{item.title}</div>
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
      {props.totalCount < 10 ? null : <Pagination totalCount={props.totalCount} />}
      <PageTitle>2025年度スケジュール</PageTitle>
      <div className="mt-10">
        <img src="/static/schedule2025.png" alt="説明文" className="max-w-full h-auto rounded-lg shadow-lg" />
      </div>
    </FluidLayout>
  );
};
export default News;

export const getStaticProps: GetStaticProps<Props, never, { id: string; draftKey: string }> = async ({
  preview,
  previewData,
}): Promise<{
  props: Props;
}> => {
  const key = {
    headers: { "X-MICROCMS-API-KEY": process.env.API_KEY || "" },
  };

  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}news/?limit=6`, key);
  const data = await res.data;

  // プレビュー時は draft のコンテンツを追加
  if (preview) {
    const draftUrl = `${process.env.NEXT_PUBLIC_API_URL}news/${previewData?.id}?draftKey=${previewData?.draftKey}`;
    const draftRes = await axios.get(draftUrl, key);
    data.unshift(await draftRes.data);
  }

  return {
    props: {
      data: data.contents,
      totalCount: data.totalCount,
    },
  };
};
