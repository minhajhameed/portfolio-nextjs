"use client";

import React, { createContext, useContext, useEffect, useRef, useState } from "react";

// Dynamically import Locomotive Scroll to prevent SSR issues
const LocomotiveScroll = typeof window !== "undefined" ? require("locomotive-scroll").default : null;

interface LocomotiveScrollContextProps {
  scroll: any | null; // LocomotiveScroll instance
}

const LocomotiveScrollContext = createContext<LocomotiveScrollContextProps>({
  scroll: null,
});

export const useLocomotiveScroll = () => useContext(LocomotiveScrollContext);

export const LocomotiveScrollProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollInstance, setScrollInstance] = useState<any>(null);

  useEffect(() => {
    if (scrollRef.current && LocomotiveScroll) {
      const instance = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });
      setScrollInstance(instance);

      return () => {
        instance.destroy();
      };
    }
  }, []);

  return (
    <LocomotiveScrollContext.Provider value={{ scroll: scrollInstance }}>
      <div data-scroll-container ref={scrollRef}>
        {children}
      </div>
    </LocomotiveScrollContext.Provider>
  );
};