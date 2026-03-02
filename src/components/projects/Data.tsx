import Image from 'next/image';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const PROJECT_CONTENT = [
  {
    title: 'NVIDIA x CMU — Social Listening & Market Insights',
    description:
      'Conducted large-scale market sentiment analysis on 100K+ user posts to identify audience segments and perception gaps, informing product positioning and messaging strategy. Validated findings using statistical testing to ensure decision confidence.',
    techStack: ['NLP', 'Sentiment Analysis', 'Python', 'Statistical Testing', 'Market Research', 'Data Analytics'],
    date: '2025',
    links: [{ name: 'GitHub', url: '#' }],
    images: [{ src: '/landing-memojis.png', alt: 'NVIDIA x CMU Social Listening project' }],
  },
  {
    title: 'VSP Vision — Frame Assortment Intelligence',
    description:
      'Built an end-to-end demand forecasting and assortment optimization pipeline for Visionworks eyewear retail — 162 SKUs, 3 brands, 2 regions, 910K+ units. Engineered 33 leakage-free time-series features and trained a tuned XGBoost model (R² = 0.737 log-scale) to predict SKU-level monthly demand. Identified structural assortment gaps, surfaced white-space opportunities (Oval, Titanium, Cat Eye), and translated predictions into 14 prioritized product action items.',
    techStack: ['XGBoost', 'Python', 'Time-Series Forecasting', 'Feature Engineering', 'Demand Forecasting', 'Retail Analytics', 'Data Visualization'],
    date: '2025',
    links: [{ name: 'GitHub', url: 'https://github.com/sumreen7/vsp-frame-assortment' }],
    images: [{ src: '/landing-memojis.png', alt: 'VSP Vision Frame Assortment Intelligence' }],
  },
  {
    title: 'Naviyo — AI Travel Product',
    description:
      'Identified user pain points and competitive gaps to design an AI travel product. Built an NLP review analyzer for sentiment and safety insights, and validated feature direction through A/B testing.',
    techStack: ['NLP', 'A/B Testing', 'Python', 'Sentiment Analysis', 'Product Design', 'AI'],
    date: '2025',
    links: [{ name: 'GitHub', url: '#' }],
    images: [{ src: '/landing-memojis.png', alt: 'Naviyo AI Travel Product' }],
  },
  {
    title: 'Job Analyzer — Workforce Intelligence Platform',
    description:
      'Built an AI-driven system using structured data processing and algorithms on 17K+ U.S. tech job postings. Created automated dashboards that identified 120+ emerging skills and accelerated hiring insights by 60%.',
    techStack: ['Python', 'SQL', 'Data Processing', 'Dashboard', 'AI', 'Workforce Analytics'],
    date: '2025',
    links: [{ name: 'GitHub', url: '#' }],
    images: [{ src: '/landing-memojis.png', alt: 'Job Analyzer Workforce Intelligence Platform' }],
  },
];

interface ProjectProps {
  title: string;
}

const ProjectContent = ({ project }: { project: ProjectProps }) => {
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);

  if (!projectData) {
    return <div>Project details not available</div>;
  }

  return (
    <div className="space-y-10">
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{projectData.date}</span>
          </div>
          <p className="text-secondary-foreground font-sans text-base leading-relaxed md:text-lg">
            {projectData.description}
          </p>
          <div className="pt-4">
            <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {projectData.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {projectData.links && projectData.links.length > 0 && (
        <div className="mb-24">
          <div className="px-6 mb-4 flex items-center gap-2">
            <h3 className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">Links</h3>
            <Link className="text-muted-foreground w-4" />
          </div>
          <Separator className="my-4" />
          <div className="space-y-3">
            {projectData.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#F5F5F7] flex items-center justify-between rounded-xl p-4 transition-colors hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700"
              >
                <span className="font-light capitalize">{link.name}</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
      )}

      {projectData.images && projectData.images.length > 0 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {projectData.images.map((image, index) => (
              <div key={index} className="relative aspect-video overflow-hidden rounded-2xl">
                <Image src={image.src} alt={image.alt} fill className="object-cover transition-transform" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export const data = [
  {
    category: 'Market Research & AI',
    title: 'NVIDIA x CMU — Social Listening & Market Insights',
    src: '/landing-memojis.png',
    content: <ProjectContent project={{ title: 'NVIDIA x CMU — Social Listening & Market Insights' }} />,
  },
  {
    category: 'Retail Analytics & Forecasting',
    title: 'VSP Vision — Frame Assortment Intelligence',
    src: '/landing-memojis.png',
    content: <ProjectContent project={{ title: 'VSP Vision — Frame Assortment Intelligence' }} />,
  },
  {
    category: 'AI Product - Startup',
    title: 'Naviyo — AI Travel Product',
    src: '/landing-memojis.png',
    content: <ProjectContent project={{ title: 'Naviyo — AI Travel Product' }} />,
  },
  {
    category: 'Data Analytics',
    title: 'Job Analyzer — Workforce Intelligence Platform',
    src: '/landing-memojis.png',
    content: <ProjectContent project={{ title: 'Job Analyzer — Workforce Intelligence Platform' }} />,
  },
];