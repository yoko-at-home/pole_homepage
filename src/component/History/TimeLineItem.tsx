import "react-vertical-timeline-component/style.min.css";

import type { WindowLike } from "dompurify";
import createDOMPurify from "dompurify";
import { JSDOM } from "jsdom";
import Link from "next/link";
import type { FC } from "react";
import ReactHtmlParser from "react-html-parser";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { PageTitle } from "src/component/PageTitle";
import { Music } from "tabler-icons-react";

import { data } from "./data";

const isServer = typeof window === "undefined";

const DOMPurify = isServer
  ? createDOMPurify(new JSDOM("").window as unknown as WindowLike)
  : createDOMPurify(window as unknown as WindowLike);

type Props = {
  data?: {
    title?: string;
    event?: string;
    date?: string;
    // body?: string; // bodyをオプションとして追加
  };
};

export const TimeLineItem: FC<Props> = (props) => {
  const sanitizedContent = DOMPurify.sanitize(props.data?.event || "");
  const parsedContent = ReactHtmlParser(sanitizedContent);

  return (
    <div className="overflow-x-hidden text-center" style={{ fontFamily: "Trebuchet Ms" }}>
      <PageTitle>🚢 🚢 🚢</PageTitle>
      <VerticalTimeline>
        {data.map((event, index) => {
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date={event.date}
              iconStyle={{ background: "#8aba28", color: "#fff" }}
              icon={<Music size={48} strokeWidth={2} color={"#d6e3d2"} />}
              key={event.event || index}
            >
              {/* event.eventが空でない場合に表示 */}
              <h3 className="vertical-timeline-element-title">{event.title || "デフォルトのイベント名"}</h3>
              <p className="vertical-timeline-element--work">{event.event || "デフォルトのイベント名"}</p>
              <div>{parsedContent}</div> {/* sanitizedContentが表示される部分 */}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
      <div className="z-50 mx-auto mt-10 h-36 w-full bg-[#c0c9c3]">
        <Link href="/contact" passHref>
          <span className="whitespace-nowrap rounded-full bg-primary p-10 text-center text-2xl font-extrabold text-white">
            ✨ 団員募集中 ✨
          </span>
        </Link>
      </div>
    </div>
  );
};
