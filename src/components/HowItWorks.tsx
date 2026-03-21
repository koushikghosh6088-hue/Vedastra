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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-white/5 -translate-y-1/2 z-0" />

          {steps.map((step, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="relative group p-8 bg-[#111118] border border-white/5 rounded-[3rem] hover:border-[#00D4FF]/30 transition-all duration-500 z-10">
                {/* Number Background */}
                <div className="absolute top-4 right-8 text-8xl font-heading font-black text-white/[0.03] pointer-events-none group-hover:text-[#00D4FF]/5 transition-colors">
                  {step.num}
                </div>

                <div className="relative z-10">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 transition-transform duration-500"
                    style={{ background: `${step.color}10`, color: step.color }}
                  >
                    <step.icon className="w-8 h-8" />
                  </div>

                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-white/40">{step.badge}</span>
                  </div>

                  <h3 className="text-2xl font-heading font-black text-white uppercase tracking-tight mb-4 group-hover:text-[#00D4FF] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-[#8A8A9A] font-body text-sm leading-relaxed mb-8">
                    {step.desc}
                  </p>

                  <div className="flex items-center gap-2 text-[#00D4FF] font-heading font-black text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    Step {step.num} Success <CheckCircle className="w-3.5 h-3.5" />
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
