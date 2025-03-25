"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import CarouselItem from "./carouselItem";
import CarouselNavButton from "./carouselNavButton";

type Props = {
  items: IEvent[];
  autoPlay?: boolean;
  interval?: number;
};

export default function Carousel({
  items,
  autoPlay = true,
  interval = 5000,
}: Readonly<Props>) {
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const [carouselItems, setCarouselItems] = useState<IEvent[]>(items);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (autoPlay && carouselItems.length > 0) {
      intervalRef.current = setInterval(() => {
        handleNext();
      }, interval);
    }
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
    resetInterval();
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
    resetInterval();
  };

  useEffect(() => {
    setCarouselItems(items);
  }, [items]);

  useEffect(() => {
    resetInterval();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoPlay, interval, carouselItems.length]);

  return (
    <div className="relative w-[calc(100vw/12*10)] h-[calc(100vw/12*5)] my-6 max-w-[1000px] max-h-[500px] shadow-[0_3px_10px_rgba(0,0,0,0.3)] overflow-hidden grid place-items-center rounded-xl">
      <div className="relative w-full h-full">
        <AnimatePresence initial={false} custom={direction}>
          {carouselItems[currentIndex] && (
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="absolute w-full h-full"
            >
              <CarouselItem imageUrl={carouselItems[currentIndex].imageUrl} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <nav className="absolute bottom-5 right-5 z-[5] select-none">
        <CarouselNavButton
          icon={<ChevronLeftIcon className="size-6" />}
          onClick={handlePrev}
        />

        <CarouselNavButton
          icon={<ChevronRightIcon className="size-6" />}
          onClick={handleNext}
        />
      </nav>
    </div>
  );
}
