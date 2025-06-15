/* eslint-disable @next/next/no-img-element */
import Lottie from "lottie-react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { PageTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FluidLayout } from "src/layout";

import userAnimationIcon from "./76242-love-letter-lottie-animation.json";

const Success: NextPage = () => {
  const router = useRouter();
  return (
    <FluidLayout>
      <PageSEO
        title={`Success- ${siteMetadata.title}`}
        description=""
        ogType="website"
        ogImage={`${siteMetadata.siteUrl}${siteMetadata.siteLogo}`}
        siteUrl={`${siteMetadata.siteUrl}/success`}
      />
      <PageTitle>{router.query.subject}</PageTitle>
      <div className="flex justify-center">
        <div className="flex">
          <Lottie animationData={userAnimationIcon} autoPlay={true} />
          <span className="origin-left rotate-45 text-xs text-gray-500 md:ml-32">
            <sup>LottieFiles by</sup>
            <br />
            <a
              href="https://lottiefiles.com/panizk.kazemi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              panizk.kazemi
            </a>
          </span>
        </div>
      </div>
      <div className="container">
        <div className="whitespace-pre-line">{router.query.text}</div>
      </div>
    </FluidLayout>
  );
};

export default Success;
