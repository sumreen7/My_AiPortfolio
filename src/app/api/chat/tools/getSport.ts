import { tool } from "ai";
import { z } from "zod";

export const getSports = tool({
  description:
    "This tool provides information about Sumreen's sports, hobbies, and interests outside of work",
  parameters: z.object({}).optional(),
  execute: async (params = {}) => {
    return {
      sports: {
        tennis: {
          background: "Playing since age 12",
          achievement: "Won my first national-level tournament at 16",
          description: "Tennis has been a huge part of my life — it taught me discipline, strategy, and how to stay composed under pressure. All things that honestly translate well into product thinking too!"
        },
        trekking: {
          description: "I love going on treks — being in nature and pushing my limits is something I genuinely look forward to",
          achievement: "Completed the Brahmatal Trek in the Himalayas, India — one of the most breathtaking experiences of my life",
        }
      },
      hobbies: {
        books: {
          instagram: "@coffeennovels",
          followers: "50K+ followers",
          description: "I run @coffeennovels on Instagram with over 50K followers — it's a book community I'm really proud of. I exclusively read fiction, and fantasy mystery is my absolute favorite genre. Think immersive worlds, twisty plots, and magic with a good whodunit twist.",
          genres: "Fiction only — fantasy mystery is my favorite"
        },
        food: {
          description: "Massive foodie — I love exploring new cuisines and local food scenes wherever I travel. Food is my favorite way to experience a new culture",
        },
        travel: {
          description: "Travel is genuinely my reset button. Exploring new places, meeting people, and experiencing different cultures is something I actively prioritize — it's also what inspired Naviyo, the adaptive AI travel assistant I'm building."
        },
        animals: {
          description: "I live with a dog and 2 cats — big animal person through and through"
        }
      }
    };
  },
});