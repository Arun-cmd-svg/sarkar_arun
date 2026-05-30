import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Sarkar Arun | Websites, Apps & AI Automation",
    template: "%s | Sarkar Arun",
  },
  description:
    "Sarkar Arun builds modern websites, mobile apps, admin dashboards, AI automation tools, and SEO-friendly blog websites for businesses.",

  keywords: [
    "Sarkar Arun",
    "website developer India",
    "freelance web developer",
    "mobile app developer",
    "AI automation developer",
    "business website development",
    "Next.js developer",
    "React Native developer",
    "SEO website development",
    "admin dashboard development",
  ],

  authors: [{ name: "Sarkar Arun" }],
  creator: "Sarkar Arun",

  openGraph: {
    title: "Sarkar Arun | Websites, Apps & AI Automation",
    description:
      "I build modern websites, mobile apps, dashboards, AI automation tools, and SEO-friendly blog websites for businesses.",
    url: "https://sarkar-arun.vercel.app/",
    siteName: "Sarkar Arun",
    type: "website",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sarkar Arun | Websites, Apps & AI Automation",
    description:
      "Modern website, mobile app, dashboard, and AI automation development services.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
