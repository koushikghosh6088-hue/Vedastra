'use client';

import { motion } from 'framer-motion';
import { 
  ShieldCheck, Zap, Bot, DollarSign, Timer, Users, 
  Target, Globe, Shield, MessageSquare, Cpu, 
  ArrowUpRight, Fingerprint, Activity 
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

const whyVedastra = [
  {
    id: "01",
    title: "You Talk Directly To The Founders",
    subtitle: "DIRECT_PIPELINE",
    desc: "No account managers. No middlemen. The people you speak to are the same people building your product — so nothing gets lost, delayed or miscommunicated.",
    icon: Users,
    color: "#ccff00",
    graphic: (
      <svg className="absolute top-0 right-0 w-48 h-48 text-[#ccff00]/5 pointer-events-none" viewBox="0 0 100 100">
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
      <svg className="absolute bottom-0 right-0 w-48 h-48 text-[#0066ff]/5 pointer-events-none" viewBox="0 0 100 100">
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
    color: "#FF2D55",
    graphic: (
      <svg className="absolute top-1/2 -translate-y-1/2 right-0 w-48 h-48 text-[#FF2D55]/5 pointer-events-none" viewBox="0 0 100 100">
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
    color: "#00FF88",
    graphic: (
      <svg className="absolute top-0 left-0 w-48 h-48 text-[#00FF88]/5 pointer-events-none rotate-180" viewBox="0 0 100 100">
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
    color: "#FFD700",
    graphic: (
      <svg className="absolute bottom-10 right-10 w-48 h-48 text-[#FFD700]/5 pointer-events-none" viewBox="0 0 100 100">
        <path d="M50 10 L85 25 V50 C85 70 50 90 50 90 C50 90 15 70 15 50 V25 L50 10 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <path d="M40 50 L48 58 L65 42" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>
    )
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="relative py-24 md:py-40 bg-[#060608] overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(204,255,0,0.02)_0%,transparent_50%)]" />

      <div className="max-w-[1550px] mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-24 lg:mb-32">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-white/5 border border-white/10 mb-8">
               <Fingerprint className="w-3 h-3 text-[#ccff00]" />
               <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/40 font-black">Identity_Verification</span>
            </div>
            <h2 className="text-[2.2rem] md:text-[5rem] lg:text-[6.5rem] font-heading font-black leading-[0.85] tracking-tighter uppercase text-white italic">
              WHY <br/>
              <span className="text-[#ccff00] drop-shadow-[0_0_40px_rgba(204,255,0,0.4)]">VEDASTRA?</span>
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2} className="lg:max-w-md lg:ml-auto">
             <p className="text-[#8A8A9A] text-lg font-body font-light border-l border-white/10 pl-6">
               "Hundreds of agencies exist. Here's why businesses choose us for their most critical technical transformations."
             </p>
          </AnimatedSection>
        </div>

        {/* Graphical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {whyVedastra.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`
                group relative bg-[#0C0C10] border border-white/5 p-10 lg:p-12 rounded-[2.5rem] overflow-hidden transition-all duration-500
                hover:border-white/10 hover:shadow-[0_40px_80px_rgba(0,0,0,0.8)]
                ${i === 0 || i === 4 ? 'lg:col-span-2' : ''}
              `}
            >
              {/* Graphical Asset */}
              <div className="opacity-40 group-hover:opacity-100 transition-opacity duration-700">
                {item.graphic}
              </div>
              
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(255,255,255,0.03)_0%,transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-12">
                   <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#8A8A9A] group-hover:text-white transition-colors duration-500">
                         <item.icon className="w-7 h-7" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/20">{item.subtitle}</span>
                        <div className="flex items-center gap-1">
                           <Activity className="w-2.5 h-2.5 text-[#ccff00] animate-pulse" />
                           <span className="font-mono text-[10px] text-white/40 font-bold">STATUS:_STABLE</span>
                        </div>
                      </div>
                   </div>
                   <span className="font-mono text-2xl font-black text-white/5 group-hover:text-white/10 transition-colors">{item.id}</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-heading font-black text-white uppercase tracking-tighter mb-6 leading-tight max-w-[90%] transition-transform duration-500 group-hover:translate-x-2">
                  {item.title}
                </h3>
                
                <p className="text-[#8A8A9A] text-base leading-relaxed font-body font-light group-hover:text-white/70 transition-colors">
                  {item.desc}
                </p>
                
                <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <div className="flex gap-1">
                      {[1, 2, 3].map(dot => <div key={dot} className="w-1 h-3 bg-[#ccff00]/40 rounded-full" />)}
                   </div>
                   <div className="flex items-center gap-2 group/btn cursor-pointer">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-[#ccff00] font-black">Learn_More</span>
                      <ArrowUpRight className="w-4 h-4 text-[#ccff00] group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                   </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Special Center Tile (Visual Only) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-1 glass-premium rounded-[3.5rem] p-12 flex flex-col items-center justify-center text-center border-[#ccff00]/10 hover:border-[#ccff00]/30 transition-all duration-700 bg-[radial-gradient(circle_at_center,rgba(204,255,0,0.05)_0%,transparent_70%)] group"
          >
             <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#ccff00] to-transparent mb-12 opacity-40 group-hover:w-48 transition-all duration-700" />
             <Cpu className="w-16 h-16 text-[#ccff00] mb-8 animate-[spin_10s_linear_infinite]" />
             <h4 className="font-heading font-black text-white text-xl uppercase tracking-[0.2em] mb-4">THE_ENGINE</h4>
             <p className="font-mono text-[9px] text-[#ccff00]/60 uppercase tracking-widest max-w-[200px]">POWERING PRECISE TECHNICAL TRANSFORMATIONS FOR GLOBAL CLIENTS</p>
             <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#ccff00] to-transparent mt-12 opacity-40 group-hover:w-48 transition-all duration-700" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
