import { useRouter } from "next/router";
import type { FC, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick: "Home" | "Return";
};

export const Button: FC<ButtonProps> = (props) => {
  const router = useRouter();
  const handleOnClickHome = () => {
    return router.push("/");
  };
  const handleOnClickReturn = () => {
    return router.back();
  };
  return (
    <button
      type="button"
      onClick={props.onClick === "Return" ? handleOnClickReturn : handleOnClickHome}
      className="rounded bg-gradient-to-r from-gray-400 to-gray-500 p-3 font-bold leading-10 text-gray-100 sm:text-lg"
    >
      {props.children}
    </button>
  );
};

type ButtonToContactProps = {
  children: string;
};
export const ButtonToContact: FC<ButtonToContactProps> = (props) => {
  const router = useRouter();
  const handleOnClick = () => {
    return router.push("/contact");
  };
  return (
    <button
      type="button"
      onClick={handleOnClick}
      className="rounded bg-gradient-to-r from-gray-400 to-[#330033] p-5 font-bold tracking-widest text-gray-100 opacity-90 sm:text-lg"
    >
      {props.children}
    </button>
  );
};
