import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import Link from "next/link";
import type { FC } from "react";
import { siteMetadata } from "src/data/siteMetaData";

/**
 * @package
 */
export const Footer: FC = () => {
  return (
    <footer className="mt-16 bg-stone-100 py-12">
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-8 flex flex-col-reverse items-center">
          <Link
            passHref
            href="https://www.youtube.com/@%E5%A5%B3%E5%A3%B0%E5%90%88%E5%94%B1%E5%9B%A3%E3%83%9D%E3%83%AC%E3%83%9D%E3%83%BC%E3%83%AC"
            target="_blank"
          >
            <span>
              <IconBrandYoutubeFilled className="my-3 h-8 w-12 text-red-500 hover:animate-spin" />
            </span>
          </Link>
          <span className="text-clip bg-gradient-to-r from-red-500/80 to-blue-600 bg-clip-text text-xs text-transparent drop-shadow-lg">
            女声合唱団 ポレポーレ
          </span>
        </div>
        <div className="mx-5 my-8 flex justify-between space-x-2 text-sm text-gray-500 drop-shadow-lg">
          <div>{siteMetadata.author}</div>
          <div className="whitespace-nowrap">{`© ${new Date().getFullYear()}`}</div>
          <div className="whitespace-nowrap">All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
};
