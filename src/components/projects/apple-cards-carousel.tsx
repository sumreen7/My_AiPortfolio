'use client';
import { useOutsideClick } from '@/hooks/use-outside-click';
import { cn } from '@/lib/utils';
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from '@tabler/icons-react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

import { ReactNode } from "react";

interface Project {
  category: string;
  title: string;
  src: string;
  description: string;
  techStack: string[];
  date: string;
  context: string;
  role: string;
  highlights: string[];
  links: { name: string; url: string }[];
  images: { src: string; alt: string }[];
  content: ReactNode;
}

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({
  items,
  initialScroll = 0,
}: {
  items: React.ReactNode[];
  initialScroll?: number;
}) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const scrollPosition = 400 * index;
      carouselRef.current.scrollTo({ left: scrollPosition, behavior: 'smooth' });
      setCurrentIndex(index);
    }
  };

  return (
    <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-10 [scrollbar-width:none]"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div className={cn('flex flex-row justify-start gap-6', 'mx-auto max-w-7xl px-4')}>
            {items.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 * index,
                  ease: [0.19, 1, 0.22, 1],
                }}
                key={'card' + index}
                className="rounded-3xl last:pr-[5%] md:last:pr-[33%]"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mr-10 flex justify-end gap-2 md:mr-20">
          <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
          </button>
          <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: Project;
  index: number;
  layout?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') handleClose();
    }
    document.body.style.overflow = open ? 'hidden' : 'auto';
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  // @ts-ignore
  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-52 h-screen overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 h-full w-full bg-black/80 backdrop-blur-lg"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="relative z-[60] mx-auto my-10 h-fit max-w-5xl rounded-3xl bg-white font-sans dark:bg-neutral-900"
            >
              <div className="sticky top-4 z-52 flex justify-end px-8 pt-8 md:px-14 md:pt-8">
                <button
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-black/90 shadow-md dark:bg-white/90"
                  onClick={handleClose}
                >
                  <IconX className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
                </button>
              </div>
              <div className="relative px-8 pt-2 pb-0 md:px-14">
                <motion.p
                  layoutId={layout ? `category-${card.title}` : undefined}
                  className="text-base font-medium text-black dark:text-white"
                >
                  {card.category}
                </motion.p>
                <motion.p
                  layoutId={layout ? `title-${card.title}` : undefined}
                  className="mt-4 text-2xl font-semibold text-neutral-700 md:text-5xl dark:text-white"
                >
                  {card.title}
                </motion.p>
              </div>
              <div className="px-8 pt-8 pb-14 md:px-14">{card.content}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Card — now wider with visible info */}
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        className="relative z-10 flex h-96 w-72 flex-col overflow-hidden rounded-3xl bg-white dark:bg-neutral-900 border border-border shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] text-left"
      >
        {/* Image section - top half */}
        <div className="relative h-40 w-full flex-shrink-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-neutral-800 dark:to-neutral-700">
          <img
            src={card.src}
            alt={card.title}
            className="h-full w-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
          {/* Category badge */}
          <div className="absolute top-3 left-3">
            <span
              className={cn(
                "rounded-full px-3 py-1 text-xs text-white backdrop-blur-sm",
                card.category === "Product and Gen AI" ? "bg-red-500" : "bg-blue-500"
              )}
            >
              {card.category}
            </span>
          </div>
        </div>

        {/* Info section - bottom half */}
        <div className="flex flex-1 flex-col justify-between p-5">
          <div>
            <motion.p
              layoutId={layout ? `title-${card.title}` : undefined}
              className="text-sm font-semibold text-neutral-800 dark:text-neutral-100 leading-snug mb-2"
            >
              {card.title}
            </motion.p>
            {card.description && (
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed line-clamp-3">
                {card.description}
              </p>
            )}
          </div>

          {card.techStack && card.techStack.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1">
              {card.techStack.slice(0, 3).map((tech, i) => (
                <span
                  key={i}
                  className="rounded-full bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 text-xs text-neutral-600 dark:text-neutral-300"
                >
                  {tech}
                </span>
              ))}
              {card.techStack.length > 3 && (
                <span className="rounded-full bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 text-xs text-neutral-400">
                  +{card.techStack.length - 3}
                </span>
              )}
            </div>
          )}
        </div>
      </motion.button>
    </>
  );
};