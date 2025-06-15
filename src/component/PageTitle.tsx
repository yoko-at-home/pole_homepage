import type { FC, ReactNode } from "react";

type FontProps = {
  fontWeight?: "ordinary" | "bold";
  Color?: "green" | "violet";
  fontSize?: "sm" | "md" | "lg" | "xl";
  children: ReactNode;
};

const commonSubTitleStyles = {
  ordinary: {
    sm: "mt-10 mb-5 text-base text-gray-700 md:mt-14 md:mb-8 md:text-xl",
    md: "mt-10 mb-5 text-lg text-gray-700 md:mt-14 md:mb-8 md:text-2xl",
    lg: "mt-10 mb-5 text-xl text-gray-700 md:mt-14 md:mb-8 md:text-3xl",
    xl: "mt-10 mb-5 text-2xl text-gray-700 md:mt-14 md:mb-8 md:text-4xl",
  },
  bold: {
    sm: "mt-10 mb-5 text-base font-bold text-slate-400 md:mt-14 md:mb-8 md:text-xl",
    md: "mt-10 mb-5 text-lg font-bold text-slate-400 md:mt-14 md:mb-8 md:text-2xl",
    lg: "mt-10 mb-5 text-xl font-bold text-slate-400 md:mt-14 md:mb-8 md:text-3xl",
    xl: "mt-10 mb-5 text-2xl font-bold text-slate-400 md:mt-14 md:mb-8 md:text-4xl",
  },
};

const commonGradientStyles = {
  green: "bg-gradient-to-r from-yellow-500 to-green-500 bg-clip-text text-transparent drop-shadow-lg",
  violet: "bg-gradient-to-r from-yellow-200 via-pink-200 to-violet-600 bg-clip-text text-transparent drop-shadow-lg",
};

const commonClipTextStyles = {
  sm: "mb-5 mt-3 text-2xl font-black md:text-4xl",
  md: "mb-5 mt-3 text-3xl font-black md:text-5xl",
  lg: "mb-5 mt-3 text-4xl font-black md:text-6xl",
  xl: "mb-5 mt-3 text-5xl font-black md:text-7xl",
};

export const PageTitle: FC<FontProps> = (props) => {
  return (
    <h1 className="mt-20 mb-5 text-4xl font-extrabold leading-9 tracking-tight sm:text-2xl sm:leading-10 md:mt-24 md:mb-16 md:text-3xl md:leading-10 lg:mb-10">
      {props.children}
    </h1>
  );
};

export const PageSubTitle: FC<FontProps> = ({ children, fontSize = "md", fontWeight = "ordinary" }) => {
  return <h2 className={commonSubTitleStyles[fontWeight][fontSize]}>{children}</h2>;
};

export const ClipTextTitle: FC<FontProps> = ({ Color = "green", children, fontSize = "lg" }) => {
  return (
    <h2 className={commonClipTextStyles[fontSize]}>
      <span className={commonGradientStyles[Color]}>{children}</span>
    </h2>
  );
};

export const ProductMainTitle: FC<FontProps> = (props) => {
  return <h1 className="mb-6 text-4xl font-bold leading-relaxed md:text-5xl">{props.children}</h1>;
};
