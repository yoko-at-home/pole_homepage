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
        <ul className="bg-primary rounded p-2">
          {items.map((item) => {
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={handleSmoothScroll}
                  className="hover:text-gray-300 font-semibold text-gray-100"
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
