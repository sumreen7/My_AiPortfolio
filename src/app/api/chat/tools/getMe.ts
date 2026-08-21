import { tool } from 'ai';
import { z } from 'zod';

export const getMe = tool({
  description:
    'Show Sumreen\'s About Me card: who she is, background, interests, and photo. Use this for "who are you", "about me", or "tell me about yourself".',
  parameters: z.preprocess(
    (val) => (val === null || val === undefined ? {} : val),
    z.object({
      query: z.string().optional().describe("The user's question about Sumreen"),
    })
  ),
  execute: async () => {
    // Card renders from src/components/me.tsx. Keep this tiny so the model
    // cannot reprint a JSON blob into the chat.
    return { shown: true, section: 'about' };
  },
});
