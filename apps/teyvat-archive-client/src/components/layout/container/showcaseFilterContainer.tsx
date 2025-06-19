"use client";

import React, { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  isSticky: boolean;
};

export default function ShowcaseFilterContainer({
  children,
  isSticky
}: Readonly<Props>) {
  const [isStuck, setIsStuck] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsStuck(!entry.isIntersecting);
      },
      { root: null, threshold: 1.0 }
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      if (sentinelRef.current) {
        observer.unobserve(sentinelRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Sentinel - Used to track when filter sticks */}
      <div ref={sentinelRef} className="h-0"></div>

      {/* Filter Container */}
      <div
        className={`w-full bg-gray-900 pb-2 ${
          isSticky ? "sticky top-0 z-10" : ""
        } transition-all duration-300`}
        style={{
          backgroundColor: isStuck
            ? "rgba(16, 24, 40, 1)"
            : "rgba(16, 24, 40, 0.3)"
        }}
      >
        {children}
      </div>
    </>
  );
}
