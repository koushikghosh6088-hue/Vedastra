'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, Target, MessageSquare, Cpu, Timer, 
  ChevronDown, Scan, AlertTriangle
} from 'lucide-react';
import Link from 'next/link';

const threatPoints = [
  {
    id: "THREAT_01",
    label: "01. NO WEBSITE / OUTDATED",
    title: "LOSS OF REVENUE",
    problem: "Someone searched for your service right now. They found your competitor because your website either doesn't exist or looks broken. You're losing customers daily.",
    solution: "We architect lightning-fast, premium websites that establish instant trust and aggressively convert passive visitors into paying customers.",
    icon: Globe,
    stat: "NO_VISIBILITY"
  },
  {
    id: "THREAT_02",
    label: "02. YOUR WEBSITE IS SLOW",
    title: "USER FRUSTRATION",
    problem: "40% of people leave a website if it takes more than 3 seconds to load. You are burning money on ads that send traffic to a site nobody waits for.",
    solution: "We build zero-latency web applications that load in under 2 seconds across all devices, ensuring maximum retention and smooth UX.",
    icon: Timer,
    stat: "3s+ LATENCY"
  },
  {
    id: "THREAT_03",
    label: "03. YOU HAVE NO MOBILE APP",
    title: "MARKET INVISIBILITY",
    problem: "If your business isn't one tap away on a phone screen, you're invisible. No push notifications, no loyal re-ordering, no convenience.",
    solution: "We engineer native iOS and Android apps that cement your brand directly onto your customers' home screens, driving massive repeat revenue.",
    icon: Target,
    stat: "APP_GAP"
  },
  {
    id: "THREAT_04",
    label: "04. LOSING LEADS AT NIGHT",
    title: "MISSED OPPORTUNITY",
    problem: "A potential client messaged you at 10 PM. Nobody replied. By morning, they hired your competitor. Every missed message is lost capital.",
    solution: "We deploy an AI chat agent that qualifies leads, answers questions, and secures bookings 24/7/365 — while you sleep.",
    icon: MessageSquare,
    stat: "70% LEADS_LOST"
  },
  {
    id: "THREAT_05",
    label: "05. REPETITIVE WORK TRAP",
    title: "TEAM OVERLOAD",
    problem: "Manual invoices, copy-pasting data, answering the same emails. Your team is wasting dozens of hours on tasks a machine could do instantly.",
    solution: "We implement end-to-end automation workflows that eliminate repetitive admin work, immediately saving your team 15-20 hours a week.",
    icon: Cpu,
    stat: "15HRS_WASTED"
  },
  {
    id: "THREAT_06",
    label: "06. NO AI INTELLIGENCE",
    title: "FALLING BEHIND",
    problem: "Your competitors are running leaner and faster by utilizing AI. You are paying humans to do what software does better. You're playing catch-up.",
    solution: "We integrate custom AI voice and text agents that handle customer interactions flawlessly, dropping your operational costs drastically.",
    icon: Cpu,
    stat: "TECH_DECAY"
  }
];

export default function ProblemSolution() {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);

  return (
    <section id="problems" className="relative py-20 pb-32 bg-[#060608] overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,45,85,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,45,85,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-3 px-4 py-1.5 rounded-full bg-[#FF2D55]/10 border border-[#FF2D55]/30 mb-8 mt-10">
            <AlertTriangle className="w-4 h-4 text-[#FF2D55] animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#FF2D55] font-black">CRITICAL_SYSTEM_FAULTS</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading font-black leading-[0.9] tracking-tighter uppercase mb-6 text-white italic text-center">
            IS YOUR BUSINESS <br />
            <span className="text-[#FF2D55] drop-shadow-[0_0_40px_rgba(255,45,85,0.6)]">BLEEDING MONEY?</span>
          </h2>
          <p className="text-[#8A8A9A] text-base md:text-lg max-w-2xl mx-auto font-body">
            Our diagnostic AI detected major threat vectors in your business architecture. Review the vulnerabilities below to deploy the Vedastra recovery protocol.
          </p>
        </div>

        {/* Compact Accordion Layout with Graphical Vertical Timeline */}
        <div className="w-full max-w-4xl relative">
          
          {/* Background Timeline Track */}
          <div className="absolute left-[30px] md:left-[40px] top-12 bottom-12 w-[2px] bg-white/5 rounded-full" />
          
          {/* Animated Red Timeline Fill */}
          <motion.div 
            className="absolute left-[30px] md:left-[40px] top-12 w-[2px] bg-[#FF2D55] shadow-[0_0_15px_rgba(255,45,85,0.8)] rounded-full z-10"
            animate={{ 
               height: `calc(${(expandedIndex / Math.max(1, threatPoints.length - 1)) * 100}% - 24px)` 
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />

          <div className="flex flex-col gap-4 md:gap-6 w-full pl-[55px] md:pl-[80px]">
          {threatPoints.map((item, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <motion.div 
                key={item.id} 
                onViewportEnter={() => {
                   // Only auto-expand if we scroll to it naturally, preventing jumpy race conditions 
                   if (expandedIndex !== index) {
                      setExpandedIndex(index);
                   }
                }}
                viewport={{ margin: "-45% 0px -45% 0px", amount: "some" }}
                onClick={() => setExpandedIndex(isExpanded ? -1 : index)}
                className={`
                  relative overflow-hidden cursor-pointer border transition-all duration-500
                  ${isExpanded ? 'bg-[#0A0A0E] border-[#FF2D55]/80 shadow-[0_0_40px_rgba(255,45,85,0.2)] scale-[1.02]' : 'bg-black/40 border-white/10 hover:border-[#FF2D55]/50 hover:bg-[#FF2D55]/5 scale-100 opacity-60 hover:opacity-100'}
                `}
                style={{
                   clipPath: "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)"
                }}
              >
                {/* Cyberpunk Scanline Background */}
                {isExpanded && (
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,45,85,0.05)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none z-0 mix-blend-screen" />
                )}
                {/* Glowing Node on Timeline Connection (Graphical) */}
                <div className={`
                    absolute top-10 -left-[32px] md:-left-[46px] w-4 h-4 rounded-full border-2 transition-all duration-500 z-20
                    ${isExpanded ? 'bg-[#FF2D55] border-black scale-125 shadow-[0_0_20px_rgba(255,45,85,0.8)]' : 'bg-[#111] border-white/20 scale-100'}
                `} />

                {/* Accordion Header */}
                <div className="p-5 md:p-6 flex items-center justify-between">
                  <div className="flex items-center gap-4 md:gap-6">
                    <div className={`
                      flex-shrink-0 w-12 h-12 flex items-center justify-center border transition-all duration-500 relative z-10
                      ${isExpanded ? 'bg-[#FF2D55]/20 border-[#FF2D55] text-[#FF2D55] shadow-[0_0_15px_rgba(255,45,85,0.4)]' : 'bg-white/5 border-white/20 text-white/40'}
                    `}
                    style={{
                       clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)"
                    }}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className={`text-lg md:text-2xl font-heading font-black tracking-tight uppercase transition-colors duration-300 relative z-10 ${isExpanded ? 'text-white' : 'text-white/70'}`}>
                        {item.label}
                      </h3>
                      <p className={`font-mono text-[10px] uppercase tracking-widest mt-1 font-black transition-colors ${isExpanded ? 'text-[#FF2D55]' : 'text-white/30'}`}>
                        THREAT: {item.title}
                      </p>
                    </div>
                  </div>
                  <ChevronDown className={`w-6 h-6 flex-shrink-0 transition-transform duration-500 ${isExpanded ? 'rotate-180 text-[#FF2D55]' : 'text-white/30'}`} />
                </div>

                {/* Accordion Content Payload */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-6 md:px-6 md:pb-8 pt-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                          
                          {/* Divider Line (Desktop only) */}
                          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-[#FF2D55]/40 via-white/10 to-transparent -translate-x-1/2" />

                          {/* Problem Block - BRIGHT RED */}
                          <div className="bg-[#FF2D55]/5 border border-[#FF2D55]/20 p-5 rounded-xl">
                            <span className="font-mono text-[9px] text-[#FF2D55] font-black uppercase tracking-widest mb-3 block">DETECTED_PROBLEM</span>
                            <p className="text-white/90 text-sm md:text-base leading-relaxed font-body italic">
                              "{item.problem}"
                            </p>
                          </div>

                          {/* Solution Block - VEDASTRA EDGE */}
                          <div className="bg-[#00ff88]/5 border border-[#00ff88]/20 p-5 rounded-xl">
                            <span className="font-mono text-[9px] text-[#00ff88] font-black uppercase tracking-widest mb-3 block">VEDASTRA_SOLUTION</span>
                            <p className="text-white text-sm md:text-base leading-relaxed font-body font-bold">
                              {item.solution}
                            </p>
                          </div>

                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
          </div>
        </div>

        {/* Mobile Action Hub */}
        <div className="mt-16 flex justify-center w-full">
          <Link href="#pricing" className="group relative inline-block w-full sm:w-auto">
              <div className="absolute -inset-6 bg-[#FF2D55]/10 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full border border-[#FF2D55] flex items-center justify-center relative group-hover:bg-[#FF2D55] transition-all duration-700">
                    <Scan className="w-6 h-6 text-[#FF2D55] group-hover:text-black transition-colors" />
                    <div className="absolute inset-0 rounded-full border border-[#FF2D55] animate-ping opacity-30" />
                  </div>
                  <div className="text-center">
                    <h5 className="text-white font-heading font-black text-xl uppercase tracking-widest">INITIALIZE RECOVERY</h5>
                    <p className="text-[#8A8A9A] font-mono text-[10px] uppercase tracking-[0.2em] mt-1">Solve all threats instantly</p>
                  </div>
              </div>
          </Link>
        </div>

      </div>
    </section>
  );
}
