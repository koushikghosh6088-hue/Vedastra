'use client';

import { motion } from 'framer-motion';
import { Phone, Rocket, Cog, CheckCircle, ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import Link from 'next/link';

const steps = [
  { 
    num: '01', 
    icon: Phone, 
    title: "Free Strategy Call", 
    desc: "Book a 30-min call. We'll identify your bottlenecks and tell you exactly what to build. No jargon, no pressure.", 
    badge: "30 MIN — FREE",
    color: "#00D4FF"
  },
  { 
    num: '02', 
    icon: Cog, 
    title: "Build & Deploy", 
    desc: "We build your high-performance product in 1-2 weeks with weekly updates. You stay in control, we handle the code.", 
    badge: "1-2 WEEK VELOCITY",
    color: "#7B2FFF"
  },
  { 
    num: '03', 
    icon: Rocket, 
    title: "Ongoing Growth", 
    desc: "We launch on elite infrastructure and stay with you. We monitor, optimize, and scale as your business grows.", 
    badge: "SCALABLE SUPPORT",
    color: "#00FF88"
  }
];

export default function HowItWorks() {
  return (
    <section id="process" className="relative py-24 bg-[#0A0A0F] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <AnimatedSection className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/20 mb-6 font-mono text-[10px] uppercase tracking-widest text-[#00D4FF] font-black">
            The Vedastra Protocol
          </div>
          <h2 className="text-[2.2rem] md:text-[3.3rem] font-heading font-black uppercase tracking-tighter text-white mb-6 leading-[1]">
            FROM IDEA TO LAUNCH IN <br/>
            <span className="italic text-[#00D4FF]">3 SIMPLE STEPS</span>
          </h2>
          <p className="text-[#8A8A9A] text-lg max-w-2xl mx-auto font-body">
            No technical knowledge needed. No confusing jargon. Just results.
          </p>
        </AnimatedSection>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {/* Animated Background Atmosphere */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-64 bg-[#00D4FF]/5 blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse" />

          {steps.map((step, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="relative group p-8 lg:p-10 glass-premium rounded-[3rem] border-white/5 hover:border-white/20 transition-all duration-700 z-10 shimmer-border overflow-hidden flex flex-col items-center text-center">
                <div className="grainy-overlay opacity-[0.03]" />
                
                {/* Number Background */}
                <div className="absolute -top-4 -right-2 text-[120px] font-heading font-black text-white/[0.02] pointer-events-none group-hover:text-[#00D4FF]/5 transition-all duration-700 group-hover:-translate-x-4">
                  {step.num}
                </div>

                <div className="relative z-10">
                  <div 
                    className="w-20 h-20 rounded-3xl flex items-center justify-center mb-10 border border-white/10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-[0_0_30px_rgba(255,255,255,0.05)]"
                    style={{ background: `${step.color}15`, color: step.color }}
                  >
                    <step.icon className="w-10 h-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
                  </div>

                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 group-hover:border-[#00D4FF]/30 transition-colors">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50 font-black">{step.badge}</span>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-heading font-black text-white uppercase tracking-tight mb-6 group-hover:text-glow transition-all">
                    {step.title}
                  </h3>
                  <p className="text-[#8A8A9A] font-body text-base leading-relaxed mb-10 group-hover:text-white/70 transition-colors">
                    {step.desc}
                  </p>

                  <div className="flex items-center gap-2 text-[#00D4FF] font-heading font-black text-xs uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <span className="text-glow">Protocol Optimized</span> <CheckCircle className="w-4 h-4 shadow-[0_0_10px_#00D4FF]" />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection className="mt-20 text-center">
           <Link 
              href="#booking"
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#00D4FF] text-black font-heading font-black text-sm uppercase tracking-widest rounded-2xl hover:bg-white transition-all shadow-[0_15px_30px_rgba(0,212,255,0.2)]"
           >
              START YOUR STEP 01 NOW <ArrowRight className="w-5 h-5" />
           </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
