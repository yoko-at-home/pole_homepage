import type { NextPage } from "next";
import { NavLink } from "src/component/Button";
import { PageSEO } from "src/component/SEO";
import { siteMetadata } from "src/data/siteMetaData";
import { FluidLayout } from "src/layout";
import { audioMenu } from "src/layout/NaviAudio";

const Navi = () => {
  return (
    <div className="flex flex-col gap-10">
      <nav className="grid items-start gap-2 sm:grid-cols-2 md:grid-cols-3">
        {audioMenu.map(({ href, label }) => {
          return (
            <NavLink key={href} href={href} activeClassName="z-50 bg-primary text-white hover:text-white font-bold">
              <div className=" items-center rounded border-4 border-primary/30  text-center text-lg leading-loose tracking-tighter hover:text-primary focus:bg-primary/30 sm:text-2xl">
                {label}
                <span className="text-base"> →</span>
              </div>
            </NavLink>
          );
        })}
      </nav>
      <div className="mt-8 w-full">
        <iframe
          src="https://pole-audio-archive.netlify.app/"
          className="h-[800px] w-full"
          title="Audio Archive"
          loading="lazy"
        />
      </div>
    </div>
  );
};

const Audio: NextPage = () => {
  return (
    <FluidLayout>
      <PageSEO
        title={`Audio- ${siteMetadata.title}`}
        description="コンサートに向けて音とり音源💕"
        ogType="website"
        ogImage={`${siteMetadata.siteUrl}${siteMetadata.siteLogo}`}
        siteUrl={`${siteMetadata.siteUrl}/audio`}
      />
      <Navi />
    </FluidLayout>
  );
};

export default Audio;
