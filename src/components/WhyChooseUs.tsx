'use client';

import { motion } from 'framer-motion';
import { Target, Zap, Bot, Layers, Check, X, Shield, Cpu, Users, MessageSquare, Briefcase } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

const advantagePoints = [
  { 
    label: "Design & Quality", 
    vedastra: "High-Fidelity / Impact-Driven", 
    others: "Generic Templates / AI Slops",
    icon: Layers,
    color: "text-cyan-400"
  },
  { 
    label: "Consultation", 
    vedastra: "Strategic Diagnostic First", 
    others: "Blind Instruction Following",
    icon: Target,
    color: "text-[#C1FF00]"
  },
  { 
    label: "Relationship", 
    vedastra: "Dedicated Growth Partner", 
    others: "Transactional Service",
    icon: Users,
    color: "text-purple-400"
  }
];

const comparativeDetailed = [
  {
    category: "Philosophy",
    vedastra: "We understand every business problem first, then suggest the perfect product.",
    others: "They build what you ask, even if it won't help your business.",
    icon: MessageSquare
  },
  {
    category: "Support",
    vedastra: "Continuous follow-ups and active business support. Your growth is our success.",
    others: "Bad service with long wait times and zero post-launch support.",
    icon: Shield
  },
  {
    category: "Outcome",
    vedastra: "We consider our clients as partners. We are deeply involved in helping your business win.",
    others: "You are just another payout. Low quality, zero commitment to your goals.",
    icon: Briefcase
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative py-24 md:py-40 bg-black overflow-hidden z-10 border-t border-white/5">
      {/* Background Graphic Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/[0.03] rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Compact Header */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-8 mb-16 md:mb-24">
          <AnimatedSection className="max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C1FF00]/10 border border-[#C1FF00]/20 mb-6">
              <Shield className="w-3 h-3 text-[#C1FF00]" />
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#C1FF00] font-bold">The Strategic Advantage</span>
            </div>
            <h2 className="text-[2.2rem] md:text-[3.5rem] lg:text-[4.5rem] font-heading font-black leading-none tracking-tighter uppercase font-outline-sm">
              NOT JUST BETTER.<br/>
              <span className="italic text-blue-400 opacity-90">GENUINELY DIFFERENT.</span>
            </h2>
          </AnimatedSection>
        </div>

        {/* Dynamic Comparison Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-20">
           {/* Others Card */}
           <AnimatedSection delay={0.1} className="h-full">
              <div className="relative h-full p-8 md:p-12 rounded-[3rem] bg-white/[0.02] border border-white/5 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                 <div className="flex items-center gap-4 mb-10">
                    <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center">
                       <X className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                       <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Standard Quality</div>
                       <h3 className="text-xl font-heading font-black text-white/60 uppercase">Other Agencies</h3>
                    </div>
                 </div>

                 <div className="space-y-6">
                    {advantagePoints.map((p, i) => (
                      <div key={i} className="pb-6 border-b border-white/5 last:border-0">
                         <div className="text-[9px] font-mono text-white/20 uppercase tracking-widest mb-1">{p.label}</div>
                         <div className="text-white/40 font-medium line-through">{p.others}</div>
                      </div>
                    ))}
                 </div>
              </div>
           </AnimatedSection>

           {/* Vedastra Card */}
           <AnimatedSection delay={0.2} className="h-full">
              <div className="relative h-full p-8 md:p-12 rounded-[3rem] glass-blue-premium border-blue-500/20 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden group">
                 <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent pointer-events-none" />
                 <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 blur-[80px] rounded-full group-hover:scale-150 transition-transform duration-1000" />
                 
                 <div className="flex items-center gap-4 mb-10 relative z-10">
                    <div className="w-12 h-12 rounded-full bg-[#C1FF00] flex items-center justify-center shadow-[0_0_20px_rgba(193,255,0,0.4)]">
                       <Check className="w-6 h-6 text-black" />
                    </div>
                    <div>
                       <div className="text-[10px] font-mono text-[#C1FF00] uppercase tracking-widest font-bold">Elite Performance</div>
                       <h3 className="text-2xl font-heading font-black text-white uppercase tracking-tighter">Vedastra AI Labs</h3>
                    </div>
                 </div>

                 <div className="space-y-6 relative z-10">
                    {advantagePoints.map((p, i) => (
                      <div key={i} className="pb-6 border-b border-white/10 last:border-0 group-hover:translate-x-2 transition-transform duration-500">
                         <div className="text-[9px] font-mono text-white/30 uppercase tracking-widest mb-1">{p.label} Excellence</div>
                         <div className="text-white font-black text-lg md:text-xl uppercase tracking-tight">{p.vedastra}</div>
                      </div>
                    ))}
                 </div>
              </div>
           </AnimatedSection>
        </div>

        {/* Detailed Strategic Partnership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           {comparativeDetailed.map((item, i) => (
             <AnimatedSection key={i} delay={0.3 + i * 0.1}>
                <div className="group h-full p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/5 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2">
                   <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-black transition-all duration-500">
                      <item.icon className="w-6 h-6" />
                   </div>
                   <h3 className="text-lg font-heading font-black text-white uppercase mb-4 tracking-tight group-hover:text-blue-400 transition-colors">{item.category} Matrix</h3>
                   <p className="text-white/60 font-mono text-xs leading-relaxed mb-6">
                      {item.vedastra}
                   </p>
                   <div className="pt-6 border-t border-white/5 opacity-30 italic font-mono text-[10px] text-red-400">
                      vs {item.others}
                   </div>
                </div>
             </AnimatedSection>
           ))}
        </div>

        {/* Partnership Declaration */}
        <AnimatedSection className="mt-16 text-center">
            <div className="inline-block glass-panel p-6 px-10 rounded-full border-blue-500/10 hover:border-blue-500/30 transition-all cursor-pointer group">
               <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
                  <div className="flex items-center gap-2">
                     <Users className="w-4 h-4 text-[#C1FF00]" />
                     <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-white/70">Client as Partner</span>
                  </div>
                  <div className="w-px h-4 bg-white/10 hidden md:block" />
                  <div className="flex items-center gap-2">
                     <Target className="w-4 h-4 text-cyan-400" />
                     <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-white/70">Diagnostic Solutions</span>
                  </div>
                  <div className="w-px h-4 bg-white/10 hidden md:block" />
                  <div className="flex items-center gap-2">
                     <Briefcase className="w-4 h-4 text-purple-400" />
                     <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-white/70">Active Business Support</span>
                  </div>
               </div>
            </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
