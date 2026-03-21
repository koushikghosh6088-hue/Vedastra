'use client';

import { useState, useRef, useEffect, MouseEvent } from 'react';
import { motion, AnimatePresence, useMotionValue, useMotionTemplate } from 'framer-motion';
import { 
  ShieldCheck, Zap, Bot, Globe, Users, 
  Timer, ArrowUpRight, Fingerprint, Activity,
  ChevronLeft, ChevronRight, Cpu, Target, 
  Sparkles, Shield
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

const whyVedastra = [
  {
    id: "01",
    title: "You Talk Directly To The Founders",
    subtitle: "ELITE_ACCESS",
    desc: "No account managers. No middlemen. The people you speak to are the same people building your product — so nothing gets lost, delayed or miscommunicated.",
    icon: Users,
    color: "#0066ff",
    highlight: "100% TRANSPARENCY",
    graphic: (
      <svg className="absolute top-0 right-0 w-64 h-64 text-[#0066ff]/10 pointer-events-none" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
        <path d="M50 10 V90 M10 50 H90" stroke="currentColor" strokeWidth="0.2" />
        <circle cx="50" cy="50" r="2" fill="currentColor" className="animate-pulse" />
      </svg>
    )
  },
  {
    id: "02",
    title: "We Deliver Fast — And We Mean It",
    subtitle: "VELOCITY_PROTOCOL",
    desc: "Most agencies take months. We deliver in weeks. You get a fixed timeline before we start and we stick to it — no excuses.",
    icon: Timer,
    color: "#0066ff",
    highlight: "RAPID_DEPLOYMENT",
    graphic: (
      <svg className="absolute bottom-0 right-0 w-64 h-64 text-[#0066ff]/10 pointer-events-none" viewBox="0 0 100 100">
        <path d="M10 80 Q50 10 90 80" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <path d="M20 70 Q50 20 80 70" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
        <circle cx="50" cy="30" r="3" fill="currentColor" />
      </svg>
    )
  },
  {
    id: "03",
    title: "AI Is Built Into Everything",
    subtitle: "NEURAL_CORE",
    desc: "We don't just build websites and apps. We make them smarter. Every product we build comes with AI architecture that saves you time and cuts costs.",
    icon: Bot,
    color: "#0066ff",
    highlight: "INTELLIGENT_LOGIC",
    graphic: (
      <svg className="absolute top-1/2 -translate-y-1/2 right-0 w-64 h-64 text-[#0066ff]/10 pointer-events-none" viewBox="0 0 100 100">
        <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="0.5" rx="10" />
        <path d="M40 40 L60 60 M60 40 L40 60" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="0.2" />
      </svg>
    )
  },
  {
    id: "04",
    title: "World-Class Quality, Local Prices",
    subtitle: "GLOBAL_ADVANTAGE",
    desc: "Based in India, working globally. You get the same quality as a $20,000 Western agency — without the $20,000 price tag.",
    icon: Globe,
    color: "#0066ff",
    highlight: "PREMIUM_ARBITRAGE",
    graphic: (
      <svg className="absolute top-0 left-0 w-64 h-64 text-[#0066ff]/10 pointer-events-none rotate-180" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <path d="M10 50 H90 M50 10 V90" stroke="currentColor" strokeWidth="0.2" />
        <ellipse cx="50" cy="50" rx="45" ry="15" fill="none" stroke="currentColor" strokeWidth="0.2" />
      </svg>
    )
  },
  {
    id: "05",
    title: "We Don't Disappear After Launch",
    subtitle: "ETERNAL_SUPPORT",
    desc: "Every project includes months of support after going live. We monitor, fix and improve — because we're in this for the long term.",
    icon: ShieldCheck,
    color: "#0066ff",
    highlight: "ZERO_GHOSTING",
    graphic: (
      <svg className="absolute bottom-10 right-10 w-64 h-64 text-[#0066ff]/10 pointer-events-none" viewBox="0 0 100 100">
        <path d="M50 10 L85 25 V50 C85 70 50 90 50 90 C50 90 15 70 15 50 V25 L50 10 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <path d="M40 50 L48 58 L65 42" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>
    )
  }
];

function PremiumCard({ item, i }: { item: any, i: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      className={`
        group relative bg-[#0A0A0E] border border-white/5 p-12 lg:p-16 rounded-[4rem] overflow-hidden transition-all duration-1000
        hover:border-[#0066ff]/50 hover:shadow-[0_40px_120px_rgba(0,0,0,0.9)]
        min-w-full md:min-w-0 snap-center
        ${i === 0 || i === 4 ? 'lg:col-span-2' : ''}
      `}
    >
      {/* Background Micro-Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
      
      {/* High-Fi Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

      {/* Dynamic Glow Border (Mouse Target) */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[4rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              800px circle at ${mouseX}px ${mouseY}px,
              rgba(0, 102, 255, 0.5),
              transparent 80%
            )
          `,
        }}
      />

      {/* Surface Depth Glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(0, 102, 255, 0.08),
              transparent 60%
            )
          `,
        }}
      />

      {/* Tactical SVG Graphic */}
      <div className="absolute inset-0 opacity-10 group-hover:opacity-30 transition-all duration-1000 scale-110 group-hover:scale-100 group-hover:rotate-2">
        {item.graphic}
      </div>
      
      <div className="relative z-20 flex flex-col h-full">
        {/* Header Meta */}
        <div className="flex items-center justify-between mb-12">
           <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-[2rem] bg-[#0066ff]/5 border border-[#0066ff]/10 flex items-center justify-center text-[#0066ff] group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(0,102,255,0.3)] transition-all duration-700 backdrop-blur-md">
                 <item.icon className="w-10 h-10" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-[#0066ff] font-black">{item.subtitle}</span>
                <div className="flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
                   <span className="font-mono text-[9px] text-white/40 font-bold tracking-widest uppercase">{item.highlight}</span>
                </div>
              </div>
           </div>
           <span className="font-heading text-5xl font-black text-white/5 group-hover:text-[#0066ff]/10 transition-colors duration-1000 italic">{item.id}</span>
        </div>

        {/* Text Content */}
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-white uppercase tracking-tighter mb-8 leading-[1] max-w-[95%] transition-all duration-700 group-hover:translate-x-4">
          {i % 2 === 0 ? <span className="text-[#0066ff] mr-2">/</span> : null}
          {item.title}
        </h3>
        
        <p className="text-[#8A8A9A] text-lg lg:text-xl leading-relaxed font-body font-light group-hover:text-white/90 transition-colors duration-700 max-w-2xl border-l border-white/5 pl-8 group-hover:border-[#0066ff]/30">
          {item.desc}
        </p>
        
        {/* Action Reveal */}
        <div className="mt-12 pt-10 border-t border-white/5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-1000 translate-y-6 group-hover:translate-y-0">
           <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map(d => (
                <div key={d} className="w-1.5 h-6 bg-[#0066ff]/30 rounded-full group-hover:animate-bounce" style={{ animationDelay: `${d * 0.15}s` }} />
              ))}
           </div>
           
           <div className="flex items-center gap-4 group/btn cursor-pointer">
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#0066ff] font-black">ANALYZE_PARAMETER</span>
              <div className="w-12 h-12 rounded-full border border-[#0066ff]/20 flex items-center justify-center bg-white/5 group-hover/btn:bg-[#0066ff] group-hover/btn:text-black transition-all">
                <ArrowUpRight className="w-6 h-6" />
              </div>
           </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function WhyChooseUs() {
  const [activeIdx, setActiveIdx] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollTo = (idx: number) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({
        left: idx * cardWidth,
        behavior: 'smooth'
      });
      setActiveIdx(idx);
    }
  };

  return (
    <section id="why" className="relative py-24 md:py-48 bg-[#060608] overflow-hidden">
      
      {/* Heavy Cyber Background Ambience */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,102,255,0.03)_2px,transparent_2px),linear-gradient(90deg,rgba(0,102,255,0.03)_2px,transparent_2px)] bg-[size:120px_120px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#0066ff]/50 to-transparent shadow-[0_0_20px_rgba(0,102,255,0.3)]" />

      <div className="max-w-[1750px] mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end mb-32 lg:mb-48">
          <AnimatedSection>
            <div className="inline-flex items-center gap-4 px-5 py-2 rounded-full bg-[#0066ff]/5 border border-[#0066ff]/20 mb-12 backdrop-blur-xl">
               <Fingerprint className="w-5 h-5 text-[#0066ff]" />
               <h4 className="font-mono text-xs uppercase tracking-[0.5em] text-[#0066ff] font-black">ESTABLISHING_PREMIUM_CREDENTIALS</h4>
            </div>
            <h2 className="text-[3.5rem] md:text-[7rem] lg:text-[10rem] font-heading font-black leading-[0.75] tracking-tighter uppercase text-white italic">
              WHY <br/>
              <span className="text-[#0066ff] drop-shadow-[0_0_80px_rgba(0,102,255,0.6)]">VEDASTRA?</span>
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2} className="lg:max-w-2xl lg:ml-auto">
             <div className="relative p-12 rounded-[4rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl shadow-2xl">
               <div className="absolute top-0 left-16 w-32 h-1.5 bg-[#0066ff] -translate-y-1/2 shadow-[0_0_20px_#0066ff]" />
               <p className="text-[#8A8A9A] text-xl lg:text-3xl font-body font-light leading-relaxed border-l-4 border-[#0066ff]/20 pl-10 italic">
                 &quot;Our methodology is built on speed, precision, and direct accountability. We eliminate the agency bloat to deliver pure engineering excellence.&quot;
               </p>
             </div>
          </AnimatedSection>
        </div>

        {/* Mobile Navigation Toolbar */}
        <div className="flex md:hidden items-center justify-between mb-16 px-4">
            <div className="flex gap-4">
              {whyVedastra.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => scrollTo(i)}
                  className={`h-2 transition-all duration-700 rounded-full ${activeIdx === i ? 'w-16 bg-[#0066ff] shadow-[0_0_15px_#0066ff]' : 'w-4 bg-white/10'}`} 
                />
              ))}
            </div>
            <div className="flex gap-6">
               <button onClick={() => scrollTo((activeIdx - 1 + whyVedastra.length) % whyVedastra.length)} className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white/40 active:bg-[#0066ff] active:text-black transition-all backdrop-blur-xl">
                  <ChevronLeft className="w-8 h-8" />
               </button>
               <button onClick={() => scrollTo((activeIdx + 1) % whyVedastra.length)} className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white/40 active:bg-[#0066ff] active:text-black transition-all backdrop-blur-xl">
                  <ChevronRight className="w-8 h-8" />
               </button>
            </div>
        </div>

        {/* Tactical Bento Grid / Mobile Carousel */}
        <div 
          ref={scrollRef}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14 overflow-x-auto md:overflow-visible no-scrollbar snap-x snap-mandatory pb-24"
          onScroll={(e) => {
            if (window.innerWidth < 768) {
              const el = e.currentTarget;
              const idx = Math.round(el.scrollLeft / el.offsetWidth);
              if (activeIdx !== idx) setActiveIdx(idx);
            }
          }}
        >
          {whyVedastra.map((item, i) => (
            <PremiumCard key={item.id} item={item} i={i} />
          ))}

          {/* Luxury Visual Hub */}
          <motion.div 
            className="hidden lg:flex glass-premium rounded-[5rem] p-20 flex-col items-center justify-center text-center border-[#0066ff]/30 hover:border-[#0066ff]/60 transition-all duration-1000 bg-[radial-gradient(circle_at_center,rgba(0,102,255,0.1)_0%,transparent_70%)] group relative overflow-hidden"
          >
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.08]" />
             <div className="relative z-10 scale-125">
                <Cpu className="w-32 h-32 text-[#0066ff] mb-16 animate-[spin_20s_linear_infinite] drop-shadow-[0_0_60px_rgba(0,102,255,0.8)]" />
                <h4 className="font-heading font-black text-white text-4xl uppercase tracking-[0.4em] mb-8 italic">THE_ENGINE_</h4>
                <div className="flex items-center gap-6 justify-center">
                   <div className="w-4 h-4 rounded-full bg-[#00ff88] animate-ping" />
                   <p className="font-mono text-sm text-[#0066ff] uppercase tracking-[0.5em] font-black">CORE_SYSTEM_ACTIVE</p>
                </div>
             </div>
             
             {/* Pulsing Architecture Rings */}
             {[1, 1.3, 1.6].map(s => (
                <div key={s} className="absolute inset-0 rounded-full border border-[#0066ff]/10 animate-[ping_6s_cubic-bezier(0,0,0.2,1)_infinite]" style={{ transform: `scale(${s})`, animationDelay: `${s}s` }} />
             ))}
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
