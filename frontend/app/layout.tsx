import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import NextTopLoader from "nextjs-toploader";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aging at Home Hub | Safe Independent Living",
  description: "Personalized home safety recommendations for older adults in Orange County.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script src="/error-capture.js" strategy="beforeInteractive" />
      </head>
      <body className={`${inter.className} bg-slate-50 min-h-screen flex flex-col`}>
        <NextTopLoader color="#2563EB" />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <footer className="bg-white border-t border-slate-200 py-8 mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-500 text-sm">
            <p>© {new Date().getFullYear()} Aging at Home Hub. All rights reserved.</p>
            <p className="mt-2">Empowering older adults to age in place safely.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

