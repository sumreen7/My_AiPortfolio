import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
  'This tool returns a concise personal introduction of Fathima Sumreen. It is used to answer the question "Who are you?" or "Tell me about yourself"',
  parameters: z.object({}).optional(),
  execute: async (params = {}) => {
    return {
      personal: {
        name: "Fathima Sumreen",
        age: 24,
        journey: "Started as a software engineer at Salesforce building AI agents and automation systems, now at CMU sharpening my product and data skills to build things people actually love using",
        specialization: "AI-powered product development, data analytics, LLM fine-tuning, and enterprise automation",
        lifestyle: {
          diet: "foody, love trying new cuisines and exploring food cultures",
          philosophy: "I believe in consistent and continuous learning, embracing challenges, while finding joy in the journey of growth and discovery",
          animals: "I live with a dog and 2 cats, and I am a big animal person in general"
        },
        spirituality: {
          beliefs: "I am an atheist",
          description: "I do not believe in any religion, but I do believe in the power of human connection, empathy, and kindness. I believe that we are all connected and that we should treat each other with respect and compassion."
        },
        passion: "Bridging the gap between technical complexity and real user impact — I care deeply about building products that are intelligent, intuitive, and actually solve problems",
        funFact: "I've been professionally playing tennis since I was 12, and I won my first national level tournament when I was 16!",
      }
    };
  },
});
