'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, FlaskConical } from 'lucide-react';
import Image from 'next/image';

const Experience = () => {
  const experienceData = [
    {
      title: 'Co-Founder & Builder',
      company: 'Naviyo – Adaptive AI Travel Partner',
      period: 'Present',
      location: 'Pittsburgh, PA',
      description: 'Building an AI travel assistant that dynamically adapts itineraries in real time based on who you are and what\'s happening around you.',
      achievements: [
        'Designed a tool-using agentic AI system combining LLM reasoning, NLP sentiment analysis, and real-time signals (weather, crowd data, preferences)',
        'Built NLP review analyzer for sentiment and safety insights, helping users make smarter destination decisions',
        'Incorporated behavioral feedback loops to personalize recommendations over time',
        'Validated product direction through A/B testing with 200+ users, achieving 82% classification accuracy',
        'Applied product thinking end-to-end: user research, pain point mapping, competitive analysis, and iterative feature development'
      ],
      technologies: ['LLMs', 'Agentic AI', 'NLP', 'A/B Testing', 'Real-time Systems', 'Python', 'Personalization'],
      type: 'Startup',
      logo: '/naviyo.png',
      color: 'bg-violet-50 text-violet-600 border border-violet-200',
    },
    {
      title: 'Software Engineer',
      company: 'Salesforce',
      period: 'Jul 2023 – Aug 2025',
      location: 'Hyderabad, India',
      description: 'Owned end-to-end feature delivery for internal asset management workflows serving 40K+ enterprise users.',
      achievements: [
        'Drove a 40% reduction in onboarding time by redesigning lifecycle workflows and eliminating manual handoffs',
        'Led A/B testing on automation and validation logic, cutting manual verification effort by 65% while maintaining compliance',
        'Defined and tracked core product metrics (adoption rate, processing latency, error rate) through custom dashboards',
        'Mentored a junior intern on KPI design, dashboard development, and stakeholder communication',
        'Collaborated cross-functionally with ops, infra, and business teams to ship PRDs from ideation to production'
      ],
      technologies: ['Salesforce', 'SOQL', 'Python', 'REST APIs', 'Workflow Automation', 'A/B Testing', 'Dashboards'],
      type: 'Full-time',
      logo: '/salesforce.png',
      color: 'bg-blue-50 text-blue-600 border border-blue-200',
    },
    {
      title: 'Research Assistant',
      company: 'G. Narayanamma Institute of Technology and Science',
      period: '2022 – 2023',
      location: 'Hyderabad, India',
      description: 'Co-authored a published Springer paper on solar energy prediction under Professor Dr. Supriya Vaddi.',
      achievements: [
        'End-to-end data collection from real-world energy and meteorological sources',
        'Built data cleaning, preprocessing, and feature engineering pipelines',
        'Benchmarked multiple ML models for solar energy forecasting and fine-tuned for accuracy',
        'Published at ICMLBDA 2023 — 15+ citations, 500+ downloads, 10+ academic mentions',
      ],
      technologies: ['Python', 'Machine Learning', 'Feature Engineering', 'Predictive Modeling', 'Data Preprocessing'],
      type: 'Research',
      logo: '/gnits.jpg',
      color: 'bg-green-50 text-green-600 border border-green-200',
      publication: {
        title: 'Solar Energy Prediction and Demand Analysis',
        link: 'https://link.springer.com/chapter/10.1007/978-3-031-51338-1_57',
        doi: '978-3-031-51338-1_57',
      }
    },
    {
      title: 'Product Analytics & Insights Intern',
      company: 'SRM Films',
      period: 'May 2023 – Jul 2023',
      location: 'Hyderabad, India',
      description: 'Turned raw engagement data into strategic content insights — helping the team understand what their audience actually wanted.',
      achievements: [
        'Analyzed audience engagement, drop-off, and churn patterns across digital film content',
        'Built operational dashboards translating content performance into actionable release strategy inputs',
        'Reduced manual reporting effort by 60% through automated analytics workflows'
      ],
      technologies: ['SQL', 'Python', 'Tableau', 'Data Analysis'],
      type: 'Internship',
      logo: '/srm.jpeg',
      color: 'bg-pink-50 text-pink-600 border border-pink-200',
    },
    {
      title: 'Summer Analyst Intern',
      company: 'Salesforce',
      period: 'May 2022 – Jul 2022',
      location: 'Hyderabad, India',
      description: 'First exposure to enterprise-scale systems — shipped automations that made a real dent in onboarding friction.',
      achievements: [
        'Developed Slack–MuleSoft automations cutting onboarding time from 3 days to under 4 hours',
        'Strengthened security controls while improving new hire engagement by 75%',
        'Gained hands-on experience with enterprise APIs and cross-system integrations at scale'
      ],
      technologies: ['Python', 'REST APIs', 'Salesforce', 'MuleSoft', 'Slack Automation'],
      type: 'Internship',
      logo: '/salesforce.png',
      color: 'bg-blue-50 text-blue-600 border border-blue-200',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: import('framer-motion').Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeInOut' as const },
    },
  };

  const badgeVariants: import('framer-motion').Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: 'easeInOut' as const },
    },
  };

  return (
    <motion.div
      initial={{ scale: 0.98, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
      className="mx-auto w-full max-w-5xl rounded-4xl"
    >
      <Card className="w-full border-none px-6 pb-12 shadow-none">
        <CardHeader className="px-0 pb-1">
          <CardTitle className="text-primary px-0 text-4xl font-bold">
            Work Experience
          </CardTitle>
        </CardHeader>

        <CardContent className="px-0">
          <motion.div
            className="space-y-8 px-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {experienceData.map((experience, index) => (
              <motion.div
                key={index}
                className="space-y-4 px-0"
                variants={itemVariants}
              >
                <div className="flex items-start gap-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg text-2xl ${experience.color} overflow-hidden`}>
                    {experience.logo && (
                      <Image
                        src={experience.logo}
                        alt={`${experience.company} logo`}
                        width={40}
                        height={40}
                        className="object-contain w-full h-full"
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-accent-foreground text-xl font-semibold">
                        {experience.title}
                      </h3>
                      <Badge variant="secondary" className="text-xs">
                        {experience.type}
                      </Badge>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        <span>{experience.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{experience.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground text-base leading-relaxed">
                  {experience.description}
                </p>

                {'publication' in experience && experience.publication && (
                  <a
                    href={experience.publication.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-blue-500 hover:underline"
                  >
                    <FlaskConical className="h-4 w-4" />
                    {experience.publication.title} — DOI: {experience.publication.doi}
                  </a>
                )}

                <div className="space-y-2">
                  <h4 className="text-accent-foreground text-sm font-semibold uppercase tracking-wide">
                    Key Achievements
                  </h4>
                  <ul className="space-y-1">
                    {experience.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-muted-foreground flex items-start gap-2 text-sm">
                        <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-current flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="text-accent-foreground text-sm font-semibold uppercase tracking-wide">
                    Technologies & Skills
                  </h4>
                  <motion.div
                    className="flex flex-wrap gap-2"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {experience.technologies.map((tech, idx) => (
                      <motion.div key={idx} variants={badgeVariants} whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}>
                        <Badge className="border px-3 py-1.5 font-normal">
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {index < experienceData.length - 1 && (
                  <div className="border-t border-border pt-6" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Experience;