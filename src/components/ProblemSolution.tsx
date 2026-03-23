'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, Target, MessageSquare, Cpu, Timer, 
  Scan, Zap, Activity
} from 'lucide-react';
import Link from 'next/link';
import AnimatedSection from './AnimatedSection';

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
    <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden rounded-[2rem]">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0 20 H100 M0 80 H100 M20 0 V100 M80 0 V100" stroke="currentColor" strokeWidth="0.05" fill="none" />
        <path d="M10 10 L30 10 L30 30" stroke="currentColor" strokeWidth="0.3" fill="none" opacity="0.4" />
        <circle cx="20" cy="20" r="0.5" fill="currentColor" />
        <circle cx="80" cy="80" r="0.5" fill="currentColor" />
      </svg>
    </div>
  ), []);

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered(!isHovered)}
      className={`
        group relative flex flex-col w-full min-h-[350px] bg-[#0A0A0E] border rounded-[2rem] overflow-hidden cursor-pointer
        transition-[border-color,box-shadow,transform] duration-500 transform-gpu mb-8
        ${isHovered 
          ? 'border-[#00ff88]/40 shadow-[0_30px_80px_-20px_rgba(0,255,136,0.15)] scale-[1.01]' 
          : 'border-white/5 hover:border-[#FF2D55]/30'}
      `}
    >
      {/* Graphical Circuit Lines */}
      <div className={`transition-colors duration-500 h-full w-full absolute inset-0 ${isHovered ? 'text-[#00ff88]' : 'text-[#FF2D55]'}`}>
        {CircuitLines}
      </div>

      <div className="relative z-10 p-8 flex flex-col h-full pointer-events-none">
        {/* Card Header Meta */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div className="flex items-center gap-4">
             <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-500 ${isHovered ? 'bg-[#00ff88]/10 border-[#00ff88]/40' : 'bg-white/5 border-white/10'}`}>
                <item.icon className={`w-6 h-6 transition-colors duration-500 ${isHovered ? 'text-[#00ff88]' : 'text-white/40'}`} />
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

        {/* Content Reveal Logic - Clean Crossfade */}
        <div className="flex-grow flex flex-col justify-center relative min-h-[160px]">
          <AnimatePresence mode="popLayout"> 
            {!isHovered ? (
              <motion.div
                key="problem"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                <h4 className="font-mono text-[11px] text-[#FF2D55] uppercase tracking-[0.3em] font-black opacity-60">ANALYSIS_REPORT_</h4>
                <h3 className="text-xl md:text-2xl font-heading font-black text-white uppercase tracking-tighter leading-tight">
                  {item.label}
                </h3>
                <p className="text-[#8A8A9A] text-sm md:text-base leading-relaxed font-body font-light border-l-2 border-[#FF2D55]/20 pl-4 italic">
                  &quot;{item.problem}&quot;
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="solution"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-4 mb-2">
                  <div className="h-px flex-grow bg-gradient-to-r from-transparent via-[#00ff88]/40 to-transparent" />
                  <span className="font-mono text-[10px] text-[#00ff88] uppercase tracking-[0.5em] font-black">STRIKE_DEPLOYED</span>
                  <div className="h-px flex-grow bg-gradient-to-r from-transparent via-[#00ff88]/40 to-transparent" />
                </div>
                <h3 className="text-2xl font-heading font-black text-[#00ff88] uppercase tracking-tighter leading-tight drop-shadow-[0_0_15px_rgba(0,255,136,0.3)]">
                  THE VEDASTRA EDGE
                </h3>
                <p className="text-white text-base md:text-lg leading-relaxed font-body font-bold italic">
                  {item.solution}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {isHovered && (
        <motion.div 
          initial={{ y: '-10%' }}
          animate={{ y: '1100%' }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          style={{ willChange: 'transform' }}
          className="absolute left-0 right-0 h-[2px] bg-[#00ff88] z-20 opacity-40 shadow-[0_0_15px_#00ff88] transform-gpu"
        />
      )}
    </div>
  );
}

export default function ProblemSolution() {
  return (
    <section 
      id="problems"
      className="relative py-24 md:py-32 bg-[#060608] overflow-hidden" 
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,45,85,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,45,85,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Sticky 2-Column Desktop Layout */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left Column (Sticky Header) */}
          <div className="lg:w-[40%] text-center lg:text-left lg:sticky lg:top-32">
            <AnimatedSection>
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
                <div className="w-12 h-px bg-[#FF2D55]" />
                <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-[#FF2D55] font-black">GLOBAL_DIAGNOSTIC_ACTIVE</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black leading-[0.85] tracking-tighter uppercase mb-6 text-white italic">
                IS YOUR BUSINESS <br/>
                <span className="text-[#FF2D55] drop-shadow-[0_0_50px_rgba(255,45,85,0.5)]">BLEEDING MONEY?</span>
              </h2>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
               <div className="relative p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl group mt-8">
                 <div className="absolute top-0 left-8 w-16 h-1 bg-[#FF2D55] -translate-y-1/2 group-hover:w-24 transition-all duration-700" />
                 <p className="text-[#8A8A9A] text-lg font-body font-light leading-relaxed">
                   Our diagnostic AI detected <span className="text-white font-black italic">MAJOR SYSTEM FAULTS</span> in your business architecture. Scroll down and hover to reveal the Vedastra recovery protocol.
                 </p>
               </div>

               <div className="hidden lg:flex mt-12 flex-col items-center lg:items-start">
                  <Link href="#pricing" className="group relative inline-block">
                      <div className="absolute -inset-8 bg-[#FF2D55]/10 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative flex items-center gap-6">
                          <div className="w-16 h-16 rounded-full border border-[#FF2D55] flex items-center justify-center relative group-hover:bg-[#FF2D55] transition-all duration-700 shadow-[0_0_30px_rgba(255,45,85,0.4)]">
                            <Zap className="w-6 h-6 text-[#FF2D55] group-hover:text-black transition-colors" />
                            <div className="absolute inset-0 rounded-full border border-[#FF2D55] animate-ping opacity-20" />
                          </div>
                          <div>
                            <h5 className="text-white font-heading font-black text-xl uppercase tracking-widest">INITIALIZE RECOVERY</h5>
                            <p className="text-[#8A8A9A] font-mono text-[9px] uppercase tracking-[0.3em] mt-1">Complete System Optimization</p>
                          </div>
                      </div>
                  </Link>
               </div>
            </AnimatedSection>
          </div>

          {/* Right Column (Scrolling Cards) */}
          <div className="lg:w-[60%] flex flex-col w-full pb-10">
            {threatPoints.map((item, i) => (
              <AnimatedSection key={item.id} delay={0.1 * i} threshold={0.1}>
                <ThreatCard item={item} />
              </AnimatedSection>
            ))}
            
            {/* Mobile Action Hub (Hidden on Desktop) */}
            <div className="flex lg:hidden mt-10 justify-center">
              <Link href="#pricing" className="group relative inline-block">
                  <div className="absolute -inset-8 bg-[#FF2D55]/10 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex flex-col items-center gap-4">
                      <div className="w-16 h-16 rounded-full border border-[#FF2D55] flex items-center justify-center relative group-hover:bg-[#FF2D55] transition-all duration-700 shadow-[0_0_30px_rgba(255,45,85,0.4)]">
                        <Zap className="w-6 h-6 text-[#FF2D55] group-hover:text-black transition-colors" />
                        <div className="absolute inset-0 rounded-full border border-[#FF2D55] animate-ping opacity-20" />
                      </div>
                      <div className="text-center">
                        <h5 className="text-white font-heading font-black text-xl uppercase tracking-widest">INITIALIZE RECOVERY</h5>
                        <p className="text-[#8A8A9A] font-mono text-[9px] uppercase tracking-[0.3em] mt-1">Complete System Optimization</p>
                      </div>
                  </div>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
