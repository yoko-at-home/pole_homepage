/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { Favorite } from "src/component/Audio";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FluidLayout } from "src/layout";
// eslint-disable-next-line import-access/jsdoc
import { AudioLayout } from "src/layout";

const FavoriteSongs: NextPage = () => {
  return (
    <FluidLayout>
      <AudioLayout>
        <PageSEO
          title={`Audio- ${siteMetadata.title}`}
          description="Our Favorite Songs 音源💕"
          ogType="website"
          ogImage={`${siteMetadata.siteUrl}${siteMetadata.siteLogo}`}
          siteUrl={`${siteMetadata.siteUrl}/audio/favorite`}
        />
        <Favorite />
      </AudioLayout>
    </FluidLayout>
  );
};

export default FavoriteSongs;
