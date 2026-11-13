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
export const FixedLayout: FC<Props> = (props) => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { inView, ref } = useInView({ threshold: 0 });

  return (
    <div className="relative mx-auto min-h-screen">
      <Navigation inView={inView} />
      <div ref={ref} />
      <Header opacity="80" />
      <div className="-z-10 mt-96 flex justify-center">
        <main className="mx-8 sm:mx-auto">
          <LayoutErrorBoundary>{props.children}</LayoutErrorBoundary>
        </main>
      </div>
      <Footer />
    </div>
  );
};
