import AudioComponent from "src/component/AudioCard/AudioComponent";

type CardProp = {
  title: string;
  href: string;
};

export const Card = ({ href, title }: CardProp) => {
  return (
    <div className="mb-3 p-2">
      <div className="pt-3 pb-1">{title}</div>
      <AudioComponent src={href} />
    </div>
  );
};
