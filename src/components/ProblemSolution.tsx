'use client';

import { motion } from 'framer-motion';
import { AlertCircle, ArrowRight, Zap, Ban, MousePointerClick, Smartphone, Bot, Clock, Flame } from 'lucide-react';
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

        {/* 3x2 Grid of Pain Point Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {painPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-8 bg-[#111118] border border-white/5 rounded-2xl hover:border-[#FF2D55]/30 transition-all duration-500"
            >
              <div className="absolute top-0 left-0 bottom-0 w-[2px] bg-[#FF2D55] rounded-l-full opacity-0 group-hover:opacity-100 transition-opacity blur-[2px]" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#FF2D55]/10 mb-6 group-hover:scale-110 transition-transform duration-500">
                  <point.icon className="w-6 h-6 text-[#FF2D55]" />
                </div>
                <h3 className="text-xl font-heading font-black text-white mb-3 uppercase tracking-tight group-hover:text-[#FF2D55] transition-colors">
                  {point.title}
                </h3>
                <p className="text-[#8A8A9A] font-body text-sm leading-relaxed">
                  {point.desc}
                </p>
              </div>
              
              {/* Subtle Red Pulse on Hover */}
              <div className="absolute inset-0 bg-[#FF2D55]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
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
