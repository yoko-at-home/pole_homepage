import type { FC } from "react";

interface VideoPlayerProps {
  id?: string;
  title: string;
  url: string;
  height?: string;
  width?: string;
}

const convertToEmbedUrl = (url: string): string => {
  // Handle youtu.be URLs
  if (url.includes("youtu.be")) {
    const videoId = url.split("/").pop();
    return `https://www.youtube.com/embed/${videoId}`;
  }
  // Handle youtube.com URLs
  if (url.includes("youtube.com")) {
    const videoId = new URL(url).searchParams.get("v");
    return `https://www.youtube.com/embed/${videoId}`;
  }
  return url;
};

export const VideoPlayer: FC<VideoPlayerProps> = ({ height = "80vh", id, title, url, width = "100%" }) => {
  return (
    <div className="w-full" id={id || ""}>
      <h3 className="mb-4 text-center text-lg font-medium">{title}</h3>
      <div className="relative" style={{ height, width }}>
        <iframe
          title={title}
          className="absolute top-0 left-0 h-full w-full"
          src={convertToEmbedUrl(url)}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};
