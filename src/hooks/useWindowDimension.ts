import { breakpointScreenEnum } from "@src/constants/breakpoints";
import { useState, useEffect } from "react";

const getWindowDimensions = () => {
  let isMobile = false;
  if (typeof window !== "undefined") {
    isMobile = window.innerWidth < breakpointScreenEnum.MOBILE;
  }

  return {
    isMobile,
  };
};

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};
