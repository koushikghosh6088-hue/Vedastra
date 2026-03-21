'use client';

import { useState, useRef, useEffect, MouseEvent } from 'react';
import { motion, AnimatePresence, useMotionValue, useMotionTemplate } from 'framer-motion';
import { 
  ShieldCheck, Zap, Bot, Globe, Users, 
  Timer, ArrowUpRight, Fingerprint, Activity,
  ChevronLeft, ChevronRight, Cpu
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

const whyVedastra = [
  {
    id: "01",
    title: "You Talk Directly To The Founders",
    subtitle: "DIRECT_PIPELINE",
    desc: "No account managers. No middlemen. The people you speak to are the same people building your product — so nothing gets lost, delayed or miscommunicated.",
    icon: Users,
    color: "#0066ff",
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
    subtitle: "TURBO_DEPLOY",
    desc: "Most agencies take months. We deliver in weeks. You get a fixed timeline before we start and we stick to it — no excuses.",
    icon: Timer,
    color: "#0066ff",
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
    subtitle: "NEURAL_SYNC",
    desc: "We don't just build websites and apps. We make them smarter. Every product we build comes with AI capabilities that save you time and cut costs.",
    icon: Bot,
    color: "#0066ff",
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
    subtitle: "GLOBAL_ARBITRAGE",
    desc: "Based in India, working globally. You get the same quality as a $20,000 Western agency — without the $20,000 price tag.",
    icon: Globe,
    color: "#0066ff",
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
    subtitle: "ACTIVE_GUARDIAN",
    desc: "Every project includes months of support after going live. We monitor, fix and improve — because we're in this for the long term.",
    icon: ShieldCheck,
    color: "#0066ff",
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1, duration: 0.8 }}
      onMouseMove={handleMouseMove}
      className={`
        group relative bg-[#0C0C12]/80 border border-white/5 p-10 lg:p-14 rounded-[3rem] overflow-hidden transition-all duration-700
        hover:border-[#0066ff]/40 hover:shadow-[0_0_100px_rgba(0,102,255,0.1)]
        min-w-full md:min-w-0 snap-center backdrop-blur-3xl
        ${i === 0 || i === 4 ? 'lg:col-span-2' : ''}
      `}
    >
      {/* Background Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Mouse Tracking Glow Border */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(0, 102, 255, 0.4),
              transparent 80%
            )
          `,
        }}
      />

      {/* Surface Glow Overlay */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(0, 102, 255, 0.05),
              transparent 60%
            )
          `,
        }}
      />

      {/* Graphical Asset */}
      <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-1000">
        {item.graphic}
      </div>
      
      <div className="relative z-20 flex flex-col h-full">
        <div className="flex items-center justify-between mb-16">
           <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-[1.5rem] bg-[#0066ff]/10 border border-[#0066ff]/20 flex items-center justify-center text-[#8A8A9A] group-hover:text-white group-hover:border-[#0066ff]/50 group-hover:scale-110 transition-all duration-700 shadow-lg">
                 <item.icon className="w-8 h-8" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-[#0066ff] font-black">{item.subtitle}</span>
                <div className="flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse shadow-[0_0_10px_#00ff88]" />
                   <span className="font-mono text-[10px] text-white/40 font-bold tracking-widest uppercase">ENCRYPTED_DATA_SECURE</span>
                </div>
              </div>
           </div>
           <span className="font-heading text-4xl font-black text-white/5 group-hover:text-[#0066ff]/10 transition-colors duration-1000 italic">{item.id}</span>
        </div>

        <h3 className="text-3xl lg:text-4xl font-heading font-black text-white uppercase tracking-tighter mb-8 leading-[1.1] max-w-[90%] transition-all duration-700 group-hover:translate-x-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#0066ff]">
          {item.title}
        </h3>
        
        <p className="text-[#8A8A9A] text-lg leading-relaxed font-body font-light group-hover:text-white/80 transition-colors duration-500 max-w-2xl">
          {item.desc}
        </p>
        
        <div className="mt-auto pt-10 border-t border-white/5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
           <div className="flex gap-2">
              {[1, 2, 3, 4].map(dot => <div key={dot} className="w-1.5 h-4 bg-[#0066ff]/50 rounded-full group-hover:animate-bounce" style={{ animationDelay: `${dot * 0.1}s` }} />)}
           </div>
           <div className="flex items-center gap-3 group/btn cursor-pointer">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#0066ff] font-black">VIEW_SPECIFICATIONS</span>
              <div className="w-10 h-10 rounded-full border border-[#0066ff]/20 flex items-center justify-center group-hover/btn:bg-[#0066ff]/10 transition-all">
                <ArrowUpRight className="w-5 h-5 text-[#0066ff] group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
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
    <section id="why" className="relative py-24 md:py-40 bg-[#060608] overflow-hidden">
      
      {/* Dynamic Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,102,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,102,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />

      <div className="max-w-[1700px] mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end mb-24 lg:mb-40">
          <AnimatedSection>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#0066ff]/5 border border-[#0066ff]/20 mb-10 backdrop-blur-md">
               <Fingerprint className="w-4 h-4 text-[#0066ff]" />
               <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#0066ff]/80 font-black">ESTABLISHING_TRUST_PROTOCOL</span>
            </div>
            <h2 className="text-[3rem] md:text-[6rem] lg:text-[8.5rem] font-heading font-black leading-[0.8] tracking-tighter uppercase text-white italic">
              WHY <br/>
              <span className="text-[#0066ff] drop-shadow-[0_0_60px_rgba(0,102,255,0.5)]">VEDASTRA?</span>
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2} className="lg:max-w-xl lg:ml-auto">
             <div className="relative p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl">
               <div className="absolute top-0 left-10 w-20 h-1 bg-[#0066ff] -translate-y-1/2" />
               <p className="text-[#8A8A9A] text-xl lg:text-2xl font-body font-light leading-relaxed">
                 "Our methodology is built on speed, precision, and direct accountability. We eliminate the agency bloat to deliver pure engineering excellence."
               </p>
             </div>
          </AnimatedSection>
        </div>

        {/* Mobile Navigation Controls */}
        <div className="flex md:hidden items-center justify-between mb-12 px-2">
            <div className="flex gap-3">
              {whyVedastra.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => scrollTo(i)}
                  className={`h-1.5 transition-all duration-500 rounded-full ${activeIdx === i ? 'w-12 bg-[#0066ff] shadow-[0_0_10px_#0066ff]' : 'w-3 bg-white/10'}`} 
                />
              ))}
            </div>
            <div className="flex gap-4">
               <button onClick={() => scrollTo((activeIdx - 1 + whyVedastra.length) % whyVedastra.length)} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 active:bg-white/5 transition-colors backdrop-blur-md">
                  <ChevronLeft className="w-6 h-6" />
               </button>
               <button onClick={() => scrollTo((activeIdx + 1) % whyVedastra.length)} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 active:bg-white/5 transition-colors backdrop-blur-md">
                  <ChevronRight className="w-6 h-6" />
               </button>
            </div>
        </div>

        {/* Tactical Bento Grid / Mobile Carousel */}
        <div 
          ref={scrollRef}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 overflow-x-auto md:overflow-visible no-scrollbar snap-x snap-mandatory pb-20 transition-all"
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

          {/* Premium Visual Hub */}
          <motion.div 
            className="hidden lg:flex glass-premium rounded-[4rem] p-16 flex-col items-center justify-center text-center border-[#0066ff]/20 hover:border-[#0066ff]/50 transition-all duration-1000 bg-[radial-gradient(circle_at_center,rgba(0,102,255,0.08)_0%,transparent_70%)] group relative overflow-hidden"
          >
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]" />
             <div className="relative z-10">
                <Cpu className="w-24 h-24 text-[#0066ff] mb-12 animate-[spin_15s_linear_infinite] drop-shadow-[0_0_40px_rgba(0,102,255,0.6)]" />
                <h4 className="font-heading font-black text-white text-3xl uppercase tracking-[0.3em] mb-6 italic">THE_ENGINE</h4>
                <div className="flex items-center gap-4 justify-center">
                   <div className="w-3 h-3 rounded-full bg-[#00ff88] animate-ping" />
                   <p className="font-mono text-xs text-[#0066ff] uppercase tracking-[0.4em] font-black">CORE_SYSTEM_ACTIVE</p>
                </div>
             </div>
             
             {/* Animated Rings */}
             <div className="absolute inset-0 rounded-full border border-[#0066ff]/10 scale-[1.2] animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite]" />
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
