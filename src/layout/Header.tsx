import cc from "classcat";
import type { FC } from "react";
import { HeaderText } from "src/layout/HeaderText";

type Props = {
  className?: string;
  opacity?: "100" | "80" | "0";
};

/**
 * @package
 */
export const Header: FC<Props> = (props) => {
  return (
    <header className="relative -z-10 shadow-2xl">
      <div className="absolute -top-0 right-[10%] z-50 translate-x-[50%] translate-y-[50%] justify-between sm:block md:right-[6%]" />
      <div className="relative min-w-full bg-red-500">
        <div
          className={cc([
            {
              "absolute top-0 w-full h-80 bg-top bg-cover opacity-100": props.opacity === "100",
            },
            {
              "absolute top-0 w-full h-80 bg-top bg-cover": props.opacity === "80",
            },
            {
              "absolute w-full h-70 bg-top bg-repeat opacity-0": props.opacity === "0",
            },
          ])}
          style={{
            backgroundImage: "url('/static/images/header/2025_background_top.webp')",
          }}
        >
          <HeaderText />
        </div>
      </div>
    </header>
  );
};
