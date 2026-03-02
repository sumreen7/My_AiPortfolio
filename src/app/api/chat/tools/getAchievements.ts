import { tool } from "ai";
import { z } from "zod";

export const getAchievements = tool({
  description:
    "Show Fathima Sumreen's key achievements, awards, publications, volunteering, and notable accomplishments.",
  parameters: z.preprocess(
    (val) => (val === null || val === undefined ? {} : val),
    z.object({
      _placeholder: z.string().optional(),
    })
  ),
  execute: async () => {
    return {
      achievements: [
        {
          category: "Awards & Recognition",
          icon: "🏆",
          items: [
            "State Champion (Under-16), Tennis - Competed at the national level in India",
            "Won Inter-College Badminton Tournament",
            "Merit Certificate of Excellence (Top 3 Awardee) - Received scholarship for outstanding academic and extracurricular performance",
            "Special Mention, Inter-College Model United Nations (2021)",
            "Merit Certificate Recipient, IIIT Hyderabad Hackathon",
            "Distinction Award, National Engineers Olympiad",
          ],
        },
        {
          category: "Research & Publications",
          icon: "📄",
          items: [
            "Published at ICMLBDA 2023 (Springer) — Solar Energy Prediction & Demand Analysis",
            "15+ citations, 500+ downloads, 10+ academic mentions",
          ],
        },
        {
          category: "Engineering Impact @ Salesforce",
          icon: "⚡",
          items: [
            "40% reduction in onboarding time by redesigning lifecycle workflows",
            "65% cut in manual verification effort via A/B tested automation",
            "Shipped features serving 40K+ enterprise users",
            "82,000+ Trailhead points, 186 badges",
          ],
        },
        {
          category: "Community & Volunteering",
          icon: "🤝",
          items: [
            "Director, Entrepreneurship Cell GNITS - Increased event attendance by 30% through strategic planning and outreach",
            "Joint Director, Rotaract Club GNITS — Drove community programs impacting 400+ beneficiaries",
            "Member, Street Cause — Led initiatives to improve school infrastructure for underprivileged children",
            "Member, Earthforce (Salesforce) — Contributed to sustainability and environmental impact initiatives",
          ],
        },
        {
          category: "Content & Community",
          icon: "📚",
          items: [
            "Founder of @coffeennovels — 60,000+ Instagram followers",
          ],
        },
      ],
    };
  },
});
