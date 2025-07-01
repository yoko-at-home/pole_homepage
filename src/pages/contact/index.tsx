/* eslint-disable @typescript-eslint/naming-convention */
import type { NextPage } from "next";
import Image from "next/image";
import { FormContact } from "src/component/Form";
import { FormContactTest } from "src/component/Form/FormContactTest";
import { PageTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FluidLayout } from "src/layout";

const Contact: NextPage = () => {
  return (
    <FluidLayout>
      <PageSEO
        title={`お問い合わせ- ${siteMetadata.title}`}
        description="お問い合わせ"
        ogType="website"
        ogImage={`${siteMetadata.siteUrl}${siteMetadata.siteLogo}`}
        siteUrl={`${siteMetadata.siteUrl}/contact`}
      />

      <PageTitle>お問い合わせ</PageTitle>
      {/* <PageSubTitle fontWeight="ordinary">お電話によるお問合せ</PageSubTitle> */}
      <div className="flex flex-row items-center">
        <Image
          className="m-3 mx-auto h-40 w-40 rounded-full"
          src="/static/images/team/watanabe.webp"
          alt="Kyoko Watanabe"
          height="90"
          width="90"
        />

        <div className="mx-5 font-bold  text-zinc-700">渡辺（代表）</div>
      </div>
      <FormContact />
      {process.env.NODE_ENV === "development" && <FormContactTest />}
    </FluidLayout>
  );
};

export default Contact;
