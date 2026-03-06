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
  title: "Angad Patil | MERN Stack Developer",
  description:
    "Welcome to my corner of the internet. Here you'll find the projects I've built, the problems I've solved, and the ideas I'm excited about.",
  keywords: [
    // Your Name
    "Angad",
    "Angad1141",
    "Angad Patil",
    "Angad Portfolio",

    // Your Role
    "Frontend Developer",
    "Web Developer",
    "Full Stack Developer", // add if applicable

    // Your Tech Stack
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",

    // General SEO Terms
    "Portfolio",
    "Developer Portfolio",
    "Hire Developer",
  ],
  authors: [{ name: "Angad Patil" }],
  creator: "Angad Patil",
  icons: {
    icon: "/Icon.png",
  },
  openGraph: {
    title: "Angad Patil | MERN STACK Developer",
    description:
      "Welcome to my corner of the internet. Here you'll find the projects I've built, the problems I've solved, and the ideas I'm excited about.",
    url: "https://portfolioangad1141.vercel.app",
    siteName: "Angad Patil Portfolio",
    images: [
      {
        url: "http://portfolioangad1141.vercel.app/Preview.png",
        width: 1200,
        height: 630,
        alt: "Angad Patil Portfolio Preview",
      },
    ],
    locale: "en-IN",
    type: "website",
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
    <html lang="en" className={`${redHatDisplay.variable}`}>
      <body>{children}</body>
    </html>
  );
}
