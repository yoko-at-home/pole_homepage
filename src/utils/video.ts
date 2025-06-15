export const convertToEmbedUrl = (url: string): string => {
  if (!url) return "";

  // If it's already an embed URL, return as is
  if (url.includes("youtube.com/embed/")) {
    return url;
  }

  // Handle youtu.be short URLs
  if (url.includes("youtu.be/")) {
    const videoId = url.split("youtu.be/")[1];
    return `https://www.youtube.com/embed/${videoId}`;
  }

  // Handle regular YouTube URLs
  if (url.includes("youtube.com/watch")) {
    const urlParams = new URLSearchParams(new URL(url).search);
    const videoId = urlParams.get("v");
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
  }

  // If we can't parse the URL, return the original
  return url;
};
