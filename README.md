# Portfolio - Fathima Sumreen

A modern, interactive portfolio built with Next.js, featuring an AI-powered chat interface using Groq. Ask it anything about my experience, projects, and skills.

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- 🤖 AI-powered chat interface using Groq's Llama model
- 🛠️ Full-stack development with Next.js 16
- 📱 Mobile-first responsive design
- 🌙 Dark/Light theme support
- ⚡ Fast performance with optimized builds
- 🔧 Tool-based AI responses for portfolio information

## Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS 4, Framer Motion
- **AI**: Groq API with Llama 3.3 70B
- **UI Components**: Radix UI, Lucide React
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm
- Groq API key

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sumreen7/NewPortfolio.git
cd NewPortfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Add your API keys to `.env.local`:
```env
GROQ_API_KEY=your_groq_api_key_here
GITHUB_TOKEN=your_github_token_here
BRAVE_API_KEY=your_brave_api_key_here
```

### Getting API Keys

#### Groq API Key
1. Visit [Groq Console](https://console.groq.com/)
2. Sign up or log in
3. Navigate to API Keys and create a new key
4. Add it to your `.env.local` file

#### Brave API Key (for Web Search)
1. Visit [Brave Search API](https://api.search.brave.com/)
2. Sign up or log in
3. Navigate to API Keys and create a new key
4. Add it to your `.env.local` file

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Building for Production

```bash
npm run build
npm start
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GROQ_API_KEY` | Groq API key for AI chat | Yes |
| `GITHUB_TOKEN` | GitHub token for repo stars | No |
| `BRAVE_API_KEY` | Brave Search API for web search | No |

## AI Chat Features

The portfolio includes an AI-powered chat interface that can:

- Introduce me and share my background
- Talk about my experience at Salesforce and CMU
- Describe my projects (Ai Chief of Staff, NVIDIA x CMU, YOMIGO, Job Analyzer)
- Share my skills and certifications
- Answer questions about my hobbies (tennis, trekking, @coffeennovels)
- Provide contact information and resume
- Search the web for current information

### Rate Limiting

- 10 requests per minute per IP
- Automatic retry logic for transient errors
- Graceful error handling for API failures

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   ├── chat/          # AI chat endpoint + tools
│   │   └── github-stars/  # GitHub stars endpoint
│   ├── chat/              # Chat page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── chat/             # Chat-related components
│   ├── projects/         # Project display components
│   └── ui/               # Reusable UI components
└── lib/                  # Utility functions
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on every push

## License

This project is licensed under the MIT License.