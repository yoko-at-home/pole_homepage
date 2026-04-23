import { PageSEO } from "src/component/SEO";
import { VideoPlayer } from "src/component/VideoPlayer";
import { siteMetadata } from "src/data/siteMetaData";
import { FluidLayout } from "src/layout";
import { AudioLayout } from "src/layout";
import NaviWithinPage from "src/layout/NaviWithinPage";

const Hituji = [
  // {
  //   id: "hama-piano",
  //   title: "野の羊　伴奏",
  //   href: "https://youtu.be/KS3u1MH7pug",
  // },
  {
    id: "hama-sop",
    title: "野の羊　ソプラノ",
    href: "https://youtube.com/shorts/85tgzGlvoqo",
  },
  {
    id: "hama-mezzo1",
    title: "野の羊　メゾ上",
    href: "https://youtube.com/shorts/YqsTS7En1bY",
  },
  {
    id: "hama-mezzo2",
    title: "野の羊　メゾ下",
    href: "https://youtube.com/shorts/34JHDw83Bc0",
  },
  {
    id: "hama-alto1",
    title: "野の羊　アルト上",
    href: "https://youtube.com/shorts/b4GgwkpTRZU",
  },
  {
    id: "hama-alto2",
    title: "野の羊　アルト下",
    href: "https://youtube.com/shorts/WMZiJVqY3ws",
  },
];
const items = [
  // { href: "#hama-piano", label: "羊・伴奏" },
  { href: "#hama-sop", label: "羊・ソプ" },
  { href: "#hama-mezzo1", label: "羊・メゾ上" },
  { href: "#hama-mezzo2", label: "羊・メゾ下" },
  { href: "#hama-alto1", label: "羊・アルト上" },
  { href: "#hama-alto2", label: "羊・アルト下" },
  { href: "#audio-top", label: "↑トップへ↑" },
];

const HitujiPage = () => {
  return (
    <FluidLayout>
      <AudioLayout>
        <PageSEO
          title={`Audio- ${siteMetadata.title}`}
          description="野の羊 音源💕"
          ogType="website"
          ogImage={siteMetadata.ogImage}
          siteUrl={`${siteMetadata.siteUrl}/hituji`}
        />
        <div className="flex w-full flex-col items-center gap-8">
          {Hituji.map((song) => {
            return (
              <VideoPlayer
                key={song.title}
                title={song.title}
                url={song.href}
                id={song.id}
                height="80vh"
                width="80vw"
              />
            );
          })}
        </div>
        <NaviWithinPage items={items} />
      </AudioLayout>
    </FluidLayout>
  );
};

export default HitujiPage;
