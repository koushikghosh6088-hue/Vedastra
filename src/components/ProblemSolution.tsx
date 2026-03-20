'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, ChevronRight, Check, AlertCircle, 
  ArrowRight, ShieldAlert, Zap, Search, MessageSquare, 
  Smartphone, Cog, Layout, Bot, Activity 
} from 'lucide-react';
import Link from 'next/link';
import AnimatedSection from './AnimatedSection';

const problems = [
  {
    id: 1,
    icon: "🌑",
    p_badge: "PROBLEM #1",
    p_title: "YOU DON'T HAVE A WEBSITE — OR IT'S EMBARRASSINGLY OUTDATED",
    p_desc: "If your website loads slowly, looks old, or doesn't exist — you're handing customers to your competitors every single day without realizing it.",
    p_cost: "40% of visitors leave in under 3 seconds",
    s_badge: "INITIATE_RESOLUTION",
    s_title: "WE BUILD FAST, MODERN WEBSITES DESIGNED TO TURN VISITORS INTO PAYING CUSTOMERS",
    s_desc: "We don't just make things look pretty; we engineer them for high-fidelity conversion and absolute speed.",
    s_result: "INSTANT TRUST BUILT",
  },
  {
    id: 2,
    icon: "😴",
    p_badge: "PROBLEM #2",
    p_title: "YOU'RE LOSING LEADS WHILE YOU SLEEP",
    p_desc: "A potential customer visits at 11pm. They have a question. You're asleep. They go to your competitor. This happens every night.",
    p_cost: "60%+ of enquiries happen outside business hours",
    s_badge: "INITIATE_RESOLUTION",
    s_title: "YOUR AI NEVER SLEEPS — IT CONVERTS 24/7",
    s_desc: "Intelligent chat agents that answer questions and book appointments autonomously while you rest.",
    s_result: "WAKE UP TO NEW LEADS",
  },
  {
    id: 3,
    icon: "📵",
    p_badge: "PROBLEM #3",
    p_title: "YOUR BUSINESS HAS NO MOBILE PRESENCE",
    p_desc: "Customers are on their phones. If you're not in their pocket with a high-performance app, you're invisible.",
    p_cost: "80% of users prefer mobile apps over websites",
    s_badge: "INITIATE_RESOLUTION",
    s_title: "PUT YOUR BUSINESS ON EVERY SMARTPHONE",
    s_desc: "Native iOS & Android apps that keep your brand one tap away with zero-latency interfaces.",
    s_result: "HIGH CUSTOMER LOYALTY",
  },
  {
    id: 4,
    icon: "🔁",
    p_badge: "PROBLEM #4",
    p_title: "YOUR STAFF IS DROWNING IN MANUAL TASKS",
    p_desc: "Answering the same emails, manually updating sheets — your team is wasting hours on work that AI can do instantly.",
    p_cost: "15+ hours wasted per employee every week",
    s_badge: "INITIATE_RESOLUTION",
    s_title: "AUTOMATE THE MUNDANE. SCALE THE BRAIN.",
    s_desc: "We build custom automation nodes that connect your systems and handle repetitive data flows autonomously.",
    s_result: "TEAM FOCUSES ON GROWTH",
  },
  {
    id: 5,
    icon: "📈",
    p_badge: "PROBLEM #5",
    p_title: "YOUR TECH IS SLOW, CLUNKY, AND BREAKS",
    p_desc: "Bugs, slow load times, and poor UX are silent business killers. If it doesn't work perfectly, it's losing you money.",
    p_cost: "0.1s delay in load time = 1% revenue loss",
    s_badge: "INITIATE_RESOLUTION",
    s_title: "ENTERPRISE-GRADE SPEED & RELIABILITY",
    s_desc: "High-performance architectures that handle scale without breaking. Built to dominate your industry.",
    s_result: "FLAWLESS USER EXPERIENCE",
  },
  {
    id: 6,
    icon: "🤖",
    p_badge: "PROBLEM #6",
    p_title: "YOUR COMPETITORS ARE USING AI — YOU'RE NOT",
    p_desc: "The digital landscape has shifted. If you aren't integrating AI into your workflow, you're competing with a flashlight against a laser.",
    p_cost: "Market share lost every hour you wait",
    s_badge: "INITIATE_RESOLUTION",
    s_title: "WE BRING THE FUTURE TO YOUR TECH STACK",
    s_desc: "Neural networks and autonomous agents designed to give you an unfair advantage in a crowded market.",
    s_result: "MARKET DOMINANCE",
  }
];

export default function ProblemSolution() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [checkedIds, setCheckedIds] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextProblem = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % problems.length);
  };

  const prevProblem = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + problems.length) % problems.length);
  };

  const toggleCheck = (id: number) => {
    setCheckedIds(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const getDiagnosis = () => {
    const count = checkedIds.length;
    if (count === 0) return { msg: "Select your pain points to see full diagnosis", color: "text-white/30", sub: "", status: "PENDING" };
    if (count <= 1) return { msg: "✅ You're in good shape — but there's always room to grow", color: "text-green-400", sub: "STATUS: OPTIMIZED", status: "SAFE" };
    if (count <= 3) return { msg: "⚠️ Warning: Your business has gaps competitors will exploit", color: "text-yellow-500", sub: "STATUS: AT RISK", status: "WARNING" };
    if (count <= 5) return { msg: "🚨 Critical: You're actively losing customers and revenue", color: "text-red-500", sub: "STATUS: INSECURE", status: "CRITICAL" };
    return { msg: "💀 Emergency: Your competitors are eating your lunch right now", color: "text-red-600", sub: "STATUS: SYSTEM FAILURE", status: "EMERGENCY" };
  };

  const diagnosis = getDiagnosis();
  const currentP = problems[currentIndex];

  return (
    <section className="relative py-20 bg-black overflow-hidden" id="problems">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-red-950/20 to-transparent pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="text-center mb-16 px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-600/10 border border-red-600/30 animate-pulse mb-8">
            <AlertCircle className="w-3 h-3 text-red-500" />
            <span className="font-mono text-[9px] text-red-500 font-bold uppercase tracking-[0.2em]">Risk Analysis Initiated</span>
          </div>
          <h2 className="text-[2rem] md:text-[4rem] font-heading font-black leading-none tracking-tighter uppercase mb-6 flex flex-col items-center">
            <span>IS YOUR BUSINESS</span>
            <span className="gradient-text italic text-red-500 drop-shadow-[0_0_30px_rgba(239,68,68,0.3)]">BLEEDING MONEY?</span>
          </h2>
        </AnimatedSection>

        {/* 3D Carousel Concept - Optimized for Mobile (Single Card + Proper Arrows) */}
        <div className="relative max-w-4xl mx-auto mb-32 h-[550px] md:h-[600px] px-2">
          <div className="absolute inset-0 flex items-center justify-between z-30 pointer-events-none">
            <button 
              onClick={prevProblem}
              className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-600 hover:border-red-600 hover:scale-110 active:scale-95 transition-all pointer-events-auto shadow-[0_0_30px_rgba(0,0,0,0.5)] group"
            >
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:text-black" />
            </button>
            <button 
              onClick={nextProblem}
              className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-600 hover:border-red-600 hover:scale-110 active:scale-95 transition-all pointer-events-auto shadow-[0_0_30px_rgba(0,0,0,0.5)] group"
            >
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:text-black" />
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotateY: 10 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full perspective-1000"
            >
              <div 
                className="relative w-full h-full cursor-pointer group"
                onClick={() => setIsFlipped(!isFlipped)}
              >
                <div className={`relative w-full h-full transition-transform duration-700 preserve-3d ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
                  {/* Front: Problem (Intensified Red) */}
                  <div className="absolute inset-0 w-full h-full backface-hidden">
                    <div className="h-full w-full bg-black border-2 border-red-600/50 rounded-[2.5rem] md:rounded-[4.5rem] p-8 md:p-16 flex flex-col items-center text-center shadow-[0_0_80px_rgba(220,38,38,0.25)] relative overflow-hidden group">
                      
                      {/* Cybernetic Decals */}
                      <div className="absolute top-8 left-12 font-mono text-[8px] text-red-500/40 uppercase tracking-[0.3em] hidden md:block">
                        NODE_ID // PROBLEM_{currentIndex + 1}
                      </div>
                      <div className="absolute top-8 right-12 px-2 py-0.5 border border-red-500/40 rounded font-mono text-[8px] text-red-500/60 uppercase tracking-widest hidden md:block animate-pulse">
                        LEVEL_CRITICAL
                      </div>

                      {/* Animated Scanline Overlay */}
                      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(220,38,38,0.05)_51%,transparent_52%)] bg-[length:100%_4px] animate-scan pointer-events-none opacity-40" />
                      
                      {/* Background Pulsing Glow */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-red-600/10 blur-[100px] group-hover:bg-red-600/20 transition-all duration-700" />

                      <div className="text-5xl md:text-7xl mb-8 relative z-10 drop-shadow-[0_0_20px_rgba(239,68,68,0.5)]">
                        {currentP.icon}
                      </div>

                      <div className="px-4 py-1 rounded-full bg-red-950/50 border border-red-500/50 text-red-500 font-mono text-[10px] font-black tracking-widest uppercase mb-8 relative z-10 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                        {currentP.p_badge}
                      </div>

                      <h3 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black text-white uppercase tracking-tighter leading-[0.85] mb-8 relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                        {currentP.p_title}
                      </h3>

                      <p className="text-white/60 font-mono text-xs md:text-sm leading-relaxed uppercase tracking-wider max-w-xl mx-auto mb-10 relative z-10">
                        {currentP.p_desc}
                      </p>
                      
                      <div className="mt-auto w-full pt-8 border-t border-red-500/20 flex flex-col items-center gap-3 relative z-10">
                        <span className="text-[10px] font-mono text-red-500/60 uppercase tracking-[0.4em]">SYSTEM_LEAKAGE:</span>
                        <div className="text-red-500 font-heading font-black text-xl md:text-3xl uppercase italic drop-shadow-[0_0_20px_rgba(239,68,68,0.6)] animate-pulse">
                          {currentP.p_cost}
                        </div>
                      </div>

                      <div className="mt-8 flex items-center gap-3 text-red-500/40 font-mono text-[9px] uppercase tracking-[0.3em] animate-bounce relative z-10">
                        <Zap className="w-3 h-3 fill-red-500/30" /> CLICK_TO_INIT_RESOLUTION
                      </div>
                    </div>
                  </div>

                  {/* Back: Solution (Intensified Green) */}
                  <div className="absolute inset-0 w-full h-full backface-hidden [transform:rotateY(180deg)]">
                    <div className="h-full w-full bg-black border-2 border-green-600/50 rounded-[2.5rem] md:rounded-[4.5rem] p-8 md:p-16 flex flex-col items-center text-center shadow-[0_0_80px_rgba(34,197,94,0.25)] relative overflow-hidden group">
                      
                      {/* Cybernetic Decals */}
                      <div className="absolute top-8 left-12 font-mono text-[8px] text-green-500/40 uppercase tracking-[0.3em] hidden md:block">
                        SYSTEM_PATCH // RESOLUTION_{currentIndex + 1}
                      </div>
                      <div className="absolute top-8 right-12 px-2 py-0.5 border border-green-500/40 rounded font-mono text-[8px] text-green-500/60 uppercase tracking-widest hidden md:block animate-pulse">
                        LEVEL_OPTIMIZED
                      </div>

                      {/* Animated Scanline Overlay */}
                      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(34,197,94,0.05)_51%,transparent_52%)] bg-[length:100%_4px] animate-scan pointer-events-none opacity-40" />

                      {/* Background Pulsing Glow */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-green-600/10 blur-[100px] group-hover:bg-green-600/20 transition-all duration-700" />

                      <div className="text-5xl md:text-7xl mb-8 relative z-10 drop-shadow-[0_0_25px_rgba(74,222,128,0.6)]">
                        {currentP.icon}
                      </div>

                      <div className="px-4 py-1 rounded-full bg-green-950/50 border border-green-500/50 text-green-500 font-mono text-[10px] font-black tracking-widest uppercase mb-8 relative z-10 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                        {currentP.s_badge}
                      </div>

                      <h3 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black text-green-400 uppercase tracking-tighter leading-[0.85] mb-8 relative z-10 drop-shadow-[0_0_15px_rgba(74,222,128,0.3)]">
                        {currentP.s_title}
                      </h3>

                      <p className="text-white/80 font-mono text-xs md:text-sm leading-relaxed uppercase tracking-wider max-w-xl mx-auto mb-10 relative z-10">
                        {currentP.s_desc}
                      </p>
                      
                      <div className="mt-auto w-full pt-8 border-t border-green-500/20 flex flex-col items-center gap-3 relative z-10">
                        <span className="text-[10px] font-mono text-green-500/60 uppercase tracking-[0.4em]">EXPECTED_GAIN:</span>
                        <div className="text-green-500 font-heading font-black text-xl md:text-3xl uppercase italic drop-shadow-[0_0_20px_rgba(74,222,128,0.6)] animate-pulse">
                          {currentP.s_result}
                        </div>
                      </div>

                      <Link href="/contact" className="mt-8 px-12 py-5 bg-green-500 text-black font-heading font-black text-lg uppercase tracking-widest hover:bg-white transition-all rounded-2xl shadow-[0_0_40px_rgba(34,197,94,0.5)] z-10">
                        FIX_SYSTEM_NOW →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Diagnosis Score Widget - Kept as requested */}
        <AnimatedSection>
          <div className="glass-premium rounded-[3rem] md:rounded-[5rem] border-white/5 p-8 md:p-20 relative overflow-hidden text-center">
            <h3 className="text-2xl md:text-5xl font-heading font-black text-white uppercase tracking-tighter mb-4 relative z-10">
              🔍 HOW MANY OF THESE <span className="text-red-500">APPLY TO YOU?</span>
            </h3>
            <p className="font-mono text-[10px] text-white/30 uppercase tracking-[0.3em] mb-12 relative z-10">Cybernetic Assessment Tool v2.0</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-16 max-w-5xl mx-auto relative z-10">
              {problems.map((p) => (
                <button
                  key={p.id}
                  onClick={() => toggleCheck(p.id)}
                  className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${
                    checkedIds.includes(p.id) 
                    ? 'bg-red-600/10 border-red-500/50 shadow-[inset_0_0_20px_rgba(239,68,68,0.1)]' 
                    : 'bg-white/5 border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className={`w-5 h-5 rounded flex items-center justify-center transition-all ${
                    checkedIds.includes(p.id) ? 'bg-red-500' : 'border border-white/10'
                  }`}>
                    {checkedIds.includes(p.id) && <Check className="w-3 h-3 text-black font-bold" />}
                  </div>
                  <span className={`font-mono text-[9px] md:text-[10px] uppercase tracking-wider text-left line-clamp-1 ${checkedIds.includes(p.id) ? 'text-white' : 'text-white/40'}`}>
                    {p.p_title}
                  </span>
                </button>
              ))}
            </div>

            {/* Score Bar */}
            <div className="max-w-xl mx-auto relative z-10">
              <div className="flex justify-between items-end mb-4">
                <div className="text-left">
                  <span className="font-mono text-[8px] text-white/40 uppercase tracking-[0.5em] block mb-1">Diagnosis_Result</span>
                  <div className={`text-xl md:text-2xl font-black uppercase tracking-widest transition-colors duration-500 ${diagnosis.color}`}>
                    {diagnosis.status}
                  </div>
                </div>
                <div className={`font-mono text-3xl md:text-4xl font-black transition-colors duration-500 ${diagnosis.color}`}>
                  {checkedIds.length}/6
                </div>
              </div>
              
              <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden p-0.5 border border-white/10">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${(checkedIds.length / 6) * 100}%` }}
                  className={`h-full rounded-full shadow-[0_0_10px_currentColor] transition-colors duration-500 ${
                    checkedIds.length <= 1 ? 'bg-green-500 text-green-500' :
                    checkedIds.length <= 3 ? 'bg-yellow-500 text-yellow-500' :
                    'bg-red-500 text-red-500'
                  }`}
                />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={diagnosis.msg}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-8"
                >
                  <p className={`text-base md:text-xl font-heading font-black uppercase tracking-wide mb-2 transition-colors duration-500 ${diagnosis.color}`}>
                    {diagnosis.msg}
                  </p>
                  <p className="text-white/30 font-mono text-[8px] uppercase tracking-[0.4em]">
                    {diagnosis.sub}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="mt-12 pt-12 border-t border-white/5 flex flex-col items-center">
                <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-5 bg-white text-black font-heading font-black text-sm md:text-base uppercase tracking-[0.15em] hover:bg-red-600 hover:text-white transition-all rounded-2xl hover:scale-105 active:scale-95 shadow-[0_15px_40px_rgba(255,255,255,0.1)]">
                   START YOUR RESOLUTION <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(500%); }
        }
        .animate-scan {
          animation: scan 8s linear infinite;
        }
      `}</style>
    </section>
  );
}
