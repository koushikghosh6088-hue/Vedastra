'use client';

import { motion } from 'framer-motion';
import { Check, X, Shield, Star, Zap, Users, MessageSquare, Clock, Globe, ShieldCheck } from 'lucide-react';
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
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Users, title: "Partner, Not Vendor", desc: "We sit on your side of the table. Your business metrics are our primary focus." },
            { icon: Zap, title: "1-Week Velocity", desc: "We build at the speed of high-performance startups, not slow corporate timelines." },
            { icon: Globe, title: "Global Standards", desc: "Based in India, serving the world with elite architectures and communication." },
          ].map((item, i) => (
            <AnimatedSection key={i} delay={0.5 + i * 0.1}>
              <div className="p-8 bg-[#111118] border border-white/5 rounded-3xl group hover:border-[#00D4FF]/30 transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-[#00D4FF]" />
                </div>
                <h4 className="text-lg font-heading font-black text-white uppercase mb-3 tracking-tight">{item.title}</h4>
                <p className="text-[#8A8A9A] font-body text-sm leading-relaxed">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
