"use client";

import { useEffect } from "react";

/* Publishes the exact visible viewport height as --app-h on <html> so each
   full-screen section is precisely one frame tall on every browser (covering
   engines without svh/dvh, plus mobile chrome show/hide), kept correct across
   resize and orientation changes. */
export function FrameHeight() {
  useEffect(() => {
    const apply = () => {
      document.documentElement.style.setProperty("--app-h", `${window.innerHeight}px`);
    };
    apply();
    window.addEventListener("resize", apply);
    window.addEventListener("orientationchange", apply);
    return () => {
      window.removeEventListener("resize", apply);
      window.removeEventListener("orientationchange", apply);
    };
  }, []);

  return null;
}
