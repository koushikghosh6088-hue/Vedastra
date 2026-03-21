'use client';

import { motion } from 'framer-motion';
import { AlertCircle, ArrowRight, Zap, Ban, MousePointerClick, Smartphone, Bot, Clock, Flame, TrendingDown, ShieldAlert, MessageSquareX, Lock, Database, EyeOff } from 'lucide-react';
import Link from 'next/link';
import AnimatedSection from './AnimatedSection';

const painPoints = [
  { 
    icon: Ban, 
    title: "No Website", 
    desc: "You don't exist online. Competitors are getting YOUR customers.", 
    color: "#FF2D55" 
  },
  { 
    icon: MousePointerClick, 
    title: "Slow / Outdated Site", 
    desc: "Visitors leave in 3 seconds. You're paying for dead traffic.", 
    color: "#FF2D55" 
  },
  { 
    icon: Smartphone, 
    title: "No Mobile App", 
    desc: "60% of your customers are on mobile. You're invisible to them.", 
    color: "#FF2D55" 
  },
  { 
    icon: Bot, 
    title: "Not Using AI", 
    desc: "Your competitors automate. You're still doing it manually.", 
    color: "#FF2D55" 
  },
  { 
    icon: Clock, 
    title: "Losing Leads at Night", 
    desc: "No one answers after 6pm. AI can. You're not using it.", 
    color: "#FF2D55" 
  },
  { 
    icon: Flame, 
    title: "Broken Tech Stack", 
    desc: "Slow tools, no integrations, constant fires. Killing productivity.", 
    color: "#FF2D55" 
  },
];

export default function ProblemSolution() {
  return (
    <section className="relative py-24 bg-[#0A0A0F] overflow-hidden" id="problems">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#FF2D55]/5 to-transparent pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF2D55]/10 border border-[#FF2D55]/30 mb-8">
            <AlertCircle className="w-4 h-4 text-[#FF2D55]" />
            <span className="font-mono text-[10px] text-[#FF2D55] font-black uppercase tracking-[0.2em]">Risk Analysis Initiated</span>
          </div>
          <h2 className="text-[2.2rem] md:text-[3.2rem] font-heading font-black leading-[1] tracking-tighter uppercase mb-6 text-white">
            IS YOUR BUSINESS <br className="md:hidden" />
            <span className="italic text-[#FF2D55]">BLEEDING CUSTOMERS</span> EVERY DAY?
          </h2>
          <p className="text-[#8A8A9A] text-lg max-w-2xl mx-auto font-body">
            If any of these sound familiar — you're losing revenue right now.
          </p>
        </AnimatedSection>

        {/* Problem Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
          {[
            { 
              title: "LEAKING REVENUE", 
              desc: "Your current systems are failing to convert visitors, costing you thousands in lost opportunities every month.",
              icon: TrendingDown,
              accent: "#FF2D55" 
            },
            { 
              title: "MANUAL CHAOS", 
              desc: "Wasting hours on repetitive tasks that a custom AI agent could handle in seconds with 100% accuracy.",
              icon: ShieldAlert,
              accent: "#FF2D55" 
            },
            { 
              title: "GHOSTED LEADS", 
              desc: "Failing to respond to inquiries instantly. 78% of customers buy from the company that responds first.",
              icon: MessageSquareX,
              accent: "#FF2D55" 
            },
            { 
              title: "STAGNANT GROWTH", 
              desc: "Using outdated tech that can't scale. Your competitors are already using AI to outpace you.",
              icon: Lock,
              accent: "#FF2D55" 
            },
            { 
              title: "DATA BLINDNESS", 
              desc: "Making decisions based on gut feeling rather than verified, real-time data insights.",
              icon: Database,
              accent: "#FF2D55" 
            },
            { 
              title: "ZERO VISIBILITY", 
              desc: "Invisible on search engines and social platforms. If they can't find you, they can't buy from you.",
              icon: EyeOff,
              accent: "#FF2D55" 
            },
          ].map((item, i) => (
            <AnimatedSection key={i} delay={0.1 * i}>
              <div className="group relative glass-premium p-8 rounded-[2rem] border-white/5 hover:border-[#FF2D55]/30 transition-all duration-700 overflow-hidden h-full shimmer-border">
                <div className="grainy-overlay opacity-[0.03]" />
                
                {/* Holographic Scanner Effect */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF2D55]/50 to-transparent opacity-0 group-hover:opacity-100 -translate-y-full group-hover:translate-y-[400px] transition-all duration-[2.5s] ease-in-out pointer-events-none" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-[#FF2D55]/5 flex items-center justify-center mb-8 border border-[#FF2D55]/20 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(255,45,85,0.2)] transition-all duration-500">
                    <item.icon className="w-7 h-7 text-[#FF2D55]" />
                  </div>
                  
                  <h3 className="text-xl font-heading font-black text-white mb-4 uppercase tracking-tight group-hover:text-[#FF2D55] transition-colors">{item.title}</h3>
                  <p className="text-[#8A8A9A] font-body text-sm leading-relaxed mb-6 group-hover:text-white/70 transition-colors">{item.desc}</p>
                  
                  <div className="flex items-center gap-2 text-[10px] font-mono text-[#FF2D55] uppercase tracking-widest font-black opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                    <span>Critical Priority</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection className="text-center">
          <div className="max-w-3xl mx-auto p-12 glass-premium border-[#FF2D55]/10 rounded-[2.5rem] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#FF2D55]/5 to-transparent opacity-50" />
            <h4 className="text-xl md:text-2xl font-heading font-black text-white mb-8 relative z-10 uppercase italic">
              HOW MANY APPLY TO YOU? <br className="md:hidden" />
              LET'S FIX THEM THIS WEEK.
            </h4>
            <Link 
              href="#booking"
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#FF2D55] text-white font-heading font-black text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all rounded-2xl shadow-[0_15px_40px_rgba(255,45,85,0.2)] relative z-10"
            >
              GET FREE DIAGNOSIS CALL <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="mt-6 text-[#8A8A9A] font-mono text-[9px] uppercase tracking-[0.3em] relative z-10">
              ⚡ Limited spots available this month — zero commitment
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
