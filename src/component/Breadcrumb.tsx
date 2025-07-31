import Link from "next/link";
import { useRouter } from "next/router";
import type { FC } from "react";
import { ChevronRight, Home } from "tabler-icons-react";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items?: BreadcrumbItem[];
  showHome?: boolean;
};

export const Breadcrumb: FC<BreadcrumbProps> = ({ items = [], showHome = true }) => {
  const router = useRouter();

  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = router.asPath.split("/").filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [];

    if (showHome) {
      breadcrumbs.push({ label: "ホーム", href: "/" });
    }

    let currentPath = "";
    pathSegments.forEach((segment, _index) => {
      currentPath += `/${segment}`;

      // 日本語のページ名を適切に表示
      const label = getPageLabel(segment, _index);

      breadcrumbs.push({
        label,
        href: _index === pathSegments.length - 1 ? undefined : currentPath,
      });
    });

    return breadcrumbs;
  };

  const getPageLabel = (segment: string, _index: number): string => {
    const pageLabels: Record<string, string> = {
      aboutus: "私たちについて",
      contact: "お問い合わせ",
      audio: "音声",
      news: "お知らせ",
      tos: "利用規約",
      success: "送信完了",
      "4th_concert": "第4回コンサート",
      momoe: "百恵",
      nihon_kakyoku: "日本歌曲",
    };

    return pageLabels[segment] || segment;
  };

  const breadcrumbItems = items.length > 0 ? items : generateBreadcrumbs();

  if (breadcrumbItems.length <= 1) {
    return null;
  }

  return (
    <nav className="mb-4 flex items-center space-x-1 text-sm text-gray-600" aria-label="パンくずリスト">
      {breadcrumbItems.map((item, index) => {
        return (
          <div key={`breadcrumb-${item.label}-${index}`} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="mx-1 h-4 w-4 text-gray-400" aria-hidden="true" />
            )}
            {item.href ? (
              <Link
                href={item.href}
                className="flex items-center hover:text-blue-600 hover:underline"
              >
                {index === 0 && <Home className="mr-1 h-4 w-4" />}
                {item.label}
              </Link>
            ) : (
              <span className="flex items-center text-gray-900" aria-current="page">
                {index === 0 && <Home className="mr-1 h-4 w-4" />}
                {item.label}
              </span>
            )}
          </div>
        );
      })}
    </nav>
  );
};
