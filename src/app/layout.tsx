import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import "./globals.css";

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-red-hat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio - Angad Patil",
  description:
    "I’m a software developer dedicated to building efficient, scalable, and user-centric applications. With a background in React & Node.js, I specialize in turning complex technical requirements into seamless digital experiences. Whether I'm optimizing a backend database or polishing a UI, my goal is always the same: writing clean code that solves real-world problems",
  keywords: ["Portfolio", "Software Developer", "Next.js"],
  icons: {
    icon: "/Icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${redHatDisplay.variable}`}>
      <body>{children}</body>
    </html>
  );
}
