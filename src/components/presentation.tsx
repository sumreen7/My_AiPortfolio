'use client';

import { motion, Variants } from 'framer-motion';
import React, { useState } from 'react';

export function Presentation() {
  const [imgError, setImgError] = useState(false);

  const profile = {
    name: 'Fathima Sumreen',
    location: 'Pittsburgh, PA · Open to relocation & remote',
    education: 'MISM @ Carnegie Mellon University',
    description:
      "Hey 👋\nI'm Sumreen — a Salesforce software engineer on Asset Management and an agentic AI builder. I spent two years at Salesforce shipping Agentforce workflows used by 40K+ enterprise users (40% faster onboarding, 65% less manual verification). Now I'm a CMU MISM graduate going deeper on product and data, and co-founding Naviyo.\n\nWhen I'm not at my laptop, I'm on a tennis court, in a fantasy mystery, or planning a trek. I also run @coffeennovels — a book community with 60K+ followers.",
    src: '/new-image.png',
  };

  const tags = [
    '🤖 AI & Automation',
    '📊 Data Analytics',
    '🎾 Tennis',
    '📚 @coffeennovels',
    '🏔️ Hiker',
    '🍜 Foodie',
  ];

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const paragraphAnimation: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 } },
  };

  return (
    <div className="mx-auto w-full max-w-5xl py-6 font-sans">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        <div className="relative mx-auto aspect-square w-full max-w-sm">
          <div className="relative h-full w-full overflow-hidden rounded-2xl">
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              className="h-full w-full"
            >
              <img
                src={imgError ? 'https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3' : profile.src}
                alt={profile.name}
                onError={() => setImgError(true)}
                className="h-full w-full object-cover object-center rounded-2xl"
              />
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col space-y">
          <motion.div initial="hidden" animate="visible" variants={textVariants}>
            <h1 className="from-foreground to-muted-foreground bg-gradient-to-r bg-clip-text text-xl font-semibold text-transparent md:text-3xl">
              {profile.name}
            </h1>
            <div className="mt-1 flex flex-col gap-1 md:flex-row md:items-center md:gap-4">
              <p className="text-muted-foreground text-sm">{profile.education}</p>
            </div>
            <p className="text-muted-foreground text-sm mt-1">{profile.location}</p>
          </motion.div>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={paragraphAnimation}
            className="text-foreground mt-6 leading-relaxed whitespace-pre-line"
          >
            {profile.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-4 flex flex-wrap gap-2"
          >
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Presentation;