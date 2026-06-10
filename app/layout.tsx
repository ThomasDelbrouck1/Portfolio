import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const mono  = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

const description =
  "Student developer from Belgium building web apps, APIs, cloud deployments, and the occasional quantum experiment. Currently preparing for a BASF internship.";

export const metadata: Metadata = {
  metadataBase: new URL("https://thomasdelbrouck.dev"), // update once deployed
  title: "Thomas Delbrouck — Developer",
  description,
  keywords: [
    "Thomas Delbrouck",
    "developer",
    "student",
    "Belgium",
    "Next.js",
    "TypeScript",
    "full stack",
    "web development",
  ],
  authors: [{ name: "Thomas Delbrouck" }],
  openGraph: {
    title: "Thomas Delbrouck — Developer",
    description,
    type: "website",
    locale: "en_US",
    siteName: "Thomas Delbrouck",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thomas Delbrouck — Developer",
    description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Runs before paint — prevents flash of wrong theme */}
        <script dangerouslySetInnerHTML={{ __html: `
          try {
            var t = localStorage.getItem('theme');
            var dark = t === null ? true : t === 'dark';
            document.documentElement.classList.toggle('dark', dark);
          } catch(e) {}
        `}} />
      </head>
      <body className="antialiased font-sans text-slate-800 dark:text-slate-100 transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
