'use client';

import FluidCursor from '@/components/FluidCursor';
import { Button } from '@/components/ui/button';

import { motion, AnimatePresence, Variants } from 'framer-motion';
import {
  ArrowRight,
  Laugh,
  Layers,
  PartyPopper,
  Loader2,
  X,
  Code,
  GraduationCap,
  Mail,
} from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

const ChatComponent = dynamic(() => import('@/components/chat/chat'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-96">
      <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
    </div>
  ),
});

const questions = {
  'About Me': 'Who are you? I want to know more about you.',
  Experience: 'What is your work experience? Tell me about your professional background.',
  Projects: 'What are your projects? What are you working on right now?',
  Achievements: 'What are your achievements and accomplishments?',
  Skills: 'What are your skills? Give me a list of your soft and hard skills.',
  Contact: 'How can I contact you?',
} as const;

const questionConfig = [
  { key: 'About Me', color: '#329696', icon: Laugh },
  { key: 'Experience', color: '#B95F9D', icon: GraduationCap },
  { key: 'Projects', color: '#3E9858', icon: Code },
  { key: 'Achievements', color: '#FF6B35', icon: PartyPopper },
  { key: 'Skills', color: '#856ED9', icon: Layers },
  { key: 'Contact', color: '#C19433', icon: Mail },
] as const;

const HERO_SLIDES = [
  { title: 'Salesforce Software Engineer', src: '/landingpage2.png' },
  { title: 'Agentic AI Builder', src: '/landingpage4.png' },
  { title: 'CMU MISM Graduate', src: '/landingpage1.png' },
  { title: 'Product Thinker', src: '/landingpage3.png' },
] as const;

export default function Home() {
  const [input, setInput] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [initialQuery, setInitialQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [currentTitle, setCurrentTitle] = useState(0);

  const openChat = async (query: string) => {
    setInitialQuery(query);
    setIsChatOpen(true);
  };

  const topElementVariants: Variants = {
    hidden: { opacity: 0, y: -60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'tween', ease: 'easeOut', duration: 0.8 },
    },
  };

  const bottomElementVariants: Variants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'tween', ease: 'easeOut', duration: 0.8, delay: 0.2 },
    },
  };

  const pageTransitionVariants: Variants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.05 },
  };

  useEffect(() => {
    const titleInterval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500);

    return () => clearInterval(titleInterval);
  }, []);

  return (
    <motion.div
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pb-10 md:pb-20"
      variants={pageTransitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
    >
      {/* big blurred footer word */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center overflow-hidden">
        <div
          className="hidden bg-gradient-to-b from-muted-foreground/10 to-muted-foreground/0 bg-clip-text text-[10rem] leading-none font-black text-transparent select-none sm:block lg:text-[16rem]"
          style={{ marginBottom: '-2.5rem' }}
        >
          Sumreen
        </div>
      </div>

      <div className="absolute top-6 left-6 z-20">
        <button
          onClick={() => {
            const subject = encodeURIComponent('Let\'s connect!');
            const body = encodeURIComponent("Hi Sumreen,\n\nI came across your portfolio and would love to connect.\n\nBest,");
            window.location.href = `mailto:sumreenf@andrew.cmu.edu?subject=${subject}&body=${body}`;
          }}
          className="relative flex cursor-pointer items-center gap-2 rounded-full border bg-background/30 px-4 py-1.5 text-sm font-medium text-foreground shadow-md backdrop-blur-lg transition hover:bg-background/60"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
          </span>
          Interested to talk more?
        </button>
      </div>

      {/* header */}
      <motion.div
        className="z-1 mt-24 mb-0 flex flex-col items-center text-center md:mt-4 md:mb-0"
        variants={topElementVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-secondary-foreground mt-1 text-xl font-semibold md:text-2xl">
          Hey, I'm Sumreen 👋
        </h2>
        <div className="flex min-h-[5.5rem] items-center justify-center px-2 sm:min-h-[6.5rem] md:min-h-[7.5rem]">
          <AnimatePresence mode="wait">
            <motion.h1
              key={HERO_SLIDES[currentTitle].title}
              className="text-3xl font-bold text-balance sm:text-4xl md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
            >
              {HERO_SLIDES[currentTitle].title}
            </motion.h1>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* centre memoji */}
      <motion.div
        className="relative z-10 h-[260px] w-[min(100%,420px)] sm:h-[300px] md:h-[340px]"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.2 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={HERO_SLIDES[currentTitle].src}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={HERO_SLIDES[currentTitle].src}
              alt={HERO_SLIDES[currentTitle].title}
              fill
              priority
              className="object-contain"
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* input + quick buttons */}
      <motion.div
        variants={bottomElementVariants}
        initial="hidden"
        animate="visible"
        className="z-10 mt-4 flex w-full flex-col items-center justify-center md:px-0"
      >
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            if (input.trim()) {
              await openChat(input.trim());
            }
          }}
          className="relative w-full max-w-2xl"
        >
          <div className="mx-auto flex items-center rounded-full border border-border bg-background/30 py-2.5 pr-2 pl-6 backdrop-blur-lg transition-all hover:border-border/60">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything…"
              className="w-full border-none bg-transparent text-base text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              aria-label="Submit question"
              className="flex items-center justify-center rounded-full bg-[#0171E3] p-2.5 text-white transition-colors hover:bg-blue-600 disabled:opacity-70 dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </form>

        <div className="mt-6 grid w-full max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3">
          {questionConfig.map(({ key, color, icon: Icon }) => (
            <motion.div
              key={key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.1 }}
            >
              <Button
                onClick={() => openChat(questions[key])}
                variant="outline"
                className="border-border hover:bg-border/30 aspect-square w-full cursor-pointer rounded-2xl border bg-background/30 py-6 shadow-none backdrop-blur-lg transition-all duration-200 hover:shadow-lg md:py-8"
              >
                <div className="flex h-full flex-col items-center justify-center gap-2 text-muted-foreground">
                  <Icon size={24} strokeWidth={2} color={color} />
                  <span className="text-sm font-medium">{key}</span>
                </div>
              </Button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Chat Overlay */}
      <AnimatePresence mode="wait">
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: '100%', scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: '100%', scale: 0.95 }}
            transition={{
              type: 'spring',
              damping: 30,
              stiffness: 300,
              duration: 0.6,
            }}
            className="fixed inset-0 z-50 bg-background"
          >
            <div className="relative h-full w-full">
              <ChatComponent initialQuery={initialQuery} onClose={() => setIsChatOpen(false)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <FluidCursor />
    </motion.div>
  );
}