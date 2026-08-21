import { tool } from 'ai';
import { z } from 'zod';

export const getExperience = tool({
  description:
    "Show Sumreen's professional experience cards: Naviyo, Salesforce (full-time and intern), SRM Films, and research. Use this for ANY question about work, career, professional background, companies, Salesforce, Agentforce, internships, or where she has worked.",
  parameters: z.object({
    detail: z.enum(['current', 'previous', 'startup', 'research', 'all'])
      .optional()
      .describe('Specify which experience to focus on: current startup, previous roles, research, or all')
  }).optional(),
  execute: async () => {
    // Cards render from src/components/experience.tsx. Keep this tiny so the
    // model cannot reprint a JSON blob into the chat.
    return { shown: true, section: 'experience' };
  },
});
