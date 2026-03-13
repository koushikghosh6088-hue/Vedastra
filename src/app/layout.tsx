import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import PerformanceManager from "@/components/PerformanceManager";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Joint WebSolutions | AI-Powered Digital Agency",
  description: "Futuristic digital experiences and high-energy design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-black text-white font-body antialiased min-h-screen">
        <Preloader />
        <CustomCursor />
        {/* Floating Shell Container */}
        <div className="max-w-[1600px] mx-auto min-h-screen bg-obsidian rounded-[2.5rem] ring-1 ring-white/10 shadow-2xl relative overflow-hidden flex flex-col my-4">
          <div className="bg-grain opacity-20 absolute inset-0 pointer-events-none z-0 mix-blend-overlay" />
          <div className="bg-grid absolute inset-0 pointer-events-none z-0 opacity-40 mix-blend-overlay" />
          <Navbar />
          <main className="flex-grow z-10 w-full relative">
            <PerformanceManager>
              {children}
            </PerformanceManager>
          </main>
          <Footer />
        </div>
        
      </body>
    </html>
  );
}
