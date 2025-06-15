/* eslint-disable @next/next/no-img-element */
import { PageSEO } from "src/component/SEO";
import { VideoPlayer } from "src/component/VideoPlayer";
import { siteMetadata } from "src/data/siteMetaData";
import { FluidLayout } from "src/layout";
import { AudioLayout } from "src/layout";
import NaviWithinPage from "src/layout/NaviWithinPage";

const nihonKayoku = [
  {
    id: "hama-sop",
    title: "浜辺の歌　ソプラノ",
    href: "https://youtu.be/9BdLjIJejfw",
  },
  {
    id: "hama-mezzo",
    title: "浜辺の歌　メゾソプラノ",
    href: "https://youtu.be/RcmTnfZT-W0",
  },
  {
    id: "hama-alto",
    title: "浜辺の歌　アルト",
    href: "https://youtu.be/1UYBTrctVgk",
  },
];
const items = [
  { href: "#hama-sop", label: "浜・ソプ" },
  { href: "#hama-mezzo", label: "浜・メゾ" },
  { href: "#hama-alto", label: "浜・アルト" },
  { href: "#audio-top", label: "↑トップへ↑" },
];

const NihonKakyokuPage = () => {
  return (
    <FluidLayout>
      <AudioLayout>
        <PageSEO
          title={`Audio- ${siteMetadata.title}`}
          description="日本抒情歌曲 音源💕"
          ogType="website"
          ogImage={`${siteMetadata.siteUrl}${siteMetadata.siteLogo}`}
          siteUrl={`${siteMetadata.siteUrl}/nihon_kakyoku`}
        />
        <div className="flex w-full flex-col items-center gap-8">
          {nihonKayoku.map((song) => {
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

export default NihonKakyokuPage;
