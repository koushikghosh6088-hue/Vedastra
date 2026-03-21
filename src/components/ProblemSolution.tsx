'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Target, MessageSquare, Cpu, Timer, Phone, Zap, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import AnimatedSection from './AnimatedSection';

const threatPoints = [
  {
    id: "THREAT_01",
    title: "OUTDATED OR NO WEBSITE",
    stat: "88% BOUNCE RATE",
    severity: "CRITICAL",
    desc: "Your website is your #1 salesperson. If it looks like 2015, clients assume your service is too.",
    solution: "Next-Gen Conversion-Optimized Architecture built for 2026.",
    icon: Globe
  },
  {
    id: "THREAT_02",
    title: "MOBILE USERS CAN'T BUY",
    stat: "65% OF TRAFFIC",
    severity: "HIGH_FAULT",
    desc: "If your site isn't perfect on a phone, you're effectively closing your doors to 60% of your market.",
    solution: "Fingerprint-Fast Mobile UX & One-Tap Checkout optimization.",
    icon: Target
  },
  {
    id: "THREAT_03",
    title: "MISSING LEADS WHILE YOU SLEEP",
    stat: "70% LEADS LOST",
    severity: "CRITICAL",
    desc: "Customers want answers NOW. If you're not awake to reply at 2 AM, they're going to your competitor.",
    solution: "24/7 AI Lead Extraction & Instant Multi-Channel Response.",
    icon: MessageSquare
  },
  {
    id: "THREAT_04",
    title: "TEAM WASTES HOURS ON LOOPS",
    stat: "15HRS/WEEK LOST",
    severity: "HIGH_FAULT",
    desc: "Manual data entry and repetitive tasks are silent killers of your profit margins.",
    solution: "Hyper-Automated Workflow Overhaul & CRM Synchronization.",
    icon: Cpu
  },
  {
    id: "THREAT_05",
    title: "SLOW LOADING SPEED",
    stat: "3s = 40% LOSS",
    severity: "HIGH_FAULT",
    desc: "Every second of delay costs you cold hard cash. People don't wait — they exit.",
    solution: "Sub-2s Core Web Vital Optimization & Edge Delivery.",
    icon: Timer
  },
  {
    id: "THREAT_06",
    title: "MISSED CALLS = LOST MONEY",
    stat: "40% REVENUE GAP",
    severity: "CRITICAL",
    desc: "Every missed call is a missed sale. Human receptionists are expensive; silence is even more expensive.",
    solution: "AI Voice Agents that handle calls 24/7 with human-like precision.",
    icon: Phone
  }
];

function SeverityBadge({ type }: { type: string }) {
  const isCritical = type === "CRITICAL";
  return (
    <div className={`px-2 py-0.5 rounded-sm border ${isCritical ? 'bg-red-500/10 border-red-500/30 text-red-500' : 'bg-orange-500/10 border-orange-500/30 text-orange-500'} font-mono text-[8px] font-black animate-pulse`}>
      {type}
    </div>
  );
}

function ThreatCard({ item, index, active }: { item: any, index: number, active?: boolean }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered(!isHovered)}
      className={`
        group relative min-w-full md:min-w-0 snap-center h-[420px] bg-[#0C0C12] border transition-all duration-700 rounded-[2.5rem] overflow-hidden cursor-pointer
        ${isHovered ? 'border-[#00ff88]/50 shadow-[0_0_50px_rgba(0,255,136,0.2)]' : 'border-white/5 hover:border-[#FF2D55]/30'}
      `}
    >
      {/* Background Graphical Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <path d="M0 20 H100 M0 80 H100 M20 0 V100 M80 0 V100" stroke={isHovered ? "#00ff88" : "#FF2D55"} strokeWidth="0.1" fill="none" />
          <path d="M10 10 L30 10 L30 30" stroke={isHovered ? "#00ff88" : "#FF2D55"} strokeWidth="0.5" fill="none" opacity="0.3" />
        </svg>
      </div>

      <div className="relative z-10 p-10 flex flex-col h-full">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-colors duration-500 ${isHovered ? 'bg-[#00ff88]/10 border-[#00ff88]/30 text-[#00ff88]' : 'bg-white/5 border-white/10 text-white/40'}`}>
               <item.icon className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className={`font-mono text-[9px] uppercase tracking-widest transition-colors ${isHovered ? 'text-[#00ff88]' : 'text-white/20'}`}>{item.id}</span>
              <SeverityBadge type={item.severity} />
            </div>
          </div>
          <div className={`font-mono text-xs font-black transition-colors ${isHovered ? 'text-[#00ff88]' : 'text-[#FF2D55]'}`}>{item.stat}</div>
        </div>

        <div className="flex-grow flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {!isHovered ? (
                <motion.div
                  key="threat"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                >
                  <h3 className="text-2xl font-heading font-black text-white uppercase tracking-tighter mb-4 leading-none">
                    {item.title}
                  </h3>
                  <p className="text-[#8A8A9A] text-sm leading-relaxed font-body font-light">
                    {item.desc}
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="solution"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="space-y-4"
                >
                  <div className="inline-block px-3 py-1 bg-[#00ff88]/10 border border-[#00ff88]/30 rounded text-[#00ff88] font-mono text-[10px] uppercase font-black tracking-widest mb-2">
                    SOLUTION_DEPLOYED
                  </div>
                  <h3 className="text-2xl font-heading font-black text-[#00ff88] uppercase tracking-tighter leading-tight">
                    THE VEDASTRA EDGE
                  </h3>
                  <p className="text-white text-lg leading-relaxed font-body font-bold italic">
                    {item.solution}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
           <div className={`flex gap-1 transition-opacity ${isHovered ? 'opacity-100' : 'opacity-40'}`}>
              {[1, 2, 3].map(dot => <div key={dot} className={`w-1 h-3 rounded-full ${isHovered ? 'bg-[#00ff88]' : 'bg-[#FF2D55]'}`} />)}
           </div>
           <div className="flex items-center gap-2">
              <span className={`font-mono text-[9px] uppercase tracking-widest font-black transition-colors ${isHovered ? 'text-[#00ff88]' : 'text-white/20'}`}>
                {isHovered ? 'THREAT_NEUTRALIZED' : 'ANALYZE_FAULT'}
              </span>
              <ArrowUpRight className={`w-3 h-3 transition-all ${isHovered ? 'text-[#00ff88] translate-x-0.5 -translate-y-0.5' : 'text-white/20'}`} />
           </div>
        </div>
      </div>

      {isHovered && (
        <motion.div 
          initial={{ top: '-10%' }}
          animate={{ top: '110%' }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00ff88] to-transparent z-20 opacity-50 shadow-[0_0_15px_rgba(0,255,136,0.8)]"
        />
      )}
    </motion.div>
  );
}

export default function ProblemSolution() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isHoveringParent, setIsHoveringParent] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isHoveringParent) return;
    
    const interval = setInterval(() => {
      const nextIdx = (activeIdx + 1) % threatPoints.length;
      if (scrollRef.current) {
        const cardWidth = scrollRef.current.offsetWidth / 3;
        const mobileCardWidth = scrollRef.current.offsetWidth;
        const scrollAmount = window.innerWidth < 768 ? mobileCardWidth : cardWidth;
        
        scrollRef.current.scrollTo({
          left: nextIdx * scrollAmount,
          behavior: 'smooth'
        });
      }
      setActiveIdx(nextIdx);
    }, 3500);

    return () => clearInterval(interval);
  }, [activeIdx, isHoveringParent]);

  return (
    <section 
      id="problems"
      className="relative py-24 md:py-40 bg-black overflow-hidden" 
      onMouseEnter={() => setIsHoveringParent(true)} 
      onMouseLeave={() => setIsHoveringParent(false)}
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,45,85,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,45,85,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black,transparent:80%)]" />
      
      <div className="max-w-[1550px] mx-auto px-6 relative z-10">
        <AnimatedSection className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-[#FF2D55]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/60 font-black">THREAT_SCANNER_v4.5</span>
          </div>
          
          <h2 className="text-[2.2rem] md:text-[5rem] lg:text-[7.5rem] font-heading font-black leading-[0.85] tracking-tighter uppercase mb-6 text-white italic">
            IS YOUR BUSINESS <br/>
            <span className="text-[#FF2D55] drop-shadow-[0_0_40px_rgba(255,45,85,0.5)]">BLEEDING MONEY?</span>
          </h2>
          <p className="text-[#8A8A9A] text-xl font-body font-light max-w-2xl mx-auto border-l-2 border-[#FF2D55]/30 pl-8 bg-white/5 py-4 rounded-r-3xl">
            Our diagnostic AI detected <span className="text-white font-black italic">6 SYSTEM-CRITICAL FAULTS</span> in your business architecture. Hover to deploy solutions.
          </p>
        </AnimatedSection>

        <div 
          ref={scrollRef}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 overflow-x-auto md:overflow-visible no-scrollbar snap-x snap-mandatory pb-12"
          onScroll={(e) => {
            if (window.innerWidth < 768) {
              const el = e.currentTarget;
              const idx = Math.round(el.scrollLeft / el.offsetWidth);
              if (activeIdx !== idx) setActiveIdx(idx);
            }
          }}
        >
          {threatPoints.map((item, i) => (
            <ThreatCard key={item.id} item={item} index={i} active={activeIdx === i} />
          ))}
        </div>

        <div className="mt-12 flex items-center justify-between">
            <div className="flex gap-4">
              {threatPoints.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => {
                    const scrollAmount = window.innerWidth < 768 ? scrollRef.current!.offsetWidth : scrollRef.current!.offsetWidth / 3;
                    scrollRef.current?.scrollTo({ left: i * scrollAmount, behavior: 'smooth' });
                    setActiveIdx(i);
                  }}
                  className={`h-1 transition-all duration-500 rounded-full ${activeIdx === i ? 'w-16 bg-[#FF2D55]' : 'w-4 bg-white/10'}`} 
                />
              ))}
            </div>
            
            <Link href="#pricing" className="group flex items-center gap-6">
                <div className="text-right hidden sm:block">
                  <div className="text-white font-heading font-black text-xs uppercase tracking-widest mb-1">STRIKE PROTOCOL</div>
                  <div className="text-white/30 font-mono text-[9px] uppercase">Initialize Audit Recovery</div>
                </div>
                <div className="w-16 h-16 rounded-full border border-[#FF2D55] flex items-center justify-center relative group-hover:bg-[#FF2D55] transition-all duration-500">
                   <Zap className="w-6 h-6 text-[#FF2D55] group-hover:text-black transition-colors" />
                   <div className="absolute inset-0 rounded-full border border-[#FF2D55] animate-ping opacity-20" />
                </div>
            </Link>
        </div>
      </div>
    </section>
  );
}
