import { PageSEO } from "src/component/SEO";
import { VideoPlayer } from "src/component/VideoPlayer";
import { siteMetadata } from "src/data/siteMetaData";
import { FluidLayout } from "src/layout";
import { AudioLayout } from "src/layout";
import NaviWithinPage from "src/layout/NaviWithinPage";

const nihonKayoku = [
  {
    id: "hama-piano",
    title: "浜辺の歌　伴奏",
    href: "https://youtu.be/KS3u1MH7pug",
  },
  {
    id: "hama-sop1",
    title: "浜辺の歌　ソプラノ1",
    href: "https://youtu.be/3-ukifrHUMw",
  },
  {
    id: "hama-sop2",
    title: "浜辺の歌　ソプラノ2",
    href: "https://youtube.com/shorts/Zbkh1eE2zes",
  },
  {
    id: "hama-mezzo",
    title: "浜辺の歌　メゾソプラノ",
    href: "https://youtube.com/shorts/Dwh7bHK8cts",
  },
  {
    id: "hama-alto",
    title: "浜辺の歌　アルト",
    href: "https://youtu.be/V7WW_b_lLT0",
  },
];
const items = [
  { href: "#hama-piano", label: "浜・伴奏" },
  { href: "#hama-sop1", label: "浜・ソプ1" },
  { href: "#hama-sop2", label: "浜・ソプ2" },
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
          description="浜辺の歌 音源💕"
          ogType="website"
          ogImage={siteMetadata.ogImage}
          siteUrl={`${siteMetadata.siteUrl}/hamabe`}
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
