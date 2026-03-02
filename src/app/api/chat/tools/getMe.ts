import { tool } from 'ai';
import { z } from 'zod';

export const getMe = tool({
  description: 'This tool provides personal information about Fathima Sumreen including her background, interests, expertise, and experience.',
  parameters: z.object({
    query: z.string().describe("The user's query about Sumreen"),
  }),
  execute: async ({ query }) => {
    const meInfo = {
      name: "Fathima Sumreen",
      location: "Pittsburgh, PA, USA",
      hometown: "Hyderabad, India",
      currentRole: "Master's Student at Carnegie Mellon University (MISM - Business Intelligence & Data Analytics)",
      background: "Hey! I'm Sumreen, originally from Hyderabad and currently at Carnegie Mellon pursuing my Master's in Information Systems. I spent two years at Salesforce as a Software Engineer building AI-powered automation workflows — think Agentforce agents, Slack bots, and onboarding systems used by 40K+ enterprise users. Now I'm channeling that technical depth into product management, combining my engineering roots with a passion for data-driven decision making and user-centered design.",
      interests: "Outside of work and school, I'm someone who loves exploring new places and cultures — travel is genuinely my reset button. I'm also into keeping up with the latest in AI and tech, and I enjoy diving into competitive strategy whether that's in product thinking or just life in general. Ask me about my YOMIGO travel project and you'll see how those two worlds collide!",
      photo: "/new-image.png",
      expertise: [
        "Product Management",
        "AI & Automation",
        "Data Analytics",
        "Salesforce & Agentforce",
        "Python & SQL",
        "Market Research & Competitive Analysis"
      ],

experience: [
  "Founder & Builder - Naviyo (Adaptive AI Travel Partner) — Active",
  "Salesforce - Software Engineer (Asset Management, Business Technology)",
  "Salesforce - Summer Analyst Intern (Global Enterprise Operations)",
  "SRM Films - Product Analytics & Insights Intern"
],
      education: [
        "Carnegie Mellon University - MISM, Business Intelligence & Data Analytics (2025–2026)",
        "G. Narayanamma Institute of Technology and Science - B.E. Information Technology, GPA 9.29/10 (2019–2023)"
      ],
      certifications: [
        "Salesforce AI Associate",
        "Salesforce Advanced Admin",
        "Salesforce App Builder",
        "Wharton School - AI for Business",
        "Salesforce Ranger (82,000+ Trailhead points)"
      ],
      funFact: "I was one of only three students to receive a Merit Certificate of Excellence at GNITS for academic excellence and extracurricular leadership!"
    };

    return JSON.stringify({
      success: true,
      data: meInfo,
      message: "Here's information about Sumreen!"
    });
  },
});