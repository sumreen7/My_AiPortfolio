import { tool } from 'ai';
import { z } from 'zod';

export const getSkills = tool({
  description:
    "Show Sumreen's technical and product skills, especially Salesforce, Agentforce, agentic AI, data, and engineering.",
  parameters: z.object({}).optional(),
  execute: async () => {
    return {
      skills: [
        {
          category: 'Salesforce & Agentic AI',
          items: ['Agentforce', 'Salesforce', 'Ray', 'Ray Serve', 'SOQL', 'Apex', 'LLM Agents', 'RAG', 'Tool Calling', 'Multi-Agent Systems'],
        },
        {
          category: 'Programming',
          items: ['Python', 'Java', 'SQL', 'JavaScript/TypeScript', 'Shell'],
        },
        {
          category: 'ML & Data',
          items: ['PyTorch', 'TensorFlow', 'XGBoost', 'Spark', 'Airflow', 'Tableau', 'Power BI', 'Pinecone', 'FAISS'],
        },
        {
          category: 'Cloud & Apps',
          items: ['Azure', 'AWS', 'Docker', 'Kubernetes', 'FastAPI', 'React', 'Next.js'],
        },
      ],
    };
  },
});
