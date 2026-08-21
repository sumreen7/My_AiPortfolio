import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

// Load Inter font for non-Apple devices
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sumreen's Portfolio",
  description: "Portfolio of Fathima Sumreen — Salesforce Software Engineer (Asset Management), Agentic AI Builder, CMU MISM Graduate.",
  keywords: [
    "Sumreen",
    "Portfolio",
    "Salesforce",
    "Agentic AI",
    "CMU",
    "MISM",
    "React",
    "Next.js",
    "TypeScript"
  ],
  authors: [
    {
      name: "Fathima Sumreen",
      url: "https://www.linkedin.com/in/sumreen7/",
    },
  ],
  creator: "Fathima Sumreen",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sumreen7.com",
    title: "Fathima Sumreen Portfolio",
    description: "Portfolio of Fathima Sumreen — Salesforce Software Engineer (Asset Management), Agentic AI Builder, CMU MISM Graduate.",
    siteName: "Fathima Sumreen Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fathima Sumreen Portfolio",
    description: "Portfolio of Fathima Sumreen — Salesforce Software Engineer (Asset Management), Agentic AI Builder, CMU MISM Graduate.",
    creator: "@sumreen7",
  },
  icons: {
    icon: [
      {
        url: "/fevicon2.png",
        sizes: "any",
      }
    ],
    shortcut: "/fevicon2.png",
    apple: "/fevicon2.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" href="/fevicon2.png" sizes="any" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
        )}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <main className="flex min-h-screen flex-col">
            {children}
          </main>
          <ThemeToggle />
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}