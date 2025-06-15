export const smoothScroll = (targetId: string) => {
  const targetElement = document.querySelector(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
};
