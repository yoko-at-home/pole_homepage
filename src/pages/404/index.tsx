/* eslint-disable @next/next/no-img-element */
import Lottie from "lottie-react";
import type { NextPage } from "next";
import Link from "next/link";
import { Button } from "src/component/Button";
import { PageTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FluidLayout } from "src/layout";

import userAnimationIcon from "./84048-404-page-not-found.json";

const Custom404: NextPage = () => {
  return (
    <FluidLayout>
      <PageSEO
        title={`Page Not Found- ${siteMetadata.title}`}
        description="Page Not Found"
        ogType="website"
        ogImage={siteMetadata.siteUrl + siteMetadata.siteLogo}
        siteUrl={siteMetadata.siteUrl}
      />
      <div className="flex justify-center">
        <div className="absolute z-50">
          <PageTitle>ページが見つかりません</PageTitle>
          <div className="hidden sm:block">
            <div className="container rounded bg-black/50 p-3 text-sm text-gray-200 sm:text-lg">
              お探しのページが見つかりません。
              <br />
              <Link href="/contact" className="font-bold text-yellow-400">
                コンタクトページ
              </Link>
              よりお問い合わせください。
            </div>
          </div>
        </div>
        <Lottie animationData={userAnimationIcon} autoPlay={true} />
      </div>
      <div className="mt-12 flex justify-center">
        <Button onClick="Return">Return</Button>
      </div>
    </FluidLayout>
  );
};

export default Custom404;
