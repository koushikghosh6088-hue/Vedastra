'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ShieldCheck, Zap, Users, ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const founders = [
  {
    name: "Koushik Ghosh",
    role: "Co-Founder",
    description: "Leads all technical development and system architecture.",
    image: "/team/koushik-ghosh.png",
    accent: "#0066ff"
  },
  {
    name: "Anirban",
    role: "Co-Founder",
    description: "Drives AI integrations, strategy and client solutions.",
    image: "/team/anirban-co-founder.png",
    accent: "#ccff00"
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-40 bg-black overflow-hidden z-10 border-t border-white/5">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#0066ff]/[0.02] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-[#ccff00]/[0.01] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1550px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Column: Narrative */}
          <div className="space-y-10">
            <AnimatedSection>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                <Users className="w-4 h-4 text-[#0066ff]" />
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/60 font-black">WHO WE ARE</span>
              </div>
              
              <h2 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-heading font-black leading-[0.9] tracking-tighter uppercase text-white mb-8">
                &quot;WE&apos;RE NOT A <span className="text-[#0066ff] italic">BIG FACELESS</span> AGENCY.<br/>
                WE&apos;RE THE PEOPLE WHO <span className="text-[#0066ff] italic">ACTUALLY BUILD</span> YOUR PRODUCT.&quot;
              </h2>
              
              <div className="space-y-6 max-w-xl">
                <p className="text-[#8A8A9A] text-xl font-body leading-relaxed font-light">
                  Vedastra AI Labs is a small, focused team of developers and AI specialists working with businesses across India and worldwide.
                </p>
                <p className="text-white font-body text-lg leading-relaxed border-l-2 border-[#0066ff] pl-6 py-2 bg-blue-500/5 rounded-r-2xl">
                  You won&apos;t deal with account managers or get passed around. You talk directly to the founders — the same people writing your code, building your AI, and making sure everything works perfectly.
                </p>
                <p className="text-[#ccff00] font-mono text-sm uppercase tracking-widest font-bold">
                  ⚡ Every project gets our full attention. Your growth is our reputation.
                </p>
              </div>

              <div className="pt-10 flex flex-wrap gap-6">
                <div className="flex items-center gap-4 group cursor-default">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#0066ff] group-hover:text-black transition-all">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-white font-heading font-black text-sm uppercase">Verified Architecture</div>
                    <div className="text-white/30 font-mono text-[10px] uppercase tracking-wider">Zero Bloat // Pure Performance</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 group cursor-default">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#ccff00] group-hover:text-black transition-all">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-white font-heading font-black text-sm uppercase">Founder-Direct Support</div>
                    <div className="text-white/30 font-mono text-[10px] uppercase tracking-wider">No Middlemen // Expert Only</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column: Founders Side-by-Side (PC & Mobile) */}
          <div className="grid grid-cols-2 gap-4 sm:gap-8">
            {founders.map((founder, idx) => (
              <AnimatedSection key={founder.name} delay={idx * 0.2}>
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="group relative flex flex-col bg-white/[0.02] border border-white/5 rounded-[2rem] sm:rounded-[3rem] p-4 sm:p-8 overflow-hidden transition-all duration-700 hover:border-white/20"
                >
                  {/* Subtle Background Accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 blur-[60px] opacity-10 group-hover:opacity-30 transition-opacity" style={{ backgroundColor: founder.accent }} />
                  
                  <div className="relative aspect-[4/5] sm:aspect-square rounded-2xl sm:rounded-[2rem] overflow-hidden mb-6 sm:mb-8 border border-white/10 group-hover:border-[#0066ff]/40 transition-all duration-500 shadow-2xl">
                    <Image 
                      src={founder.image} 
                      alt={founder.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="space-y-2 sm:space-y-4 text-center sm:text-left">
                    <div className="space-y-1">
                      <h4 className="text-white font-heading font-black text-base sm:text-2xl uppercase tracking-tighter group-hover:text-[#0066ff] transition-colors leading-tight">
                        {founder.name}
                      </h4>
                      <div className="text-[#0066ff] font-mono text-[8px] sm:text-xs uppercase tracking-[0.2em] font-black">
                        {founder.role}
                      </div>
                    </div>
                    <p className="text-white/40 font-body text-[9px] sm:text-sm leading-relaxed max-w-[180px] mx-auto sm:mx-0">
                      {founder.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Bottom Bar Details */}
        <AnimatedSection className="mt-24 pt-12 border-t border-white/5 flex flex-wrap justify-center gap-12 opacity-30">
          {['Global Delivery', 'Cloud Native', 'Neural Logic', 'Zero Latency'].map(t => (
            <span key={t} className="font-mono text-[9px] uppercase tracking-[0.4em] text-white whitespace-nowrap">{t}</span>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
