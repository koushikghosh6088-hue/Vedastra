'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { Activity, Globe, Smartphone, Bot, BarChart3, AlertTriangle, Users, Cpu, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const painPoints = [
  {
    id: "Problem #1",
    problem: "You Don't Have a Website — Or It's Embarrassingly Outdated",
    details: "If your website loads slowly, looks old, or doesn't exist — you're handing customers to your competitors every single day without realizing it.",
    solution: "We build fast, modern websites designed to turn visitors into paying customers — not just look pretty.",
    icon: Globe,
    metrics: "40% of visitors leave in under 3 seconds",
    color: "blue"
  },
  {
    id: "Problem #2",
    problem: "Your Business Isn't In Your Customer's Pocket",
    details: "80% of people browse on their phones. If you don't have a mobile app or a mobile-friendly experience, you're invisible to most of your potential customers.",
    solution: "We build iOS & Android apps that keep your brand accessible and keep customers coming back.",
    icon: Smartphone,
    metrics: "Customers choose competitors with better mobile experiences",
    color: "purple"
  },
  {
    id: "Problem #3",
    problem: "You're Spending on Ads But Not Seeing Results",
    details: "Running ads without the right strategy is like pouring water into a leaky bucket. Most businesses waste over 60% of their ad budget on people who will never buy.",
    solution: "We run data-driven campaigns with proven targeting so every dollar you spend brings in real customers.",
    icon: BarChart3,
    metrics: "Most businesses waste 60%+ of their ad budget",
    color: "emerald"
  }
];


export default function ProblemSolution() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextCard = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % painPoints.length);
  }, []);

  const prevCard = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + painPoints.length) % painPoints.length);
  }, []);

  // Auto-scroll logic
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextCard();
      }, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextCard]);

  // Reset timer on manual interaction
  const handleNext = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    nextCard();
  };

  const handlePrev = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    prevCard();
  };

  return (
    <section className="relative py-24 bg-black overflow-hidden border-t border-white/5 perspective-container">
      {/* Immersive HUD Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Deep Field Glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-600/10 blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-red-500/5 blur-[150px]" />
        
        {/* Tactical Grid */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-red-500/10 to-transparent opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Rotating technical lines */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full rotate-45 opacity-20" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-red-500/5 rounded-full -rotate-12" />
      </div>

      <div className="max-w-[1700px] mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center gap-8 mb-16 md:mb-24">
          <AnimatedSection className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-red-500/30 bg-red-500/5 mb-8 backdrop-blur-3xl group cursor-default mx-auto">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.5em] text-red-500 font-black">Common Problems We Solve</span>
            </div>
            
            <h2 className="text-[4rem] md:text-[6.5rem] lg:text-[8.5rem] font-heading font-black leading-[0.75] tracking-tighter uppercase mb-2">
              <span className="text-white block">IS YOUR BUSINESS</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-orange-400 italic">LOSING CUSTOMERS ONLINE?</span>
            </h2>
            <div className="flex items-center justify-center gap-4 font-mono text-red-500/40 text-[10px] tracking-[0.4em] uppercase font-bold">
               <div className="w-12 h-px bg-red-500/20" />
               These are the 3 biggest reasons businesses fail to grow digitally — and exactly how we fix them.
               <div className="w-12 h-px bg-red-500/20" />
            </div>

          </AnimatedSection>
        </div>

        {/* 3D Perspective Carousel Stage */}
        <div 
          className="relative h-[650px] md:h-[850px] flex items-center justify-center py-12 mb-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
            
            {/* Side Navigation Arrows (Relocated) */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2 md:px-10 z-[100] pointer-events-none">
              <button 
                onClick={handlePrev}
                className="group w-14 h-14 md:w-20 md:h-20 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl flex items-center justify-center hover:bg-red-500/20 hover:border-red-500/40 transition-all pointer-events-auto active:scale-90 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
              >
                <AlertTriangle className="w-6 h-6 md:w-8 md:h-8 text-white/50 group-hover:text-red-500 transition-colors -rotate-90" />
              </button>
              <button 
                onClick={handleNext}
                className="group w-14 h-14 md:w-20 md:h-20 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl flex items-center justify-center hover:bg-red-500/20 hover:border-red-500/40 transition-all pointer-events-auto active:scale-90 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
              >
                <AlertTriangle className="w-6 h-6 md:w-8 md:h-8 text-white/50 group-hover:text-red-500 transition-colors rotate 90" />
              </button>
            </div>

            <AnimatePresence mode="popLayout" custom={direction}>
                <div className="relative w-full h-full flex items-center justify-center preserve-3d">
                    {painPoints.map((point, index) => {
                        const isCenter = index === activeIndex;
                        const isPrev = index === (activeIndex - 1 + painPoints.length) % painPoints.length;
                        const isNext = index === (activeIndex + 1) % painPoints.length;
                        
                        if (!isCenter && !isPrev && !isNext) return null;

                        let x = 0;
                        let z = 0;
                        let rotateY = 0;
                        let opacity = 0;
                        let scale = 0.8;

                        if (isCenter) {
                            x = 0; z = 0; rotateY = 0; opacity = 1; scale = 1;
                        } else if (isPrev) {
                            x = -400; z = -300; rotateY = 45; opacity = 0.3;
                        } else if (isNext) {
                            x = 400; z = -300; rotateY = -45; opacity = 0.3;
                        }

                        // Adjust x for mobile
                        const mobileX = isCenter ? 0 : (isPrev ? -100 : 100);

                        return (
                            <motion.div
                                key={point.id}
                                className="absolute w-[85vw] md:w-[600px] h-[580px] md:h-[680px] z-10"
                                initial={false}
                                animate={{
                                    x: typeof window !== 'undefined' && window.innerWidth < 768 ? mobileX : x, 
                                    z, 
                                    rotateY, 
                                    opacity, 
                                    scale: typeof window !== 'undefined' && window.innerWidth < 768 ? (isCenter ? 1 : 0.7) : scale,
                                    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
                                }}
                                style={{ transformStyle: 'preserve-3d' }}
                            >
                                <div className={`group/card relative h-full flex flex-col p-8 md:p-12 rounded-[3.5rem] border transition-all duration-700 ${isCenter ? 'bg-[#0a0a0a] border-red-500/40 shadow-[0_0_120px_rgba(239,68,68,0.15)]' : 'bg-black/80 border-white/5'}`}>
                                    
                                    {/* Holographic Border Beam (Active Only) */}
                                    {isCenter && (
                                        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[3.5rem]">
                                            <div className="absolute inset-[-100%] animate-border-beam" />
                                        </div>
                                    )}

                                    {/* Card Content */}
                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className="flex items-start justify-between mb-10">
                                            <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center transition-all duration-700 ${isCenter ? 'bg-red-600/10 border border-red-500/30 scale-110' : 'bg-white/5 border border-white/10'}`}>
                                                <point.icon className={`w-8 h-8 md:w-10 md:h-10 transition-colors duration-700 ${isCenter ? 'text-red-500' : 'text-white/20'}`} />
                                            </div>
                                            <div className="text-right flex flex-col items-end">
                                                <span className="font-mono text-[9px] uppercase tracking-[0.5em] text-red-500/40 block mb-1">Diagnostic_Report</span>
                                                <div className="px-3 py-1 rounded-full border border-red-500/40 text-red-500 font-mono text-[9px] uppercase tracking-[0.3em] font-black italic">
                                                    Level_Critical
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-8">
                                            <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-white/20 block mb-3">Node_ID // {point.id}</span>
                                            <h3 className={`text-4xl md:text-5xl font-heading font-black uppercase tracking-tighter leading-[0.85] transition-colors duration-700 ${isCenter ? 'text-white' : 'text-white/20'}`}>
                                                {point.problem}
                                            </h3>
                                            {isCenter && (
                                              <p className="mt-6 font-mono text-sm leading-relaxed text-white/50 max-w-[90%] animate-in fade-in slide-in-from-bottom-2 duration-700">
                                                {point.details}
                                              </p>
                                            )}
                                        </div>

                                        <div className={`mt-auto space-y-6 transition-all duration-700 transform ${isCenter ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                            <div className="p-6 md:p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl flex items-center justify-between">
                                                <div>
                                                    <span className="text-[9px] font-mono text-white/30 uppercase tracking-[0.4em] block mb-2">Failure_Impact</span>
                                                    <span className="text-xl md:text-2xl font-black text-white italic tracking-tighter">{point.metrics}</span>
                                                </div>
                                                <div className="flex gap-1 md:gap-1.5 pt-4">
                                                    {[1, 2, 3, 4, 5].map((s) => (
                                                        <div key={s} className={`w-1.5 h-6 md:h-8 rounded-full ${s <= 4 ? 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]' : 'bg-white/10'}`} />
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="relative group/btn overflow-hidden rounded-[2rem] bg-red-600 p-px">
                                                <div className="relative bg-black group-hover/btn:bg-red-600 transition-colors duration-500 rounded-[2rem] px-8 py-4 md:py-6 text-center">
                                                    <span className="text-[9px] font-mono text-red-500 group-hover/btn:text-white uppercase tracking-[0.3em] block mb-1 font-black">Initiate_Resolution</span>
                                                    <span className="text-lg md:text-xl font-heading font-black text-white uppercase tracking-tight">{point.solution}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Scanning Motion Grid Overlay */}
                                    <div className="absolute inset-0 pointer-events-none opacity-[0.05] group-hover/card:opacity-[0.15] transition-opacity rounded-[3.5rem] overflow-hidden">
                                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,0,0.1)_1px,transparent_1px)] bg-[size:100%_4px] animate-scan" />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </AnimatePresence>
        </div>

        {/* Global HUD Stats Footer */}
        <div className="mt-24 md:mt-32 border-t border-white/5 pt-16 grid grid-cols-2 lg:grid-cols-4 gap-12">
           {[
             { label: 'Core_Throughput', val: '984.2 GB/S', icon: Activity },
             { label: 'Threat_Detection', val: 'Active', icon: Lock },
             { label: 'Leads_Intercepted', val: '2.4M+', icon: Users },
             { label: 'System_Latency', val: '0.002ms', icon: Cpu },
           ].map((stat) => (
             <div key={stat.label} className="group relative">
                <div className="absolute -left-6 top-0 bottom-0 w-px bg-gradient-to-b from-white/10 via-red-500/50 to-white/10 group-hover:via-red-500 transition-all duration-700" />
                <div className="text-[10px] font-mono text-white/20 uppercase tracking-[0.5em] mb-4 flex items-center gap-2">
                   <stat.icon className="w-3 h-3 text-red-500/40" />
                   {stat.label}
                </div>
                <div className="text-3xl md:text-5xl font-black text-white tracking-tighter italic group-hover:text-red-500 transition-colors duration-500">{stat.val}</div>
             </div>
           ))}
        </div>
      </div>

      <style jsx>{`
        .perspective-container {
          perspective: 2000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        @keyframes border-beam {
          0% {
            top: 0%;
            left: -100%;
            transform: rotate(-45deg);
          }
          50% {
            top: 100%;
            left: 0%;
            transform: rotate(-45deg);
          }
          100% {
            top: 0%;
            left: -100%;
            transform: rotate(-45deg);
          }
        }
        .animate-border-beam {
          background: linear-gradient(
            to right,
            transparent,
            rgba(239, 68, 68, 0.5),
            transparent
          );
          animation: border-beam 4s linear infinite;
        }
        @keyframes scan {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 0% 100%;
          }
        }
        .animate-scan {
          animation: scan 6s linear infinite;
        }
      `}</style>
    </section>
  );
}
