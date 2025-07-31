import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { ConfettiSmall } from "src/component/Confetti";

import { data } from "./data";

export const Team: NextPage = () => {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:px-3 lg:grid-cols-3">
      {data.map((d) => {
        return (
          <div className="mb-10 w-full rounded-xl border-2  bg-gray-50/90 p-8 text-center" key={d.header}>
            <img className="mx-auto h-40 w-40 rounded-full" src={d.imageFileName} alt={d.header} />
            <h4 className="text-2xl font-bold text-slate-800 shadow-sm">{d.header}</h4>
            <p className="text-lg font-semibold text-slate-800">{d.subheader}</p>
            {d.desc ? <p className="text-sm text-slate-800">{d.desc}</p> : null}
          </div>
        );
      })}
      <Link href="/contact" className="p-5" aria-label="to contact">
        <div className="relative mb-10 min-w-full rounded-xl border-4 bg-pink-200 text-center">
          <ConfettiSmall />
          <div className="absolute top-0 left-[20%] mx-auto h-40 w-40 p-2">
            <Image
              className="h-40 w-40 rounded-full"
              src="/static/images/team/team.webp"
              alt="お問合せ"
              width={140}
              height={140}
            />
          </div>
          <div className="flex flex-col pb-6">
            <div className="">💃</div>
            <div className="flex items-center justify-center">
              <div className="animate-bounce">💃</div>
              <p className="px-2 text-xl font-black text-white">Come and join us!</p>
              <span className="animate-bounce">💃</span>
            </div>
            <span className="animate-spin">💃</span>
          </div>
        </div>
      </Link>
    </div>
  );
};
