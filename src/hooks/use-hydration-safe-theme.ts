import { useState, useEffect } from "react";

export function useHydrationSafeTheme<T extends string | undefined>(theme: T) {
  const [hydrationSafeTheme, setHydrationSafeTheme] = useState<T>();
  useEffect(() => {
    setHydrationSafeTheme(theme);
  }, [theme]);
  return hydrationSafeTheme;
}
