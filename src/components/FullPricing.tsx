'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, Rocket, TrendingUp, Trophy, Zap, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import AnimatedSection from './AnimatedSection';

const packages = [
  {
    name: "Starter",
    badge: "ELITE ENTRY",
    icon: Rocket,
    price: 799,
    tagline: "Professional Web Ecosystem + AI Integration",
    included: [
      "Custom UI/UX (5–7 Pages)",
      "Mobile Responsive Core",
      "Basic AI Neural Assistant",
      "Enterprise Lead Forms",
      "High-DA SEO Foundation",
      "3 Months Support"
    ],
    glow: "rgba(0, 102, 255, 0.4)",
    border: "border-[#0066ff]/20",
    text: "text-[#0066ff]",
    btn: "bg-[#0066ff] hover:shadow-[0_0_30px_rgba(0,102,255,0.4)]"
  },
  {
    name: "Growth",
    badge: "MOST POPULAR",
    icon: TrendingUp,
    price: 2500,
    tagline: "Full Omnichannel Presence + Automation",
    included: [
      "Everything in Starter+",
      "Native iOS + Android App",
      "Advanced AI Chat Architect",
      "WhatsApp & IG AI Integration",
      "1 Custom Neural Workflow",
      "6 Months Support"
    ],
    glow: "rgba(204, 255, 0, 0.4)",
    border: "border-[#ccff00]/40",
    text: "text-[#ccff00]",
    btn: "bg-[#ccff00] text-black hover:shadow-[0_0_30px_rgba(204,255,0,0.4)]",
    highlight: true
  },
  {
    name: "Enterprise",
    badge: "ABSOLUTE DOMINANCE",
    icon: Trophy,
    price: 6000,
    tagline: "Self-Optimizing Digital Ecosystem",
    included: [
      "Everything in Growth+",
      "Full Custom Web Application",
      "Autonomous AI Voice Agent",
      "3+ Neural Workflows",
      "Custom Data Dashboard",
      "12 Months VIP Support"
    ],
    glow: "rgba(255, 255, 255, 0.2)",
    border: "border-white/20",
    text: "text-white",
    btn: "bg-white text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
  }
];

export default function PricingSection() {
  const [currentIndex, setCurrentIndex] = useState(1); // Default to Growth
  const scrollRef = useRef<HTMLDivElement>(null);

  const next = () => setCurrentIndex((prev) => (prev + 1) % packages.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + packages.length) % packages.length);

  const pkg = packages[currentIndex];
  const ActiveIcon = pkg.icon;

  return (
    <section className="py-24 md:py-32 bg-black relative overflow-hidden" id="pricing">
      {/* Ambience */}
      <div className="absolute top-0 left-1/4 w-[1000px] h-[1000px] bg-[#0066ff]/[0.02] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1550px] mx-auto px-6">
        <AnimatedSection className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
            <Zap className="w-4 h-4 text-[#0066ff]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/60 font-black">Investment Protocols</span>
          </div>
          <h2 className="text-[2.5rem] md:text-[5rem] lg:text-[6.5rem] font-heading font-black leading-[0.85] tracking-tighter uppercase mb-6 text-white">
            CHOOSE YOUR <span className="italic text-[#0066ff]">LEVEL</span>
          </h2>
          <p className="text-[#8A8A9A] text-xl font-body font-light max-w-2xl mx-auto">
            Transparent pricing for businesses ready to dominate their market.
          </p>
        </AnimatedSection>

        {/* Pricing Slider */}
        <div className="relative">
          {/* Navigation Controls (Only visible/active when needed) */}
          <div className="flex justify-center gap-4 mb-12">
             <button onClick={prev} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#0066ff] hover:text-white transition-all group">
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
             </button>
             <div className="flex items-center gap-2 group cursor-pointer" onClick={() => setCurrentIndex(0)}>
                <div className={`h-1.5 transition-all duration-300 rounded-full ${currentIndex === 0 ? 'w-8 bg-[#0066ff]' : 'w-2 bg-white/10'}`} />
                <div className={`h-1.5 transition-all duration-300 rounded-full ${currentIndex === 1 ? 'w-8 bg-[#ccff00]' : 'w-2 bg-white/10'}`} onClick={(e) => {e.stopPropagation(); setCurrentIndex(1)}} />
                <div className={`h-1.5 transition-all duration-300 rounded-full ${currentIndex === 2 ? 'w-8 bg-white' : 'w-2 bg-white/10'}`} onClick={(e) => {e.stopPropagation(); setCurrentIndex(2)}} />
             </div>
             <button onClick={next} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#0066ff] hover:text-white transition-all group">
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
             </button>
          </div>

          <div className="relative overflow-visible px-4">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-8 items-stretch justify-center">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: 'circOut' }}
                  className="w-full max-w-2xl mx-auto flex flex-col"
                >
                  <div className={`relative h-full glass-premium rounded-[4rem] border-2 transition-all duration-700 p-12 overflow-hidden flex flex-col ${pkg.border} shadow-[0_50px_100px_rgba(0,0,0,0.5)]`}>
                    
                    {/* Background Glow */}
                    <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full blur-[120px] pointer-events-none opacity-40 shadow-inner" style={{ backgroundColor: pkg.glow }} />
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-12">
                        <span className={`font-mono text-[10px] font-black px-6 py-2 rounded-full tracking-[0.2em] border border-white/10 uppercase ${pkg.highlight ? 'bg-[#ccff00] text-black shadow-[0_0_20px_rgba(204,255,0,0.3)]' : 'bg-white/5 text-white/50'}`}>
                          {pkg.badge}
                        </span>
                        <ActiveIcon className={`w-12 h-12 ${pkg.text}`} />
                      </div>

                      <h3 className="text-5xl md:text-7xl font-heading font-black text-white uppercase tracking-tighter mb-4 leading-none italic">
                        {packages[currentIndex].name}
                      </h3>
                      <div className="flex items-baseline gap-3 mb-6">
                        <span className="text-6xl md:text-8xl font-heading font-black text-white tracking-tighter">
                          ${packages[currentIndex].price}
                        </span>
                        <span className="text-white/30 font-mono text-xs uppercase tracking-widest">Starting Price</span>
                      </div>
                      <p className="text-white/60 font-body text-lg mb-12 leading-relaxed">
                        {packages[currentIndex].tagline}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 mb-16">
                        {packages[currentIndex].included.map((feat, idx) => (
                          <div key={idx} className="flex items-center gap-4 text-white/80 font-mono uppercase text-[10px] tracking-wider">
                            <div className="w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                              <Check className={`w-3 h-3 ${packages[currentIndex].text}`} />
                            </div>
                            {feat}
                          </div>
                        ))}
                      </div>

                      <div className="mt-auto">
                        <Link 
                          href="/contact"
                          className={`w-full py-7 rounded-[2rem] font-heading font-black text-sm md:text-lg uppercase tracking-widest flex items-center justify-center gap-4 transition-all ${packages[currentIndex].btn} ${packages[currentIndex].name === 'Starter' ? 'text-white' : ''}`}
                        >
                          ACTIVATE PROTOCOL <ArrowRight className="w-6 h-6" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Small Footer Note */}
        <AnimatedSection className="mt-20 text-center">
           <p className="text-white/30 font-mono text-[9px] uppercase tracking-[0.5em]">
              Security Protocol // Encrypted_Investment_Entry_2026
           </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
