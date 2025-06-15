import { Card } from "src/component/AudioCard/Card";
import { PageSubTitle } from "src/component/PageTitle";

const KokoroNoHitomi = () => {
  const sop = [
    {
      title: "",
      href: "https://pole-audio-archive.netlify.app/audio/favorite/心の瞳S.mp3",
    },
  ];
  const mezzo = [
    {
      title: "",
      href: "https://pole-audio-archive.netlify.app/audio/favorite/心の瞳M.mp3",
    },
  ];
  const alto = [
    {
      title: "上",
      href: "https://pole-audio-archive.netlify.app/audio/favorite/心の瞳A上.mp3",
    },
    {
      title: "下",
      href: "https://pole-audio-archive.netlify.app/audio/favorite/心の瞳A下.mp3",
    },
  ];

  return (
    <div>
      <PageSubTitle>心の瞳</PageSubTitle>
      <div className="mb-4 grid grid-cols-1 gap-4 rounded-sm border-2 p-6  pt-6 md:grid-cols-2 lg:grid-cols-3">
        <div>Soprano</div>
        {sop.map(({ href, title }) => {
          return <Card key={href} title={title} href={href} />;
        })}
      </div>
      <div className="mb-4 grid grid-cols-1 gap-4 rounded-sm border-2 p-6  pt-6 md:grid-cols-2 lg:grid-cols-3">
        <div>Mezzo Soprano</div>
        {mezzo.map(({ href, title }) => {
          return <Card key={href} title={title} href={href} />;
        })}
      </div>
      <div className="mb-4 grid grid-cols-1 gap-4 rounded-sm border-2 p-6  pt-6 md:grid-cols-2 lg:grid-cols-3">
        <div>Alto</div>
        {alto.map(({ href, title }) => {
          return <Card key={href} title={title} href={href} />;
        })}
      </div>
    </div>
  );
};

export const Favorite = () => {
  return (
    <div className="container">
      <KokoroNoHitomi />
    </div>
  );
};
