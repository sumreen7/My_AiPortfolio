'use client';

import React from 'react';

const Crazy = () => {
  return (
    <div className="mx-auto w-full">
      <div className="mb-6">
        <h2 className="text-foreground text-3xl font-semibold md:text-4xl">
          Brahmatal, Himalayas
        </h2>
        <p className="mt-2 text-muted-foreground text-sm">
          The craziest thing I've done
        </p>
      </div>
      <div className="rounded-3xl bg-accent px-6 py-8 sm:px-10">
        <p className="text-foreground text-base leading-relaxed">
          I climbed the Himalayas on the Brahmatal trek. It was freezing, exhausting,
          and one of those trips that resets your sense of scale — you feel tiny in
          front of a mountain, and somehow more sure of yourself on the way down.
        </p>
      </div>
    </div>
  );
};

export default Crazy;
