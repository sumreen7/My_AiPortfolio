"use client";

import { ReactNode } from "react";

export type Project = {
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
};

function ProjectDetail(project: Omit<Project, "content">) {
  return (
    <div className="space-y-8">

      {/* Context Bar */}
      <div className="flex flex-wrap gap-3 text-sm text-neutral-500 dark:text-neutral-400">
        <span className="rounded-full bg-neutral-100 dark:bg-neutral-800 px-3 py-1">
          {project.context}
        </span>
        <span className="rounded-full bg-neutral-100 dark:bg-neutral-800 px-3 py-1">
          🙋‍♀️ {project.role}
        </span>
        <span className="rounded-full bg-neutral-100 dark:bg-neutral-800 px-3 py-1">
          📅 {project.date}
        </span>
      </div>

      {/* Description */}
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <p className="text-base leading-relaxed md:text-lg">
          {project.description}
        </p>
      </div>

      {/* Highlights */}
      <div>
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
          Key Highlights
        </h3>
        <div className="space-y-3">
          {project.highlights.map((highlight, index) => (
            <div
              key={index}
              className="flex gap-3 rounded-2xl bg-[#F5F5F7] dark:bg-[#1D1D1F] p-4"
            >
              <span className="mt-0.5 flex-shrink-0 text-green-500">✦</span>
              <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                {highlight}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <div>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
          Technologies
        </h3>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, i) => (
            <span
              key={i}
              className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Links */}
      {project.links.length > 0 && (
        <div className="mb-24">
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
            Links
          </h3>
          <div className="space-y-2">
            {project.links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl bg-[#F5F5F7] px-4 py-3 text-sm transition hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700"
              >
                <span className="font-light">{link.name}</span>
                <span className="text-neutral-400 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

const projectData: Omit<Project, "content">[] = [
  {
    category: "Market Research & AI",
    title: "NVIDIA x CMU — Social Listening & Market Insights",
    src: "/nvidiaxcmu.png",
    description:
      "Conducted large-scale market sentiment analysis on 100K+ user posts to identify audience segments and perception gaps, informing NVIDIA's product positioning and messaging strategy. Validated findings using statistical testing to ensure decision confidence.",
    techStack: ["NLP", "Sentiment Analysis", "Python", "Statistical Testing", "Market Research", "Data Analytics"],
    date: "2025",
    context: "CMU Practicum Project · Industry Partner: NVIDIA",
    role: "Data Analyst & Researcher",
    highlights: [
      "Processed and analyzed 100K+ social media posts across platforms to extract brand sentiment and user perception trends",
      "Identified key audience segments and mapped perception gaps between NVIDIA's positioning and actual user sentiment",
      "Applied NLP pipelines for sentiment extraction, topic modeling, and entity recognition at scale",
      "Validated findings through statistical hypothesis testing to ensure actionable, high-confidence insights",
      "Delivered strategic recommendations on product messaging and audience targeting to NVIDIA stakeholders",
    ],
    links: [{ name: "GitHub", url: "https://github.com/sumreen7/nvidiaxcmu" }],
    images: [{ src: "/nvidiaxcmu.png", alt: "NVIDIA x CMU project" }],
  },
  {
    category: "CMU Capstone · Retail Analytics",
    title: "VSP Vision — Frame Assortment Intelligence",
    src: "/vsp-vision.jpg",
    description:
      "Built an end-to-end demand forecasting and assortment optimization pipeline for Visionworks eyewear retail — 162 SKUs, 3 brands, 2 regions, 910K+ units. Engineered 33 leakage-free time-series features and trained a tuned XGBoost model (R² = 0.737 log-scale) to predict SKU-level monthly demand.",
    techStack: ["XGBoost", "Python", "Time-Series Forecasting", "Feature Engineering", "SHAP", "Retail Analytics", "Data Visualization"],
    date: "2025",
    context: "CMU Capstone Project · Industry Partner: VSP Vision / Visionworks",
    role: "Data Scientist & Product Analyst",
    highlights: [
      "Engineered 33 leakage-free time-series features across 162 SKUs, 3 brands, and 2 retail regions covering 910K+ units",
      "Trained and tuned an XGBoost model achieving R² = 0.737 on log-scale SKU-level monthly demand predictions",
      "Identified structural assortment gaps — $150–$199 price band over-assorted, $200–$249 identified as the sweet spot",
      "Surfaced white-space opportunities in frame styles: Oval, Titanium, and Cat Eye significantly under-represented",
      "Translated model outputs into 14 prioritized product action items for the merchandising and buying team",
    ],
    links: [{ name: "GitHub", url: "https://github.com/sumreen7/VSPVision_IntelligentAnalytics" }],
    images: [{ src: "/vsp-vision.jpg", alt: "VSP Vision project" }],
  },
  {
    category: "AI Startup · Founder",
    title: "Naviyo — Adaptive AI Travel Partner",
    src: "/naviyo.png",
    description:
      "Building an AI travel assistant that doesn't just suggest itineraries — it adapts them in real time based on who you are and what's happening around you. Combining agentic AI, NLP, and behavioral feedback loops to create a travel experience that gets smarter the more you use it.",
    techStack: ["Agentic AI", "LLMs", "NLP", "A/B Testing", "Python", "Real-time Systems", "Personalization", "Sentiment Analysis"],
    date: "2025 — Present",
    context: "Personal Startup · Co-Founder",
    role: "Co-Founder, Engineer & Product Lead",
    highlights: [
      "Designed a tool-using agentic AI system that combines LLM reasoning, NLP sentiment analysis, and real-time signals (weather, crowd data, user preferences) to dynamically replan travel itineraries",
      "Built an NLP review analyzer that extracts sentiment and safety signals from destination reviews, helping users make smarter travel decisions",
      "Incorporated behavioral feedback loops so the product personalizes over time — the more you use it, the smarter it gets",
      "Validated product direction through A/B testing with 200+ users, achieving 82% classification accuracy on itinerary preference prediction",
      "Led full product lifecycle: user research, pain point mapping, competitive analysis, feature prioritization, and iterative development",
    ],
    links: [{ name: "GitHub", url: "https://github.com/umgpy/naviyo" }],
    images: [{ src: "/naviyo.png", alt: "Naviyo project" }],
  },
  {
    category: "Workforce Analytics",
    title: "Job Analyzer — Workforce Intelligence Platform",
    src: "/job-analyzer.png",
    description:
      "Built an AI-driven workforce intelligence system that processes 17K+ U.S. tech job postings to surface emerging skill trends, hiring patterns, and market gaps. Automated dashboards cut time-to-insight by 60% and identified 120+ emerging skills shaping the future of tech hiring.",
    techStack: ["Python", "SQL", "NLP", "Data Processing", "Dashboard Automation", "Tableau", "Workforce Analytics"],
    date: "2025",
    context: "Academic Project · Carnegie Mellon University",
    role: "Data Engineer & Analyst",
    highlights: [
      "Ingested and processed 17K+ U.S. tech job postings using automated data pipelines and structured NLP extraction",
      "Identified 120+ emerging skills across roles — surfacing trends in AI, data engineering, and product analytics",
      "Built automated dashboards that reduced manual reporting effort by 60% and enabled real-time hiring market visibility",
      "Mapped skill adjacencies and role evolution patterns to help job seekers and hiring managers understand market movement",
      "Delivered actionable insights on compensation trends, geographic demand shifts, and in-demand tech stacks",
    ],
    links: [{ name: "GitHub", url: "https://github.com/esha-pandya0203/dfp-job-analyzer" }],
    images: [{ src: "/job-analyzer.png", alt: "Job Analyzer project" }],
  },
];

export const data: Project[] = projectData.map((project) => ({
  ...project,
  content: <ProjectDetail {...project} />,
}));