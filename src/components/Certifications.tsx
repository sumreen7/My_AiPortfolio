'use client';

import { motion, Variants } from 'framer-motion';

interface Certification {
  name: string;
  issuer: string;
  year: string;
}

interface CertificationCategory {
  category: string;
  icon: string;
  items: Certification[];
}

interface CertificationsProps {
  data?: { certifications: CertificationCategory[] } | null;
}

const DEFAULT_CERTIFICATIONS: CertificationCategory[] = [
  {
    category: "Salesforce",
    icon: "salesforce.png", 
    items: [
      { name: "Salesforce Certified Advanced Administrator", issuer: "Salesforce", year: "2023" },
      { name: "Salesforce Certified Platform Developer I", issuer: "Salesforce", year: "2024" },
      { name: "Trailblazer — 82,000+ points, 186 badges", issuer: "Salesforce Trailhead", year: "2025" },
    ],
  },
  {
    category: "Product and Gen AI",
    icon: "💎",
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
  }
];

const categoryColors: Record<string, { bg: string; text: string; dot: string }> = {
  "Salesforce":            { bg: "bg-blue-50 dark:bg-blue-950/30",    text: "text-blue-600 dark:text-blue-400",    dot: "bg-blue-400" },
  "Product and Gen AI":    { bg: "bg-red-50 dark:bg-red-950/30", text: "text-red-600 dark:text-red-400", dot: "bg-red-400" },
  "AI & Machine Learning": { bg: "bg-purple-50 dark:bg-purple-950/30", text: "text-purple-600 dark:text-purple-400", dot: "bg-purple-400" },
  "Cloud & Data":          { bg: "bg-emerald-50 dark:bg-emerald-950/30",      text: "text-emerald-600 dark:text-emerald-400",      dot: "bg-emerald-400" },
};

const fallbackColor = { bg: "bg-gray-50 dark:bg-gray-900/30", text: "text-gray-600 dark:text-gray-400", dot: "bg-gray-400" };

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.19, 1, 0.22, 1] } },
};

const Certifications = ({ data }: CertificationsProps) => {
  const certifications = data?.certifications ?? DEFAULT_CERTIFICATIONS;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
      className="mx-auto w-full max-w-2xl px-1 py-4"
    >
      <div className="mb-6 px-1">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Credentials</p>
        <h2 className="mt-1 text-3xl font-bold tracking-tight text-foreground">Certifications</h2>
      </div>

      <motion.div className="space-y-4" variants={containerVariants} initial="hidden" animate="visible">
        {certifications.map((section, sectionIdx) => {
          const color = categoryColors[section.category] ?? fallbackColor;
          return (
            <motion.div key={sectionIdx} variants={cardVariants} className="overflow-hidden rounded-2xl border border-border/50 bg-card shadow-sm">
              <div className={`flex items-center gap-2.5 px-4 py-3 ${color.bg}`}>
                {/* <span className="text-base">{section.icon}</span> */}
                {section.category === "Salesforce" ? (
  <img
    src="/salesforce.png"
    alt="Salesforce"
    className="h-4 w-auto"
  />
) : (
  <span className="text-base">{section.icon}</span>
)}
                <span className={`text-xs font-semibold uppercase tracking-widest ${color.text}`}>{section.category}</span>
              </div>
              <div className="divide-y divide-border/40">
                {section.items.map((cert, idx) => (
                  <motion.div key={idx} className="flex items-center justify-between px-4 py-3.5" whileHover={{ backgroundColor: 'hsl(var(--muted) / 0.4)' }} transition={{ duration: 0.15 }}>
                    <div className="flex items-center gap-3 min-w-0">
                      <span className={`mt-0.5 h-2 w-2 flex-shrink-0 rounded-full ${color.dot}`} />
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-foreground">{cert.name}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{cert.issuer}</p>
                      </div>
                    </div>
                    <span className="ml-4 flex-shrink-0 rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">{cert.year}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Certifications;
