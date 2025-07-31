import type { LinkProps } from "next/link";
import Link from "next/link";
import { useRouter } from "next/router";
import type { ReactElement } from "react";
import { cloneElement } from "react";

type Props = LinkProps & { children: ReactElement; activeClassName: string };

/**
 * @package
 */
export const NavLink = (props: Props) => {
  const { activeClassName, children, ...linkProps } = props;
  const router = useRouter();
  const pathname = router.pathname === "/root" ? "/" : router.pathname;

  const className =
    pathname === linkProps.href
      ? `${activeClassName} ${children.props.className ?? ""} cursor-pointer`
      : `${children.props.className ?? ""} cursor-pointer`;

  return (
    <Link legacyBehavior className="hover:pointer-events-auto" {...linkProps}>
      {cloneElement(children, { className })}
    </Link>
  );
};
