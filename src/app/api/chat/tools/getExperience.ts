import { tool } from 'ai';
import { z } from 'zod';

export const getExperience = tool({
  description:
  "Get DETAILED information about Sumreen's professional experience. Only use this when the user asks for IN-DEPTH details about a specific role, internship, startup, or research work. Do NOT use this for simple questions like 'what companies have you worked for' or 'where have you worked' — answer those in plain text instead.",  parameters: z.object({
    detail: z.enum(['current', 'previous', 'startup', 'research', 'all'])
      .optional()
      .describe('Specify which experience to focus on: current startup, previous roles, research, or all')
  }).optional(),
  execute: async (params = {}) => {
    const { detail = 'all' } = params;

    const experienceData = {
      current: {
        name: "Naviyo – Adaptive AI Travel Partner",
        role: "Founder & Builder",
        status: "Active",
        summary: "Building an AI travel assistant that doesn't just suggest itineraries — it adapts them in real time based on who you are and what's happening around you.",
        description: [
          "Designed a tool-using agentic AI system that combines LLM reasoning, NLP sentiment analysis, and real-time signals (weather, crowd data, user preferences) to dynamically replan travel itineraries",
          "Built NLP review analyzer for sentiment and safety insights, helping users make smarter destination decisions",
          "Incorporated behavioral feedback loops to personalize recommendations over time — the more you use it, the smarter it gets",
          "Validated product direction through A/B testing with 200+ users, achieving 82% classification accuracy",
          "Applied product thinking from ideation to execution: user research, pain point mapping, competitive analysis, and iterative feature development"
        ],
        technologies: ["LLMs", "Agentic AI", "NLP", "A/B Testing", "Real-time Systems", "Personalization", "Python"]
      },

      previous: [
        {
          title: "Software Engineer",
          company: "Salesforce",
          period: "Jul 2023 – Aug 2025",
          location: "Hyderabad, India",
          summary: "Owned end-to-end feature delivery for internal asset management workflows serving 40K+ enterprise users — combining engineering execution with product thinking to drive measurable impact.",
          achievements: [
            "Drove a 40% reduction in onboarding time by redesigning lifecycle workflows and eliminating manual handoffs across high-volume asset creation pipelines",
            "Led post-launch experimentation using A/B testing on automation and validation logic, cutting manual verification effort by 65% while maintaining compliance standards",
            "Defined and tracked core product metrics (adoption rate, processing latency, error rate) through custom dashboards, directly informing roadmap decisions",
            "Mentored a junior intern on KPI design, dashboard development, and stakeholder communication",
            "Collaborated cross-functionally with ops, infra, and business teams to ship PRDs from ideation to production"
          ],
          technologies: ["Salesforce", "SOQL", "Python", "REST APIs", "Workflow Automation", "A/B Testing", "Dashboards"]
        },
        {
          title: "Product Analytics & Insights Intern",
          company: "SRM Films",
          period: "May 2023 – Jul 2023",
          location: "Hyderabad, India",
          summary: "Turned raw engagement data into strategic content insights — helping the team understand what their audience actually wanted.",
          achievements: [
            "Analyzed audience engagement, drop-off, and churn patterns across digital film content to surface behavioral insights and unmet user needs",
            "Built operational dashboards translating content performance data into actionable inputs for release strategy and marketing optimization",
            "Reduced manual reporting effort by 60% through automated analytics workflows"
          ],
          technologies: ["SQL", "Python", "Tableau", "Data Analysis"]
        },
        {
          title: "Summer Analyst Intern",
          company: "Salesforce",
          period: "May 2022 – Jul 2022",
          location: "Hyderabad, India",
          summary: "First exposure to enterprise-scale systems — shipped automations that made a real dent in onboarding friction.",
          achievements: [
            "Developed Slack–MuleSoft automations to streamline Salesforce onboarding workflows, cutting onboarding time from 3 days to under 4 hours",
            "Strengthened security controls while improving new hire engagement by 75%",
            "Gained hands-on experience with enterprise APIs and cross-system integrations at scale"
          ],
          technologies: ["Python", "REST APIs", "Salesforce", "MuleSoft", "Slack Automation"]
        }
      ],

      research: {
        role: "Research Assistant",
        supervisor: "Professor Dr. Supriya Vaddi",
        period: "2022 – 2023",
        institution: "G. Narayanamma Institute of Technology and Science, Hyderabad, India",
        summary: "Co-authored a published Springer paper on solar energy prediction — handling the full ML pipeline from raw data to a fine-tuned predictive model.",
        publication: {
          title: "Solar Energy Prediction and Demand Analysis",
          conference: "International Conference on Machine Learning, Big Data, and Data Analytics (ICMLBDA)",
          publisher: "Springer",
          year: 2023,
          doi: "978-3-031-51338-1_57",
          link: "https://link.springer.com/chapter/10.1007/978-3-031-51338-1_57",
          impact: {
            citations: "15+",
            downloads: "500+",
            academicMentions: "10+"
          },
          keywords: ["Solar Energy", "Machine Learning", "Predictive Analytics", "Demand Forecasting", "Renewable Energy"]
        },
        contributions: [
          "End-to-end data collection from real-world energy and meteorological sources",
          "Data cleaning, preprocessing, and feature engineering pipelines",
          "Built and benchmarked multiple ML models for solar energy forecasting",
          "Fine-tuned hyperparameters and iteratively improved model accuracy"
        ],
        technologies: ["Python", "Machine Learning", "Feature Engineering", "Predictive Modeling"]
      }
    };

    if (detail === 'current') {
      return { experience: { current: experienceData.current } };
    } else if (detail === 'previous') {
      return { experience: { previous: experienceData.previous } };
    } else if (detail === 'startup') {
      return { experience: { current: experienceData.current } };
    } else if (detail === 'research') {
      return { experience: { research: experienceData.research } };
    } else {
      return { experience: experienceData };
    }
  },
});