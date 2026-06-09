import { useState, useCallback, useMemo } from "react";

export default function useImagesLoading(items, getSrc) {
  const total = useMemo(
    () => items.filter((item) => Boolean(getSrc(item))).length,
    [items, getSrc]
  );
  const [loadedCount, setLoadedCount] = useState(0);
  const [isLoading, setIsLoading] = useState(total > 0);

  const markLoaded = useCallback(() => {
    setLoadedCount((prev) => {
      const next = prev + 1;
      if (next >= total) {
        setIsLoading(false);
      }
      return next;
    });
  }, [total]);

  return [isLoading, markLoaded];
}
