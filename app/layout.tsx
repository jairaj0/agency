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
  title: "Premium Web & Blockchain Development Agency | Modern Marketplace Solutions",
  description:
    "Hire expert developers for Web3, Blockchain, Solana, EVM, Smart Contracts, Next.js, React, and Full-Stack development. We build high-quality, scalable, and modern marketplace solutions for global clients.",
  keywords: [
    "web development agency",
    "blockchain development",
    "solana developer",
    "evm smart contract",
    "nextjs developer",
    "react developer",
    "marketplace development",
    "crypto development agency",
    "dapp development",
  ],
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Premium Web & Blockchain Development Agency",
    description:
      "High-quality Web3, Blockchain, and full-stack development services. Hire expert developers for your marketplace or startup.",
    url: "https://your-agency-website.com",
    siteName: "Your Agency Name",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Agency Preview",
      },
    ],
    locale: "en_US",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
      >
        {children}
      </body>
    </html>
  );
}
