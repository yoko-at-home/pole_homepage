import { NavLink } from "src/component/Button";

export const audioMenu = [
  { href: "/audio/4th_concert/hamabe", label: "浜辺の歌" },
  { href: "/audio/4th_concert/hituji", label: "野の羊" },
  { href: "/audio/4th_concert/momoe", label: "山口百恵シリーズ" },
  { href: "/audio/favorite", label: "Favorite songs" },
];

export const NaviAudio = () => {
  return (
    <nav className="text-slate-800">
      {audioMenu.map(({ href, label }) => {
        return (
          <NavLink key={href} href={href} activeClassName="z-50 bg-primary text-white hover:text-white font-bold">
            <span className="mt-10  rounded-t-lg border-2 border-primary/30  px-5 pt-2 text-lg hover:text-primary focus:bg-primary/30 sm:text-2xl">
              {label}
            </span>
          </NavLink>
        );
      })}
    </nav>
  );
};
