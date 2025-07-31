import type { NextPage } from "next";
import Link from "next/link";
import { Breadcrumb } from "src/component/Breadcrumb";
import { PageTitle } from "src/component/PageTitle";

type SitemapItem = {
  title: string;
  href: string;
  description?: string;
  children?: SitemapItem[];
};

const sitemapData: SitemapItem[] = [
  {
    title: "ホーム",
    href: "/",
    description: "ポレポーレのホームページ",
  },
  {
    title: "私たちについて",
    href: "/aboutus",
    description: "ポレポーレの活動内容やメンバー紹介",
    children: [
      {
        title: "チーム",
        href: "/aboutus#team",
        description: "ポレポーレのメンバー紹介",
      },
      {
        title: "活動履歴",
        href: "/aboutus#history",
        description: "ポレポーレの活動履歴",
      },
    ],
  },
  {
    title: "音声",
    href: "/audio",
    description: "ポレポーレの音声コンテンツ",
    children: [
      {
        title: "第4回コンサート",
        href: "/audio/4th_concert",
        description: "第4回コンサートの音声",
        children: [
          {
            title: "百恵",
            href: "/audio/4th_concert/momoe",
            description: "百恵の音声",
          },
          {
            title: "日本歌曲",
            href: "/audio/4th_concert/nihon_kakyoku",
            description: "日本歌曲の音声",
          },
        ],
      },
      {
        title: "お気に入り",
        href: "/audio/favorite",
        description: "お気に入りの音声",
      },
    ],
  },
  {
    title: "お知らせ",
    href: "/news",
    description: "ポレポーレからのお知らせ",
  },
  {
    title: "お問い合わせ",
    href: "/contact",
    description: "ポレポーレへのお問い合わせ",
  },
  {
    title: "利用規約",
    href: "/tos",
    description: "サイト利用規約",
  },
];

const SitemapItem: React.FC<{ item: SitemapItem; level?: number }> = ({ item, level = 0 }) => {
  const indentClass = level > 0 ? `ml-${level * 4}` : "";

  return (
    <div className={`${indentClass} mb-2`}>
      <Link
        href={item.href}
        className="text-blue-600 hover:text-blue-800 hover:underline"
      >
        {item.title}
      </Link>
      {item.description && (
        <p className="mt-1 text-sm text-gray-600">{item.description}</p>
      )}
      {item.children && (
        <div className="mt-2">
          {item.children.map((child, index) => {
            return (
              <SitemapItem key={`${child.href}-${index}`} item={child} level={level + 1} />
            );
          })}
        </div>
      )}
    </div>
  );
};

const Sitemap: NextPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb />
      <PageTitle>サイトマップ</PageTitle>

      <div className="mt-8 max-w-4xl">
        <div className="mb-6">
          <p className="text-gray-600">
            ポレポーレのウェブサイトの構造をご案内します。各ページへのリンクから、お探しの情報にアクセスできます。
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {sitemapData.map((item, index) => {
            return (
              <div key={`sitemap-${item.href}-${index}`} className="rounded-lg border border-gray-200 p-4">
                <SitemapItem item={item} />
              </div>
            );
          })}
        </div>

        <div className="mt-8 rounded-lg bg-gray-50 p-4">
          <h3 className="mb-2 text-lg font-semibold">サイトについて</h3>
          <p className="text-sm text-gray-600">
            このサイトはポレポーレの活動を紹介するためのウェブサイトです。
            音声コンテンツや活動履歴、メンバー紹介など、様々な情報をご覧いただけます。
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
