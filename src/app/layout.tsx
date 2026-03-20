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

export const metadata: Metadata = {
  title: "SLK Traders - Industrial Equipment Experts",
  description:
    "Trusted wholesale distributor of industrial valves, pumps, glass-lined reactors & mechanical components. Serving manufacturers across Eastern India since 2012. IndiaMart Rank A.",
  keywords: [
    "industrial equipment",
    "industrial valves",
    "rotary airlock valve",
    "pump impeller",
    "glass lined reactor",
    "screw conveyor",
    "chain sprocket",
    "wholesale distributor",
    "Howrah",
    "West Bengal",
    "Eastern India",
    "SLK Traders",
    "B2B industrial supply",
  ],
  openGraph: {
    title: "SLK Traders - Industrial Equipment Experts",
    description:
      "Wholesale distributor of industrial components in Eastern India. 12+ years, IndiaMart Rank A, GST verified.",
    type: "website",
    locale: "en_IN",
    siteName: "SLK Traders",
  },
  twitter: {
    card: "summary_large_image",
    title: "SLK Traders - Industrial Equipment Experts",
    description:
      "Wholesale distributor of industrial components in Eastern India. 12+ years experience.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
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
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white">{children}</body>
    </html>
  );
}
