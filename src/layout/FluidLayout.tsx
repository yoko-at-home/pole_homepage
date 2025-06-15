import { useRouter } from "next/router";
import type { FC, ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import Navigation from "src/layout/Navigation";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { LayoutErrorBoundary } from "./LayoutErrorBoundary";

type Props = {
  className?: string;
  children: ReactNode;
  inView?: boolean;
};

/**
 * @package
 */
export const FluidLayout: FC<Props> = (props) => {
  /* eslint-disable @typescript-eslint/naming-convention */
  const { inView, ref } = useInView({ threshold: 0 });
  const router = useRouter();
  const isSpecialUrl = router.pathname === "/aboutus" || router.pathname.startsWith("/audio/");
  return (
    <div className="relative text-slate-600">
      <Navigation inView={inView} />
      <div ref={ref} />
      {isSpecialUrl ? (
        <>
          <Header opacity="0" />
          <div className="-z-10 mt-0">
            <main className="mx-auto min-w-[320px] max-w-7xl px-4 sm:px-6 lg:px-8">
              <LayoutErrorBoundary>{props.children}</LayoutErrorBoundary>
            </main>
          </div>
        </>
      ) : (
        <>
          <Header opacity="100" />
          <div className="-z-10 mt-96">
            <main className="mx-6 sm:mx-10 md:mx-auto md:w-11/12 lg:w-9/12">
              <LayoutErrorBoundary>{props.children}</LayoutErrorBoundary>
            </main>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};
