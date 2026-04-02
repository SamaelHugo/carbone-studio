"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const letters = "CARBONE".split("");

export default function Preloader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [shouldShow, setShouldShow] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const visited = sessionStorage.getItem("carbone-visited");
      if (visited) {
        setIsLoading(false);
        setShouldShow(false);
        return;
      }
    }

    // Total: letters stagger (0.6s) + letter anim (1.6s) + hold (0.8s) + slide out (1.0s) = ~4.0s
    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("carbone-visited", "true");
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && shouldShow && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ backgroundColor: "var(--bg-primary)" }}
            exit={{
              clipPath: "inset(0 0 100% 0)",
            }}
            transition={{
              duration: 1.0,
              ease: [0.76, 0, 0.24, 1],
              delay: 0,
            }}
          >
            <div className="flex overflow-hidden">
              {letters.map((letter, i) => (
                <motion.span
                  key={i}
                  className="font-bebas text-[80px] md:text-[120px] tracking-[6px] text-text-primary"
                  initial={{ clipPath: "inset(100% 0 0 0)" }}
                  animate={{ clipPath: "inset(0 0 0 0)" }}
                  transition={{
                    duration: 1.6,
                    ease: [0.76, 0, 0.24, 1],
                    delay: i * 0.1,
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        initial={shouldShow ? { opacity: 0 } : { opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: shouldShow ? 0.3 : 0 }}
      >
        {children}
      </motion.div>
    </>
  );
}
