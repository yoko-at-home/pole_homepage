import { ConfettiSection } from "src/component/Confetti";
import { ProductMainTitle } from "src/component/PageTitle";
import { PageSEO } from "src/component/SEO";
import { Team } from "src/component/Team";
import { FluidLayout } from "src/layout";

import { siteMetadata } from "../../data/siteMetaData";

const AboutUs = () => {
  return (
    <>
      <div className="relative">
        <div className="sticky bottom-0">
          <ConfettiSection />
        </div>
      </div>
      <div
        className="absolute top-0 min-h-screen w-full bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/static/images/team/green_border.jpg')",
          backgroundSize: "100% 100%",
          padding: "0",
          margin: "0",
        }}
      >
        <FluidLayout>
          <PageSEO
            title={`団員紹介 - ${siteMetadata.title}`}
            description="ポレポーレのメンバー"
            ogType="website"
            ogImage={siteMetadata.ogImage}
            siteUrl={`${siteMetadata.siteUrl}/aboutus`}
          />

          <div className="mx-auto mt-20">
            <ProductMainTitle>メンバー紹介</ProductMainTitle>
            <div className="h-10" />
            <Team />
          </div>
        </FluidLayout>
      </div>
    </>
  );
};

export default AboutUs;
