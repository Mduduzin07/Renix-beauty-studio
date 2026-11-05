"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type PageTransitionProps = {
  children: ReactNode;
};

function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <motion.div
        key={pathname}
        initial={{ opacity: 1 }}
        animate={{
          opacity: 0,
          transition: { delay: 1, duration: 1, ease: "easeIn" },
        }}
        className="w-screen h-screen fixed z-30 bg-white top-0 pointer-events-none"
      />
      {children}
    </AnimatePresence>
  );
}

export default PageTransition;

