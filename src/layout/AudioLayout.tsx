// import Lottie from "lottie-react";
import Link from "next/link";
import type { FC, ReactNode } from "react";
import { PageTitle } from "src/component/PageTitle";
import { NaviAudio } from "src/layout/NaviAudio";

// import userAnimationIcon from "./97581-music-notes.json";
import { LayoutErrorBoundary } from "./LayoutErrorBoundary";

type Props = {
  className?: string;
  children: ReactNode;
  inView?: boolean;
};

/**
 * @package
 */
export const AudioLayout: FC<Props> = (props) => {
  return (
    <div className="mx-auto" id="audio-top">
      <div className="grid grid-rows-[auto_1fr] gap-4">
        <div>
          <div className="flex items-baseline justify-between p-4">
            <PageTitle>音源</PageTitle>
            <Link className="rounded bg-blue-100 px-2 py-1 text-lg font-bold hover:bg-green-100" href="/audio">
              音源メニュートップ
            </Link>
          </div>
          <NaviAudio />
        </div>

        <div className="flex justify-center">
          <main className="w-full max-w-7xl px-4">
            <LayoutErrorBoundary>{props.children}</LayoutErrorBoundary>
          </main>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex">{/* <Lottie animationData={userAnimationIcon} autoPlay={true} /> */}</div>
      </div>
    </div>
  );
};
