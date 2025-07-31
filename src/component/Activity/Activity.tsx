import type { NextPage } from "next";
import { PageTitle } from "src/component/PageTitle";

import { data } from "./data";

export const Activity: NextPage = () => {
  return (
    <div id="activity">
      <PageTitle>ポレポーレの活動</PageTitle>

      <div className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-2 md:px-3 lg:grid-cols-3">
        {data.map((item) => {
          return (
            <div className="mb-10 w-full rounded-xl bg-slate-400/10 p-8  shadow-lg shadow-slate-200" key={item.header}>
              <div className="flex pb-5 text-left">
                <img
                  className="mr-5 h-16 w-16 rounded bg-primary/90 p-2 text-white lg:h-20 lg:w-20"
                  src={item.iconName}
                  alt={item.header}
                />
                <h4 className="text-2xl font-bold shadow-sm">{item.header}</h4>
              </div>
              <p className="text-lg font-semibold">{item.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
