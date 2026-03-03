import { tool } from "ai";
import { z } from "zod";

export const getProjects = tool({
  description:
    "This tool will show a list of all projects made by Sumreen (e.g., AI-powered products, data analytics, research projects, etc.)",
  parameters: z.object({
    _placeholder: z.string().optional(),
  }),
  execute: async () => {
    return {
      projects: [
        {
          title: "NVIDIA x CMU — Social Listening & Market Insights",
          category: "Market Research & AI",
          description:
            "Conducted large-scale market sentiment analysis on 100K+ user posts to identify audience segments and perception gaps, informing product positioning and messaging strategy.",
          techStack: ["NLP", "Sentiment Analysis", "Python", "Statistical Testing"],
          date: "2025",
          github: "https://github.com/sumreen7/nvidiaxcmu",
        },
        {
          title: "VSP Vision — Frame Assortment Intelligence",
          category: "Retail Analytics & Forecasting",
          description:
            "Built an end-to-end demand forecasting and assortment optimization pipeline for Visionworks eyewear retail — 162 SKUs, 910K+ units. XGBoost model (R² = 0.737) to predict SKU-level monthly demand.",
          techStack: ["XGBoost", "Python", "Time-Series Forecasting", "Retail Analytics"],
          date: "2025",
          github: "https://github.com/sumreen7/VSPVision_IntelligentAnalytics",
        },
        {
          title: "Naviyo — AI Travel Product",
          category: "AI Product",
          description:
            "Designed an AI travel product, building an NLP review analyzer for sentiment and safety insights, and validated feature direction through A/B testing.",
          techStack: ["NLP", "A/B Testing", "Python", "Sentiment Analysis"],
          date: "Currently working on it",
          github: "https://github.com/umgpy/naviyo",
        },
        {
          title: "Job Analyzer — Workforce Intelligence Platform",
          category: "Data Analytics",
          description:
            "Built an AI-driven system on 17K+ U.S. tech job postings. Created automated dashboards that identified 120+ emerging skills and accelerated hiring insights by 60%.",
          techStack: ["Python", "SQL", "Data Processing", "Dashboard"],
          date: "2025",
          github: "https://github.com/esha-pandya0203/dfp-job-analyzer",
        },
      ],
    };
  },
});