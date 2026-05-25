import { useState, useEffect } from "react";

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 768px)");
    const onChange = () => setIsMobile(mql.matches);
    mql.addEventListener("change", onChange);
    setIsMobile(mql.matches);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return isMobile;
}

export function useIsTablet() {
  const [isTablet, setIsTablet] = useState<boolean>(false);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 769px) and (max-width: 1024px)");
    const onChange = () => setIsTablet(mql.matches);
    mql.addEventListener("change", onChange);
    setIsTablet(mql.matches);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return isTablet;
}
