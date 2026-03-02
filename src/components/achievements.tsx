'use client';

import { motion, Variants } from 'framer-motion';

interface AchievementCategory {
  category: string;
  icon: string;
  items: string[];
}

interface AchievementsProps {
  data?: { achievements: AchievementCategory[] } | null;
}

const DEFAULT_ACHIEVEMENTS: AchievementCategory[] = [
  { category: "Awards & Recognition", icon: "🏆", items: ["Tennis State Champion (Under-16) — National level, India", "Won Inter-college Badminton Tournament", "Best Project Award (IT Dept) — Solar Energy Prediction System, published by Springer", "Merit Certificate of Excellence — academic & extracurricular achievements", "Special Mention at Inter-college MUN 2021", "Merit certificate — IIIT Hyderabad Hackathon", "Distinction certificate — National Engineers Olympiad"] },
  { category: "Research & Publications", icon: "📄", items: ["Published at ICMLBDA 2023 (Springer) — Solar Energy Prediction & Demand Analysis", "15+ citations, 500+ downloads, 10+ academic mentions", "94% prediction accuracy using Python, TensorFlow, XGBoost & AWS"] },
  { category: "Engineering Impact @ Salesforce", icon: "⚡", items: ["40% reduction in onboarding time by redesigning lifecycle workflows", "65% cut in manual verification effort via A/B tested automation", "Shipped features serving 40K+ enterprise users end-to-end", "82,000+ Trailhead points, 186 badges"] },
  { category: "Community & Volunteering", icon: "🤝", items: ["StreetCause Coordinator — improved school infrastructure for underprivileged children", "Rotaract Club GNITS (Joint Director) — benefited 400+ people directly", "Entrepreneurship Cell GNITS (Director) — increased event attendance by 30%", "Earth Force Club, Salesforce — sustainability & tree-planting campaigns"] },
  { category: "Content & Community", icon: "📚", items: ["Founder of @coffeennovels — 60,000+ Instagram followers", "Book influencer inspiring deeper appreciation for fiction & literature"] },
  { category: "Academic", icon: "🎓", items: ["MISM at Carnegie Mellon University (Class of 2026)", "Selected for NVIDIA x CMU industry research collaboration", "VSP Vision — R² = 0.737 demand forecasting model", "Languages: English, Spanish, Hindi, Telugu, Arabic, Urdu, ASL"] },
];

const categoryColors: Record<string, { bg: string; text: string; dot: string }> = {
  "Awards & Recognition":            { bg: "bg-amber-50 dark:bg-amber-950/30",   text: "text-amber-600 dark:text-amber-400",   dot: "bg-amber-400" },
  "Research & Publications":         { bg: "bg-green-50 dark:bg-green-950/30",   text: "text-green-600 dark:text-green-400",   dot: "bg-green-400" },
  "Engineering Impact @ Salesforce": { bg: "bg-blue-50 dark:bg-blue-950/30",    text: "text-blue-600 dark:text-blue-400",    dot: "bg-blue-400" },
  "Community & Volunteering":        { bg: "bg-rose-50 dark:bg-rose-950/30",    text: "text-rose-600 dark:text-rose-400",    dot: "bg-rose-400" },
  "Content & Community":             { bg: "bg-purple-50 dark:bg-purple-950/30", text: "text-purple-600 dark:text-purple-400", dot: "bg-purple-400" },
  "Academic":                        { bg: "bg-sky-50 dark:bg-sky-950/30",      text: "text-sky-600 dark:text-sky-400",      dot: "bg-sky-400" },
};

const fallbackColor = { bg: "bg-gray-50 dark:bg-gray-900/30", text: "text-gray-600 dark:text-gray-400", dot: "bg-gray-400" };

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.19, 1, 0.22, 1] } },
};

const Achievements = ({ data }: AchievementsProps) => {
  const achievements = data?.achievements ?? DEFAULT_ACHIEVEMENTS;

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }} className="mx-auto w-full max-w-2xl px-1 py-4">
      <div className="mb-6 px-1">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Highlights</p>
        <h2 className="mt-1 text-3xl font-bold tracking-tight text-foreground">Achievements</h2>
      </div>
      <motion.div className="space-y-4" variants={containerVariants} initial="hidden" animate="visible">
        {achievements.map((section, sectionIdx) => {
          const color = categoryColors[section.category] ?? fallbackColor;
          return (
            <motion.div key={sectionIdx} variants={cardVariants} className="overflow-hidden rounded-2xl border border-border/50 bg-card shadow-sm">
              <div className={`flex items-center gap-2.5 px-4 py-3 ${color.bg}`}>
                <span className="text-base">{section.icon}</span>
                <span className={`text-xs font-semibold uppercase tracking-widest ${color.text}`}>{section.category}</span>
              </div>
              <div className="divide-y divide-border/40">
                {section.items.map((item, idx) => (
                  <motion.div key={idx} className="flex items-start gap-3 px-4 py-3.5" whileHover={{ backgroundColor: 'hsl(var(--muted) / 0.4)' }} transition={{ duration: 0.15 }}>
                    <span className={`mt-1.5 h-2 w-2 flex-shrink-0 rounded-full ${color.dot}`} />
                    <p className="text-sm text-foreground leading-relaxed">{item}</p>
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

export default Achievements;
