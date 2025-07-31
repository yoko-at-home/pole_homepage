import { PageSEO } from "src/component/SEO";
import { VideoPlayer } from "src/component/VideoPlayer";
import { siteMetadata } from "src/data/siteMetaData";
import { FluidLayout } from "src/layout";
import { AudioLayout } from "src/layout";
import NaviWithinPage from "src/layout/NaviWithinPage";

const momoeSongs = [
  {
    id: "iihi-sop",
    title: "いい日旅立ち　ソプラノ",
    href: "https://youtu.be/Jn1pfDyGpvo",
  },
  {
    id: "iihi-mezzo",
    title: "いい日旅立ち　メゾソプラノ",
    href: "https://youtu.be/uMSi975uUL4",
  },
  {
    id: "iihi-alto",
    title: "いい日旅立ち　アルト",
    href: "https://youtu.be/qqkWGBAwmxk",
  },
];

const items = [
  { href: "#iihi-sop", label: "旅・ソプ" },
  { href: "#iihi-mezzo", label: "旅・メゾ" },
  { href: "#iihi-alto", label: "旅・アルト" },
  { href: "#audio-top", label: "↑トップへ↑" },
];

const MomoePage = () => {
  return (
    <FluidLayout>
      <AudioLayout>
        <PageSEO
          title={`Audio- ${siteMetadata.title}`}
          description="山口百恵シリーズ 音源💕"
          ogType="website"
          ogImage={`${siteMetadata.siteUrl}${siteMetadata.siteLogo}`}
          siteUrl={`${siteMetadata.siteUrl}/momoe`}
        />
        <div className="flex w-full flex-col items-center gap-8">
          {momoeSongs.map((song) => {
            return (
              <VideoPlayer
                key={song.title}
                title={song.title}
                id={song.id}
                url={song.href}
                height="80vh"
                width="80vw"
              />
            );
          })}
        </div>
      </AudioLayout>
      <NaviWithinPage items={items} />
    </FluidLayout>
  );
};

export default MomoePage;
