import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  variable: "--font-instrument-serif",
  subsets: ["latin"],
});

const interDisplay = Inter({
  weight: ["400"],
  variable: "--font-inter-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brnr | Software Engineer",
  description:
    "Personal website of Tim Boerner - Full-stack engineer specializing in growth engineering, React, TypeScript, and Node.js",
  keywords: [
    "Software Engineer",
    "Full-stack Developer",
    "React",
    "TypeScript",
    "Node.js",
    "Growth Engineering",
  ],
  authors: [{ name: "Tim Boerner" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <JsonLd />
      </head>
      <body
        className={`${instrumentSerif.variable} ${interDisplay.variable} antialiased bg-zinc-900`}
      >
        {children}
      </body>
    </html>
  );
}
