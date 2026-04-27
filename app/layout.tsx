import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: {
    default: "Build With Pradeep",
    template: "%s | Build With Pradeep",
  },
  description:
    "I build high-converting websites for coaches, businesses, and startups that actually bring clients and drive growth.",

  keywords: [
    "Web Developer India",
    "Next.js Developer",
    "Freelance Web Developer",
    "High Converting Websites",
    "Landing Page Developer",
  ],

  authors: [{ name: "Pradeep" }],

  creator: "Pradeep",

  openGraph: {
    title: "Build With Pradeep",
    description:
      "Websites that bring clients. Built fast. Designed to convert.",
    url: "https://yourdomain.com",
    siteName: "Build With Pradeep",
    images: [
      {
        url: "/og-image.png", // create this later
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Build With Pradeep",
    description:
      "High-converting websites for coaches and businesses.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/logo-icon.png",
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
      <body className="min-h-full flex flex-col">
        {children}
        <ScrollToTop />
        </body>
    </html>
  );
}
