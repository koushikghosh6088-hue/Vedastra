'use client';

import { useState, useRef, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, Target, MessageSquare, Cpu, Timer, 
  Phone, Zap, ArrowUpRight, ArrowLeft, ArrowRight,
  ShieldAlert, Scan, ZapOff, Ghost, Activity
} from 'lucide-react';
import Link from 'next/link';
import AnimatedSection from './AnimatedSection';

// Optimized Grain Texture (Local)
const GRAIN_DATA_URL = `data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E`;

const threatPoints = [
  {
    id: "THREAT_01",
    label: "01. 🚫 NO WEBSITE OR AN OUTDATED ONE",
    title: "LOSS OF REVENUE",
    problem: "Someone just searched for your service on Google. They found your competitor — because you either don't have a website or yours looks old and broken. You're losing customers every single day without even knowing it.",
    solution: "We build you a fast, modern website that makes people trust you instantly — and turns visitors into paying customers.",
    icon: Globe,
    stat: "NO_VISIBILITY"
  },
  {
    id: "THREAT_02",
    label: "02. 🐌 YOUR WEBSITE IS SLOW",
    title: "USER FRUSTRATION",
    problem: "40% of people leave a website if it takes more than 3 seconds to load. If your site is slow, clunky or hard to use on mobile — those visitors are gone forever. You're paying for traffic that never converts.",
    solution: "We build lightning-fast websites that load in under 2 seconds and look perfect on every device — so no visitor ever leaves out of frustration.",
    icon: Timer,
    stat: "3s+ LATENCY"
  },
  {
    id: "THREAT_03",
    label: "03. 📵 YOU HAVE NO MOBILE APP",
    title: "MARKET INVISIBILITY",
    problem: "Your customers are on their phones all day. If your business isn't one tap away — you're invisible to them. No app means no push notifications, no easy reordering, no loyalty. They'll go to whoever is more convenient.",
    solution: "We build you a mobile app for both iPhone and Android that keeps your customers coming back — with easy booking, ordering and push notifications.",
    icon: Target,
    stat: "APP_GAP"
  },
  {
    id: "THREAT_04",
    label: "04. 💸 LOSING LEADS AT NIGHT",
    title: "MISSED OPPORTUNITY",
    problem: "A potential customer messaged you at 10pm asking about your services. Nobody replied until the next morning — by then they'd already hired someone else. Every missed message is money you'll never get back.",
    solution: "Our AI chat agent replies to every message instantly — 24 hours a day, 7 days a week. It answers questions, captures leads and even books appointments while you sleep.",
    icon: MessageSquare,
    stat: "70% LEADS_LOST"
  },
  {
    id: "THREAT_05",
    label: "05. ⚙️ REPETITIVE WORK TRAP",
    title: "TEAM OVERLOAD",
    problem: "Sending invoices manually. Following up leads one by one. Copy-pasting data between apps. Answering the same questions every day. Your team is spending hours on tasks a computer could do in seconds — and it's killing your growth.",
    solution: "We automate all of it. Invoices, follow-ups, reminders, data sync — all running on autopilot. Most of our clients save 15–20 hours every single week.",
    icon: Cpu,
    stat: "15HRS_WASTED"
  },
  {
    id: "THREAT_06",
    label: "06. 🤖 NO AI INTELLIGENCE",
    title: "FALLING BEHIND",
    problem: "Right now your competitors are using AI to respond faster, generate more leads, cut their costs and run leaner. Every month you wait the gap gets bigger. AI is not the future anymore — it's already happening.",
    solution: "We build AI into your business the right way — chatbots, voice agents, automation — so you stop playing catch up and start pulling ahead.",
    icon: Cpu,
    stat: "TECH_DECAY"
  }
];

function SeverityBadge({ isHovered, stat }: { isHovered: boolean, stat: string }) {
  return (
    <div className={`font-mono text-[10px] font-black p-2 rounded bg-black/40 border transition-all duration-300 ${isHovered ? 'text-[#00ff88] border-[#00ff88]/20 shadow-[0_0_10px_rgba(0,255,136,0.1)]' : 'text-[#8A8A9A] border-white/5'}`}>
      {stat}
    </div>
  );
}

function ThreatCard({ item }: { item: any }) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Memoized SVG to prevent re-calculation on every render
  const CircuitLines = useMemo(() => (
    <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0 20 H100 M0 80 H100 M20 0 V100 M80 0 V100" stroke="currentColor" strokeWidth="0.05" fill="none" />
        <path d="M10 10 L30 10 L30 30" stroke="currentColor" strokeWidth="0.3" fill="none" opacity="0.4" />
        <circle cx="20" cy="20" r="0.5" fill="currentColor" />
        <circle cx="80" cy="80" r="0.5" fill="currentColor" />
      </svg>
    </div>
  ), []);

  return (
    <motion.div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered(!isHovered)}
      initial={false}
      style={{ willChange: 'transform, border-color, box-shadow' }}
      className={`
        group relative flex flex-col min-w-full md:min-w-0 snap-center min-h-[500px] md:min-h-[550px] bg-[#0A0A0E] border rounded-[3rem] overflow-hidden cursor-pointer
        transition-[border-color,box-shadow,transform] duration-500 transform-gpu
        ${isHovered 
          ? 'border-[#00ff88]/40 shadow-[0_30px_80px_-20px_rgba(0,255,136,0.15)] scale-[1.01]' 
          : 'border-white/5 hover:border-[#FF2D55]/30'}
      `}
    >
      {/* Optimized Background Noise */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" 
        style={{ backgroundImage: `url("${GRAIN_DATA_URL}")` }}
      />
      
      {/* Graphical Circuit Lines */}
      <div className={`transition-colors duration-500 h-full w-full absolute inset-0 ${isHovered ? 'text-[#00ff88]' : 'text-[#FF2D55]'}`}>
        {CircuitLines}
      </div>

      <div className="relative z-10 p-10 flex flex-col h-full pointer-events-none">
        {/* Card Header Meta */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-4">
             <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-500 ${isHovered ? 'bg-[#00ff88]/10 border-[#00ff88]/40' : 'bg-white/5 border-white/10'}`}>
                <item.icon className={`w-7 h-7 transition-colors duration-500 ${isHovered ? 'text-[#00ff88]' : 'text-white/40'}`} />
             </div>
             <div className="flex flex-col">
                <span className={`font-mono text-[10px] uppercase tracking-[0.4em] transition-colors duration-500 ${isHovered ? 'text-[#00ff88]' : 'text-white/20'}`}>{item.id}</span>
                <div className={`flex items-center gap-1.5 font-mono text-[9px] font-black uppercase tracking-widest transition-colors duration-500 ${isHovered ? 'text-[#00ff88]' : 'text-[#FF2D55]'}`}>
                   <Activity className="w-2.5 h-2.5 animate-pulse" />
                   {isHovered ? 'SYSTEM_OPTIMIZED' : 'FAULT_DETECTED'}
                </div>
             </div>
          </div>
          <SeverityBadge isHovered={isHovered} stat={item.stat} />
        </div>

        {/* Content Reveal Logic - SNAPPY TRANSITION */}
        <div className="flex-grow flex flex-col justify-center">
          <AnimatePresence mode="sync"> {/* Synchronous transition for zero lag */}
            {!isHovered ? (
              <motion.div
                key="problem"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="space-y-6"
              >
                <h4 className="font-mono text-[11px] text-[#FF2D55] uppercase tracking-[0.3em] font-black opacity-60">ANALYSIS_REPORT_</h4>
                <h3 className="text-2xl md:text-3xl font-heading font-black text-white uppercase tracking-tighter leading-[1.1] mb-4">
                  {item.label}
                </h3>
                <p className="text-[#8A8A9A] text-base leading-relaxed font-body font-light border-l-2 border-[#FF2D55]/20 pl-6 italic">
                  &quot;{item.problem}&quot;
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="solution"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-px flex-grow bg-gradient-to-r from-transparent via-[#00ff88]/40 to-transparent" />
                  <span className="font-mono text-[10px] text-[#00ff88] uppercase tracking-[0.5em] font-black">STRIKE_DEPLOYED</span>
                  <div className="h-px flex-grow bg-gradient-to-r from-transparent via-[#00ff88]/40 to-transparent" />
                </div>
                <h3 className="text-3xl font-heading font-black text-[#00ff88] uppercase tracking-tighter leading-tight drop-shadow-[0_0_15px_rgba(0,255,136,0.3)]">
                  THE VEDASTRA EDGE
                </h3>
                <p className="text-white text-xl leading-relaxed font-body font-bold italic">
                  {item.solution}
                </p>
                <div className="pt-6">
                   <div className="inline-flex items-center gap-2 py-3 px-6 rounded-xl bg-[#00ff88]/5 border border-[#00ff88]/20 text-[#00ff88]">
                      <span className="font-mono text-[10px] font-black uppercase tracking-widest">Execute_Recovery</span>
                      <Zap className="w-4 h-4 fill-current" />
                   </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Action Footer */}
        <div className="mt-10 pt-8 border-t border-white/5 flex items-center justify-between">
           <div className={`flex gap-1.5 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-30'}`}>
              {[1, 2, 3, 4].map(dot => <div key={dot} className={`w-1 h-3 rounded-full transition-colors duration-500 ${isHovered ? 'bg-[#00ff88]' : 'bg-[#FF2D55]'}`} />)}
           </div>
           
           {!isHovered ? (
             <div className="flex items-center gap-3 opacity-60">
                <span className="font-mono text-[10px] text-[#FF2D55] uppercase tracking-widest font-black">Click To Solve</span>
                <ArrowUpRight className="w-4 h-4 text-[#FF2D55]" />
             </div>
           ) : (
             <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] text-[#00ff88] uppercase tracking-widest font-black italic underline decoration-[#00ff88]/30 underline-offset-4">THREAT_NEUTRALIZED</span>
                <Scan className="w-4 h-4 text-[#00ff88]" />
             </div>
           )}
        </div>
      </div>

      {/* Interactive Scan Line Overlay - Optimised performance */}
      {isHovered && (
        <motion.div 
          initial={{ y: '-10%' }}
          animate={{ y: '1100%' }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          style={{ willChange: 'transform' }}
          className="absolute left-0 right-0 h-[2px] bg-[#00ff88] z-20 opacity-40 shadow-[0_0_15px_#00ff88] transform-gpu"
        />
      )}
    </motion.div>
  );
}

export default function ProblemSolution() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isHoveringParent, setIsHoveringParent] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollTo = (idx: number) => {
    if (scrollRef.current) {
      const el = scrollRef.current;
      const cardWidth = el.offsetWidth / 3;
      const mobileCardWidth = el.offsetWidth;
      const scrollAmount = window.innerWidth < 1024 ? mobileCardWidth : cardWidth;
      
      el.scrollTo({
        left: idx * scrollAmount,
        behavior: 'smooth'
      });
      setActiveIdx(idx);
    }
  };

  useEffect(() => {
    if (isHoveringParent) return;
    
    const interval = setInterval(() => {
      const nextIdx = (activeIdx + 1) % threatPoints.length;
      scrollTo(nextIdx);
    }, 4500);

    return () => clearInterval(interval);
  }, [activeIdx, isHoveringParent]);

  return (
    <section 
      id="problems"
      className="relative py-24 md:py-40 bg-[#060608] overflow-hidden" 
      onMouseEnter={() => setIsHoveringParent(true)} 
      onMouseLeave={() => setIsHoveringParent(false)}
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,45,85,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,45,85,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] pointer-events-none" />
      
      <div className="max-w-[1700px] mx-auto px-6 relative z-10">
        
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-24 lg:mb-32">
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-[#FF2D55]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-[#FF2D55] font-black">GLOBAL_DIAGNOSTIC_ACTIVE</span>
            </div>
            
            <h2 className="text-[2.2rem] md:text-[5rem] lg:text-[7.5rem] font-heading font-black leading-[0.85] tracking-tighter uppercase mb-6 text-white italic">
              IS YOUR BUSINESS <br/>
              <span className="text-[#FF2D55] drop-shadow-[0_0_50px_rgba(255,45,85,0.5)]">BLEEDING MONEY?</span>
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2} className="lg:max-w-xl lg:ml-auto">
             <div className="relative p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl group">
               <div className="absolute top-0 left-10 w-20 h-1 bg-[#FF2D55] -translate-y-1/2 group-hover:w-32 transition-all duration-700" />
               <p className="text-[#8A8A9A] text-xl font-body font-light leading-relaxed">
                 Our diagnostic AI detected <span className="text-white font-black italic">MAJOR SYSTEM FAULTS</span> in your business architecture. Click a tile to deploy the recovery protocol instantly.
               </p>
             </div>
          </AnimatedSection>
        </div>

        {/* Carousel Navigation Toolbar */}
        <div className="flex items-center justify-between mb-12 px-6">
            <div className="flex gap-4">
              {threatPoints.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => scrollTo(i)}
                  className={`h-1.5 transition-all duration-500 rounded-full ${activeIdx === i ? 'w-16 bg-[#FF2D55] shadow-[0_0_10px_#FF2D55]' : 'w-4 bg-white/10'}`} 
                />
              ))}
            </div>
            
            <div className="flex gap-4">
               <button 
                 onClick={() => scrollTo((activeIdx - 1 + threatPoints.length) % threatPoints.length)} 
                 className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-[#FF2D55]/40 transition-all hover:bg-[#FF2D55]/5"
               >
                  <ArrowLeft className="w-6 h-6" />
               </button>
               <button 
                 onClick={() => scrollTo((activeIdx + 1) % threatPoints.length)} 
                 className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-[#FF2D55]/40 transition-all hover:bg-[#FF2D55]/5"
               >
                  <ArrowRight className="w-6 h-6" />
               </button>
            </div>
        </div>

        {/* Tactical Carousel */}
        <div 
          ref={scrollRef}
          style={{ willChange: 'scroll-position' }}
          className="flex lg:grid lg:grid-cols-3 gap-8 lg:gap-10 overflow-x-auto lg:overflow-visible no-scrollbar snap-x snap-mandatory pb-24 transition-all"
          onScroll={(e) => {
            if (window.innerWidth < 1024) {
              const el = e.currentTarget;
              const idx = Math.round(el.scrollLeft / el.offsetWidth);
              if (activeIdx !== idx) setActiveIdx(idx);
            }
          }}
        >
          {threatPoints.map((item, i) => (
            <ThreatCard key={item.id} item={item} />
          ))}
        </div>

        {/* Final Action Hub */}
        <div className="mt-20 flex flex-col items-center">
            <Link href="#pricing" className="group relative">
                <div className="absolute -inset-8 bg-[#FF2D55]/10 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex flex-col items-center gap-6">
                    <div className="w-24 h-24 rounded-full border border-[#FF2D55] flex items-center justify-center relative group-hover:bg-[#FF2D55] transition-all duration-700 shadow-[0_0_50px_rgba(255,45,85,0.4)]">
                       <Zap className="w-10 h-10 text-[#FF2D55] group-hover:text-black transition-colors" />
                       <div className="absolute inset-0 rounded-full border border-[#FF2D55] animate-ping opacity-20" />
                    </div>
                    <div className="text-center">
                       <h5 className="text-white font-heading font-black text-2xl uppercase tracking-widest mb-2">INITIALIZE RECOVERY</h5>
                       <p className="text-[#8A8A9A] font-mono text-xs uppercase tracking-[0.3em]">Complete System Optimization Awaits</p>
                    </div>
                </div>
            </Link>
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
