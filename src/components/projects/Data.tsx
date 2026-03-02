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
        <p className="text-base leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Highlights */}
      <div>
        <h3 className="mb-4 text-sm font-semibold uppercase">
          Key Highlights
        </h3>
        <div className="space-y-3">
          {project.highlights.map((highlight, index) => (
            <div
              key={index}
              className="flex gap-3 rounded-2xl bg-[#F5F5F7] dark:bg-[#1D1D1F] p-4"
            >
              <span className="text-green-500">✦</span>
              <p className="text-sm leading-relaxed">
                {highlight}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <div>
        <h3 className="mb-3 text-sm font-semibold uppercase">
          Technologies
        </h3>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, i) => (
            <span
              key={i}
              className="rounded-full bg-neutral-200 dark:bg-neutral-800 px-3 py-1 text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Links */}
      {project.links.length > 0 && (
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase">
            Links
          </h3>
          <div className="space-y-2">
            {project.links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                className="block rounded-xl bg-neutral-100 dark:bg-neutral-800 px-4 py-2 text-sm hover:bg-neutral-200 dark:hover:bg-neutral-700 transition"
              >
                {link.name}
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
      "Led large-scale sentiment analysis on 100K+ cross-platform posts to identify perception gaps and audience segments for NVIDIA.",
    techStack: ["NLP", "Sentiment Analysis", "Python", "Statistical Testing"],
    date: "2025",
    context: "CMU Practicum Project · Industry Partner: NVIDIA",
    role: "Data Analyst & Researcher",
    highlights: [
      "Built scalable NLP pipelines for multi-platform data",
      "Applied LDA topic modeling and entity recognition",
      "Identified gaming vs AI positioning perception gap",
      "Validated findings with statistical hypothesis testing",
      "Delivered executive-ready messaging recommendations",
    ],
    links: [{ name: "GitHub", url: "#" }],
    images: [{ src: "/landing-memojis.png", alt: "NVIDIA Project" }],
  },

  {
    category: "Retail Analytics",
    title: "VSP Vision — Frame Assortment Intelligence",
    src: "/landing-memojis.png",
    description:
      "Built an XGBoost forecasting pipeline across 162 SKUs (910K+ units), achieving R² = 0.737.",
    techStack: ["XGBoost", "Python", "Time-Series Forecasting", "SHAP"],
    date: "2025",
    context: "CMU Capstone · Industry Partner: VSP Vision",
    role: "Data Scientist & Product Analyst",
    highlights: [
      "Engineered 33 leakage-free time-series features",
      "Applied walk-forward validation",
      "Identified over-assortment in $150–$199 band",
      "Surfaced $200–$249 revenue opportunity zone",
      "Delivered 14 prioritized merchandising action items",
    ],
    links: [{ name: "GitHub", url: "https://github.com/sumreen7/vsp-frame-assortment" }],
    images: [{ src: "/landing-memojis.png", alt: "VSP Vision Project" }],
  },

  {
    category: "AI Product",
    title: "Naviyo — Adaptive AI Travel Partner",
    src: "/landing-memojis.png",
    description:
      "Designed an agentic AI travel assistant that dynamically replans itineraries using real-time signals and behavioral feedback loops.",
    techStack: ["Agentic AI", "LLMs", "NLP", "A/B Testing"],
    date: "2025 — Present",
    context: "Personal Startup · Founder",
    role: "Founder, Engineer & Product Lead",
    highlights: [
      "Built modular multi-agent AI architecture",
      "Integrated weather & crowd APIs for dynamic replanning",
      "Created sentiment-weighted safety scoring engine",
      "Validated with 200+ users via A/B testing",
      "Achieved 82% itinerary preference prediction accuracy",
    ],
    links: [{ name: "GitHub", url: "#" }],
    images: [{ src: "/landing-memojis.png", alt: "Naviyo Project" }],
  },

  {
    category: "Workforce Analytics",
    title: "Job Analyzer — Workforce Intelligence Platform",
    src: "/landing-memojis.png",
    description:
      "Analyzed 17K+ U.S. tech job postings to detect emerging skills, compensation shifts, and hiring trends.",
    techStack: ["Python", "SQL", "NLP", "Tableau"],
    date: "2025",
    context: "Academic Project · Carnegie Mellon University",
    role: "Data Engineer & Analyst",
    highlights: [
      "Built automated ETL pipeline for 17K+ job postings",
      "Implemented NER for structured skill extraction",
      "Identified 120+ emerging skills",
      "Built interactive dashboards reducing reporting time by 60%",
      "Mapped skill adjacency networks across tech roles",
    ],
    links: [{ name: "GitHub", url: "#" }],
    images: [{ src: "/landing-memojis.png", alt: "Job Analyzer Project" }],
  },
];

export const data: Project[] = projectData.map((project) => ({
  ...project,
  content: <ProjectDetail {...project} />,
}));