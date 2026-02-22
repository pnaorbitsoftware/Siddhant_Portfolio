import { type AppType } from "next/dist/shared/lib/utils";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

import "@/styles/globals.css";
import "@/styles/locomotive-scroll.css";

import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // Handle page transitions
  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  // Initialize smooth scroll
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let scrollInstance: any = null;

    const initScroll = async () => {
      try {
        // Dynamically import locomotive-scroll
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const scrollEl = document.querySelector('[data-scroll-container]');
        
        if (scrollEl) {
          // Initialize with correct options for the version you're using
          scrollInstance = new LocomotiveScroll({
            el: scrollEl as HTMLElement,
            smooth: true,
            multiplier: 0.8,
            lerp: 0.05, // Linear interpolation (0-1) for smoothness
            smartphone: {
              smooth: true,
            },
            tablet: {
              smooth: true,
              breakpoint: 1024
            }
          });

          // For locomotive-scroll v5+, update might not exist
          // Use a safer approach - just reload if needed
          setTimeout(() => {
            if (scrollInstance && typeof scrollInstance.update === 'function') {
              scrollInstance.update();
            } else if (scrollInstance && typeof scrollInstance.init === 'function') {
              scrollInstance.init();
            }
          }, 500);
        }
      } catch (error) {
        console.error('Failed to initialize smooth scroll:', error);
      }
    };

    initScroll();

    // Cleanup
    return () => {
      if (scrollInstance && typeof scrollInstance.destroy === 'function') {
        scrollInstance.destroy();
      }
    };
  }, [router.pathname]); // Re-initialize on route change

  return (
    <div lang="en" className={`${dmSans.variable} font-sans`}>
      {/* Page transition overlay */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm flex items-center justify-center"
          >
            <div className="relative">
              <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
              <span className="absolute inset-0 flex items-center justify-center text-xs text-primary">
                SA
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content with page transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={router.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default MyApp;
