'use client';

import { useState, useRef, useEffect } from 'react';
import { 
  AlertCircle, ArrowRight, Ban, Smartphone, Moon, Cog, 
  AlertTriangle, Skull, ChevronDown, Zap, ShieldAlert, 
  Activity, Clock, PhoneIncoming, MousePointer2 
} from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const threats = [
  { 
    title: "OUTDATED OR NO WEBSITE", 
    emoji: "🚫",
    stat: "3s",
    statLabel: "to capture a lead",
    desc: "Someone is searching for exactly what you sell right now. If they find an outdated site or a dead link, they go to your competitor. In 2025, an ugly site is a sign of an amateur business.",
    severity: "CRITICAL",
    color: "#FF2D55",
    circuit: "M10 50 L90 50 M50 10 L50 90 M30 30 L70 70 M70 30 L30 70"
  },
  { 
    title: "MOBILE USERS CAN'T BUY", 
    emoji: "📵",
    stat: "80%",
    statLabel: "mobile traffic share",
    desc: "If your site isn't perfectly responsive, you're ghosting your customers. Tiny buttons and broken layouts on mobile are the #1 reason leads abandon their journey.",
    severity: "CRITICAL",
    color: "#0066ff",
    circuit: "M20 20 H80 V80 H20 Z M40 40 H60 V60 H40 Z"
  },
  { 
    title: "MISSING LEADS WHILE YOU SLEEP", 
    emoji: "💸",
    stat: "24/7",
    statLabel: "leads lost after-hours",
    desc: "Leads don't wait until 9am. If you don't have an AI agent replying instantly at 2am, those customers are gone by breakfast. Answering 'whenever you see it' is too late.",
    severity: "ULTRA",
    color: "#ccff00",
    circuit: "M50 10 L10 50 L50 90 L90 50 Z M50 30 L30 50 L50 70 L70 50 Z"
  },
  { 
    title: "TEAM WASTES HOURS ON LOOPS", 
    emoji: "⚙️",
    stat: "60h",
    statLabel: "wasted per staff/mo",
    desc: "Manual invoicing, copy-pasting, and repetitive follow-ups are a 1990s problem. If your team isn't automated, you're paying expert salaries for robot-level work.",
    severity: "HIGH",
    color: "#FF2D55",
    circuit: "M10 10 Q50 90 90 10 M10 90 Q50 10 90 90"
  },
  { 
    title: "SLOW LOADING SPEED (EXIT)", 
    emoji: "⚡",
    stat: "300%",
    statLabel: "higher bounce rate",
    desc: "Speed is the new luxury. If your page takes more than 2 seconds to load, Google punishes you and users exit before they even see your logo. Efficiency is mandatory.",
    severity: "HIGH",
    color: "#0066ff",
    circuit: "M30 10 V90 M50 10 V90 M70 10 V90 M10 30 H90 M10 50 H90 M10 70 H90"
  },
  { 
    title: "MISSED CALLS = LOST MONEY", 
    emoji: "📞",
    stat: "62%",
    statLabel: "calls go unanswered",
    desc: "Missed calls are missed revenue. Our AI Voice Agents ensure every call is answered immediately, queries resolved, and appointments booked without you lifting a finger.",
    severity: "CRITICAL",
    color: "#ccff00",
    circuit: "M10 50 A40 40 0 1 1 90 50 A40 40 0 1 1 10 50 M30 50 A20 20 0 1 1 70 50 A20 20 0 1 1 30 50"
  },
];

function SeverityBadge({ level }: { level: string }) {
  const colors: Record<string, string> = {
    ULTRA: 'bg-[#FF2D55] text-black border-transparent shadow-[0_0_20px_#FF2D55]',
    CRITICAL: 'bg-white/5 text-[#FF2D55] border-[#FF2D55]/30 shadow-[inset_0_0_10px_rgba(255,45,85,0.2)]',
    HIGH: 'bg-white/5 text-white/50 border-white/10',
  };
  return (
    <span className={`px-2 py-1 rounded-sm text-[8px] font-mono font-black uppercase tracking-[0.2em] border ${colors[level] || colors.HIGH}`}>
      {level}_FAULT
    </span>
  );
}

export default function ProblemSolution() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-play Logic (3.5s interval)
  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setActiveIdx((prev) => {
        const next = (prev + 1) % threats.length;
        if (scrollRef.current) {
          const cardWidth = scrollRef.current.offsetWidth;
          scrollRef.current.scrollTo({
            left: next * cardWidth,
            behavior: 'smooth'
          });
        }
        return next;
      });
    }, 3500);

    return () => clearInterval(interval);
  }, [isHovered]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const idx = Math.round(el.scrollLeft / el.offsetWidth);
    if (idx !== activeIdx) setActiveIdx(idx);
  };

  return (
    <section 
      className="relative py-24 md:py-40 bg-black overflow-hidden" 
      id="problems"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      {/* Dynamic Cyberpunk Ambiance */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,45,85,0.08)_0%,transparent_70%)]" />
      
      {/* Animated Scanline Beam */}
      <motion.div 
        animate={{ y: ['-100%', '200%'] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.05] bg-gradient-to-b from-transparent via-[#FF2D55] to-transparent h-[400px]"
      />

      {/* Background Matrix Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden text-[#FF2D55]"
           style={{ backgroundImage: 'linear-gradient(#FF2D55 1px, transparent 1px), linear-gradient(90deg, #FF2D55 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-[1550px] mx-auto px-6 relative z-10">
        
        <AnimatedSection className="text-center mb-20 lg:mb-32">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-10 backdrop-blur-xl">
             <div className="flex gap-1">
                {[1, 2, 3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#FF2D55] animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />)}
             </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/60 font-black">THREAT_SCANNER_v4.5</span>
          </div>
          
          <h2 className="text-[2.2rem] md:text-[5rem] lg:text-[7.5rem] font-heading font-black leading-[0.85] tracking-tighter uppercase mb-6 text-white italic">
            IS YOUR BUSINESS <br/>
            <span className="text-[#FF2D55] drop-shadow-[0_0_40px_rgba(255,45,85,0.5)]">BLEEDING MONEY?</span>
          </h2>
          <p className="text-[#8A8A9A] text-xl font-body font-light max-w-2xl mx-auto border-l-2 border-[#FF2D55]/30 pl-8 bg-white/5 py-4 rounded-r-3xl">
            Our diagnostic AI detected <span className="text-white font-black italic">6 SYSTEM-CRITICAL FAULTS</span> in your business architecture. Failure to act results in exponential lead decay.
          </p>
        </AnimatedSection>

        {/* Tactical Carousel UI */}
        <div className="relative">
          {/* Navigation Controls */}
          <div className="flex items-center justify-between mb-12">
            <div className="flex gap-4">
              {threats.map((_, i) => (
                <button 
                  key={i}
                  onClick={() => {
                     setActiveIdx(i);
                     scrollRef.current?.scrollTo({ left: i * scrollRef.current.offsetWidth, behavior: 'smooth' });
                  }}
                  className={`group relative h-2 transition-all duration-500 overflow-hidden rounded-full ${activeIdx === i ? 'w-16 bg-[#FF2D55]' : 'w-4 bg-white/10 hover:bg-white/20'}`}
                >
                  {activeIdx === i && (
                    <motion.div 
                      layoutId="nav-glow"
                      className="absolute inset-0 bg-white/30 animate-shimmer"
                    />
                  )}
                </button>
              ))}
            </div>
            <div className="font-mono text-[10px] text-white/40 uppercase tracking-[0.3em] flex items-center gap-4">
               <span className={activeIdx === 0 ? 'text-[#FF2D55]' : 'text-white'}>0{activeIdx + 1}</span>
               <div className="w-20 h-px bg-white/10" />
               <span>06</span>
            </div>
          </div>

          <div 
            ref={scrollRef}
            className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 overflow-x-auto md:overflow-visible no-scrollbar snap-x snap-mandatory pb-24"
            onScroll={handleScroll}
          >
            {threats.map((threat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="min-w-full md:min-w-0 snap-center px-2 md:px-0"
              >
                <div className={`
                  relative h-full glass-premium rounded-[3rem] p-10 lg:p-12 overflow-hidden group/card transition-all duration-700
                  border border-white/5 hover:border-[#FF2D55]/40 hover:bg-[#FF2D55]/[0.02] shadow-[0_30px_60px_rgba(0,0,0,0.5)]
                  ${activeIdx === i ? 'md:border-[#FF2D55]/30 md:scale-[1.02]' : ''}
                `}>
                  
                  {/* Graphical Circuit Background */}
                  <svg className="absolute top-0 right-0 w-64 h-64 text-[#FF2D55]/[0.03] group-hover/card:text-[#FF2D55]/[0.08] transition-all duration-700 pointer-events-none" viewBox="0 0 100 100">
                    <path d={threat.circuit} fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" className="animate-path-dash" />
                  </svg>
                  
                  {/* Decorative Scanline */}
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF2D55]/50 to-transparent group-hover/card:animate-scan-vertical pointer-events-none" />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-12">
                      <div className="relative group/icon">
                         <div className="absolute inset-0 bg-[#FF2D55]/20 blur-xl opacity-0 group-hover/card:opacity-100 transition-opacity" />
                         <div className="relative w-16 h-16 rounded-[1.5rem] bg-white/5 border border-white/10 flex items-center justify-center text-3xl transition-transform duration-700 group-hover/card:rotate-[360deg] group-hover/card:scale-110">
                            {threat.emoji}
                         </div>
                      </div>
                      <SeverityBadge level={threat.severity} />
                    </div>

                    <h3 className="text-2xl md:text-3xl font-heading font-black text-white uppercase tracking-tighter mb-6 leading-none group-hover/card:text-[#FF2D55] transition-colors italic">
                      {threat.title}
                    </h3>
                    
                    <div className="flex items-center gap-4 mb-8">
                      <div className="flex flex-col">
                        <span className="text-5xl lg:text-6xl font-heading font-black text-white tracking-tighter group-hover/card:text-[#FF2D55] transition-colors drop-shadow-[0_0_20px_rgba(255,45,85,0.3)]">
                          {threat.stat}
                        </span>
                        <span className="font-mono text-[9px] text-white/30 uppercase tracking-[0.2em]">{threat.statLabel}</span>
                      </div>
                      <div className="w-px h-12 bg-white/10 ml-auto" />
                      <div className="flex flex-col text-right">
                         <span className="font-mono text-[10px] text-[#FF2D55] font-bold">FAULT_ID</span>
                         <span className="font-mono text-[9px] text-white/20">0X00{i + 1}F</span>
                      </div>
                    </div>

                    <p className="text-[#8A8A9A] text-base leading-relaxed mb-10 font-light flex-grow">
                      {threat.desc}
                    </p>

                    <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                       <span className="font-mono text-[10px] text-white/30 uppercase tracking-[0.3em]">Protocol: Strike_{i + 1}</span>
                       <div className="flex items-center gap-2 group/cta cursor-pointer">
                          <span className="font-mono text-[9px] text-[#FF2D55] font-black uppercase tracking-widest opacity-0 group-hover/card:opacity-100 transition-opacity">Analyze</span>
                          <motion.div 
                            animate={{ x: [0, 5, 0] }} 
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="p-2 rounded-lg bg-[#FF2D55]/10 text-[#FF2D55]"
                          >
                             <ArrowRight className="w-4 h-4" />
                          </motion.div>
                       </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Global Strike CTA */}
        <AnimatedSection className="mt-12 lg:mt-20">
          <div className="relative group max-w-5xl mx-auto">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FF2D55] via-white to-[#FF2D55] rounded-[4rem] opacity-20 blur-xl group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
            <div className="relative bg-black rounded-[4rem] border border-white/10 p-12 lg:p-24 text-center overflow-hidden">
               {/* Animated Background Pulse */}
               <motion.div 
                 animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
                 transition={{ duration: 4, repeat: Infinity }}
                 className="absolute inset-0 bg-[#FF2D55] rounded-full blur-[100px] pointer-events-none"
               />

               <div className="relative z-10">
                 <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-[#FF2D55]/10 border border-[#FF2D55]/30 mb-10 shadow-[0_0_30px_rgba(255,45,85,0.2)]">
                   <Skull className="w-5 h-5 text-[#FF2D55]" />
                   <span className="font-mono text-xs uppercase tracking-[0.4em] text-[#FF2D55] font-black italic">LAUNCH_RECOVERY_PROTOCOL</span>
                 </div>
                 
                 <h3 className="text-3xl md:text-6xl lg:text-7xl font-heading font-black text-white uppercase tracking-tighter mb-10 leading-none italic">
                   STOP THE REVENUE <br/>
                   <span className="text-[#FF2D55]">BLEED.</span> ACT NOW.
                 </h3>
                 
                 <Link 
                   href="/contact"
                   className="inline-flex items-center gap-6 px-16 py-8 bg-[#FF2D55] text-white font-heading font-black text-lg uppercase tracking-widest rounded-[2rem] shadow-[0_25px_80px_rgba(255,45,85,0.5)] hover:shadow-[0_40px_100px_rgba(255,45,85,0.7)] hover:scale-[1.05] active:scale-95 transition-all duration-500 overflow-hidden relative group/btn"
                 >
                   <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-10 transition-opacity" />
                   <span>INITIATE FREE DIAGNOSTIC</span>
                   <Zap className="w-6 h-6 animate-pulse" />
                 </Link>
                 
                 <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto opacity-30">
                   {['No Commitment', '48hr Results', 'Founder Direct', 'Encrypted'].map(t => (
                     <div key={t} className="flex flex-col items-center gap-1">
                        <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-white font-black">{t}</span>
                        <div className="w-8 h-[2px] bg-[#FF2D55]/60" />
                     </div>
                   ))}
                 </div>
               </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        @keyframes scan-v {
          0% { transform: translateY(0); }
          100% { transform: translateY(400px); }
        }
        .animate-scan-vertical {
          animation: scan-v 3s linear infinite;
        }
        
        @keyframes path-dash {
          0% { stroke-dashoffset: 10; }
          100% { stroke-dashoffset: 0; }
        }
        .animate-path-dash {
          animation: path-dash 2s linear infinite;
        }

        @keyframes matrix-rain {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-matrix {
          animation: matrix-rain 15s linear infinite;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
      `}</style>
    </section>
  );
}
