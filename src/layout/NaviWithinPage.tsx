import type { FC } from "react";
import { smoothScroll } from "src/component/SmoothScroll";

const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault();
  smoothScroll(event.currentTarget.getAttribute("href") || "");
};

interface NavItem {
  href: string;
  label: string;
}

interface NavigationProps {
  items: NavItem[];
}

const NaviWithinPage: FC<NavigationProps> = ({ items }) => {
  return (
    <nav className="relative z-40">
      <div className="fixed -right-2 bottom-3">
        <ul className="rounded bg-black/30 p-2">
          {items.map((item) => {
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={handleSmoothScroll}
                  className="font-semibold text-gray-100 hover:text-green-600"
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NaviWithinPage;
