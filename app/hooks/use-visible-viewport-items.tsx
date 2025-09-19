import { useState, useEffect } from "react";

/**
 * Hook to get the visible viewport item indexes
 * @param itemsRefs - The refs of the items to be observed
 * @param options - The options for the intersection observer
 * @returns The visible viewport item indexes
 */
export const useVisibleViewportItems = (
  itemsRefs: React.RefObject<HTMLDivElement[]>,
  options?: IntersectionObserverInit
) => {
  const [visibleIndex, setVisibleIndex] = useState<number[]>([]);

  useEffect(() => {
    if (!itemsRefs.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const elementIndex = itemsRefs.current?.indexOf(
            entry.target as HTMLDivElement
          );

          if (elementIndex === undefined || elementIndex === -1) return;

          if (entry.isIntersecting) {
            setVisibleIndex((prev) =>
              prev.includes(elementIndex) ? prev : [...prev, elementIndex]
            );
          } else {
            setVisibleIndex((prev) => prev.filter((id) => id !== elementIndex));
          }
        });
      },
      {
        ...options,
      }
    );

    itemsRefs.current.forEach((ref: HTMLDivElement | null) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      itemsRefs?.current?.forEach((ref: HTMLDivElement | null) => {
        if (ref) observer.unobserve(ref);
      });
      observer.disconnect();
    };
  }, [itemsRefs.current, options]);

  return visibleIndex;
};
