import { useRef } from "react";

export function useSwipe(
  onSwipeLeft: () => void,
  onSwipeRight: () => void,
  threshold = 50
) {
  const startX = useRef(0);

  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const endX = e.changedTouches[0].clientX;
    const diff = endX - startX.current;

    if (Math.abs(diff) > threshold) {
      diff > 0 ? onSwipeRight?.() : onSwipeLeft?.();
    }
  };

  return { onTouchStart, onTouchEnd };
}
