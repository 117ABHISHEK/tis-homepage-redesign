"use client";

import { useEffect, useState } from "react";

export function useFinePointer(): boolean {
  const [isFine, setIsFine] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(pointer: fine)");
    setIsFine(query.matches);
    const onChange = (e: MediaQueryListEvent) => setIsFine(e.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return isFine;
}