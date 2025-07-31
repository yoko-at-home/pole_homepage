import Link from "next/link";
import type { CSSProperties } from "react";
import { NavLink } from "src/component/Button";

const items = [
  { href: "/", label: "Home" },
  { href: "/news", label: "News" },
  { href: "/aboutus", label: "Member" },
  { href: "/contact", label: "Contact" },
];

type Props = {
  inView: boolean;
  className?: CSSProperties;
};

const Navigation = ({ inView }: Props) => {
  return (
    <div className="sticky top-0 z-50">
      <nav
        className={
          inView
            ? "flex w-screen flex-wrap justify-center bg-[#288eba]/80 text-slate-300"
            : "top-[0%] z-50 flex w-screen flex-wrap justify-center bg-primary/40 text-slate-700 backdrop-blur"
        }
      >
        {items.map(({ href, label }) => {
          return (
            <NavLink key={href} href={href} activeClassName="z-50 bg-primary/40 text-white">
              <span className="inline-block whitespace-nowrap bg-gradient-to-r py-4 px-2 text-lg font-semibold  hover:bg-primary hover:text-slate-50 focus:from-[#6fbdd0] focus:to-[#ffd966] sm:py-4 sm:px-5 sm:text-2xl">
                {label}
              </span>
            </NavLink>
          );
        })}
        <Link href="/signin" className="z-50 bg-primary/40 text-white">
          <span className="inline-block whitespace-nowrap bg-gradient-to-r py-4 px-2 text-lg font-semibold  hover:bg-primary hover:text-slate-50 focus:from-[#6fbdd0] focus:to-[#ffd966] sm:py-4 sm:px-5 sm:text-2xl">
            Audio
          </span>
        </Link>
      </nav>
    </div>
  );
};

export default Navigation;
