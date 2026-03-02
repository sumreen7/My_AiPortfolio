import { tool } from "ai";
import { z } from "zod";

export const getCertifications = tool({
  description:
    "Show Fathima Sumreen's certifications, licenses, and professional credentials.",
  parameters: z.preprocess(
    (val) => (val === null || val === undefined ? {} : val),
    z.object({
      _placeholder: z.string().optional(),
    })
  ),
  execute: async () => {
    return {
      certifications: [
        {
          category: "Salesforce",
          icon: "/path-to-your-image/salesforce.png",
          items: [
            { name: "Salesforce Certified Administrator", issuer: "Salesforce", year: "2023" },
            { name: "Salesforce Certified Platform Developer I", issuer: "Salesforce", year: "2024" },
            { name: "Trailblazer — 82,000+ points, 186 badges", issuer: "Salesforce Trailhead", year: "2025" },
          ],
        },
        {
          category: "Product and Gen AI",
          icon: "💎", // Fixed: Added missing comma here
          items: [
            { name: "AI for Business Specialisation", issuer: "Wharton School of Business", year: "2025-2026" },
          ],
        },
        {
          category: "AI & Machine Learning",
          icon: "🤖",
          items: [
            { name: "Machine Learning Specialization", issuer: "Coursera / Andrew Ng", year: "2024" },
            { name: "Deep Learning Specialization", issuer: "Coursera / DeepLearning.AI", year: "2025" },
          ],
        },
        {
          category: "Cloud & Data",
          icon: "☁️",
          items: [
            { name: "Microsoft Azure Fundamentals (AZ-900)", issuer: "Microsoft", year: "2023" },
            { name: "Google Cloud Fundamentals", issuer: "Google", year: "2022" },
          ],
        },
      ],
    };
  },
});