
"use client";

import {
  createContext,
  useState,
  useEffect,
  type ReactNode,
  type MouseEvent as ReactMouseEvent,
} from "react";
import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useMediaQuery } from "react-responsive";

type CursorContextType = {
  mouseEnterHandler: () => void;
  mouseLeaveHandler: () => void;
};

type CursorProviderProps = {
  children: ReactNode;
};

type CursorStyle = {
  size: number;
  background: string;
};

export const CursorContext = createContext<CursorContextType>({
  mouseEnterHandler: () => {},
  mouseLeaveHandler: () => {},
});

const CursorProvider = ({ children }: CursorProviderProps) => {
  const [cursor, setCursor] = useState<CursorStyle>({
    size: 30,
    background: "#473936",
  });

  const [isHovering, setIsHovering] = useState(false);

  const smallViewportIsActive = useMediaQuery({
    query: "(max-width: 1200px)",
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = {
    damping: 20,
    stiffness: 290,
    mass: 0.45,
  };

  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (smallViewportIsActive) return;

      mouseX.set(e.clientX - cursor.size / 2);
      mouseY.set(e.clientY - cursor.size / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [smallViewportIsActive, cursor.size, mouseX, mouseY]);

  useEffect(() => {
    if (smallViewportIsActive) {
      setCursor({
        size: 0,
        background: "transparent",
      });
    } else {
      setCursor({
        size: 30,
        background: "#473936",
      });
    }
  }, [smallViewportIsActive]);

  const mouseEnterHandler = () => {
    if (smallViewportIsActive) return;

    setCursor({
      size: 90,
      background: "#00423a",
    });

    setIsHovering(true);
  };

  const mouseLeaveHandler = () => {
    if (smallViewportIsActive) return;

    setCursor({
      size: 30,
      background: "#473936",
    });

    setIsHovering(false);
  };

  return (
    <CursorContext.Provider
      value={{ mouseEnterHandler, mouseLeaveHandler }}
    >
      {!smallViewportIsActive && (
        <motion.div
          className="pointer-events-none fixed z-[99] rounded-full"
          style={{
            left: springX,
            top: springY,
            width: cursor.size,
            height: cursor.size,
            backgroundColor: cursor.background,
            mixBlendMode: isHovering ? "difference" : "normal",
          }}
          transition={{
            width: {
              duration: 0.2,
              ease: "easeInOut",
            },
            height: {
              duration: 0.2,
              ease: "easeInOut",
            },
          }}
        />
      )}

      {children}
    </CursorContext.Provider>
  );
};

export default CursorProvider;
