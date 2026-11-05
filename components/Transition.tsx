
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const animation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "-100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

function Transition() {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div
        key={pathname}
        className="pointer-events-none fixed left-0 right-0 top-0 z-50 hidden h-screen w-screen xl:flex"
      >
        <motion.div
          variants={animation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            delay: 0.2,
          }}
          className="relative h-full w-full bg-[#e2cfbd]"
        />
      </div>
    </AnimatePresence>
  );
}

export default Transition;
