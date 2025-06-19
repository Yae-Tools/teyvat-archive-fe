import { useEffect, useRef, useState } from "react";

export function useInfiniteScroll<T>(
  items: T[],
  initialItemsToShow: number = 20,
  incrementAmount: number = 12
) {
  const [displayCount, setDisplayCount] = useState(initialItemsToShow);
  const [visibleItems, setVisibleItems] = useState<T[]>([]);
  const loaderRef = useRef<HTMLDivElement>(null);

  // Update visible items when either the full items list or display count changes
  useEffect(() => {
    setVisibleItems(items.slice(0, displayCount));
  }, [items, displayCount]);

  // Setup intersection observer
  useEffect(() => {
    const currentLoaderRef = loaderRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && displayCount < items.length) {
          // Load more items when loader comes into view
          setDisplayCount((prevCount) =>
            Math.min(prevCount + incrementAmount, items.length)
          );
        }
      },
      { threshold: 0.1 }
    );

    if (currentLoaderRef) {
      observer.observe(currentLoaderRef);
    }

    return () => {
      if (currentLoaderRef) {
        observer.unobserve(currentLoaderRef);
      }
    };
  }, [displayCount, items.length, incrementAmount]);

  const hasMore = displayCount < items.length;

  return { visibleItems, loaderRef, hasMore };
}
