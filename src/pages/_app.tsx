import { type AppType } from "next/dist/shared/lib/utils";
import { useEffect } from "react";

import "@/styles/globals.css";
import "@/styles/locomotive-scroll.css";

import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  display: "swap",
  subsets: ["latin"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  // Move locomotive-scroll initialization to client-side only
  useEffect(() => {
    // Check if we're in the browser
    if (typeof window !== 'undefined') {
      // Dynamically import locomotive-scroll only on client side
      import('locomotive-scroll').then((LocomotiveScroll) => {
        const scrollEl = document.querySelector('[data-scroll-container]');
        if (scrollEl) {
          new LocomotiveScroll.default({
            el: scrollEl as HTMLElement,
            smooth: true,
            multiplier: 0.8,
            lerp: 0.05,
            smartphone: {
              smooth: true
            }
          });
        }
      });
    }
  }, []);

  return (
    <div lang={"en"} className={dmSans.className}>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;