'use client';

import { motion } from 'framer-motion';
import { Check, X, Shield, Star, Zap, Users, MessageSquare, Clock, Globe, ShieldCheck, Building2, DollarSign, Timer, Bot } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

const comparisonData = [
  { feature: "Price", freelancer: "Low / Unreliable", vedastra: "Fair / Value-Based", agency: "Extremely High" },
  { feature: "Speed", freelancer: "Slow / 4-8 Weeks", vedastra: "Fast / 1-2 Weeks", agency: "Very Slow / 3-6 Months" },
  { feature: "AI Expertise", freelancer: "Basic / Surface Level", vedastra: "Elite / Neural Architectures", agency: "Generic / Outsourced" },
  { feature: "Communication", freelancer: "Ghosting Risks", vedastra: "Direct Founder Access", agency: "Slow Account Managers" },
  { feature: "Support", freelancer: "None After Launch", vedastra: "24/7 Strategic Support", agency: "Expensive Retainers" },
  { feature: "Reliability", freelancer: "High Risk", vedastra: "100% Guaranteed Delivery", agency: "Moderate / Bureaucratic" },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="relative py-24 bg-[#0A0A0F] overflow-hidden border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <AnimatedSection className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/20 mb-6">
            <ShieldCheck className="w-3.5 h-3.5 text-[#00D4FF]" />
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#00D4FF] font-black">Strategic Advantage</span>
          </div>
          <h2 className="text-[2.2rem] md:text-[3.2rem] font-heading font-black leading-[1] tracking-tighter uppercase mb-6 text-white">
            WHY VEDASTRA — <br />
            NOT A <span className="italic text-[#8A8A9A]">FREELANCER</span> OR <span className="italic text-[#8A8A9A]">BIG AGENCY?</span>
          </h2>
          <p className="text-[#8A8A9A] text-lg max-w-2xl mx-auto font-body">
            We sit in the sweet spot. Here's why that matters for your business.
          </p>
        </AnimatedSection>

        {/* Comparison Table */}
        <div className="overflow-x-auto pb-8">
          <div className="min-w-[800px]">
            {/* Table Header */}
            <div className="grid grid-cols-4 gap-4 mb-4 items-center">
              <div className="px-6 py-4 font-mono text-[10px] text-white/30 uppercase tracking-widest">Feature</div>
              <div className="px-6 py-4 text-center font-heading font-black text-[#8A8A9A] uppercase tracking-wider">Freelancer</div>
              <div className="px-6 py-6 text-center font-heading font-black text-[#00D4FF] uppercase tracking-widest bg-[#00D4FF]/10 border border-[#00D4FF]/30 rounded-t-3xl shadow-[0_0_20px_rgba(0,212,255,0.1)]">
                ✅ Vedastra AI Labs
              </div>
              <div className="px-6 py-4 text-center font-heading font-black text-[#8A8A9A] uppercase tracking-wider">Big Agency</div>
            </div>

            {/* Table Body */}
            <div className="space-y-2">
              {comparisonData.map((row, i) => (
                <motion.div 
                  key={row.feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-4 gap-4 items-center"
                >
                  <div className="px-6 py-4 font-heading font-bold text-white uppercase text-sm">{row.feature}</div>
                  <div className="px-6 py-4 text-center text-[#8A8A9A] font-body text-sm line-through opacity-50">{row.freelancer}</div>
                  <div className="px-6 py-6 text-center text-white font-heading font-black text-base md:text-lg uppercase tracking-tight bg-[#00D4FF]/5 border-x border-[#00D4FF]/20 relative">
                    {row.vedastra}
                    {i === comparisonData.length - 1 && <div className="absolute bottom-0 left-0 right-0 h-4 bg-[#00D4FF]/5 border-b border-[#00D4FF]/20 rounded-b-3xl" />}
                  </div>
                  <div className="px-6 py-4 text-center text-[#8A8A9A] font-body text-sm opacity-50 italic">{row.agency}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Points */}
        {/* Dashboard Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Column: Freelancers */}
          <div className="glass-premium p-8 rounded-[2rem] border-white/5 opacity-40 hover:opacity-100 transition-all duration-500 group">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-colors">
                <Users className="w-6 h-6 text-white/40" />
              </div>
              <div>
                <h4 className="font-heading font-black text-white/40 uppercase tracking-widest text-sm">Freelancers</h4>
                <p className="text-[10px] font-mono uppercase text-white/20">Solo Operation</p>
              </div>
            </div>
            
            <ul className="space-y-6">
              {[
                { label: 'Price', value: 'Cheap / Unreliable', icon: DollarSign },
                { label: 'Speed', value: '4–8 Weeks+', icon: Timer },
                { label: 'AI expertise', value: 'Surface Level', icon: Bot },
                { label: 'Security', value: 'High Risk', icon: ShieldCheck },
              ].map((item) => (
                <li key={item.label} className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <item.icon className="w-3 h-3 text-white/20" />
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/20">{item.label}</span>
                  </div>
                  <p className="text-white/40 text-sm font-bold">{item.value}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Column: VEDASTRA (Center Spotlight) */}
          <div className="glass-holographic p-10 rounded-[2.5rem] border-[#00D4FF]/30 relative overflow-hidden group hover:shadow-[0_0_50px_rgba(0,212,255,0.15)] transition-all duration-700 shimmer-border">
            <div className="absolute top-0 right-0 p-4">
              <div className="px-3 py-1 rounded-full bg-[#00D4FF] text-black font-mono text-[9px] font-black uppercase tracking-tighter">Recommended</div>
            </div>

            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 rounded-2xl bg-[#00D4FF]/10 flex items-center justify-center border border-[#00D4FF]/20 shadow-[0_0_20px_rgba(0,212,255,0.2)]">
                <Zap className="w-7 h-7 text-[#00D4FF]" />
              </div>
              <div>
                <h4 className="font-heading font-black text-white uppercase tracking-widest text-lg text-glow">Vedastra</h4>
                <p className="text-[10px] font-mono uppercase text-[#00D4FF] font-bold">Elite Engineering</p>
              </div>
            </div>
            
            <ul className="space-y-8">
              {[
                { label: 'Price', value: 'Fixed / Premium Value', icon: DollarSign, color: '#00D4FF' },
                { label: 'Speed', value: '1–2 Week Launch', icon: Timer, color: '#00FF88' },
                { label: 'AI expertise', value: 'Specialized Labs', icon: Bot, color: '#7B2FFF' },
                { label: 'Security', value: 'Bank-Grade Protocol', icon: ShieldCheck, color: '#00D4FF' },
              ].map((item) => (
                <li key={item.label} className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <item.icon className="w-3.5 h-3.5" style={{ color: item.color }} />
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">{item.label}</span>
                  </div>
                  <p className="text-white text-base font-black tracking-tight drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]">{item.value}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Column: Big Agencies */}
          <div className="glass-premium p-8 rounded-[2rem] border-white/5 opacity-40 hover:opacity-100 transition-all duration-500 group">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-colors">
                <Building2 className="w-6 h-6 text-white/40" />
              </div>
              <div>
                <h4 className="font-heading font-black text-white/40 uppercase tracking-widest text-sm">Big Agencies</h4>
                <p className="text-[10px] font-mono uppercase text-white/20">Corporate Bloat</p>
              </div>
            </div>
            
            <ul className="space-y-6">
              {[
                { label: 'Price', value: '$50k - $200k+', icon: DollarSign },
                { label: 'Speed', value: '6-12 Months', icon: Timer },
                { label: 'AI expertise', value: 'Outsourced / Basic', icon: Bot },
                { label: 'Communication', value: 'Junior Managers', icon: MessageSquare },
              ].map((item) => (
                <li key={item.label} className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <item.icon className="w-3 h-3 text-white/20" />
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/20">{item.label}</span>
                  </div>
                  <p className="text-white/40 text-sm font-bold">{item.value}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
